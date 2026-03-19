type LockedResponse = {
  locked: true;
  opensAtLabel: string;
};

type OpenResponse = {
  locked: false;
  url: string;
};

const DEFAULT_OPEN_AT_LOCAL = "2026-03-27T12:00:00";
const DEFAULT_TIMEZONE = "Europe/London";
const DEFAULT_OPEN_AT_LABEL = "March 27, 12:00 PM UK time";

function sendJson(
  res: {
    status: (code: number) => {
      setHeader: (name: string, value: string) => void;
      json: (body: LockedResponse | OpenResponse) => void;
    };
  },
  body: LockedResponse | OpenResponse,
) {
  const response = res.status(200);
  response.setHeader("Cache-Control", "no-store");
  response.json(body);
}

function getTimeZoneOffsetMilliseconds(date: Date, timeZone: string) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const parts = formatter.formatToParts(date);
  const values = Object.fromEntries(
    parts
      .filter((part) => part.type !== "literal")
      .map((part) => [part.type, part.value]),
  );

  const asUtc = Date.UTC(
    Number(values.year),
    Number(values.month) - 1,
    Number(values.day),
    Number(values.hour),
    Number(values.minute),
    Number(values.second),
  );

  return asUtc - date.getTime();
}

function zonedLocalTimeToUtc(localDateTime: string, timeZone: string) {
  const match = localDateTime.match(
    /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(?::(\d{2}))?$/,
  );

  if (!match) {
    return null;
  }

  const [, year, month, day, hour, minute, second = "00"] = match;
  const utcGuess = Date.UTC(
    Number(year),
    Number(month) - 1,
    Number(day),
    Number(hour),
    Number(minute),
    Number(second),
  );

  const offset = getTimeZoneOffsetMilliseconds(new Date(utcGuess), timeZone);

  return new Date(utcGuess - offset);
}

export const config = {
  runtime: "nodejs",
};

export default function handler(
  _req: unknown,
  res: {
    status: (code: number) => {
      setHeader: (name: string, value: string) => void;
      json: (body: LockedResponse | OpenResponse) => void;
    };
  },
) {
  const formUrl = process.env.SELF_FUND_FORM_URL;
  const openAtLocal =
    process.env.SELF_FUND_OPEN_AT_LOCAL ?? DEFAULT_OPEN_AT_LOCAL;
  const timeZone = process.env.SELF_FUND_TIMEZONE ?? DEFAULT_TIMEZONE;
  const opensAtLabel = DEFAULT_OPEN_AT_LABEL;

  if (!formUrl) {
    return sendJson(res, {
      locked: true,
      opensAtLabel,
    });
  }

  try {
    const openAtUtc = zonedLocalTimeToUtc(openAtLocal, timeZone);

    if (!openAtUtc) {
      return sendJson(res, {
        locked: true,
        opensAtLabel,
      });
    }

    if (Date.now() < openAtUtc.getTime()) {
      return sendJson(res, {
        locked: true,
        opensAtLabel,
      });
    }

    return sendJson(res, {
      locked: false,
      url: formUrl,
    });
  } catch {
    return sendJson(res, {
      locked: true,
      opensAtLabel,
    });
  }
}
