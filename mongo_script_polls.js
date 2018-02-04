print("*** Script starting ***");
conn = new Mongo("localhost");
// Connect to mongo collection
db = conn.getDB("celiacpoll");


print("******* Clear DB *******");
db.dropDatabase();


print("******* Create 'polls' collection *******");
db.createCollection("polls");

/* Usuarios */
print("******* Creating poll 1 *******");

poll_1 = {
    "idEncuesta": 1,
    "secciones": [
        {
        "id": 1,
        "preguntas":
            [
                {
                    "tipo": "texto",
                    "percent_diagnostico": 1,
                    "texto": "¿Cuál es su correo electrónico?",
                    "score": 1,
                    "valor_opciones" : [0]
                },
                {
                    "tipo": "seleccion",
                    "percent_diagnostico": 1,
                    "texto": "¿Cuál es su molestia predominante?",
                    "opciones": ["Digestiva", "Osteoarticular (dolor óseo, inflamación articular, osteoporosis etc) ", "Dermatológica ", "Neuropsiquiátrica (insomnio, dolor de cabeza, depresión, ansiedad..)", "Metabólica (cansancio, problemas de peso, etc"],
                    "score": 1,
                    "valor_opciones" : [1,2,3,4,5]
                },
                {
                    "tipo": "seleccion",
                    "percent_diagnostico": 1,
                    "texto": "¿Cuál es su sexo?",
                    "opciones": ["Hombre", "Mujer ", "Otros "],
                    "score": 1,
                    "valor_opciones" : [0,0,0]
                },
                {
                    "tipo": "texto",
                    "percent_diagnostico": 1,
                    "texto": "¿Cuál es su edad?",
                    "score": 1,
                    "valor_opciones" : [0]
                },
                {
                    "tipo": "texto",
                    "percent_diagnostico": 1,
                    "texto": "¿Cuál es su lugar de nacimiento?",
                    "score": 1,
                    "valor_opciones" : [0]
                },
                {
                    "tipo": "seleccion",
                    "percent_diagnostico": 1,
                    "texto": "¿Cuál es su origen familiar?",
                    "opciones": ["Caucásico ", "Árabe ", "Magrebí ", "Africano ", "Negro americano ", "Indú ", "Asiático ", "Nativo americano "],
                    "score": 1,
                    "valor_opciones" : [1,2,3,4,5,6,7,8]
                },
                {
                    "tipo": "seleccion",
                    "percent_diagnostico": 1,
                    "texto": "¿Tiene algún familiar celíaco?",
                    "opciones": ["Sí ", "No "],
                    "score": 1,
                    "valor_opciones" : [1,0]
                },
                {
                    "tipo": "seleccion",
                    "percent_diagnostico": 1,
                    "texto": "¿Tiene algún familiar con diabetes Tipo II?",
                    "opciones": ["Sí ", "No "],
                    "score": 1,
                    "valor_opciones" : [1,0]
                },
                {
                    "tipo": "seleccion",
                    "percent_diagnostico": 1,
                    "texto": "¿Tiene algún familiar con problemas digestivos no aclarados?",
                    "opciones": ["Sí ", "No "],
                    "score": 1,
                    "valor_opciones" : [1,0]
                },
                {
                    "tipo": "seleccion",
                    "percent_diagnostico": 1,
                    "texto": "¿Cual es su color de pelo y piel?",
                    "opciones": ["Rubio ", "Castaño ", "Moreno ", "Pelirrojo ", "Negro "],
                    "score": 1,
                    "valor_opciones" : [1,2,3,4,5]
                },
                {
                    "tipo": "seleccion",
                    "percent_diagnostico": 1,
                    "texto": "¿Cual es su color de ojos?",
                    "opciones": ["Azules ", "Marrones ", "Verdes ", "Negros ", "Grises "],
                    "score": 1,
                    "valor_opciones" : [1,2,3,4,5]
                },
                {
                    "tipo": "seleccion",
                    "percent_diagnostico": 1,
                    "texto": "¿Cómo es su salud?",
                    "opciones": ["Enfermizo ", "Normal ", "Muy Saludable "],
                    "score": 1,
                    "valor_opciones" : [2,1,0]
                },
                {
                    "tipo": "texto",
                    "percent_diagnostico": 1,
                    "texto": "¿Cuál es su estatura?",
                    "score": 1,
                    "valor_opciones" : [0]
                },
                {
                    "tipo": "texto",
                    "percent_diagnostico": 1,
                    "texto": "¿Cuál es su peso?",
                    "score": 1,
                    "valor_opciones" : [0]
                },
                {
                    "tipo": "seleccion",
                    "percent_diagnostico": 1,
                    "texto": "¿Tiene algún problema crónico o recurrente de piel no aclarado, se le cae el pelo o tiene uñas débiles? ",
                    "opciones": ["Sí ", "No "],
                    "score": 1,
                    "valor_opciones" : [1,0]
                },
                {
                    "tipo": "seleccion",
                    "percent_diagnostico": 1,
                    "texto": "¿Se encuentra mas cansado de lo que debería?",
                    "opciones": ["Sí ", "No "],
                    "score": 1,
                    "valor_opciones" : [1]
                },
                {
                    "tipo": "seleccion",
                    "percent_diagnostico": 1,
                    "texto": "¿Es intolerante a lactosa, fructosa ó algún otro hidrato de carbono?",
                    "opciones": ["Sí ", "No ", "No he sido estudiado "],
                    "score": 1,
                    "valor_opciones" : [1,0,0]
                },
                {
                    "tipo": "seleccion",
                    "percent_diagnostico": 1,
                    "texto": "¿Ha dado positivo en algún test de intolerancia a alimentos?",
                    "opciones": ["Sí ", "No ", "No he sido estudiado "],
                    "score": 1,
                    "valor_opciones" : [1,0,0]
                },
                {
                    "tipo": "seleccion",
                    "percent_diagnostico": 1,
                    "texto": "¿Tiene dolor de cabeza no aclarado?",
                    "opciones": ["Sí ", "No "],
                    "score": 1,
                    "valor_opciones" : [1,0]
                },
                {
                    "tipo": "seleccion",
                    "percent_diagnostico": 1,
                    "texto": "¿Tiene usted tendencia alérgica (asma bronquial, rinitis, conjuntivitis..)?",
                    "opciones": ["Sí ", "No "],
                    "score": 1,
                    "valor_opciones" : [1,0]
                },
                {
                    "tipo": "seleccion",
                    "percent_diagnostico": 1,
                    "texto": "¿Es alérgico a antibióticos?",
                    "opciones": ["Sí ", "No "],
                    "score": 1,
                    "valor_opciones" : [1,0]
                },
                {
                    "tipo": "seleccion",
                    "percent_diagnostico": 1,
                    "texto": "¿Es alérgico a otros medicamentos?",
                    "opciones": ["Sí ", "No "],
                    "score": 1,
                    "valor_opciones" : [1,0]
                },
                {
                    "tipo": "seleccion",
                    "percent_diagnostico": 1,
                    "texto": "¿Es alérgico a algún otro alimento?",
                    "opciones": ["Sí ", "No "],
                    "score": 1,
                    "valor_opciones" : [1,0]
                },
                {
                    "tipo": "seleccion",
                    "percent_diagnostico": 1,
                    "texto": "¿Tiene alteraciones menstruales?",
                    "opciones": ["Sí ", "No "],
                    "score": 1,
                    "valor_opciones" : [1,0]
                },
                {
                    "tipo": "seleccion",
                    "percent_diagnostico": 1,
                    "texto": "¿Ha tenido problemas para concebir hijos?",
                    "opciones": ["Sí ", "No "],
                    "score": 1,
                    "valor_opciones" : [1,0]
                },
                {
                    "tipo": "seleccion",
                    "percent_diagnostico": 1,
                    "texto": "¿Ha tenido abortos, problemas en el embarazo o desarrollo del feto?",
                    "opciones": ["Sí ", "No "],
                    "score": 1,
                    "valor_opciones" : [1,0]
                },
                {
                    "tipo": "seleccion",
                    "percent_diagnostico": 1,
                    "texto": "¿Tiene hijos?",
                    "opciones": ["Sí ", "No "],
                    "score": 1,
                    "valor_opciones" : [1,0]
                },
                {
                    "tipo": "multi-seleccion",
                    "percent_diagnostico": 1,
                    "texto": "Conteste si ha padecido frecuentemente alguno de los síntomas que a continuación se enuncian",
                    "opciones": ["Diarrea ", "Estreñimiento ", "Dolor abdominal no aclarado ", "Dolor abdominal que se despierta ", "Náuseas / vómitos después de comer ", "Digesstiones lentas ", "Inflamación abdominal tras las comidas ", "Acidez, síntomas de reflujo ", "Inflamación de la lengua ", "Úlceras aftosas recurrentes orales ", "Eczema o picor anal no aclarado ", "Ganancia de peso no explicadad ", "Pérdida de peso no explicada "],
                    "score": 1,
                    "valor_opciones" : [1,1,1,1,1,1,1,1,1,1,1,1,1]
                }
            ]
        }
    ]
};

