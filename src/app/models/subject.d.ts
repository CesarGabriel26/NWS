export interface SubjectTheme {
    icon: string;

    accent: string;
    border: string;

    iconBackground: string;

    progress: string;
    softBackground: string;

    text: string;
}

export interface Subject {
    id: string;

    name: string;
    description: string;

    progress?: number;

    topics: string[];

    theme: SubjectTheme;

    // populated:
    activityCount?: number
}