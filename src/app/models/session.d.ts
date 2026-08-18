import { Reward } from "./common/reward";
import { QuizAnswerResult } from "./question";
import { QuizReward } from "./reward";

export interface AnswerResult {
    questionId: string;

    selectedAnswerIds: string[];

    correct: boolean;

    /**
     * Tempo gasto para responder,
     * em segundos.
     */
    timeSpent: number;

    /**
     * Pontuação obtida nessa pergunta.
     */
    score: number;

    /**
    * Dados adicionais em json
    */
    data: any;
}

export interface Session {
    id: string;

    userId: string;

    parentSessionId?: string;

    targetType: string;
    targetId: string;

    leassonContentId?: string;

    status: string;
    score: number;

    totalItems: number;
    correctItems: number;
    wrongItems: number;

    accuracy: number;

    data: any;
    

    results: AnswerResult[];
    rewards: Reward[];

    startedAt: number;
    finishedAt?: number;
}
