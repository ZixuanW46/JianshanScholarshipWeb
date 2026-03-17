import {
    PAST_SCHOLAR_INTAKE,
    PAST_SCHOLAR_INTAKE_2024,
    PAST_SCHOLAR_RESOLVED_METADATA,
    type ScholarDegreeLevel,
} from "./pastScholarIntake";

export type ScholarCohortYear = "2024" | "2025" | "2026";
export type ScholarFilterYear = "All" | ScholarCohortYear;

export interface PastScholarImage {
    path: string;
    alt: string;
}

export interface PastScholar {
    id: string;
    slug: string;
    name: string;
    university: string;
    college: string;
    subject: string;
    year: ScholarCohortYear;
    degreeLevel?: ScholarDegreeLevel;
    participationYear?: string;
    profileImage: PastScholarImage;
    hasCustomProfileImage: boolean;
    quote?: string;
    postDaySessions?: string[];
    nationality?: string;
    description?: string;
    published: boolean;
    sortOrder: number;
    createdAt: string;
    updatedAt: string;
}

export const PAST_SCHOLAR_FILTERS: ScholarFilterYear[] = ["All", "2026", "2025", "2024"];

const ALL_PAST_SCHOLAR_INTAKE = [...PAST_SCHOLAR_INTAKE_2024, ...PAST_SCHOLAR_INTAKE];

const PLACEHOLDER_IMAGE_PATHS = [
    "/trip_ins/IMG_6807.jpg",
    "/trip_ins/IMG_6808.jpg",
    "/trip_ins/IMG_6809.jpg",
    "/trip_ins/IMG_6810.jpg",
    "/trip_ins/IMG_6812.jpg",
    "/trip_ins/IMG_6813.jpg",
    "/trip_ins/IMG_6814.jpg",
    "/trip_ins/IMG_6815.jpg",
    "/trip_ins/IMG_6816.jpg",
];

const SCHOLAR_PHOTO_PATHS: Record<string, string> = {
    abigail: "/scholar_photo/Abigail.jpg",
    advait: "/scholar_photo/Advait.jpg",
    affan: "/scholar_photo/Affan.jpg",
    amy: "/scholar_photo/Amy.jpg",
    anna: "/scholar_photo/Anna.png",
    asa: "/scholar_photo/Asa.jpg",
    carmen: "/scholar_photo/Carmen.jpg",
    ceiara: "/scholar_photo/Ceiara.jpg",
    chloe: "/scholar_photo/Chloe.jpg",
    diana: "/scholar_photo/Diana.jpg",
    duncan: "/scholar_photo/Duncan.jpg",
    esther: "/scholar_photo/Esther.jpg",
    federico: "/scholar_photo/Federico.jpg",
    harry: "/scholar_photo/Harry.jpg",
    hertha: "/scholar_photo/Hertha.jpg",
    ismail: "/scholar_photo/Ismail.jpg",
    jevon: "/scholar_photo/Jevon.jpg",
    johann: "/scholar_photo/Johann.jpg",
    jonathan: "/scholar_photo/Jonathan.jpg",
    kate: "/scholar_photo/Kate.jpg",
    liam: "/scholar_photo/Liam.png",
    lily: "/scholar_photo/Lily.jpg",
    lucia: "/scholar_photo/Lucia.jpg",
    mara: "/scholar_photo/Mara.jpg",
    martina: "/scholar_photo/Martina.jpg",
    mikhail: "/scholar_photo/Mikhail.jpg",
    nahyean: "/scholar_photo/Nahyean.jpg",
    nicholas: "/scholar_photo/Nicholas.png",
    "qi-shean": "/scholar_photo/Qi Shean.jpg",
    qinglan: "/scholar_photo/Qinglan.jpg",
    ryan: "/scholar_photo/Ryan.jpg",
    shifat: "/scholar_photo/Shifat.png",
    shivraj: "/scholar_photo/Shivraj.jpg",
    stephanie: "/scholar_photo/Stephanie.jpg",
    sultan: "/scholar_photo/Sultan.jpg",
    szymon: "/scholar_photo/Szymon.jpg",
    tatiana: "/scholar_photo/Tatiana.jpg",
    valentina: "/scholar_photo/Valentina.jpg",
    valentia: "/scholar_photo/Valentina.jpg",
    vittoria: "/scholar_photo/Vittoria.jpg",
    yolanda: "/scholar_photo/Yolanda.png",
    zainab: "/scholar_photo/Zainab.jpg",
};

function slugify(value: string) {
    return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

function resolveScholarPhotoPath(options: string[]) {
    for (const option of options) {
        const key = slugify(option);
        const photoPath = SCHOLAR_PHOTO_PATHS[key];

        if (photoPath) {
            return photoPath;
        }
    }

    return null;
}

export const PAST_SCHOLARS: PastScholar[] = ALL_PAST_SCHOLAR_INTAKE.map((record, index) => {
    const metadata = PAST_SCHOLAR_RESOLVED_METADATA[record.teacherGivenName];
    const scholarName = metadata?.displayName ?? metadata?.matchedFullName ?? record.teacherGivenName;
    const matchedScholarPhoto = resolveScholarPhotoPath([
        record.teacherGivenName,
        scholarName,
        metadata?.matchedFullName ?? "",
    ]);
    const imagePath = matchedScholarPhoto ?? PLACEHOLDER_IMAGE_PATHS[index % PLACEHOLDER_IMAGE_PATHS.length];
    const cohortYear = (metadata?.participationYear ?? "2025") as ScholarCohortYear;

    return {
        id: String(index + 1),
        slug: slugify(scholarName),
        name: scholarName,
        university: "University of Cambridge",
        college: metadata?.college ?? "College TBC",
        subject: metadata?.subject ?? "Subject TBC",
        year: cohortYear,
        degreeLevel: metadata?.degreeLevel,
        participationYear: metadata?.participationYear,
        profileImage: {
            path: imagePath,
            alt: matchedScholarPhoto ? `${scholarName} portrait` : `${scholarName} portrait placeholder`,
        },
        hasCustomProfileImage: Boolean(matchedScholarPhoto),
        postDaySessions: record.sessionIdeas.map((session) => session.titleEn),
        nationality: metadata?.nationality,
        published: true,
        sortOrder: (index + 1) * 10,
        createdAt: "2026-03-11T00:00:00+08:00",
        updatedAt: "2026-03-11T00:00:00+08:00",
    };
});

export const PUBLISHED_PAST_SCHOLARS = [...PAST_SCHOLARS]
    .filter((scholar) => scholar.published)
    .sort((a, b) => a.sortOrder - b.sortOrder);

export function getScholarLastName(name: string) {
    const parts = name.trim().split(/\s+/);
    return parts.length > 1 ? parts[parts.length - 1] : parts[0] ?? "";
}

export function getScholarFirstName(name: string) {
    const parts = name.trim().split(/\s+/);
    return parts[0] ?? "";
}
