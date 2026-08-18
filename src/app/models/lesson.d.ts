import { Presentation } from "../../data/styles";
import { Subject, SubjectPresentation } from "./subject";

export interface Common {
    id: string;
    title: string;

    /**
     * Topicos da atividade ou lição
     * exe: Industrialização, Estrutura celular
     */
    topics?: string[];

    /**
     * Materia/ categoria principal da lição ou atividade
     * exe: Ciencias, Conhecimentos gerais, Matematica, [...]
     */
    subjectId: string;
    subject?: Subject
    presentation?: Presentation;


    description: string;

    cover?: string;

    //populated
    progress?: number;
    totalXp?: number;
    duration?: {
        h: number;
        m: number;
        s: number;
    };
}

export interface Lesson extends Common {
    // Optional
    totalXp?: number;
    duration?: {
        h: number;
        m: number;
        s: number;
    };

    // Populated
    content: Activity[]
}

export interface Activity extends Common {
    lessonId?: string;
    position?: number;
    contentType: string;
    contentId: string;
}