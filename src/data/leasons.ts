import { Lesson } from "../app/models/lesson";

export const lessons: Lesson[] = [

    {
        id: 'quiz-01',
        title: 'Conhecimentos Gerais',
        description: 'Testes seus conhecimentos sobre diversos temas.',
        subjectId: 'geral',
        topics: ['Conhecimentos gerais'],

        content: [
            {
                id: 'a',
                title: "Quiz Conhecimentos gerais",
                subjectId: "",
                description: 'Testes seus conhecimentos sobre diversos temas.',
                contentType: 'quiz',
                contentId: '8b7e5f21-2c91-4d83-a6f4-1e9b73c52a10',
                position: 0,
            }
        ]
    },
    {
        id: 'reading-01',
        title: 'A historia do atomo',
        description: 'Acompanhe a historai do atomo junto de um quiz incrivel.',
        subjectId: 'math',
        topics: ['Conhecimentos gerais'],

        content: [
            {
                id: 'a',
                title: "A historia do atomo",
                subjectId: "",
                description: "",
                contentType: 'reading',
                contentId: 'd59c882c-82b4-4124-a17d-dae3028569cf',
                position: 0,
            },
            {
                id: 'a',
                title: "A historai do atomo",
                subjectId: "",
                description: 'Testes seus conhecimentos sobre diversos temas.',
                contentType: 'quiz',
                contentId: '8b7e5f21-2c91-4d83-a64f4-1e9b73c52a10',
                position: 0,
            }
        ]
    },
];
