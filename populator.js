//Constants
var FIREBASE_URL = "https://brokers.firebaseio.com//";
var FIREBASE_SECRET = "pOpVeglX0R7saK1a9F4NYAbSPBARynHrleGeB2ms";

//Imports
var Firebase = require("firebase");

//Spawns
var ref = new Firebase(FIREBASE_URL);

ref.update({
    companies: {
        'BROKERS': {
            name: 'Brokers SAS',
            staff: {
                'JDUKE': true,
                'JYEPES': true
            }
        }
    },

    users: {
        'JDUKE': {
            company_id: 'BROKERS',
            name: 'Juan David Duke',
            picture: "https://dl.dropboxusercontent.com/u/4461171/web/duke.jpg",
            email: "oliver.a.perez.c@gmail.com",
            tests: {}
        },
        'JYEPES': {
            company_id: 'BROKERS',
            name: 'Jorge Yepes',
            picture: "https://dl.dropboxusercontent.com/u/4461171/web/Jorge.jpg",
            email: "oliver.a.perez.c@gmail.com",
            tests: {}
        }
    },

    access_codes: {
        'TESTC0': {
            expiration_date: 1417979116201,
            user_id: 'JDUKE'
        },
        'TESTC1': {
            expiration_date: 1417979116201,
            user_id: 'JDUKE'
        },
        'TESTC2': {
            expiration_date: 1417979116201,
            user_id: 'JDUKE'
        },
        'TESTC3': {
            expiration_date: 1417979116201,
            user_id: 'JYEPES'
        },
        'TESTC4': {
            expiration_date: 1417979116201,
            user_id: 'JYEPES'
        },
        'TESTC5': {
            expiration_date: 1417979116201,
            user_id: 'JYEPES'
        }
    },

    "questions": {
        "1": {
            "options": {
                "1": "Amable, Bueno, Cariñoso",
                "2": "Serio, Formal",
                "3": "Exigente, Imponente",
                "4": "Extrovertido, Activo"
            },
            "text": "¿Pregunta?"
        },
        "2": {
            "options": {
                "1": "Juguetón, Divertido",
                "2": "Firme, Fuerte",
                "3": "Apegado a la ley, Conciente",
                "4": "Gentil, Flexible, Humilde"
            },
            "text": "¿Pregunta?"
        },
        "3": {
            "options": {
                "1": "Intrépido, Atrevido",
                "2": "Agradable, Afable",
                "3": "Leal, Conservador",
                "4": "Calculador, Analítico"
            },
            "text": "¿Pregunta?"
        },
        "4": {
            "options": {
                "1": "Conservador, Inflexible",
                "2": "Confiado, Ingenuo, Abierto",
                "3": "Pacífico, Calmado",
                "4": "Convencido, Petulante"
            },
            "text": "¿Pregunta?"
        },
        "5": {
            "options": {
                "1": "Décisivo, Seguro, Cierto",
                "2": "Amistoso, Cordial, Popular",
                "3": "Cuidadoso, Cauto",
                "4": "Obediente, Sumiso"
            },
            "text": "¿Pregunta?"
        },
        "6": {
            "options": {
                "1": "Promotor, Animador",
                "2": "Director, Concertador",
                "3": "Audaz, Valiente",
                "4": "Agradable, De buen humor"
            },
            "text": "¿Pregunta?"
        },
        "7": {
            "options": {
                "1": "Considerado, Sensible",
                "2": "Imponente, Voluntad fuerte",
                "3": "Activo, Enérgico",
                "4": "Perfeccionista, Preciso"
            },
            "text": "¿Pregunta?"
        },
        "8": {
            "options": {
                "1": "Contento, Satisfecho",
                "2": "Concertador, Apegado a regla",
                "3": "Valiente, Aventurero",
                "4": "Entusiasta, Influyente"
            },
            "text": "¿Pregunta?"
        },
        "9": {
            "options": {
                "1": "Fácil de palabra, Elocuente",
                "2": "Cariñoso, Sincero, Franco",
                "3": "Persistente, Incansable",
                "4": "Justo, Recto"
            },
            "text": "¿Pregunta?"
        },
        "10": {
            "options": {
                "1": "Positivo, Optimista",
                "2": "Divertido, Cómico",
                "3": "Cohibido, Tímido",
                "4": "Competente, Actúa bien"
            },
            "text": "¿Pregunta?"
        },
        "11": {
            "options": {
                "1": "Contemplativo, Pensador",
                "2": "Diplomático, Pacificador",
                "3": "Admirable, Elegante",
                "4": "Triunfador, Competidor"
            },
            "text": "¿Pregunta?"
        },
        "12": {
            "options": {
                "1": "Alegre, Jovial",
                "2": "Flexible, Adaptable,Concertador",
                "3": "Ambicioso, Esforzado",
                "4": "Profundo, Intenso"
            },
            "text": "¿Pregunta?"
        },
        "13": {
            "options": {
                "1": "Firme, Confiable",
                "2": "Parlanchín, Conversador",
                "3": "Retador, Motivador",
                "4": "Preciso, Exacto"
            },
            "text": "¿Pregunta?"
        },
        "14": {
            "options": {
                "1": "Estable, Equilibrado",
                "2": "Confiado, Autosuficiente",
                "3": "Perspicaz, Ve con claridad",
                "4": "Animado, Expresivo"
            },
            "text": "¿Pregunta?"
        },
        "15": {
            "options": {
                "1": "Controlador, Toma las riendas",
                "2": "Misericordioso, Sensible",
                "3": "Pensativo, Meditador",
                "4": "Persuasivo, Convincente"
            },
            "text": "¿Pregunta?"
        },
        "16": {
            "options": {
                "1": "Sociable, Interactivo",
                "2": "Serio, Inflexible",
                "3": "Dulce, Tierno, Compasivo",
                "4": "A la defensiva, Usa máscara"
            },
            "text": "¿Pregunta?"
        },
        "17": {
            "options": {
                "1": "Poderoso, Inconquistable",
                "2": "Alegre, Gozoso",
                "3": "Generoso, Dador",
                "4": "Indagador, Investigador"
            },
            "text": "¿Pregunta?"
        },
        "18": {
            "options": {
                "1": "Tímido, Habla suavemente",
                "2": "Sistemático, Sigue el plan",
                "3": "Industrioso, Trabaja duro",
                "4": "Sonriente, Feliz"
            },
            "text": "¿Pregunta?"
        },
        "19": {
            "options": {
                "1": "Inquisitivo, Preguntón",
                "2": "Tolerante, Paciente",
                "3": "Impulsador, Determinado",
                "4": "Dinámico, Impresionador"
            },
            "text": "¿Pregunta?"
        },
        "20": {
            "options": {
                "1": "Sirve, Sacrificado",
                "2": "Perspicaz, Que apela",
                "3": "Directo, Al grano",
                "4": "Original, Creativo"
            },
            "text": "¿Pregunta?"
        },
        "21": {
            "options": {
                "1": "Con chispa, Juguetón",
                "2": "Devoto, Dedicado",
                "3": "Cortés, Diplomático",
                "4": "Estricto, Inflexible"
            },
            "text": "¿Pregunta?"
        },
        "22": {
            "options": {
                "1": "Franco, Obstinado",
                "2": "Persuasivo, Encantador",
                "3": "Con Inventiva, Imaginativo",
                "4": "Hospitalario, Disfruta compañía"
            },
            "text": "¿Pregunta?"
        },
        "23": {
            "options": {
                "1": "Celoso, Cuidadoso",
                "2": "Quieto, Reservado",
                "3": "Organizado, Ordenado",
                "4": "Entusiasta, Vigoroso"
            },
            "text": "¿Pregunta?"
        },
        "24": {
            "options": {
                "1": "Fiel, Consistente",
                "2": "Responde, Reacciona",
                "3": "Ayudador, Servicial",
                "4": "Al grano, Directo"
            },
            "text": "¿Pregunta?"
        }
    },
        
    "test_chart": {
        "questions": {
            "1": {
                "options": {
                    "1": { "M": "S", "Me": "B" },
                    "2": { "M": "B", "Me": "C" },
                    "3": { "M": "D", "Me": "D" },
                    "4": { "M": "I", "Me": "I" }
                }
            },
            "2": {
                "options": {
                    "1": { "M": "B", "Me": "I" },
                    "2": { "M": "D", "Me": "B" },
                    "3": { "M": "C", "Me": "C" },
                    "4": { "M": "S", "Me": "S" }
                }
            },
            "3": {
                "options": {
                    "1": { "M": "B", "Me": "D" },
                    "2": { "M": "I", "Me": "B" },
                    "3": { "M": "S", "Me": "S" },
                    "4": { "M": "C", "Me": "C" }
                }
            },
            "4": {
                "options": {
                    "1": { "M": "C", "Me": "B" },
                    "2": { "M": "B", "Me": "I" },
                    "3": { "M": "S", "Me": "S" },
                    "4": { "M": "D", "Me": "D" }
                }
            },
            "5": {
                "options": {
                    "1": { "M": "D", "Me": "D" },
                    "2": { "M": "I", "Me": "I" },
                    "3": { "M": "C", "Me": "C" },
                    "4": { "M": "S", "Me": "B" }
                }
            },
            "6": {
                "options": {
                    "1": { "M": "I", "Me": "I" },
                    "2": { "M": "C", "Me": "B" },
                    "3": { "M": "D", "Me": "D" },
                    "4": { "M": "B", "Me": "S" }
                }
            },
            "7": {
                "options": {
                    "1": { "M": "S", "Me": "B" },
                    "2": { "M": "D", "Me": "D" },
                    "3": { "M": "I", "Me": "I" },
                    "4": { "M": "C", "Me": "C" }
                }
            },
            "8": {
                "options": {
                    "1": { "M": "S", "Me": "S" },
                    "2": { "M": "B", "Me": "C" },
                    "3": { "M": "D", "Me": "D" },
                    "4": { "M": "B", "Me": "I" }
                }
            },
            "9": {
                "options": {
                    "1": { "M": "B", "Me": "I" },
                    "2": { "M": "B", "Me": "S" },
                    "3": { "M": "D", "Me": "D" },
                    "4": { "M": "C", "Me": "C" }
                }
            },
            "10": {
                "options": {
                    "1": { "M": "D", "Me": "D" },
                    "2": { "M": "I", "Me": "I" },
                    "3": { "M": "B", "Me": "S" },
                    "4": { "M": "B", "Me": "C" }
                }
            },
            "11": {
                "options": {
                    "1": { "M": "C", "Me": "B" },
                    "2": { "M": "S", "Me": "S" },
                    "3": { "M": "I", "Me": "B" },
                    "4": { "M": "B", "Me": "D" }
                }
            },
            "12": {
                "options": {
                    "1": { "M": "B", "Me": "I" },
                    "2": { "M": "S", "Me": "S" },
                    "3": { "M": "D", "Me": "D" },
                    "4": { "M": "B", "Me": "B" }
                }
            },
            "13": {
                "options": {
                    "1": { "M": "S", "Me": "S" },
                    "2": { "M": "I", "Me": "I" },
                    "3": { "M": "D", "Me": "B" },
                    "4": { "M": "C", "Me": "B" }
                }
            },
            "14": {
                "options": {
                    "1": { "M": "S", "Me": "S" },
                    "2": { "M": "D", "Me": "B" },
                    "3": { "M": "B", "Me": "C" },
                    "4": { "M": "I", "Me": "I" }
                }
            },
            "15": {
                "options": {
                    "1": { "M": "D", "Me": "D" },
                    "2": { "M": "S", "Me": "S" },
                    "3": { "M": "C", "Me": "C" },
                    "4": { "M": "I", "Me": "B" }
                }
            },
            "16": {
                "options": {
                    "1": { "M": "I", "Me": "B" },
                    "2": { "M": "D", "Me": "D" },
                    "3": { "M": "S", "Me": "S" },
                    "4": { "M": "C", "Me": "B" }
                }
            },
            "17": {
                "options": {
                    "1": { "M": "D", "Me": "D" },
                    "2": { "M": "I", "Me": "I" },
                    "3": { "M": "S", "Me": "B" },
                    "4": { "M": "C", "Me": "C" }
                }
            },
            "18": {
                "options": {
                    "1": { "M": "B", "Me": "S" },
                    "2": { "M": "B", "Me": "C" },
                    "3": { "M": "D", "Me": "D" },
                    "4": { "M": "I", "Me": "I" }
                }
            },
            "19": {
                "options": {
                    "1": { "M": "C", "Me": "C" },
                    "2": { "M": "S", "Me": "S" },
                    "3": { "M": "D", "Me": "D" },
                    "4": { "M": "I", "Me": "I" }
                }
            },
            "20": {
                "options": {
                    "1": { "M": "B", "Me": "S" },
                    "2": { "M": "I", "Me": "B" },
                    "3": { "M": "D", "Me": "D" },
                    "4": { "M": "C", "Me": "C" }
                }
            },
            "21": {
                "options": {
                    "1": { "M": "I", "Me": "I" },
                    "2": { "M": "B", "Me": "D" },
                    "3": { "M": "S", "Me": "S" },
                    "4": { "M": "C", "Me": "B" }
                }
            },
            "22": {
                "options": {
                    "1": { "M": "D", "Me": "D" },
                    "2": { "M": "I", "Me": "I" },
                    "3": { "M": "B", "Me": "C" },
                    "4": { "M": "S", "Me": "S" }
                }
            },
            "23": {
                "options": {
                    "1": { "M": "D", "Me": "D" },
                    "2": { "M": "B", "Me": "B" },
                    "3": { "M": "C", "Me": "C" },
                    "4": { "M": "I", "Me": "I" }
                }
            },
            "24": {
                "options": {
                    "1": { "M": "B", "Me": "C" },
                    "2": { "M": "I", "Me": "I" },
                    "3": { "M": "S", "Me": "S" },
                    "4": { "M": "D", "Me": "D" }
                }
            },
        }
    }
},
function(error) {
    if (error) {
        console.log('Synchronization failed: ' + error);
        process.exit(1);
    } else {
        console.log('Synchronization succeeded.');
        process.exit(0);
    }
});