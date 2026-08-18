import { Answer } from "./answer";
import { Content } from "./content";
import { Reward } from "./reward";

export interface Question {
    id: string;

    content: Content[];

    multipleChoice?: boolean;

    answers: Answer[];

    explanation?: Content[];

    /**
     * Se não informado, usa
     * QuizSettings.defaultTimeLimit.
     */
    timeLimit?: number;

    rewards?: Reward[];
}

