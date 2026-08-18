import { Quiz } from "../app/models/engines/quiz";

export const Quizes: Quiz[] = [
    {
        id: "8b7e5f21-2c91-4d83-a6f4-1e9b73c52a10",
        // title: "Conhecimentos Gerais",

        settings: {
            shuffleQuestions: true,
            defaultTimeLimit: 15,
            allowRetry: true,
            multipleChoice: false,
            defaultRewards: [
                {
                    type: 'xp',
                    xpAmount: 250,
                    applyOn: 'auto'
                }
            ]
        },
        questions: [
            {
                id: "a1c92e74-6f31-4b85-9d20-73e5c8142fa6",
                content: [
                    {
                        type: "text",
                        source: "Qual destes países possui o maior território do mundo?"
                    }
                ],
                answers: [
                    {
                        id: "a",
                        label: "Canadá",
                        isCorrect: false
                    },
                    {
                        id: "b",
                        label: "China",
                        isCorrect: false
                    },
                    {
                        id: "c",
                        label: "Rússia",
                        isCorrect: true
                    },
                    {
                        id: "d",
                        label: "Estados Unidos",
                        isCorrect: false
                    }
                ],
                explanation: [
                    {
                        type: "text",
                        source: "A Rússia é o maior país do mundo em área territorial, com aproximadamente 17,1 milhões de km². Seu território se estende pela Europa e pela Ásia."
                    }
                ]
            },

            {
                id: "d73f8a21-5c64-49be-b207-91e3f6a82d45",
                content: [
                    {
                        type: "text",
                        source: "Verdadeiro ou falso: A luz do Sol leva aproximadamente 8 minutos para chegar à Terra."
                    }
                ],
                answers: [
                    {
                        id: "v",
                        label: "Verdadeiro",
                        isCorrect: true
                    },
                    {
                        id: "f",
                        label: "Falso",
                        isCorrect: false
                    }
                ],
                explanation: [
                    {
                        type: "text",
                        source: "Verdadeiro. A luz viaja a aproximadamente 300 mil quilômetros por segundo e leva cerca de 8 minutos e 20 segundos para percorrer os aproximadamente 150 milhões de quilômetros entre o Sol e a Terra."
                    }
                ]
            },

            {
                id: "f4b82163-7a95-42de-8c31-65e2d9a740bc",
                content: [
                    {
                        type: "text",
                        source: "Qual civilização construiu Machu Picchu?"
                    }
                ],
                answers: [
                    {
                        id: "a",
                        label: "Maias",
                        isCorrect: false
                    },
                    {
                        id: "b",
                        label: "Astecas",
                        isCorrect: false
                    },
                    {
                        id: "c",
                        label: "Incas",
                        isCorrect: true
                    },
                    {
                        id: "d",
                        label: "Fenícios",
                        isCorrect: false
                    }
                ],
                explanation: [
                    {
                        type: "text",
                        source: "Machu Picchu foi construída pelos incas no século XV, provavelmente durante o governo do imperador Pachacuti. A cidade fica nos Andes peruanos, a cerca de 2.400 metros de altitude."
                    }
                ]
            },

            {
                id: "c62e9147-38fb-4d50-a7e2-15f693b8c204",
                content: [
                    {
                        type: "text",
                        source: "Verdadeiro ou falso: O som pode se propagar no espaço vazio entre os planetas."
                    }
                ],
                answers: [
                    {
                        id: "v",
                        label: "Verdadeiro",
                        isCorrect: false
                    },
                    {
                        id: "f",
                        label: "Falso",
                        isCorrect: true
                    }
                ],
                explanation: [
                    {
                        type: "text",
                        source: "Falso. O som é uma onda mecânica e precisa de um meio material, como ar, água ou sólidos, para se propagar. Como o espaço é praticamente um vácuo, não há matéria suficiente para transmitir o som."
                    }
                ]
            },

            {
                id: "e91a56c3-2d74-4b89-96f1-8c50a723d6be",
                content: [
                    {
                        type: "text",
                        source: "Qual elemento químico possui o símbolo Fe?"
                    }
                ],
                answers: [
                    {
                        id: "a",
                        label: "Flúor",
                        isCorrect: false
                    },
                    {
                        id: "b",
                        label: "Ferro",
                        isCorrect: true
                    },
                    {
                        id: "c",
                        label: "Fósforo",
                        isCorrect: false
                    },
                    {
                        id: "d",
                        label: "Frâncio",
                        isCorrect: false
                    }
                ],
                explanation: [
                    {
                        type: "text",
                        source: "Fe é o símbolo químico do ferro. A sigla vem do latim ferrum, que significa ferro. O ferro é um dos elementos mais importantes para a produção de aço."
                    }
                ]
            },

            {
                id: "b58d2031-94e7-4c62-a815-3f76e9a2d540",
                content: [
                    {
                        type: "text",
                        source: "Qual foi o primeiro país a enviar um ser humano ao espaço?"
                    }
                ],
                answers: [
                    {
                        id: "a",
                        label: "Estados Unidos",
                        isCorrect: false
                    },
                    {
                        id: "b",
                        label: "União Soviética",
                        isCorrect: true
                    },
                    {
                        id: "c",
                        label: "China",
                        isCorrect: false
                    },
                    {
                        id: "d",
                        label: "França",
                        isCorrect: false
                    }
                ],
                explanation: [
                    {
                        type: "text",
                        source: "A União Soviética foi a primeira a enviar um ser humano ao espaço. Em 12 de abril de 1961, Yuri Gagarin completou uma órbita ao redor da Terra a bordo da Vostok 1."
                    }
                ]
            },

            {
                id: "72c4e915-6a30-4f87-b2d1-59e8a3460c71",
                content: [
                    {
                        type: "text",
                        source: "Verdadeiro ou falso: O Brasil possui território em mais de um hemisfério."
                    }
                ],
                answers: [
                    {
                        id: "v",
                        label: "Verdadeiro",
                        isCorrect: true
                    },
                    {
                        id: "f",
                        label: "Falso",
                        isCorrect: false
                    }
                ],
                explanation: [
                    {
                        type: "text",
                        source: "Verdadeiro. A maior parte do Brasil está no Hemisfério Sul, mas uma pequena parte do território, ao norte da Linha do Equador, está no Hemisfério Norte."
                    }
                ]
            },

            {
                id: "39e7a251-8c64-4d93-a0f5-72b6e9183dc4",
                content: [
                    {
                        type: "text",
                        source: "Qual destes animais é considerado um mamífero?"
                    }
                ],
                answers: [
                    {
                        id: "a",
                        label: "Pinguim",
                        isCorrect: false
                    },
                    {
                        id: "b",
                        label: "Tubarão",
                        isCorrect: false
                    },
                    {
                        id: "c",
                        label: "Golfinho",
                        isCorrect: true
                    },
                    {
                        id: "d",
                        label: "Polvo",
                        isCorrect: false
                    }
                ],
                explanation: [
                    {
                        type: "text",
                        source: "O golfinho é um mamífero. Apesar de viver na água, ele respira ar atmosférico com pulmões e, como outros mamíferos, as fêmeas produzem leite para alimentar os filhotes."
                    }
                ]
            },

            {
                id: "a83f6172-5d29-4b90-c624-17e8f3592ab6",
                content: [
                    {
                        type: "text",
                        source: "Verdadeiro ou falso: A água pura ferve a uma temperatura menor em locais de grande altitude do que ao nível do mar."
                    }
                ],
                answers: [
                    {
                        id: "v",
                        label: "Verdadeiro",
                        isCorrect: true
                    },
                    {
                        id: "f",
                        label: "Falso",
                        isCorrect: false
                    }
                ],
                explanation: [
                    {
                        type: "text",
                        source: "Verdadeiro. Em altitudes maiores, a pressão atmosférica é menor. Com menor pressão sobre a água, é necessária uma temperatura menor para que ela entre em ebulição."
                    }
                ]
            },

            {
                id: "d41b796e-23c8-4f50-a6e1-95b3728c0f14",
                content: [
                    {
                        type: "text",
                        source: "Qual invenção é geralmente associada aos irmãos Wright e foi desenvolvida no início do século XX?"
                    }
                ],
                answers: [
                    {
                        id: "a",
                        label: "Telefone",
                        isCorrect: false
                    },
                    {
                        id: "b",
                        label: "Avião",
                        isCorrect: true
                    },
                    {
                        id: "c",
                        label: "Rádio",
                        isCorrect: false
                    },
                    {
                        id: "d",
                        label: "Telescópio",
                        isCorrect: false
                    }
                ],
                explanation: [
                    {
                        type: "text",
                        source: "Os irmãos Orville e Wilbur Wright são amplamente associados aos primeiros voos controlados e motorizados de uma aeronave, realizados em 1903 nos Estados Unidos. A história da aviação, porém, também envolve outros pioneiros, como o brasileiro Alberto Santos-Dumont."
                    }
                ]
            }
        ]
    }
];