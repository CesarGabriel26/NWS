export interface Common {
    id: string;
    title: string;
    description: string;
    cover: string;
    subject: string;

    // Optional
    totalXp?: number;
    duration?: {
        h: number;
        m: number;
        s: number;
    };
}