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
                id: 'f634429f-7af7-473e-a15b-6fd8980c057d',
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
                id: '5084d73f-9d6e-423b-b003-0b451c1bed8c',
                title: "A historia do atomo",
                subjectId: "",
                description: "",
                contentType: 'reading',
                contentId: 'd59c882c-82b4-4124-a17d-dae3028569cf',
                position: 0,
            },
            {
                id: 'ad9f034b-6cac-4820-985d-844de7caca8b',
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
