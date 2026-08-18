export type RewardType =
    | 'xp'
    | 'skin'
    | 'theme';

export type RewardApplyType =
    | 'auto'
    | 'quiz-finished'

export interface Reward {
    type: RewardType;

    xpAmount?: number;

    skinId?: string;

    themeId?: string;

    applyOn?: RewardApplyType = 'auto'
}
