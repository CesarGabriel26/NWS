import { Common } from "../common";
import { Question } from "../common/question";
import { Reward } from "../common/reward";

export interface QuizSettings {
    /**
     * Tempo padrão de cada pergunta, em segundos.
     */
    defaultTimeLimit?: number;

    shuffleQuestions?: boolean;
    shuffleAnswers?: boolean;

    defaultRewards?: Reward[];

    /**
     * Mostra a resposta correta após responder.
     */
    showCorrectAnswer?: boolean;

    /**
     * Permite jogar novamente depois de terminar.
     */
    allowRetry?: boolean;

    /**
     * Configuração padrão para questões.
     */
    multipleChoice?: boolean;
}

export interface Quiz {
    id: string;
    settings: QuizSettings;

    questions: Question[];
}