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

function slugify(value: string) {
    return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

export const PAST_SCHOLARS: PastScholar[] = ALL_PAST_SCHOLAR_INTAKE.map((record, index) => {
    const metadata = PAST_SCHOLAR_RESOLVED_METADATA[record.teacherGivenName];
    const scholarName = metadata?.displayName ?? metadata?.matchedFullName ?? record.teacherGivenName;
    const imagePath = PLACEHOLDER_IMAGE_PATHS[index % PLACEHOLDER_IMAGE_PATHS.length];
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
            alt: `${scholarName} portrait placeholder`,
        },
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
