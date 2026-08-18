import { Activity } from "../app/models/activity";

export const activities: any[] = [
    {
        id: 'quiz-01',
        title: 'Conhecimentos Gerais',
        description: 'Testes seus conhecimentos sobre diversos temas.',
        type: 'quiz',
        subjectId: 'geral',
        topic: 'Conhecimentos gerais',

        engine: 'quiz',
        contentId: '8b7e5f21-2c91-4d83-a6f4-1e9b73c52a10',
        difficulty: 'easy',
    },
    {
        id: 'reading-01',
        title: 'A historia do atomo',
        description: 'Testes seus conhecimentos sobre diversos temas.',
        type: 'reading',
        subjectId: 'geral',
        topic: 'Conhecimentos gerais',

        engine: 'reader',
        contentId: 'd59c882c-82b4-4124-a17d-dae3028569cf',
        difficulty: 'easy',
    },
    // {
    //     id: 'video-01',
    //     title: 'A historia do atomo',
    //     description: 'Testes seus conhecimentos sobre diversos temas.',
    //     type: 'video',
    //     subjectId: 'geral',
    //     topic: 'Conhecimentos gerais',

    //     engine: 'youtube-video',
    //     contentId: '<iframe width="560" height="315" src="https://www.youtube.com/embed/X4x2HtmBEx4?si=nZwyPu_f7AGozaTR"
    // title="YouTube video player" frameborder="0"
    // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    // referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    //     difficulty: 'easy',
    // }
];