poll_2 = {
    "idEncuesta": 2,
    "secciones": [
        {
        "id": 1,
        "preguntas":
            [
                {
                    "tipo": "texto",
                    "percent_diagnostico": 1,
                    "texto": "¿Cuál es su correo electrónico?",
                    "score": 1,
                    "valor_opciones" : [0]
                },
                {
                    "tipo": "seleccion",
                    "percent_diagnostico": 1,
                    "texto": "¿Cuál es su molestia predominante?",
                    "opciones": ["Digestiva", "Osteoarticular (dolor óseo, inflamación articular, osteoporosis etc) ", "Dermatológica ", "Neuropsiquiátrica (insomnio, dolor de cabeza, depresión, ansiedad..)", "Metabólica (cansancio, problemas de peso, etc"],
                    "score": 1,
                    "valor_opciones" : [1,2,3,4,5]
                },
                {
                    "tipo": "seleccion",
                    "percent_diagnostico": 1,
                    "texto": "¿Cuál es su sexo?",
                    "opciones": ["Hombre", "Mujer ", "Otros "],
                    "score": 1,
                    "valor_opciones" : [0,0,0]
                },
                {
                    "tipo": "texto",
                    "percent_diagnostico": 1,
                    "texto": "¿Cuál es su edad?",
                    "score": 1,
                    "valor_opciones" : [0]
                },
                {
                    "tipo": "texto",
                    "percent_diagnostico": 1,
                    "texto": "¿Cuál es su lugar de nacimiento?",
                    "score": 1,
                    "valor_opciones" : [0]
                },
                {
                    "tipo": "seleccion",
                    "percent_diagnostico": 1,
                    "texto": "¿Cuál es su origen familiar?",
                    "opciones": ["Caucásico ", "Árabe ", "Magrebí ", "Africano ", "Negro americano ", "Indú ", "Asiático ", "Nativo americano "],
                    "score": 1,
                    "valor_opciones" : [1,2,3,4,5,6,7,8]
                },
                {
                    "tipo": "seleccion",
                    "percent_diagnostico": 1,
                    "texto": "¿Tiene algún familiar celíaco?",
                    "opciones": ["Sí ", "No "],
                    "score": 1,
                    "valor_opciones" : [1,0]
                },
                {
                    "tipo": "seleccion",
                    "percent_diagnostico": 1,
                    "texto": "¿Tiene algún familiar con diabetes Tipo II?",
                    "opciones": ["Sí ", "No "],
                    "score": 1,
                    "valor_opciones" : [1,0]
                },
                {
                    "tipo": "texto",
                    "percent_diagnostico": 1,
                    "texto": "¿Cuál es su peso?",
                    "score": 1,
                    "valor_opciones" : [0]
                },
                {
                    "tipo": "seleccion",
                    "percent_diagnostico": 1,
                    "texto": "¿Tiene algún problema crónico o recurrente de piel no aclarado, se le cae el pelo o tiene uñas débiles? ",
                    "opciones": ["Sí ", "No "],
                    "score": 1,
                    "valor_opciones" : [1,0]
                },
                {
                    "tipo": "seleccion",
                    "percent_diagnostico": 1,
                    "texto": "¿Se encuentra mas cansado de lo que debería?",
                    "opciones": ["Sí ", "No "],
                    "score": 1,
                    "valor_opciones" : [1]
                },
                {
                    "tipo": "seleccion",
                    "percent_diagnostico": 1,
                    "texto": "¿Es intolerante a lactosa, fructosa ó algún otro hidrato de carbono?",
                    "opciones": ["Sí ", "No ", "No he sido estudiado "],
                    "score": 1,
                    "valor_opciones" : [1,0,0]
                },
                {
                    "tipo": "seleccion",
                    "percent_diagnostico": 1,
                    "texto": "¿Ha tenido abortos, problemas en el embarazo o desarrollo del feto?",
                    "opciones": ["Sí ", "No "],
                    "score": 1,
                    "valor_opciones" : [1,0]
                },
                {
                    "tipo": "seleccion",
                    "percent_diagnostico": 1,
                    "texto": "¿Tiene hijos?",
                    "opciones": ["Sí ", "No "],
                    "score": 1,
                    "valor_opciones" : [1,0]
                },
                {
                    "tipo": "multi-seleccion",
                    "percent_diagnostico": 1,
                    "texto": "Conteste si ha padecido frecuentemente alguno de los síntomas que a continuación se enuncian",
                    "opciones": ["Diarrea ", "Estreñimiento ", "Dolor abdominal no aclarado ", "Dolor abdominal que se despierta ", "Náuseas / vómitos después de comer ", "Digesstiones lentas ", "Inflamación abdominal tras las comidas ", "Acidez, síntomas de reflujo ", "Inflamación de la lengua ", "Úlceras aftosas recurrentes orales ", "Eczema o picor anal no aclarado ", "Ganancia de peso no explicadad ", "Pérdida de peso no explicada "],
                    "score": 1,
                    "valor_opciones" : [1,1,1,1,1,1,1,1,1,1,1,1,1]
                }
            ]
        }
    ]
};

print("******* Saving poll 1 (Cuestionario 1) *******");
db.polls.save(poll_1);

print("******* Saving poll 2 (Cuestionario 2) *******");
db.polls.save(poll_2);


print("*** Script done ***");
