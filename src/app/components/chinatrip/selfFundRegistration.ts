export const SCHOLARSHIP_APPLICATION_URL = "https://portal.jianshanacademy.com";
export const SELF_FUND_REGISTRATION_ENDPOINT = "/api/self-fund-registration";
export const SELF_FUND_INSTAGRAM_URL = "https://www.instagram.com/camcapysoc";
export const SELF_FUND_OPEN_AT_LABEL = "March 27, 12:00 PM UK time";
export const SELF_FUND_LOCKED_TITLE = "Registration Coming Soon";

export function getSelfFundLockedDescription(opensAtLabel: string) {
  return `Registration for the self-funded China Trip will open on ${opensAtLabel}. It is not open yet.`;
}

export type SelfFundRegistrationGateResponse =
  | {
      locked: true;
      opensAtLabel: string;
    }
  | {
      locked: false;
      url: string;
    };
