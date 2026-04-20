import React, { useState } from "react";
import { Check, X, RotateCcw, BookOpen, Award, ChevronLeft, ChevronRight } from "lucide-react";

const ExamTestApp = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedExam, setSelectedExam] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);

  const subjects = {
    ingles: {
      name: "Inglés",
      description: "Tests de gramática y vocabulario en inglés",
      exams: {
        semestral: {
          name: "Prueba Semestral",
          questions: [
            {
              q: "AUN NO TENEMOS PREGUNTAS:",
              options: [
                "AUN NO TENEMOS PREGUNTAS",
                "AUN NO TENEMOS PREGUNTAS",
                "AUN NO TENEMOS PREGUNTAS",
                "AUN NO TENEMOS PREGUNTAS"
              ],
              correct: 0,
              explanation: "AUN NO TENEMOS PREGUNTAS."
            },
          
          ]
        },

        unidad1: {
          name: "Unidad 1: Living in the present",
          questions: [
            {
              q: "Choose the correct sentence in the Present Simple.",
              options: [
                "She go always to the gym.",
                "She goes always to the gym.",
                "She always goes to the gym.",
                "She always go to the gym."
              ],
              correct: 2,
              explanation: "La respuesta correcta es: She always goes to the gym. El adverbio de frecuencia debe ir antes del verbo principal, y en tercera persona singular el verbo debe terminar en -s."
            },
            {
              q: "Choose the right answer.",
              options: [
                "She be a doctor.",
                "She is a doctor.",
                "She are a doctor.",
                "She am a doctor."
              ],
              correct: 1,
              explanation: "La respuesta correcta es: She is a doctor. El verbo 'to be' en tercera persona singular se conjuga como 'is'."
            },
            {
              q: "Choose the right answer.",
              options: [
                "I have not got a pet.",
                "I haven't got a pet",
                "I don't have a pet.",
                "All the above are correct."
              ],
              correct: 3,
              explanation: "La respuesta correcta es: All the above are correct. Las tres formas son válidas para expresar la negación con 'have/have got'."
            },
            {
              q: "In which of the following sentences is the adverb of frequency correctly placed?",
              options: [
                "They never are late for work.",
                "They are late never for work.",
                "They are never late for work.",
                "They are late for work never."
              ],
              correct: 2,
              explanation: "La respuesta correcta es: They are never late for work. Con el verbo 'to be', el adverbio de frecuencia va después del verbo."
            },
            {
              q: "Which gerund form is correct?",
              options: [
                "Crying",
                "Runing",
                "Makeing",
                "Swiming"
              ],
              correct: 0,
              explanation: "La respuesta correcta es: Crying. Es la única forma correcta. 'Running' tiene doble consonante, 'making' no usa 'e', y 'swimming' tiene doble consonante pero está mal escrito aquí como 'swiming'."
            },
            {
              q: "Which of the following is NOT a use of the Present Continuous?",
              options: [
                "To describe actions happening at the moment of speaking.",
                "To express temporary actions.",
                "To talk about future arrangements or plans.",
                "To talk about habits and routines."
              ],
              correct: 3,
              explanation: "La respuesta correcta es: To talk about habits and routines. El Present Continuous no se usa para hablar de hábitos y rutinas; para eso se usa el Present Simple."
            },
            {
              q: "Which of the following sentences correctly uses a stative verb?",
              options: [
                "She is knowing the answer",
                "I remember your name",
                "They are believing in ghosts.",
                "I'm wanting pizza"
              ],
              correct: 1,
              explanation: "La respuesta correcta es: I remember your name. Los verbos estativos (como 'remember') no se pueden usar en Present Continuous; deben usarse en Present Simple."
            },
            {
              q: "Which of the following sentences is in the Present Continuous?",
              options: [
                "He studies for his exam.",
                "He study for his exam.",
                "He is studying for his exam.",
                "He studying for his exam."
              ],
              correct: 2,
              explanation: "La respuesta correcta es: He is studying for his exam. El Present Continuous se forma con el auxiliar 'to be' + gerundio (-ing)."
            },
            {
              q: "Which of the following statements about the verb 'to have got' is correct?",
              options: [
                "It is commonly used in British English.",
                "It is only used in the present tense.",
                "For the other verb tenses we use the verb 'to have'.",
                "All the above are correct."
              ],
              correct: 3,
              explanation: "La respuesta correcta es: All the above are correct. 'Have got' es común en inglés británico, solo se usa en presente, y para otros tiempos se usa 'have'."
            },
            {
              q: "Which sentence correctly follows the spelling rules for third-person singular verbs in the Present Simple?",
              options: [
                "She watches TV in the evening.",
                "She go to school early.",
                "He study at the library.",
                "He fix his car every Sunday."
              ],
              correct: 0,
              explanation: "La respuesta correcta es: She watches TV in the evening. Cuando la tercera persona singular termina en una sílaba tónica con consonante-vocal-consonante, se duplica la consonante final. En este caso, 'watch' se convierte en 'watches'."
            }
          ]
        },

        unidad2: {
          name: "Unidad 2: What do you like?",
          questions: [
            {
              q: "Choose the correct sentence to express your preference:",
              options: [
                "I like pizza",
                "I liking pizza",
                "I am like pizza",
                "I likes pizza"
              ],
              correct: 0,
              explanation: "La respuesta correcta es: I like pizza. El verbo 'like' en primera persona singular no lleva 's' y se usa en forma simple para expresar preferencias."
            },
            {
              q: "Choose the correct sentence with some/any/no:",
              options: [
                "There isn't no milk in the fridge.",
                "There is no milk in the fridge.",
                "There is any food left.",
                "I don't have some pencils."
              ],
              correct: 1,
              explanation: "La respuesta correcta es: There is no milk in the fridge. 'No' se usa en oraciones afirmativas, mientras que 'any' en negativas y 'some' en positivas."
            },
            {
              q: "Choose the correct wh-question.",
              options: [
                "Where are you going?",
                "Where you are going?",
                "Are you where going?",
                "Are where going you?"
              ],
              correct: 0,
              explanation: "La respuesta correcta es: Where are you going? En las preguntas con wh-words, el orden es: wh-word + verbo auxiliar + sujeto + verbo principal."
            },
            {
              q: "Choose the sentence with the correct order of events using these connectors: \"first,\" \"then,\" and \"however\"",
              options: [
                "First, we went to the store. Then, we bought some groceries. However, we forgot the milk.",
                "Then, we forgot the milk. First, we went to the store. However, we bought some groceries.",
                "However, we went to the store first. Then, we bought some groceries.",
                "Then, we went to the store first. However, we forgot the milk."
              ],
              correct: 0,
              explanation: "La respuesta correcta es: First, we went to the store. Then, we bought some groceries. However, we forgot the milk. Los conectores deben seguir el orden lógico de los eventos."
            },
            {
              q: "Complete the sentence I have a meeting ____ Monday morning.",
              options: [
                "In",
                "At",
                "On",
                "By"
              ],
              correct: 2,
              explanation: "La respuesta correcta es: On. Se usa 'on' con días de la semana y fechas específicas (on Monday, on Friday, etc.)."
            },
            {
              q: "Find the CORRECT sentence.",
              options: [
                "There is some apples on the table.",
                "Are there any apples on the table?",
                "There isn´t some milk in the fridge",
                "Is there some oranges in the box?"
              ],
              correct: 1,
              explanation: "La respuesta correcta es: Are there any apples on the table? Es la única oración gramaticalmente correcta según las reglas de 'some/any'."
            },
            {
              q: "Find the INCORRECT question.",
              options: [
                "Why do you study in the library?",
                "When she takes her last exam?",
                "Who is your brother?",
                "Where does he live?"
              ],
              correct: 1,
              explanation: "La respuesta correcta es: When she takes her last exam? Debería ser: When does she take her last exam? (falta el auxiliar 'does' con la tercera persona singular)."
            },
            {
              q: "What is the correct question to express quantity?",
              options: [
                "How apples do you buy in the supermarket?",
                "How much apples do you buy in the supermarket?",
                "How many apples do you buy in the supermarket?",
                "How often apples do you buy in the supermarket?"
              ],
              correct: 2,
              explanation: "La respuesta correcta es: How many apples do you buy in the supermarket? Se usa 'how many' para sustantivos contables."
            },
            {
              q: "What is the most appropriate connector for adding information?",
              options: [
                "Although",
                "Besides",
                "Instead",
                "Therefore"
              ],
              correct: 1,
              explanation: "La respuesta correcta es: Besides. 'Besides' es un conector que añade información adicional, mientras que 'although' indica contraste, 'instead' indica alternativa y 'therefore' indica consecuencia."
            },
            {
              q: "Which of these words is a possessive pronoun?",
              options: [
                "Me",
                "She",
                "Their",
                "Theirs"
              ],
              correct: 3,
              explanation: "La respuesta correcta es: Theirs. Los pronombres posesivos son: mine, yours, his, hers, ours, theirs. 'Their' es un determinante posesivo, no un pronombre."
            }
          ]
        },

        unidad3: {
      name: "Unidad 3: Exploring the past",
      questions: [
        {
          q: "Choose the correct preposition of place for this sentence: \"The cat is ______ the sofa.\"",
          options: [
            "On",
            "Between",
            "At",
            "next"
          ],
          correct: 0,
          explanation: "La respuesta correcta es: On. Se usa 'on' para indicar que algo está sobre una superficie."
        },
        {
          q: "Choose the correct question tag for this sentence: \"Let's go for a walk, __________?\"",
          options: [
            "did we",
            "shall we",
            "don't we",
            "haven't we"
          ],
          correct: 1,
          explanation: "La respuesta correcta es: shall we. Cuando se usa 'let's', el question tag es 'shall we'."
        },
        {
          q: "Choose the correct question tag. \"She didn't call you, ______?\"",
          options: [
            "did she",
            "will she",
            "does she",
            "has she"
          ],
          correct: 0,
          explanation: "La respuesta correcta es: did she. El verbo principal está en pasado (didn't), así que el question tag también debe estar en pasado."
        },
        {
          q: "Choose the correct sentence in the Past Simple tense.",
          options: [
            "We watch a great movie yesterday.",
            "She study for the exam last night.",
            "They played football in the park last week.",
            "He stops at the supermarket on his way home."
          ],
          correct: 2,
          explanation: "La respuesta correcta es: They played football in the park last week. Es la única oración correctamente conjugada en Past Simple."
        },
        {
          q: "Choose the correct sentence in the Past Simple tense.",
          options: [
            "She buyed a new dress last weekend.",
            "We ate lunch at 2 p.m. yesterday.",
            "He has seen that film before.",
            "They gived me a present for my birthday."
          ],
          correct: 1,
          explanation: "La respuesta correcta es: We ate lunch at 2 p.m. yesterday. Es la única oración con Past Simple correctamente formada."
        },
        {
          q: "Choose the correct sentence using the verb To Be in the past tense.",
          options: [
            "They wasn't at home last night.",
            "We was at the cinema.",
            "I was late for the meeting.",
            "She were very tired after work."
          ],
          correct: 2,
          explanation: "La respuesta correcta es: I was late for the meeting. Con el pronombre 'I', el verbo 'to be' en pasado es 'was'."
        },
        {
          q: "Choose the sentence that is NOT correct in the Past Continuous tense.",
          options: [
            "While I was walking home, I saw an accident.",
            "He was cooking when I called him.",
            "We were playing soccer at 6 p.m. yesterday.",
            "She were reading a book when I arrived."
          ],
          correct: 3,
          explanation: "La respuesta correcta es: She were reading a book when I arrived. Debería ser 'She was reading' (el pronombre 'she' requiere 'was', no 'were')."
        },
        {
          q: "Complete the sentence in the Present Perfect Simple tense: \"She __________ London several times.\"",
          options: [
            "have visit",
            "has visited",
            "have visited",
            "has visit"
          ],
          correct: 1,
          explanation: "La respuesta correcta es: has visited. Con la tercera persona singular ('she') se usa 'has' + verbo en participio pasado."
        },
        {
          q: "Complete the sentences using the Present Perfect and Past Simple tenses: \"She __________ Lilly yesterday, but she __________ her today.\"",
          options: [
            "seed / haven't seen",
            "has seen / saw",
            "saw / hasn't seen",
            "sees / hasn't seen"
          ],
          correct: 2,
          explanation: "La respuesta correcta es: saw / hasn't seen. 'Saw' (Past Simple) va con 'yesterday' y 'hasn't seen' (Present Perfect) va con 'today'."
        },
        {
          q: "Complete this sentence: \"When we were kids, we ______ cartoons every morning.\"",
          options: [
            "used to watch",
            "use to watched",
            "was used to watch",
            "using to watch"
          ],
          correct: 0,
          explanation: "La respuesta correcta es: used to watch. La estructura 'used to + verbo' se usa para expresar acciones habituales en el pasado."
        }
      ]
    },

    unidad4: {
      name: "Unidad 4: What's next?",
      questions: [
        {
          q: "Choose the correct form of the future simple: She _________you as soon as she arrives.",
          options: [
            "will called",
            "is calling",
            "calls",
            "will call"
          ],
          correct: 3,
          explanation: "El futuro simple se forma utilizando 'will' seguido de la forma base del verbo. Por lo tanto, 'will call' es la única opción correcta."
        },
        {
          q: "Choose the correct imperative sentence:",
          options: [
            "You must to turn left.",
            "Stop talking and listen carefully.",
            "You turning left now.",
            "Turns left quickly!"
          ],
          correct: 1,
          explanation: "El imperativo se forma con la forma base del verbo sin la partícula 'to' y sin sujeto explícito. 'Stop talking and listen carefully' es la única que cumple esta regla."
        },
        {
          q: "Choose the correct sentence using the future perfect tense:",
          options: [
            "I will have finished my homework before 6 PM.",
            "I finish my homework before 6 PM.",
            "I will finish my homework before 6 PM.",
            "I am finishing my homework before 6 PM."
          ],
          correct: 0,
          explanation: "La estructura correcta para el futuro perfecto es: Sujeto + will have + participio pasado. Se usa para hablar de una acción que estará terminada antes de un momento específico en el futuro."
        },
        {
          q: "Choose the correct superlative adjective to complete the sentence: That was ___________ movie I have ever seen!",
          options: [
            "Funnier",
            "the most funny",
            "the funniest",
            "funnier tan"
          ],
          correct: 2,
          explanation: "Para formar el superlativo de 'funny' (palabra de dos sílabas que termina en 'y'), se cambia la 'y' por 'i', se añade '-est' y se coloca 'the' delante. La forma correcta es 'the funniest'."
        },
        {
          q: "Complete the sentence with the correct comparative adjective: This hotel is __________ than the one we stayed in last year.",
          options: [
            "more expensive",
            "most expensive",
            "expensiver",
            "the more expensive"
          ],
          correct: 0,
          explanation: "Para adjetivos largos de dos o más sílabas (como 'expensive'), se debe añadir 'more' antes del adjetivo. Por lo tanto, 'more expensive' es la forma comparativa correcta."
        },
        {
          q: "Fill in the gap with the correct option to express purpose. This tool is useful ________ cutting paper.",
          options: [
            "In",
            "to",
            "for",
            "By"
          ],
          correct: 2,
          explanation: "Para expresar el propósito general o la función de un objeto cuando le sigue un verbo en gerundio (terminado en -ing), se debe utilizar 'for'. La estructura es: 'for + gerundio'."
        },
        {
          q: "Pick the correct preposition of movement to complete the sentence: She walked _________the bridge to get to the other side.",
          options: [
            "Off",
            "into",
            "through",
            "Across"
          ],
          correct: 3,
          explanation: "La preposición de movimiento 'across' significa ir 'al otro lado de' e indica un movimiento hacia el lado opuesto. Es la preposición correcta para cruzar un puente."
        },
        {
          q: "Select the correct sentence using the present simple for scheduled events:",
          options: [
            "The train leaves at 8 AM.",
            "The train is leaving at 8 AM.",
            "The train will leave at 8 AM.",
            "The train going to leave at 8 AM"
          ],
          correct: 0,
          explanation: "Para hablar de eventos programados en el futuro que siguen horarios fijos (como el transporte público), se debe emplear el presente simple. 'The train leaves at 8 AM' es la forma correcta."
        },
        {
          q: "Use the correct verb form to complete this sentence: I like_____________ my bills online",
          options: [
            "paying",
            "payed",
            "pay",
            "Pays"
          ],
          correct: 0,
          explanation: "Después del verbo 'like', se debe usar el gerundio (verbo terminado en '-ing'). Por lo tanto, 'paying' es la forma correcta."
        },
        {
          q: "Which of these is an irregular adjective?",
          options: [
            "Taller",
            "better",
            "happier",
            "Slower"
          ],
          correct: 1,
          explanation: "'Better' es la forma comparativa del adjetivo irregular 'good', que no sigue las reglas ortográficas habituales. Los demás son adjetivos regulares que simplemente añaden '-er' o '-ier'."
        }
      ]
    },

    unidad5: {
      name: "Unidad 5: What would you do if?",
      questions: [
        {
          q: "Choose the correct relative pronoun:",
          options: [
            "She has a friend which works in a hospital.",
            "She has a friend who works in a hospital.",
            "She has a friend where works in a hospital.",
            "She has a friend whose works in a hospital."
          ],
          correct: 1,
          explanation: "Según las reglas de las oraciones de relativo, el pronombre 'who' se utiliza exclusivamente para referirse a personas. Como 'friend' (amigo/a) es una persona, 'who' es el único pronombre relativo adecuado en este caso."
        },
        {
          q: "Choose the correct Second conditional sentence:",
          options: [
            "If I have a million dollars, I buy a big house.",
            "If I had a million dollars, I would buy a big house.",
            "If I has a million dollars, I bought a big house.",
            "If I had a million dollars, I buy a big house."
          ],
          correct: 1,
          explanation: "La estructura gramatical del Segundo Condicional (Second Conditional) se forma usando If + sujeto + past simple, would + verbo. Se usa para describir situaciones imaginarias o improbables. 'Had' es el pasado simple de 'have', y se acompaña correctamente de 'would buy'."
        },
        {
          q: "Choose the right answer below:",
          options: [
            "I can't buy this jacket because I don't have too much money.",
            "I can't buy this jacket because I don't have too many money.",
            "I can't buy this jacket because I don't have very much money.",
            "I can't buy this jacket because I don't have too money."
          ],
          correct: 0,
          explanation: "En inglés, 'too much' se utiliza con sustantivos incontables (uncountable nouns). Como 'money' (dinero) es un sustantivo incontable, 'too much' es la única forma gramaticalmente correcta. ('too many' se usaría solo para sustantivos contables en plural)."
        },
        {
          q: "Complete the sentence with the correct demonstrative:",
          options: [
            "This book on the table is mine.",
            "These book on the table is mine.",
            "Those book on the table is mine.",
            "Them book on the table is mine."
          ],
          correct: 0,
          explanation: "Los demostrativos deben concordar en número con el sustantivo al que acompañan. 'This' se utiliza para indicar objetos singulares. Puesto que 'book' está en singular, no se pueden usar 'these' ni 'those', ya que ambos se usan con plurales."
        },
        {
          q: "Find below the right relative pronoun:",
          options: [
            "I will never forget the day who I met my best friend.",
            "I will never forget the day which I met my best friend.",
            "I will never forget the day when I met my best friend.",
            "I will never forget the day where I met my best friend."
          ],
          correct: 2,
          explanation: "De acuerdo con las reglas de los pronombres relativos, 'when' se utiliza específicamente para referirse al tiempo o a un momento definido (en este caso, 'the day' o 'el día')."
        },
        {
          q: "Choose the correct sentence using 'too' and 'enough':",
          options: [
            "The dress is enough small for me.",
            "The dress is too small for me.",
            "The dress is small too for me.",
            "The dress is small enough for me."
          ],
          correct: 1,
          explanation: "Se utiliza la estructura 'too + adjetivo' (en este caso, 'too small') para indicar que algo es excesivo o supone un problema. La opción D sería correcta para expresar 'small enough', pero la respuesta más clara es 'too small'."
        },
        {
          q: "Choose the correct Third Conditional sentence:",
          options: [
            "If we had left earlier, we would have missed the flight.",
            "If we had left earlier, we wouldn't have missed the flight.",
            "If we left earlier, we wouldn't have missed the flight.",
            "If we would have left earlier, we wouldn't have missed the flight."
          ],
          correct: 1,
          explanation: "La estructura correcta del Tercer Condicional (Third Conditional) se forma con If + past perfect simple, would have + past participle. La opción B es la única que sigue esta regla al usar 'had left' (pasado perfecto) y 'wouldn't have missed' (would have + participio pasado) para hablar de una situación imaginaria en el pasado."
        },
        {
          q: "Choose the correct use of 'too many':",
          options: [
            "There are too many people in the room. We need more space.",
            "There are too much people in the room. We need more space.",
            "There are too people in the room. We need more space.",
            "There are many too people in the room. We need more space."
          ],
          correct: 0,
          explanation: "Para expresar una cantidad excesiva con sustantivos contables en plural (como es el caso de 'people'), se debe utilizar el cuantificador 'too many'. La opción B es incorrecta porque 'too much' se utiliza exclusivamente con sustantivos incontables."
        },
        {
          q: "Choose the correct sentence with -ed and -ing adjectives:",
          options: [
            "I was very frightened after watching that horror film.",
            "I was very frightening after watching that horror film.",
            "I was very frightened while watching that horror film.",
            "I am very frightened when watching that horror film."
          ],
          correct: 0,
          explanation: "Los adjetivos terminados en '-ed' se utilizan para describir cómo se siente una persona internamente (en este caso, asustada tras ver la película). Los adjetivos que terminan en '-ing' se usan para describir la cosa o situación externa que causa ese sentimiento. Por lo tanto, para referirse a la emoción del sujeto 'I', lo correcto es 'frightened'."
        },
        {
          q: "Choose the correct sentence using 'whose':",
          options: [
            "My grandparents, whose house is in the town, love gardening.",
            "My grandparents, that house is in the countryside, love gardening.",
            "My grandparents, whose house is in the countryside, love gardening.",
            "My grandparents, where house is in the countryside, love gardening."
          ],
          correct: 2,
          explanation: "El pronombre relativo 'whose' se emplea para indicar posesión, tanto para personas como para cosas (en este caso, se refiere a la casa que pertenece a los abuelos). Al tratarse de una oración de relativo explicativa (non-defining relative clause), esta información extra va correctamente enmarcada entre comas."
        }
      ]
    },

        unidad6: {
          name: "Unidad 6: Work smarter",
          questions: [
            {
              q: "Choose the correct passive form of the active sentence: \"The manager wrote the email\".",
              options: [
                "The email writes the manager.",
                "The email was written by the manager.",
                "The email is wrote by the manager.",
                "The email was writing by the manager."
              ],
              correct: 1,
              explanation: "Para formar la voz pasiva, el objeto de la oración activa ('the email') pasa a ser el sujeto. El verbo 'to be' debe ir en el mismo tiempo que el verbo principal activo (pasado simple: 'was'), seguido del participio pasado del verbo principal ('written'), y finalmente el agente introducido por la preposición 'by' ('by the manager')."
            },
            {
              q: "Choose the correct reported speech for the sentence: Sarah said: \"I called Mark yesterday\".",
              options: [
                "Sarah said that she had called Mark the previous day.",
                "Sarah said that she calls Mark yesterday.",
                "Sarah said that Mark called her yesterday.",
                "Sarah said that she was calling Mark the previous day."
              ],
              correct: 0,
              explanation: "Al pasar al estilo indirecto (Reported Speech) con un verbo introductorio en pasado ('said'), se aplica el backshift. El pasado simple ('called') cambia a pasado perfecto ('had called'). Además, las expresiones de tiempo también cambian; 'yesterday' se convierte en 'the previous day' o 'the day before'."
            },
            {
              q: "Choose the correct sentence using \"much\":",
              options: [
                "There are much people at the event.",
                "There is much information online.",
                "I have much friends on social media.",
                "Much companies use digital tools."
              ],
              correct: 1,
              explanation: "La palabra 'much' se utiliza para indicar una cantidad grande, pero exclusivamente con sustantivos incontables. 'Information' es incontable, mientras que 'people', 'friends' y 'companies' son contables y deberían usar 'many'."
            },
            {
              q: "The agent in the passive voice uses the preposition:",
              options: [
                "by",
                "for",
                "to",
                "All answers are incorrect"
              ],
              correct: 0,
              explanation: "En la voz pasiva, el sujeto que realiza la acción original se convierte en el complemento agente, el cual siempre se introduce con la preposición 'by'."
            },
            {
              q: "What is a quantifier?",
              options: [
                "A word that describes a noun",
                "A word that indicates quantity without an exact number",
                "A word that replaces a noun",
                "A word that shows possession"
              ],
              correct: 1,
              explanation: "Un cuantificador (quantifier) se define como una palabra que se utiliza para indicar la cantidad o porción de algo, pero sin dar una cifra numérica exacta."
            },
            {
              q: "Which of the following is an example of the Saxon genitive?",
              options: [
                "Maria's phone",
                "The phone of Maria",
                "The phone's Maria",
                "The Maria phone"
              ],
              correct: 0,
              explanation: "La regla general del genitivo sajón consiste en añadir \"'s\" al sustantivo que posee algo (el poseedor). Por lo tanto, 'Maria's phone' indica correctamente que el teléfono pertenece a María."
            },
            {
              q: "Which of these indefinite pronouns refer to people?",
              options: [
                "Something",
                "Anywhere",
                "Nobody",
                "Everything"
              ],
              correct: 2,
              explanation: "Los pronombres indefinidos que se refieren a personas son aquellos compuestos por some-, any-, no- o every- seguidos de -one o -body (como someone, anybody, nobody, everyone). 'Something' y 'Everything' se refieren a cosas, y 'Anywhere' se refiere a lugares."
            },
            {
              q: "Which quantifier is used with countable nouns?",
              options: [
                "Much",
                "Little",
                "Many",
                "A little"
              ],
              correct: 2,
              explanation: "La palabra 'many' se utiliza exclusivamente con sustantivos contables para indicar una cantidad grande. Las opciones 'much', 'little' y 'a little' se emplean con sustantivos incontables."
            },
            {
              q: "Which sentence correctly uses a modal verb?",
              options: [
                "She must to finish the report today.",
                "He can speaks three languages.",
                "You should take a break.",
                "They might goes to the party."
              ],
              correct: 2,
              explanation: "Los verbos modales no cambian su forma dependiendo del sujeto (no se les añade '-s' en la tercera persona) y siempre van seguidos por la forma base del verbo principal (infinitivo sin 'to'). La opción C es la única correcta; la opción A usa incorrectamente la partícula 'to', y las opciones B y D conjugan el verbo principal terminando en '-s' o '-es', lo cual es un error."
            },
            {
              q: "Which type of speech uses quotation marks (\"\")? ",
              options: [
                "Reported speech",
                "Direct speech",
                "Indirect speech",
                "All answers are correct"
              ],
              correct: 1,
              explanation: "El estilo directo (Direct speech) es aquel en el que reproducimos las palabras literales que alguien ha dicho utilizando comillas (quotation marks). El estilo indirecto (Reported/Indirect speech) cuenta lo dicho sin reproducir las palabras exactas y sin comillas."
            }
          ]
        }
      }
    },
    
    asignatura2: {
      name: "Ampliación y planificación de empresas",
      description: "Tests de Ampliación y planificación de empresas",
      exams: {
        semestral: {
          name: "Prueba Semestral",
          questions: [
            {
              q: "AUN NO TENEMOS PREGUNTAS:",
              options: [
                "AUN NO TENEMOS PREGUNTAS",
                "AUN NO TENEMOS PREGUNTAS",
                "AUN NO TENEMOS PREGUNTAS",
                "AUN NO TENEMOS PREGUNTAS"
              ],
              correct: 0,
              explanation: "AUN NO TENEMOS PREGUNTAS."
            }
          ]
        },

        unidad1: {
          name: "Unidad 1: Economía y administración | nociones básicas de economía",
          questions: [
            {
              q: "¿Cuál de las siguientes no es una característica del préstamo hipotecario?",
              options: [
                "La cuantía concedida dependerá del valor de la vivienda",
                "Habitualmente la cuantía concedida no superará el 80% del valor de tasación",
                "Su plazo máximo de amortización no suele exceder de 8 años",
                "Suele utilizarse para la compra de bienes inmuebles"
              ],
              correct: 2,
              explanation: "El plazo máximo de amortización de un préstamo hipotecario suele exceder ampliamente los 8 años, normalmente oscila entre 15 y 30 años. Las otras opciones sí son características del préstamo hipotecario."
            },
            {
              q: "¿Cuál de los siguientes es un agente que actúa en la economía?",
              options: [
                "Familias",
                "Empresas",
                "Estado",
                "Todas son correctas"
              ],
              correct: 3,
              explanation: "Familias, empresas y estado son los tres agentes económicos principales que participan en la economía de mercado."
            },
            {
              q: "¿En qué se basa la decisión que se toma para cubrir necesidades?",
              options: [
                "En un impulso",
                "En una comparativa",
                "En una encuesta",
                "En una imitación de lo que hace la sociedad"
              ],
              correct: 1,
              explanation: "Las decisiones racionales para cubrir necesidades se basan en una comparativa entre opciones disponibles, considerando beneficios, costes y disponibilidad de recursos."
            },
            {
              q: "Cuando se toma una decisión, los costes del pasado que no deben influir en la decisión futura se denominan:",
              options: [
                "El coste operacional",
                "El coste duplicado",
                "El coste irrecuperable",
                "El coste de ahorro"
              ],
              correct: 2,
              explanation: "Los costes irrecuperables son gastos pasados que ya se han realizado y no pueden recuperarse, por lo que no deben considerarse al tomar decisiones futuras."
            },
            {
              q: "El coste total de un préstamo será la suma de:",
              options: [
                "Capital inicial e intereses",
                "Interés fijo e interés variable",
                "Nominal, amortización, comisiones y tasas",
                "Nominal, intereses, comisiones y gastos"
              ],
              correct: 3,
              explanation: "El coste total de un préstamo incluye el importe nominal solicitado, más los intereses generados, más las comisiones del banco y los gastos asociados (tasación, seguros, etc.)."
            },
            {
              q: "El presupuesto familiar se compone de:",
              options: [
                "Gastos fijos",
                "Gastos corrientes",
                "Gastos ocasionales",
                "Todas son correctas"
              ],
              correct: 3,
              explanation: "Un presupuesto familiar integra gastos fijos (hipoteca, servicios), gastos corrientes (alimentación, transporte) y gastos ocasionales (reparaciones, ocio), junto con los ingresos."
            },
            {
              q: "La capacidad de endeudamiento:",
              options: [
                "Será como máximo del 35% de los ingresos netos",
                "Será como máximo del 45% de los ingresos netos",
                "Es equivalente al límite de endeudamiento",
                "Es el total de los ingresos netos"
              ],
              correct: 0,
              explanation: "La capacidad de endeudamiento recomendada es como máximo del 35% de los ingresos netos mensuales para mantener una situación financiera saludable."
            },
            {
              q: "La cuantía recomendada para el fondo de emergencia es aquella que permite mantener todos los gastos durante:",
              options: [
                "6 meses",
                "3 meses",
                "12 meses",
                "Toda la vida del individuo"
              ],
              correct: 0,
              explanation: "Se recomienda tener un fondo de emergencia que cubra entre 3 y 6 meses de gastos, siendo 6 meses el nivel más conservador y seguro para afrontar imprevistos."
            },
            {
              q: "Las tarjetas revolving:",
              options: [
                "Son las que emiten las empresas comerciales",
                "Se consideran una deuda eterna",
                "Realizan el cargo de manera inmediata en la cuenta bancaria",
                "Todas son correctas"
              ],
              correct: 1,
              explanation: "Las tarjetas revolving generan intereses muy altos sobre el saldo pendiente, lo que puede convertirlas en una deuda prácticamente eterna si solo se pagan los intereses mínimos."
            },
            {
              q: "Renunciar a consumir hoy para consumir más en el futuro, ¿a qué concepto hace referencia?",
              options: [
                "Consumo",
                "Financiación",
                "Planificación",
                "Ahorro"
              ],
              correct: 3,
              explanation: "El ahorro es el acto de renunciar al consumo presente para acumular recursos y poder consumir más en el futuro, generando riqueza y seguridad económica."
            }
          ]
        },

        unidad2: {
          name: "Unidad 2: El sistema fiscal",
          questions: [
            {
              q: "¿Cómo se crea valor en un producto?",
              options: [
                "Incrementando la cuota de mercado",
                "Mediante una buena cadena de proveedores en el aprovisionamiento",
                "Utilizando nuevas tecnologías y personal de élite",
                "Añadiéndole utilidad para que satisfaga necesidades"
              ],
              correct: 3,
              explanation: "El valor se crea en un producto añadiéndole utilidad, es decir, haciéndolo capaz de satisfacer necesidades o deseos de los consumidores de forma más efectiva."
            },
            {
              q: "¿Qué tipo de tributo es aquel que no conlleva contraprestación directa y que se dedica a la financiación general del gasto público?",
              options: [
                "Impuestos",
                "Contribuciones especiales",
                "Tasas",
                "Sablazos"
              ],
              correct: 0,
              explanation: "Los impuestos son tributos que no exigen contraprestación directa y se destinan a financiar el gasto público general del Estado."
            },
            {
              q: "Cuando el vendedor quiere dejar constancia de la oferta de un determinado bien o servicio y sus condiciones de entrega, utilizará:",
              options: [
                "La factura",
                "El presupuesto",
                "El albarán",
                "El pedido"
              ],
              correct: 1,
              explanation: "El presupuesto es el documento que el vendedor presenta para dejar constancia de su oferta, especificando el bien o servicio, cantidad, precio y condiciones de entrega."
            },
            {
              q: "El documento formal que incorpora una orden de pago, por la que una persona ordena pagar una determinada cantidad de dinero al poseedor de esta a su vencimiento:",
              options: [
                "Cheque",
                "Letra de cambio",
                "Recibo normalizado",
                "Transferencia bancaria"
              ],
              correct: 1,
              explanation: "La letra de cambio es un documento mercantil que contiene una orden incondicional de pago de una cantidad determinada, en una fecha convenida, al tenedor del documento."
            },
            {
              q: "El documento que recoge los cobros y pagos que tiene previstos la empresa, en base a las operaciones que va a realizar a corto plazo, se denomina:",
              options: [
                "Plan de marketing",
                "Plan de tesorería",
                "Plan contable",
                "Sistema tributario"
              ],
              correct: 1,
              explanation: "El plan de tesorería es un documento que proyecta los cobros y pagos previstos de la empresa a corto plazo, permitiendo gestionar la liquidez financiera."
            },
            {
              q: "El Estado puede conseguir los ingresos públicos de:",
              options: [
                "Las donaciones y la deuda pública",
                "La extracción o expropiación",
                "Los ingresos contractuales",
                "Todas son correctas"
              ],
              correct: 3,
              explanation: "El Estado obtiene ingresos públicos de múltiples fuentes: tributos, donaciones, deuda pública, expropiaciones e ingresos por servicios contractuales."
            },
            {
              q: "El impuesto que se encarga de gravar el consumo es:",
              options: [
                "El IVA",
                "El IRPF",
                "El Impuesto sobre Sociedades",
                "La declaración censal"
              ],
              correct: 0,
              explanation: "El IVA (Impuesto sobre el Valor Añadido) es el tributo directo que grava el consumo de bienes y servicios en cada fase de la cadena de distribución."
            },
            {
              q: "El impuesto que se encarga de gravar las rentas de cada persona física es:",
              options: [
                "El IVA",
                "El IRPF",
                "El Impuesto sobre Sociedades",
                "La declaración censal"
              ],
              correct: 1,
              explanation: "El IRPF (Impuesto sobre la Renta de las Personas Físicas) grava los ingresos y rentas obtenidas por personas físicas procedentes del trabajo, capital o actividades económicas."
            },
            {
              q: "La base liquidable del IRPF es:",
              options: [
                "Igual a la base imponible",
                "La parte que queda exenta de la aplicación del tributo",
                "La cantidad que finalmente es sometida al gravamen",
                "El tipo impositivo progresivo"
              ],
              correct: 2,
              explanation: "La base liquidable del IRPF es la cantidad que finalmente se somete al tipo de gravamen después de restar de la base imponible las reducciones y deducciones aplicables."
            },
            {
              q: "Según el análisis PESTEL, el factor ecológico del macroentorno hace referencia a:",
              options: [
                "Inflación, política monetaria, desempleo",
                "Demografía, educación, estilo de vida",
                "Contabilidad, legislación, salubridad",
                "Energía, concienciación ambiental, restricción de emisiones"
              ],
              correct: 3,
              explanation: "En PESTEL, el factor ecológico (E) analiza aspectos ambientales como el consumo energético, la conciencia ambiental de los consumidores y las restricciones en emisiones de CO2."
            }
          ]
        },

        unidad3: {
          name: "Unidad 3: Concepto de marketing y análisis de mercado",
          questions: [
            {
              q: "¿Cuál de las siguientes no es una orientación para la actividad comercial según el enfoque del marketing?",
              options: [
                "Orientación hacia el producto",
                "Orientación hacia las ventas",
                "Orientación hacia el cliente o consumidor",
                "Orientación hacia la innovación tecnológica"
              ],
              correct: 3,
              explanation: "Las orientaciones principales del marketing son: hacia el producto, hacia las ventas y hacia el cliente/consumidor. La innovación tecnológica no es una orientación básica del marketing."
            },
            {
              q: "¿Cuál de los siguientes elementos no pertenece al concepto de mercado?",
              options: [
                "Beneficios obtenidos por la empresa",
                "Conjunto de individuos con necesidades",
                "Recursos y capacidad de compra",
                "Lugar de intercambio comercial"
              ],
              correct: 0,
              explanation: "El mercado está compuesto por individuos con necesidades, recursos y capacidad de compra en un lugar de intercambio. Los beneficios no son un elemento constitutivo del mercado."
            },
            {
              q: "¿Cuál es el objetivo principal del marketing relacional?",
              options: [
                "Incrementar las ventas a corto plazo",
                "Mantener una relación significativa a largo plazo con el público objetivo",
                "Realizar promociones y descuentos",
                "Atraer nuevos clientes a través de la publicidad masiva"
              ],
              correct: 1,
              explanation: "El marketing relacional se enfoca en construir y mantener relaciones duraderas y significativas con los clientes a lo largo del tiempo, buscando lealtad y retención."
            },
            {
              q: "¿Cuál es la definición más completa de marketing?",
              options: [
                "El proceso de ventas de productos y servicios",
                "El estudio de competencia y comportamiento del consumidor",
                "La actividad de publicidad y análisis de mercado",
                "La planificación y ejecución de la concepción del producto, fijación de precios, promoción y distribución de ideas, bienes y servicios para crear relaciones de intercambio que satisfagan objetivos individuales y organizacionales"
              ],
              correct: 3,
              explanation: "El marketing es un proceso integral que incluye la concepción del producto, fijación de precios, promoción, distribución y creación de relaciones de intercambio benéficas."
            },
            {
              q: "¿Cuál es la principal diferencia entre marketing estratégico y marketing operativo?",
              options: [
                "El marketing estratégico se centra en el corto plazo, mientras que el operativo se centra en el largo plazo",
                "El marketing estratégico se ocupa de la implementación de acciones, mientras que el operativo se ocupa del análisis de necesidades",
                "El marketing estratégico se ocupa de la publicidad, mientras que el marketing operativo se centra en las ventas",
                "El marketing estratégico se centra en el análisis continuo y la identificación de necesidades del público objetivo, mientras que el marketing operativo se focaliza en la puesta en marcha de medidas para aprovechar oportunidades"
              ],
              correct: 3,
              explanation: "El marketing estratégico analiza el mercado y define objetivos a largo plazo, mientras que el marketing operativo ejecuta las acciones y tácticas para implementar la estrategia."
            },
            {
              q: "¿Cuáles son las funciones del marketing en la empresa?",
              options: [
                "Funciones de producción y funciones de comercialización",
                "Funciones de dirección y gestión y funciones de acción",
                "Funciones de evaluación del mercado",
                "Funciones de análisis y funciones de planificación y decisión"
              ],
              correct: 3,
              explanation: "Las funciones clave del marketing son: análisis (investigación de mercado, comportamiento del consumidor) y planificación/decisión (estrategia, objetivos, tácticas)."
            },
            {
              q: "¿Qué caracteriza al marketing emocional?",
              options: [
                "La segmentación del mercado basada en datos demográficos",
                "El uso intensivo de técnicas de venta agresivas",
                "La implementación de estrategias de precios competitivos",
                "La creación de una conexión emocional entre el producto y el consumidor"
              ],
              correct: 3,
              explanation: "El marketing emocional busca generar una conexión emocional fuerte entre el consumidor y el producto o marca, apelando a sentimientos y valores."
            },
            {
              q: "¿Qué enfoque de marketing se centra en la anticipación de problemas y necesidades futuras del mercado?",
              options: [
                "Orientación hacia el producto",
                "Orientación hacia las ventas",
                "Orientación hacia la competencia",
                "Orientación hacia el mercado"
              ],
              correct: 3,
              explanation: "La orientación hacia el mercado implica escuchar continuamente al consumidor, anticipar sus necesidades futuras y adaptar la oferta de la empresa proactivamente."
            },
            {
              q: "¿Qué es el Producto Mínimo Viable (PMV) en el contexto del método Lean Startup?",
              options: [
                "Una versión de prueba del producto con características básicas necesarias para satisfacer las necesidades de los clientes",
                "Un producto final completo",
                "Un concepto teórico sin implementación real",
                "Un plan de marketing detallado"
              ],
              correct: 0,
              explanation: "El PMV es una versión simplificada del producto con solo las características esenciales, diseñada para validar la idea con clientes reales y realizar aprendizajes rápidos."
            },
            {
              q: "El marketing interno se refiere a:",
              options: [
                "Las acciones del marketing dentro de la organización dirigidas a sus propios integrantes",
                "Las estrategias de comunicación de la empresa hacia su público objetivo",
                "La publicidad realizada dentro del país de origen de la empresa",
                "Las ventas directas a los empleados de la empresa"
              ],
              correct: 0,
              explanation: "El marketing interno incluye acciones de comunicación y motivación dirigidas a los empleados para alinearlos con los objetivos y valores de la empresa."
            }
          ]
        },

        unidad4: {
          name: "Unidad 4: Plan de Marketing",
          questions: [
            {
              q: "¿Cuál de las siguientes NO es una estrategia según la ventaja competitiva?",
              options: [
                "Estrategia de costes",
                "Estrategia de diferenciación",
                "Estrategia de enfoque",
                "Estrategia de diversificación"
              ],
              correct: 3,
              explanation: "Las estrategias genéricas de ventaja competitiva según Michael Porter son: costes, diferenciación y enfoque. La diversificación no es una estrategia de ventaja competitiva."
            },
            {
              q: "¿Cuál de los siguientes no es un criterio para clasificar los datos en el análisis de mercado?",
              options: [
                "Por su naturaleza",
                "Por su ubicación",
                "Por su fuente",
                "Por su costo"
              ],
              correct: 3,
              explanation: "Los datos se clasifican por su naturaleza (cualitativos/cuantitativos), por su fuente (primarios/secundarios) y por su ubicación (internos/externos), no por su costo."
            },
            {
              q: "¿Cuál es la primera fase en el proceso de análisis de mercados?",
              options: [
                "Análisis de la información",
                "Búsqueda y obtención de la información",
                "Planteamiento de la investigación",
                "Obtención y presentación de resultados"
              ],
              correct: 2,
              explanation: "La primera fase es el planteamiento de la investigación, donde se definen objetivos, variables y la metodología a seguir en el análisis de mercado."
            },
            {
              q: "¿Cuál es la principal herramienta del marketing estratégico?",
              options: [
                "Análisis DAFO",
                "Plan de marketing",
                "Investigación de mercado",
                "Estrategia de precios"
              ],
              correct: 1,
              explanation: "El plan de marketing es la herramienta principal que integra el análisis DAFO, la investigación de mercado y define las estrategias y acciones a ejecutar."
            },
            {
              q: "¿Qué análisis no forma parte del análisis de la situación en el plan de marketing?",
              options: [
                "Análisis de la demanda",
                "Análisis de la competencia",
                "Análisis del producto",
                "Análisis interno de la empresa"
              ],
              correct: 2,
              explanation: "El análisis de la situación incluye: análisis de la demanda, competencia e interno de la empresa. El análisis del producto forma parte de la definición estratégica, no de la situación."
            },
            {
              q: "¿Qué apartado del plan de marketing se enfoca en definir las metas comerciales a medio y largo plazo?",
              options: [
                "Análisis de la situación",
                "Evaluación y control",
                "Definición estratégica",
                "Implantación de la estrategia"
              ],
              correct: 2,
              explanation: "La definición estratégica es el apartado donde se establecen los objetivos comerciales a medio y largo plazo, así como las estrategias para alcanzarlos."
            },
            {
              q: "¿Qué herramienta permite analizar las debilidades, amenazas, fortalezas y oportunidades de una empresa?",
              options: [
                "Análisis PEST",
                "Análisis DAFO",
                "Investigación de mercado",
                "Matriz de crecimiento"
              ],
              correct: 1,
              explanation: "El análisis DAFO (Debilidades, Amenazas, Fortalezas, Oportunidades) es la herramienta que integra el análisis interno y externo de la empresa."
            },
            {
              q: "¿Qué política del marketing mix se relaciona con la forma y el lugar en el que los bienes y servicios se ponen a disposición del público?",
              options: [
                "Política de precio",
                "Política de producto",
                "Política de distribución",
                "Política de comunicación"
              ],
              correct: 2,
              explanation: "La política de distribución (Place) define cómo, dónde y cuándo los consumidores acceden a los productos o servicios."
            },
            {
              q: "El informe final de la investigación:",
              options: [
                "Tendrá un carácter formal, público y subjetivo",
                "Es un vídeo de presentación",
                "Se centra en clasificar las opiniones que se hayan obtenido y valorarlas en base a los criterios",
                "Debe ser ordenado, preciso, objetivo y confidencial"
              ],
              correct: 3,
              explanation: "El informe debe tener carácter formal, privado/confidencial, ser objetivo basándose en datos, estar bien estructurado y ser preciso en sus conclusiones."
            },
            {
              q: "La política de comunicación:",
              options: [
                "Se relaciona con la forma y el lugar en el que los bienes y servicios se ponen a disposición del público",
                "Tiene como fin informar, recordar y persuadir a los consumidores potenciales",
                "Es sinónimo de hacer publicidad",
                "Permite determinar las secciones del mercado más afines y adecuadas"
              ],
              correct: 1,
              explanation: "La política de comunicación (Promotion) busca informar sobre el producto, recordar su existencia y persuadir a través de publicidad, relations públicas y promociones."
            }
          ]
        },

        unidad5: {
          name: "Unidad 5: Los Recursos Humanos en la empresa",
          questions: [
            {
              q: "Al responsable de recursos humanos se le presuponen varias habilidades, entre ellas:",
              options: [
                "Tener motivación y ser capaz de trasmitirla al equipo",
                "Comunicar efectivamente",
                "Ser resolutivo y determinado en la toma de decisiones",
                "Todas son correctas"
              ],
              correct: 3,
              explanation: "El responsable de RRHH debe poseer múltiples habilidades: liderazgo y motivación, comunicación efectiva, capacidad de decisión, entre otras."
            },
            {
              q: "Calcular las nóminas y realizar el pago a los trabajadores se ubica dentro de la siguiente función:",
              options: [
                "Función de empleo",
                "Función de administración del personal",
                "Función de retribución o contraprestación de servicios",
                "Función de desarrollo y servicios sociales"
              ],
              correct: 2,
              explanation: "La función de retribución o contraprestación de servicios incluye todas las acciones relacionadas con la compensación al trabajador: nóminas, beneficios sociales, etc."
            },
            {
              q: "El modelo de gestión por competencias forma parte de los:",
              options: [
                "Modelos tradicionales",
                "Modelos actuales",
                "Modelos históricos",
                "Ninguna es correcta"
              ],
              correct: 1,
              explanation: "La gestión por competencias es un enfoque moderno que evalúa a los trabajadores según sus capacidades, habilidades y conocimientos específicos, no solo su experiencia."
            },
            {
              q: "El plan de actuación, para que el personal esté ajustado tanto cuantitativa como cualitativamente a los objetivos que se hayan planteado en la previsión previa, incluirá:",
              options: [
                "Prioridades y temporalización",
                "Asignación de presupuestos",
                "Responsabilidades",
                "Todas son correctas"
              ],
              correct: 3,
              explanation: "El plan de actuación debe especificar qué acciones se realizarán, cuándo, quién es responsable de cada una y cuál es el presupuesto asignado."
            },
            {
              q: "La función de desarrollo y servicios sociales del departamento de RRHH se encarga de:",
              options: [
                "Proveer a la empresa de personal",
                "La gestión burocrática de contratos, justificantes, bajas, etc.",
                "Motivación, satisfacción y correcto desempeño en el puesto",
                "Nóminas y realización del pago a los trabajadores"
              ],
              correct: 2,
              explanation: "Esta función busca mejorar las condiciones de trabajo, motivación y bienestar de los empleados, promoviendo su desarrollo profesional y personal."
            },
            {
              q: "La metodología de análisis de puestos de trabajo en la que el empleado que desempeña el puesto responde a un test sobre sus funciones y tareas, se denomina:",
              options: [
                "Observación directa",
                "Cuestionarios",
                "Entrevista",
                "Diarios de trabajo"
              ],
              correct: 1,
              explanation: "Los cuestionarios son instrumentos estandarizados donde los trabajadores registran por escrito información sobre sus tareas y funciones de manera estructurada."
            },
            {
              q: "La metodología de análisis de puestos de trabajo en la que los empleados registran cada jornada sus tareas, el tiempo dedicado a ellas, las personas a las que dan feedback de su trabajo y todas las observaciones que consideren relevantes, se denomina:",
              options: [
                "Observación directa",
                "Cuestionarios",
                "Entrevista",
                "Diarios de trabajo"
              ],
              correct: 3,
              explanation: "Los diarios de trabajo permiten recopilar información detallada y continua sobre las actividades diarias, tiempos y observaciones relevantes de cada puesto."
            },
            {
              q: "Los grupos profesionales se definen por:",
              options: [
                "Las características del trabajador",
                "La titulación del trabajador",
                "Las aptitudes del trabajador",
                "Todas son correctas"
              ],
              correct: 3,
              explanation: "Los grupos profesionales consideran múltiples factores: características personales, titulación académica, experiencia y aptitudes específicas de cada trabajador."
            },
            {
              q: "Para la planificación de los recursos humanos:",
              options: [
                "Es necesario plantear constantes aumentos de personal",
                "Se marcan objetivos logísticos y estratégicos",
                "Las desviaciones tienen siempre motivos extraordinarios",
                "Todas son correctas"
              ],
              correct: 1,
              explanation: "La planificación de RRHH establece objetivos tanto operativos (logísticos) como estratégicos, alineándose con los objetivos generales de la empresa."
            },
            {
              q: "Una organización informal:",
              options: [
                "Es aquella donde la estructura organizativa la define la dirección y se refleja en un organigrama con los puestos de trabajo, relaciones jerárquicas y funciones",
                "Es aquella donde la estructura organizativa está conformada según las relaciones personales que surgen de forma natural entre los trabajadores",
                "Es aquella que procura que su estructura esté en todo momento provista de personal, en sentido tanto cuantitativo como cualitativo",
                "Es aquella que impulsa la transformación digital implicando a todos los integrantes en el uso de la tecnología para fomentar un ecosistema abierto y digitalizado"
              ],
              correct: 1,
              explanation: "La organización informal es aquella que surge naturalmente de las relaciones interpersonales entre los trabajadores, sin estar planificada por la dirección."
            }
          ]
        },

        unidad6: {
          name: "Unidad 6: Liderazgo y Motivación",
          questions: [
            {
              q: "A las personas que, sin haber sido dotadas de autoridad, tienen la capacidad de influenciar sobre los demás por su carisma y personalidad, se les denomina:",
              options: [
                "Líderes",
                "Directores",
                "Jefes",
                "Mandos"
              ],
              correct: 0,
              explanation: "Los líderes son personas con capacidad natural de influencia y carisma, sin necesidad de autoridad formal. Se diferencian de los jefes y directores que tienen autoridad delegada."
            },
            {
              q: "¿Cuál de las siguientes es una tendencia actual relativa a la comunicación interna?",
              options: [
                "Motor de digitalización",
                "Employer Branding",
                "Apps internas",
                "Todas son correctas"
              ],
              correct: 3,
              explanation: "Las tendencias actuales en comunicación interna incluyen la transformación digital, el employer branding (marca empleadora) y el uso de aplicaciones internas para mejorar la conexión con empleados."
            },
            {
              q: "El estilo de liderazgo en el que el líder interviene solo cuando lo cree conveniente, dejando máxima libertad a sus empleados y controlando lo mínimo imprescindible, se denomina:",
              options: [
                "Liderazgo laissez faire",
                "Liderazgo democrático",
                "Liderazgo paternalista",
                "Liderazgo visionario"
              ],
              correct: 0,
              explanation: "El liderazgo laissez faire se caracteriza por baja intervención, máxima autonomía del equipo y mínimo control, confiando en la responsabilidad de los empleados."
            },
            {
              q: "El estilo de liderazgo en el que el líder tiene claro dónde quiere ir e intenta que el equipo visualice su meta y la comparta, se denomina:",
              options: [
                "Liderazgo laissez faire",
                "Liderazgo democrático",
                "Liderazgo paternalista",
                "Liderazgo visionario"
              ],
              correct: 3,
              explanation: "El liderazgo visionario inspira al equipo con una visión clara del futuro, comunicando objetivos aspiracionales y motivando a trabajar conjuntamente hacia esa meta."
            },
            {
              q: "El enfoque de liderazgo que defiende que la efectividad del liderazgo depende de la naturaleza de la circunstancia en la que se ejerza, lo conocemos como:",
              options: [
                "Enfoque situacional",
                "Enfoque funcional",
                "Enfoque empírico",
                "Ninguna es correcta"
              ],
              correct: 0,
              explanation: "El enfoque situacional propone que no existe un único estilo de liderazgo efectivo, sino que depende del contexto, el equipo y la situación específica."
            },
            {
              q: "Según la teoría de Herzberg, las variables que por sí mismas no producen motivación, pero cuya ausencia sí produce insatisfacción, se conocen como:",
              options: [
                "Factores motivacionales",
                "Factores higiénicos",
                "Factores laborales",
                "Factores de afiliación"
              ],
              correct: 1,
              explanation: "Los factores higiénicos (salario, condiciones de trabajo, seguridad) no motivan por sí solos, pero su ausencia crea insatisfacción e inconformidad."
            },
            {
              q: "La teoría que describe el estilo de liderazgo mediante la identificación de cinco niveles que mezclan diferentes rangos de preocupación por las personas y las tareas, se denomina:",
              options: [
                "Teoría del gran hombre o de rasgos",
                "Teoría X e Y de McGregor",
                "Teoría de Boyatzis y McKee",
                "Teoría de la malla gerencial de Blake y Mouton"
              ],
              correct: 3,
              explanation: "La teoría de la malla gerencial de Blake y Mouton presenta una matriz con dos dimensiones: preocupación por la producción (tareas) y preocupación por las personas, con distintos estilos."
            },
            {
              q: "Este autor diseñó una pirámide de necesidades en la que las necesidades expuestas en la base eran de supervivencia y, a medida que se ascendía, se desarrollaban nociones relativas al crecimiento personal y social del individuo:",
              options: [
                "Abraham Maslow",
                "McClelland",
                "Herzberg",
                "McGregor"
              ],
              correct: 0,
              explanation: "Abraham Maslow desarrolló la pirámide de necesidades que va desde necesidades fisiológicas hasta autorrealización, mostrando la jerarquía de motivaciones humanas."
            },
            {
              q: "Las habilidades interpersonales, también conocidas como habilidades ________,se refieren a la capacidad de una persona para interactuar de manera efectiva con los demás:",
              options: [
                "Duras",
                "Ásperas",
                "Blandas",
                "Opacas"
              ],
              correct: 2,
              explanation: "Las habilidades blandas o soft skills incluyen comunicación, empatía, trabajo en equipo y liderazgo, esenciales para interacciones interpersonales efectivas."
            },
            {
              q: "La capacidad de comprender y compartir los sentimientos de otros se denomina:",
              options: [
                "Comunicación efectiva",
                "Empatía",
                "Resolución de conflictos",
                "Adaptabilidad"
              ],
              correct: 1,
              explanation: "La empatía es la capacidad de ponerse en el lugar del otro, entender sus emociones y perspectivas, fundamental para relaciones interpersonales saludables."
            }
          ]
        }
      }
    },
    
    asignatura3: {
      name: "Programación",
      description: "Tests de Programación - 15 Unidades",
      exams: {
        semestral: {
          name: "Prueba Semestral",
          questions: [
            {
              q: "AUN NO TENEMOS PREGUNTAS:",
              options: [
                "AUN NO TENEMOS PREGUNTAS",
                "AUN NO TENEMOS PREGUNTAS",
                "AUN NO TENEMOS PREGUNTAS",
                "AUN NO TENEMOS PREGUNTAS"
              ],
              correct: 0,
              explanation: "AUN NO TENEMOS PREGUNTAS."
            }
          ]
        },

        unidad1: {
          name: "Unidad 1: Introducción a la programación",
          questions: [
  {
    q: "Acoplamiento patológico:",
    options: [
      "Se produce siempre que entre dos o más módulos se usen las mismas fuentes externas de datos.",
      "Se produce siempre que los módulos usen los mismos datos globales.",
      "Se produce siempre que un módulo acceda a otro para leer o modificar los datos internos del último.",
      "Todas las anteriores son correctas."
    ],
    correct: 2,
    explanation: "La respuesta correcta es la C. Se produce siempre que un módulo acceda a otro para leer o modificar los datos internos del último.\nSegún el material de estudio, concretamente en el apartado dedicado a la cohesión y el acoplamiento dentro de la programación modular, el acoplamiento patológico o por contenido se define explícitamente como aquel que \"se produce siempre que un módulo acceda a otro para leer o modificar los datos internos del último\".\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es falsa, ya que describe el acoplamiento externo, el cual ocurre cuando dos o más módulos usan las mismas fuentes externas de datos.\nLa opción B es falsa, debido a que define el acoplamiento global, que se da siempre que los módulos usan los mismos datos globales.\nAl ser únicamente correcta la C para el término consultado, la opción D también es incorrecta."
  },
  {
    q: "Dentro de la simbología de los diagramas de flujo cuál de estas afirmaciones es falsa:",
    options: [
      "Las operaciones deben seguir un orden indicado con flechas.",
      "Las decisiones se indican en un rombo.",
      "Las operaciones se describen con una bandera.",
      "Empiezan y terminan con un óvalo."
    ],
    correct: 2,
    explanation: "La respuesta correcta es la C. Las operaciones de cálculo interno del programa se describen con una bandera.\nEsta afirmación es la falsa porque, según el material de estudio correspondiente a la simbología de los diagramas de flujo, \"las operaciones de cálculo interno del programa se describen con un rectángulo\", no con una bandera.\nA modo de aclaración:\nLa opción A es verdadera.\nLa opción B es verdadera.\nLa opción D es verdadera."
  },
  {
    q: "El valor Booleano:",
    options: [
      "Es numérico.",
      "Es secuencial.",
      "Es modular.",
      "Ninguna de las anteriores."
    ],
    correct: 3,
    explanation: "La respuesta correcta es la D. Ninguna de las anteriores.\nSegún el material de estudio, un valor Booleano se define como un tipo con dos valores: verdadero o falso.\nAclaraciones:\nLa opción A es falsa.\nLa opción B es falsa.\nLa opción C es falsa."
  },
  {
    q: "En la cohesión comunicacional:",
    options: [
      "Una sola tarea definida.",
      "Salida coincide con entrada.",
      "Actividades paralelas con mismos datos.",
      "Ninguna."
    ],
    correct: 2,
    explanation: "La respuesta correcta es la C. Conviven varias actividades paralelas que no siguen un orden específico y que comparten los mismos datos de entrada y salida.\nSegún el material de estudio, se define literalmente así.\nAclaraciones:\nLa opción A es cohesión funcional.\nLa opción B es cohesión secuencial.\nLa opción D es incorrecta."
  },
  {
    q: "En la cohesión lógica:",
    options: [
      "Una sola tarea definida.",
      "Salida coincide con entrada.",
      "Actividades paralelas.",
      "Ninguna de las anteriores."
    ],
    correct: 3,
    explanation: "La respuesta correcta es la D. Ninguna de las anteriores es correcta.\nSegún el material de estudio, la cohesión lógica se define como aquella en la que los elementos están destinados a realizar actividades de la misma categoría general.\nAclaraciones:\nLa opción A es funcional.\nLa opción B es secuencial.\nLa opción C es comunicacional."
  },
  {
    q: "Es una representación gráfica de elementos y sus relaciones:",
    options: [
      "Paradigma.",
      "Diagrama.",
      "Iteración",
      "Ninguna."
    ],
    correct: 1,
    explanation: "La respuesta correcta es la B. Diagrama.\nSegún el material de estudio, un diagrama es la representación gráfica de elementos y sus relaciones.\nAclaraciones:\nLa opción A es falsa.\nLa opción C es falsa."
  },
  {
    q: "La cohesión es una cualidad de la estructura:",
    options: [
      "Secuencial.",
      "Alternativa.",
      "Iterativa.",
      "Ninguna de las anteriores."
    ],
    correct: 3,
    explanation: "La respuesta correcta es la D.\nSegún el material de estudio, la cohesión es una cualidad de los módulos, no de estructuras de control.\nAclaraciones:\nLas otras opciones son tipos de estructuras de control."
  },
  {
    q: "La cohesión funcional, secuencial y comunicacional son cohesiones:",
    options: [
      "Procedurales.",
      "Fuertes.",
      "Débiles.",
      "Ninguna."
    ],
    correct: 1,
    explanation: "La respuesta correcta es la B. Fuertes.\nSegún el material de estudio, estas cohesiones pertenecen al grupo fuerte.\nAclaraciones:\nLa opción A es incorrecta.\nLa opción C es incorrecta."
  },
  {
    q: "La estructura basada en bucles es:",
    options: [
      "Secuencial.",
      "Alternativa.",
      "Iterativa.",
      "Ninguna."
    ],
    correct: 2,
    explanation: "La respuesta correcta es la C. Iterativa.\nSegún el material de estudio, los bucles son estructuras iterativas.\nAclaraciones:\nLas demás no usan bucles."
  },
  {
    q: "La programación surgió como un intento para:",
    options: [
      "Automatizar procesos.",
      "Dividir problemas.",
      "Usar paradigmas.",
      "Ninguno."
    ],
    correct: 0,
    explanation: "La respuesta correcta es la A. Automatizar procesos.\nSegún el material de estudio, surgió para automatizar tareas.\nAclaraciones:\nLa opción B es programación modular.\nLa opción C es paradigma."
  }
]
        },

        unidad2: {
          name: "Unidad 2: POO",
          questions: [
  {
    q: "De una clase podemos extraer las … que necesitemos:",
    options: [
      "Instancias.",
      "Abstracciones.",
      "Propiedades.",
      "Ninguna de las anteriores."
    ],
    correct: 0,
    explanation: "La respuesta correcta es la A. Instancias.\nSegún el material de estudio, una clase actúa como un modelo o plantilla de la cual \"podemos obtener la cantidad de objetos instanciados que se requieran\".\nEl temario especifica textualmente que cada una de las instancias (u objetos) \"son los resultados específicos extraídos a partir de él\".\n\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción B es falsa, ya que la abstracción no es un elemento físico o lógico que se extraiga repetidamente de una clase, sino un mecanismo o concepto que permite reducir la complejidad de los objetos minimizando la información a representar, dejando solo los aspectos fundamentales.\nLa opción C es falsa, debido a que las propiedades son los elementos que definen los atributos y forman parte de la estructura interna (miembros) con la que se diseña la propia clase, no son el producto resultante (los objetos) que se instancian o extraen a partir de dicho modelo."
  },
  {
    q: "De una clase podemos obtener la cantidad de objetos instanciados que se requieran:",
    options: [
      "Es cierto.",
      "Es falso.",
      "Es cierto, pero el número de las instancias es limitado.",
      "Ninguno de los anteriores, las clases no se instancian."
    ],
    correct: 0,
    explanation: "La respuesta correcta es la A. Es cierto.\nSegún el material de estudio, el enunciado es literalmente correcto, ya que se especifica textualmente que \"De una clase podemos obtener la cantidad de objetos instanciados que se requieran\".\nPor este motivo, una clase es considerada como una plantilla o modelo con el cual se pueden crear y definir todos esos objetos.\n\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción B es falsa, ya que el enunciado es una afirmación verdadera dentro de los conceptos básicos de la Programación Orientada a Objetos.\nLa opción C es falsa, debido a que el temario no establece que exista un límite estricto o predeterminado.\nLa opción D es falsa, porque las clases sí se instancian."
  },
  {
    q: "El encapsulamiento:",
    options: [
      "Agrupación en un mismo elemento de los datos y las operaciones relacionadas con estos.",
      "Reducir complejidad (abstracción).",
      "Permite reutilizar código.",
      "Ninguna de las anteriores."
    ],
    correct: 0,
    explanation: "La respuesta correcta es la A. Agrupación en un mismo elemento de los datos y las operaciones relacionadas con estos.\nSegún el material de estudio, el encapsulamiento se define como la \"agrupación en un mismo elemento de los datos y las operaciones relacionadas con estos\".\nSu propósito es ocultar los datos y acceder mediante interfaces.\n\nAclaraciones:\nLa opción B describe abstracción.\nLa opción C describe reutilización."
  },
  {
    q: "Elementos que actúan como variables propias de cada instancia:",
    options: [
      "Propiedad.",
      "Método.",
      "Constructor.",
      "Ninguna de las anteriores."
    ],
    correct: 3,
    explanation: "La respuesta correcta es la D.\nSegún el material de estudio, el término correcto es \"campo\".\n\nAclaraciones:\nLa opción A es acceso indirecto.\nLa opción B son acciones.\nLa opción C instancia objetos."
  },
  {
    q: "En el área intermedia de los diagramas de clase:",
    options: [
      "Nombre de la clase.",
      "Campos de la clase.",
      "Métodos.",
      "Ninguna."
    ],
    correct: 1,
    explanation: "La respuesta correcta es la B.\nSegún el material, el área intermedia contiene los campos.\n\nEstructura:\nSuperior → nombre\nIntermedia → campos\nInferior → métodos"
  },
  {
    q: "Es el elemento principal de POO:",
    options: [
      "Clase.",
      "Campo.",
      "Objeto.",
      "Ninguna."
    ],
    correct: 0,
    explanation: "La respuesta correcta es la A. Clase.\nSegún el material, la clase es el elemento principal.\n\nAclaraciones:\nCampo → atributo\nObjeto → instancia"
  },
  {
    q: "Están formados por datos primitivos:",
    options: [
      "Objetos primitivos.",
      "Objetos instanciados.",
      "Objetos simples y compuestos.",
      "Ninguna."
    ],
    correct: 2,
    explanation: "La respuesta correcta es la C.\nSegún el material, los objetos simples y compuestos contienen datos primitivos.\n\nAclaraciones:\nA es incorrecto.\nB es genérico."
  },
  {
    q: "La forma de declarar propiedades en Java:",
    options: [
      "Es sencilla y reutilizable.",
      "No es sencilla pero reutilizable.",
      "No es sencilla ni reutilizable.",
      "Java no ofrece mecanismos."
    ],
    correct: 3,
    explanation: "La respuesta correcta es la D.\nSegún el material, Java no tiene mecanismo específico.\n\nSe usan campos + getters/setters."
  },
  {
    q: "La visibilidad pública se representa con:",
    options: [
      "+.",
      "-.",
      "#.",
      "&."
    ],
    correct: 0,
    explanation: "La respuesta correcta es la A. +.\nSegún el material:\n+ → público\n- → privado\n# → protegido"
  },
  {
    q: "No es una forma de polimorfismo:",
    options: [
      "Asignación polimorfa.",
      "Ejecución polimorfa.",
      "Herencia polimorfa.",
      "Ninguna."
    ],
    correct: 2,
    explanation: "La respuesta correcta es la C.\nSegún el material, solo existen asignación y ejecución polimorfa.\n\nHerencia polimorfa no existe."
  }
]
        },

        unidad3: {
          name: "Unidad 3: Lenguajes",
          questions: [
  {
    q: ".war es una extensión que:",
    options: [
      "Almacena texto plano.",
      "Almacena bytecode.",
      "Es un archivo comprimido con ZIP.",
      "Ninguna de las anteriores es correcta."
    ],
    correct: 3,
    explanation: "La respuesta correcta es la D. Ninguna de las anteriores es correcta.\nSegún el material de estudio, concretamente en el apartado donde se explican los tipos de archivos empleados en Java, la extensión .war (Web Application Archive) se define explícitamente como archivos que \"contienen aquellos archivos que conforman una aplicación web que se haya desarrollado con Java (Servlets, JSP, etc.) y, además, facilitan su despliegue\".\nComo esta definición no aparece en ninguna de las opciones anteriores, la correcta es la D.\nA modo de aclaración sobre a qué extensiones corresponden las demás opciones:\nLa opción A es falsa, ya que los archivos que se utilizan para almacenar el código fuente en texto plano son los que tienen la extensión .java.\nLa opción B es falsa, debido a que los archivos que contienen el código intermedio o bytecode son los que se generan con la extensión .class tras la compilación.\nLa opción C es falsa, porque el temario asocia textualmente el \"algoritmo de compresión Zip\" a los archivos con extensión .jar (Java Archive), los cuales sirven para empaquetar los .class y otros recursos."
  },
  {
    q: "Código traducido para que pueda ser interpretado por el microprocesador:",
    options: [
      "Código fuente.",
      "Código máquina.",
      "Código intermedio.",
      "Todas las anteriores son incorrectas."
    ],
    correct: 1,
    explanation: "La respuesta correcta es la B. Código máquina.\nSegún el material de estudio, concretamente en los conceptos fundamentales de los lenguajes de programación, el código máquina (también llamado código objeto) se define de forma explícita como el \"código traducido para que pueda ser interpretado por el microprocesador\".\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es falsa, ya que el código fuente se define como el \"programa en lenguaje de alto nivel, aquel cercano al lenguaje humano y no reconocido por la computadora sin pasar por traducción\".\nLa opción C es falsa, debido a que el código intermedio (como el bytecode en Java) es un código generado por el compilador que \"no se puede ejecutar directamente en el sistema operativo\", sino que requiere de un elemento especial (como una máquina virtual) para llevar a cabo una segunda traducción que la máquina finalmente pueda entender.\nAl ser correcta la opción B, la opción D queda lógicamente descartada."
  },
  {
    q: "CIL o MSIL es una forma de .NET de llamar a:",
    options: [
      "El código fuente.",
      "El código intermedio.",
      "El código máquina.",
      "Ninguno de los anteriores es correcto."
    ],
    correct: 1,
    explanation: "La respuesta correcta es la B. El código intermedio.\nSegún el material de estudio, concretamente al explicar cómo funcionan los compiladores modernos, se especifica textualmente que \"CIL o MSIL es como se le denominaría al código intermedio en el mundo .NET y la máquina virtual que lo traduciría sería CLR (Common Language Runtime)\".\nEste código intermedio es el equivalente al bytecode que se utiliza en el ecosistema de Java.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es falsa.\nLa opción C es falsa.\nAl ser correcta la opción B, la opción D queda lógicamente descartada."
  },
  {
    q: "El compilador de basura se ejecuta en varios pasos, el último de ellos es:",
    options: [
      "Compilar el código.",
      "Borrar los objetos no referenciados.",
      "Compactar el espacio usado.",
      "Marcar los objetos de eliminación."
    ],
    correct: 2,
    explanation: "La respuesta correcta es la C. Compactar el espacio usado.\nSegún el material de estudio, el proceso se ejecuta en tres pasos: marcado, borrado y compactación.\nLa compactación es el último paso.\nAclaraciones:\nLa opción A es falsa.\nLa opción B es paso intermedio.\nLa opción D es el primer paso."
  },
  {
    q: "El lenguaje informático de alto nivel es aquel que:",
    options: [
      "El microprocesador lee.",
      "Es semejante al humano.",
      "Se encuentra compilado.",
      "Ninguna de las anteriores."
    ],
    correct: 1,
    explanation: "La respuesta correcta es la B. Es semejante al humano.\nSegún el material de estudio, son lenguajes cercanos al lenguaje humano.\nAclaraciones:\nLa opción A es código máquina.\nLa opción C no define el nivel."
  },
  {
    q: "En la configuración de NetBeans Keymap permite:",
    options: [
      "Elegir tipografía.",
      "Permite establecer shortcuts.",
      "Configurar depurador.",
      "Ninguna."
    ],
    correct: 1,
    explanation: "La respuesta correcta es la B.\nKeymap permite establecer shortcuts.\nAclaraciones:\nA es Fonts & Colors.\nC es configuración Java."
  },
  {
    q: "Es una versión de Java:",
    options: [
      "J2ME.",
      "J2SE.",
      "J2EE.",
      "Todas las anteriores son correctas."
    ],
    correct: 3,
    explanation: "La respuesta correcta es la D.\nJ2ME, J2SE y J2EE son versiones de Java."
  },
  {
    q: "GNU General Public License, version 2 es la licencia de:",
    options: [
      "JDK.",
      "Java.",
      "OpenJDK.",
      "JRE."
    ],
    correct: 2,
    explanation: "La respuesta correcta es la C. OpenJDK.\nSegún el material de estudio, OpenJDK usa GPL v2.\nAclaraciones:\nOracle JDK usa otra licencia."
  },
  {
    q: "Un compilador JIT:",
    options: [
      "Compila alto nivel.",
      "Evita recompilar varias veces.",
      "Codifica intermedio.",
      "Ninguna."
    ],
    correct: 1,
    explanation: "La respuesta correcta es la B.\nEl JIT mejora rendimiento evitando traducciones repetidas.\nAclaraciones:\nA es falso.\nC es incorrecto."
  },
  {
    q: "Una desventaja del recolector de basura es:",
    options: [
      "No se puede ejecutar regularmente.",
      "Consume recursos mientras se ejecuta.",
      "Solo se ejecuta sin memoria.",
      "Ninguna."
    ],
    correct: 1,
    explanation: "La respuesta correcta es la B.\nConsume recursos y afecta rendimiento.\nAclaraciones:\nA y C son falsas."
  }
]
        },

        unidad4: {
          name: "Unidad 4: Elementos",
          questions: [
  {
    q: "Estos ,continue, default, else y try, son:",
    options: [
      "Palabras reservadas.",
      "Notaciones.",
      "Constantes.",
      "Secuencias de escape."
    ],
    correct: 0,
    explanation: "La respuesta correcta es la A. Palabras reservadas.\nSegún el material de estudio, los términos continue, default, else y try forman parte explícita de la lista de palabras reservadas del lenguaje de programación Java. Estas palabras cuentan con su propio significado reservado por el sistema, por lo que el temario advierte explícitamente que \"no se pueden utilizar como identificadores en los programas\".\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción B es falsa, ya que las notaciones hacen referencia a los sistemas de signos o convenciones de escritura (como lowerCamelCase, UpperCamelCase o SCREAMING_SNAKE_CASE) que se utilizan para nombrar o representar elementos específicos.\nLa opción C es falsa, debido a que las constantes son elementos que mantienen un valor fijo a lo largo de toda la ejecución del programa y, por recomendación, deben escribirse con todas las letras en mayúsculas separadas por guiones bajos.\nLa opción D es falsa, porque las secuencias de escape son combinaciones de caracteres que empiezan por una barra invertida (como \\n, \\t, \\b o \\\") y se utilizan en variables de texto para representar un retorno de carro, tabulaciones o comillas sin que interfieran en el código."
  },
  {
    q: "Estos, <, %, !, y ||, son:",
    options: [
      "Constantes.",
      "Tipos de datos primitivos.",
      "Operadores.",
      "Variables."
    ],
    correct: 2,
    explanation: "La respuesta correcta es la C. Operadores.\nSegún el material de estudio, concretamente en el apartado dedicado a los operadores y expresiones, los símbolos <, %, ! y || se encuentran clasificados explícitamente dentro de la tabla de operadores. El temario especifica que los operadores sirven para realizar operaciones con las variables y clasifica a estos símbolos de la siguiente manera:\n< es un operador de relaciones (menor).\n% es un operador aritmético (resto o módulo).\n! es un operador unario (negación lógica).\n|| es un operador lógico (o lógico o disyunción).\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es falsa, ya que las constantes son elementos que mantienen un mismo valor fijo a lo largo de toda la vida del programa.\nLa opción B es falsa, debido a que los tipos de datos primitivos (como byte, int, float, boolean, char, etc.) son los formatos predefinidos en el lenguaje para indicar qué tipo de valores podrá contener una variable.\nLa opción D es falsa, porque las variables son elementos que permiten almacenar valores en la memoria principal mientras el programa se está ejecutando, mientras que los símbolos por los que se pregunta sirven precisamente para operar o realizar cálculos lógicos y aritméticos con estas variables."
  },
  {
    q: "Estos, char, int, boolean y double, son:",
    options: [
      "Constantes.",
      "Tipos de datos primitivos.",
      "Operadores.",
      "Ninguna de las anteriores."
    ],
    correct: 1,
    explanation: "La respuesta correcta es la B. Tipos de datos primitivos.\nSegún el material de estudio, concretamente en el apartado dedicado a los tipos de datos, char, int, boolean y double se encuentran clasificados explícitamente dentro de la tabla de tipos de datos primitivos. El temario detalla que los datos primitivos \"son aquellos que ya están definidos en el lenguaje por defecto, por lo que, para referenciarlos, hay que utilizar una palabra reservada\".\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es falsa, ya que las constantes se definen como elementos que mantienen un mismo valor fijo a lo largo de toda la vida de ejecución del programa y, por convención y recomendación, se nombran con todas las letras en mayúsculas separadas por guiones bajos.\nLa opción C es falsa, debido a que los operadores son los símbolos (como +, -, <, %, ||, etc.) que sirven para realizar operaciones lógicas, relacionales y aritméticas con las variables o valores, no los tipos de formato que definen a dichas variables.\nAl ser correcta la opción B, la opción D queda lógicamente descartada."
  },
  {
    q: "Las palabras reservadas son:",
    options: [
      "Palabras que cuentan con su propio significado, por lo que no se pueden utilizar como identificadores en los programas.",
      "Palabras que permiten realizar operaciones con las variables explicadas anteriormente.",
      "Palabras que, a lo largo de la vida del programa, mantienen un mismo valor.",
      "Ninguna de las anteriores."
    ],
    correct: 0,
    explanation: "La respuesta correcta es la A. Palabras que cuentan con su propio significado, por lo que no se pueden utilizar como identificadores en los programas.\nSegún el material de estudio, concretamente en el resumen de los elementos de un programa informático, las palabras reservadas se definen textualmente como aquellas \"palabras que cuentan con su propio significado, por lo que no se pueden utilizar como identificadores en los programas\".\nA modo de aclaración sobre a qué conceptos corresponden las demás opciones:\nLa opción B es falsa, ya que los elementos \"que permiten realizar operaciones con las variables\" son los operadores.\nLa opción C es falsa, debido a que los elementos \"que, a lo largo de la vida del programa, mantienen un mismo valor\" se denominan constantes.\nAl ser correcta la opción A, la opción D queda lógicamente descartada."
  },
  {
    q: "Los comentarios pueden iniciarse con la marca:",
    options: [
      "//.",
      "/*.",
      "/**.",
      "Todas las anteriores son correctas."
    ],
    correct: 3,
    explanation: "La respuesta correcta es la D. Todas las anteriores son correctas.\nSegún el material de estudio, concretamente en el apartado que explica los tipos de comentarios en Java, se establece que los comentarios pueden iniciarse de las tres formas mencionadas dependiendo de su propósito:\nOpción A (//): Se utiliza para dar inicio a los comentarios de una línea, los cuales sirven para añadir una explicación breve al código.\nOpción B (/*): Se utiliza para iniciar los comentarios de varias líneas (que terminan con */), los cuales también sirven para añadir explicaciones más extensas al código.\nOpción C (/**): Es la marca que inicia los comentarios de documentación (y terminan con */), que son aquellos de varias líneas utilizados por el programa javadoc para generar de forma automática la documentación del código.\nAl ser válidas las tres marcas para iniciar diferentes tipos de comentarios dentro del lenguaje, la opción correcta es la D que engloba a todas las anteriores."
  },
  {
    q: "Los datos primitivos al realizar casting pueden ser:",
    options: [
      "Declarados y no declarados.",
      "Implícitos y explícitos.",
      "Autoboxing y unboxing.",
      "Compilatorio y compilado."
    ],
    correct: 1,
    explanation: "La respuesta correcta es la B. Implícitos y explícitos.\nSegún el material de estudio, concretamente en el apartado dedicado a las conversiones de tipo (casting), se especifica explícitamente que estas pueden ser de dos tipos: implícitas (suceden cuando se lleva a cabo una operación de asignación sin declarar el tipo de conversión a realizar) y explícitas (se llevan a cabo colocando primero el tipo de variable destino y después el dato origen de la conversión).\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es falsa, ya que los términos \"declarados y no declarados\" no corresponden a ninguna clasificación válida para el casting dentro del temario.\nLa opción C es falsa, debido a que el autoboxing y unboxing no definen el casting entre tipos de datos primitivos, sino que son los conceptos utilizados para referirse a la conversión automática que ocurre entre un dato de tipo primitivo y su correspondiente clase envoltorio (Wrapper Class).\nLa opción D es falsa, porque los términos relacionados con la compilación se refieren al proceso de traducción del código fuente o al tipo de lenguaje de programación (interpretado o compilado), no a la conversión de valores entre tipos de datos."
  },
  {
    q: "Palabras que cuentan con su propio significado, por lo que no se pueden utilizar como identificadores en los programas:",
    options: [
      "Constantes.",
      "Identificadores.",
      "String.",
      "Ninguna de las anteriores."
    ],
    correct: 3,
    explanation: "La respuesta correcta es la D. Ninguna de las anteriores.\nSegún el material de estudio, concretamente en la definición de los elementos de un programa informático, la frase \"Palabras que cuentan con su propio significado, por lo que no se pueden utilizar como identificadores en los programas\" es la definición exacta de las palabras reservadas. Como este concepto no aparece entre las opciones A, B y C, la opción correcta es la D.\nA modo de aclaración sobre a qué conceptos corresponden las demás opciones:\nLa opción A es falsa, ya que las constantes son elementos que, a lo largo de la vida del programa, mantienen un mismo valor fijo.\nLa opción B es falsa, debido a que los identificadores son precisamente las secuencias de caracteres (nombres o etiquetas) que el programador inventa y utiliza para denominar a los distintos elementos del programa (como variables, clases, métodos, etc.). Las palabras reservadas no pueden usarse como identificadores.\nLa opción C es falsa, porque un String es un tipo de objeto o clase que se utiliza en Java para almacenar y manejar de forma cómoda cadenas de caracteres (textos)."
  },
  {
    q: "Sistemas de signos destinado a representar símbolos o conceptos especiales por pertenecer a campos específicos y por lo tanto no encontrarse en el lenguaje general:",
    options: [
      "lowercase.",
      "UpperCamelCase.",
      "Datos primitivos.",
      "Notación."
    ],
    correct: 3,
    explanation: "La respuesta correcta es la D. Notación.\nEl material de estudio define explícitamente la notación como los \"sistemas de signos destinado a representar símbolos o conceptos especiales por pertenecer a campos específicos y por lo tanto no encontrarse en el lenguaje general\".\nA modo de aclaración sobre a qué conceptos corresponden las demás opciones:\nLa opción A es falsa, ya que lowercase hace referencia a una convención de escritura donde \"las palabras se juntan para evitar espacios y todo en minúsculas\".\nLa opción B es falsa, debido a que UpperCamelCase es otra convención de escritura en la que \"las palabras se juntan para evitar espacios y se distinguen entre ellas con mayúsculas en la primera letra de cada palabra\".\nLa opción C es falsa, porque los datos primitivos se refieren a los tipos de datos que \"ya están definidos en el lenguaje por defecto, por lo que, para referenciarlos, hay que utilizar las palabras reservadas\"."
  },
  {
    q: "Un identificador puede emplear el símbolo:",
    options: [
      "&.",
      "%.",
      "$.",
      "#."
    ],
    correct: 2,
    explanation: "La respuesta correcta es la C. $.\nSegún el material de estudio, concretamente en el apartado de las reglas para formar identificadores (los nombres que se dan a variables, clases, métodos, etc.), se establece explícitamente que \"solo pueden usarse letras (a-Z), dígitos (0-9), el símbolo dólar ($) o el guion bajo (_)\".\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLas opciones A (&), B (%) y D (#) son falsas, ya que ninguno de estos caracteres especiales está permitido por las reglas de sintaxis de Java para nombrar un identificador. Únicamente el símbolo del dólar ($) y el guion bajo (_) son los símbolos especiales válidos para este propósito."
  },
  {
    q: "Un paquete paquetes:",
    options: [
      "Identifica las clases cuyas características sean comunes y las agrupa.",
      "Mantiene independientes las declaraciones que son realizadas en un paquete de las que existen en otros paquetes.",
      "Puede controlar la visibilidad de los elementos contenidos en él.",
      "Todas las anteriores son correctas."
    ],
    correct: 3,
    explanation: "La respuesta correcta es la D. Todas las anteriores son correctas.\nSegún el material de estudio, concretamente en el apartado dedicado a los paquetes como elementos de un programa informático en Java, se enumeran explícitamente estas tres características como las ventajas principales de este mecanismo para conseguir la encapsulación y la modularidad.\nA modo de aclaración sobre por qué las opciones A, B y C son afirmaciones verdaderas:\nLa opción A es correcta, ya que el uso de paquetes \"identifica las clases cuyas características sean comunes y las agrupa\".\nLa opción B es correcta, debido a que \"mantiene independientes las declaraciones que son realizadas en un paquete de las que existen en otros paquetes\", lo cual permite al programador utilizar los mismos identificadores en distintos paquetes si fuera necesario.\nLa opción C es correcta, porque mediante los paquetes se puede \"controlar la visibilidad de los paquetes, y esto afecta a aquello elementos contenidos en él\", facilitando de este modo un mecanismo de control de acceso."
  }
]
        },

        unidad5: {
          name: "Unidad 5: Depuración",
          questions:  [
  {
    q: "La depuración:",
    options: [
      "Es el proceso encargado de hacer pruebas unitarias.",
      "Permite inspeccionar el código para eliminar posibles errores.",
      "Determinar el resultado de la aplicación según la entrada de datos.",
      "Todas las anteriores son correctas."
    ],
    correct: 1,
    explanation: "La respuesta correcta es la B. Permite inspeccionar el código para eliminar posibles errores.\nSegún el material de estudio, concretamente en el apartado de conceptos fundamentales asociados a las estructuras de control, la depuración se define literalmente como el \"proceso para inspeccionar el código y eliminar errores\". Se recurre a este proceso cuando se detecta un fallo (conocido como bug) para asegurar la correcta operatividad del programa.\nA modo de aclaración sobre por qué las demás opciones son incorrectas o inexactas:\nLa opción A es falsa, ya que, aunque la realización de pruebas unitarias es uno de los pasos o herramientas que se utilizan durante la depuración, la depuración en sí no se define como el proceso encargado únicamente de hacer pruebas unitarias, sino de buscar y corregir fallos.\nLa opción C es falsa, debido a que \"determinar el resultado de la aplicación según la entrada de datos\" hace referencia al uso de baterías de prueba o a la ejecución regular del programa para ver si funciona, pero no define el acto de inspeccionar el código internamente para eliminar un error ya detectado.\nAl ser la opción B la única que se ajusta a la definición exacta del temario, la opción D queda lógicamente descartada."
  },
  {
    q: "La entrada de datos puede ser:",
    options: [
      "Mediante argumentos.",
      "Por consola.",
      "Otros.",
      "Todas las opciones son correctas."
    ],
    correct: 3,
    explanation: "La respuesta correcta es la D. Todas las opciones son correctas.\nSegún el material de estudio, la entrada de información a un programa puede provenir de diversas fuentes y realizarse mediante distintas alternativas.\nA modo de aclaración sobre por qué las opciones A, B y C son afirmaciones verdaderas:\nLa opción A es correcta, ya que los datos pueden ser cargados y transferidos al programa en el momento de ejecutarse por primera vez la aplicación mediante el parámetro args del método main.\nLa opción B es correcta, debido a que se puede interactuar con el usuario para obtener datos a partir del teclado usando el flujo estándar de entrada System.in o clases facilitadoras como Scanner en tiempo de ejecución.\nLa opción C es correcta, porque el temario especifica en las unidades más avanzadas que cualquier entrada de información también puede realizarse mediante otros elementos externos, como por ejemplo a través de un fichero, una red, etc.\nPor lo tanto, al ser válidas y posibles todas las alternativas mencionadas, la opción D que las engloba a todas es la respuesta acertada."
  },
  {
    q: "La estructura for:",
    options: [
      "Es una estructura de repetición o iterativa.",
      "Es una estructura condicional.",
      "Es una estructura de salto incondicional.",
      "Es una estructura de flujo."
    ],
    correct: 0,
    explanation: "La respuesta correcta es la A. Es una estructura de repetición o iterativa.\nSegún el material de estudio, concretamente en el apartado dedicado a las estructuras de control, la sentencia for se clasifica de forma explícita como una estructura de repetición (iterativa) o bucle. El temario detalla que esta estructura se utiliza \"si queremos iterar sobre un rango de valores\" para ejecutar repetidamente un bloque de instrucciones.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción B es falsa, ya que las estructuras condicionales o de selección son aquellas que evalúan una condición para decidir qué camino tomar, como es el caso de if, else, else if y switch.\nLa opción C es falsa, debido a que las estructuras de salto incondicional corresponden a las sentencias break y continue, las cuales permiten interrumpir o saltar partes del código.\nLa opción D es falsa, porque aunque todas estas sentencias sirven para alterar el orden del flujo de ejecución del programa, la clasificación específica, exacta y formal para el for en el temario es la de estructura de repetición o iterativa."
  },
  {
    q: "La estructura if:",
    options: [
      "Permite hacer saltos incondicionales",
      "Permite ejecutar una parte de código según una condición.",
      "Permite ejecutar varias veces una parte de código.",
      "Solo se ejecuta una vez."
    ],
    correct: 1,
    explanation: "La respuesta correcta es la B. Permite ejecutar una parte de código según una condición.\nSegún el material de estudio, concretamente en el apartado dedicado a las estructuras de selección o condicionales, la sentencia if se define literalmente como aquella que \"sirve para evaluar una condición, y dependiendo del resultado, actuar de una cierta manera\". El resumen del temario corrobora esto indicando que el if \"aplica el código a ejecutar si se cumple una condición\".\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es falsa, ya que las estructuras que permiten hacer saltos incondicionales para interrumpir el flujo natural de ejecución son las sentencias break y continue.\nLa opción C es falsa, debido a que ejecutar repetidamente un bloque de instrucciones es el propósito exclusivo de las estructuras de repetición o iterativas, como son el for, el while y el do while.\nLa opción D es inexacta y falsa, porque aunque un bloque if se evalúa al pasar por él secuencialmente, su función no es limitar la ejecución a solo una vez. De hecho, si un if está dentro de un bucle iterativo, se ejecutará múltiples veces. Su característica definitoria es condicionar si el código se ejecuta o no en base a un resultado booleano."
  },
  {
    q: "La salida de datos por consola en Java se emplea:",
    options: [
      "System.out por defecto.",
      "System.in por defecto.",
      "System.out por defecto y System.err para salidas de error.",
      "Todas las opciones son correctas."
    ],
    correct: 2,
    explanation: "La respuesta correcta es la C. System.out por defecto y System.err para salidas de error.\nSegún el material de estudio, concretamente en el resumen sobre el manejo de información, se establece explícitamente que \"Para la salida de datos usaremos el flujo estándar de la consola con System.out por defecto o System.err para salidas de error\". El temario detalla que System.out es la pantalla por defecto para imprimir datos, mientras que System.err funciona de la misma manera pero está destinado a mostrar los mensajes de error.\nA modo de aclaración sobre por qué las demás opciones son incorrectas o inexactas:\nLa opción A es incompleta, ya que, aunque System.out es efectivamente la salida por defecto, la opción C refleja de forma mucho más precisa y completa la teoría al incluir la salida de errores.\nLa opción B es falsa, debido a que System.in es el flujo estándar de entrada de datos, no de salida.\nAl ser falsa la opción B, la opción D queda lógicamente descartada."
  },
  {
    q: "La sentencia break permite:",
    options: [
      "Parar la ejecución de un bucle para ejecutar la próxima instrucción fuera del bucle.",
      "Salta una interacción",
      "Rompe la ejecución y detiene la aplicación.",
      "Ninguna de las anteriores es correcta."
    ],
    correct: 0,
    explanation: "La respuesta correcta es la A. Parar la ejecución de un bucle para ejecutar la próxima instrucción fuera del bucle.\nSegún el material de estudio, concretamente en el apartado dedicado a las estructuras de salto incondicional, se establece literalmente que utilizando la sentencia break \"podemos parar la ejecución de un bucle para avanzar a la próxima instrucción que haya después del bucle\". Es decir, interrumpe la ejecución del bloque de código iterativo actual y hace un salto a la siguiente instrucción fuera de ese contexto.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción B es falsa, ya que la estructura que detiene solamente la iteración actual para saltar a la próxima iteración de un bucle es la sentencia continue.\nLa opción C es falsa, debido a que el break rompe únicamente la ejecución del bucle o del bloque switch en el que se encuentre anidado, pero no detiene la ejecución completa de la aplicación.\nAl ser afirmativa y exacta la opción A, la opción D queda lógicamente descartada."
  },
  {
    q: "Qué hace el siguiente código:",
    image: '/img/pregunta7.png',
    options: [
      "Según el valor de la variable opciones ejecutara solo el código de uno de los valores ‘a’, ‘b’, ‘c’ o ‘d’.",
      "Según el valor de la variable opciones ejecutará solo el código de uno de los valores que no sean ni ‘a’, ‘b’, ‘c’ y ‘d’.",
      "Ejecutará el código de la opciones ‘a’, ‘b’, ‘c’ y ‘d’",
      "Si la variable opciones es verdadera, ejecutará cada parte de las opciones."
    ],
    correct: 0,
    explanation: "La respuesta correcta es la A. Según el valor de la variable opciones ejecutará solo el código de uno de los valores ‘a’, ‘b’, ‘c’ o ‘d’.\nComo no se ha incluido el fragmento de código en el enunciado, no es posible confirmarlo con certeza absoluta. Sin embargo, basándonos en el planteamiento de las opciones y en el contenido habitual del temario, lo más probable es que la pregunta haga referencia a una estructura de selección múltiple, concretamente a una sentencia switch o a un bloque if-else if que evalúa la variable opciones.\nSegún el material de estudio, si el código es un bloque switch bien formado que contiene la sentencia break al final de cada caso, o si se trata de una estructura if-else if, el programa evaluará la variable y ejecutará solo el bloque de instrucciones correspondiente al valor coincidente. El uso de break sirve precisamente para interrumpir la ejecución de ese bloque y evitar que se ejecuten los demás.\nA modo de aclaración sobre por qué las demás opciones serían incorrectas en ese escenario:\nLa opción B es falsa, ya que describe el comportamiento de un caso por defecto o default, no el funcionamiento general del bloque para los valores ‘a’, ‘b’, ‘c’ o ‘d’.\nLa opción C solo sería correcta si se tratara de una sentencia switch en la que se hubieran omitido los break, ya que en ese caso se produciría una ejecución en cascada de los casos siguientes.\nLa opción D es falsa, debido a que no depende de que la variable opciones sea verdadera o falsa, sino del valor concreto que contenga y de la estructura condicional utilizada.\nPor ello, y tomando como referencia la forma correcta y estándar de este tipo de estructuras en Java, la opción más probable es la A."
  },
  {
    q: "Qué hace el siguiente código.",
    image: '/img/pregunta8.png',
    options: [
      "Solo se ejecutará la instrucción i++.",
      "Se imprimirá por pantalla 10 veces.",
      "Se ejecutará 10 veces la instrucción de imprimir y 10 veces la instrucción i++",
      "No hará nada."
    ],
    correct: 2,
    explanation: "La respuesta correcta es la C. Se ejecutará 10 veces la instrucción de imprimir y 10 veces la instrucción i++.\nComo no se ha incluido el fragmento de código en el enunciado, no es posible asegurarlo con certeza absoluta. Sin embargo, basándonos en el tipo de pregunta y en la sintaxis habitual de las estructuras de repetición en Java, lo más probable es que se trate de un bucle correctamente escrito en el que tanto la instrucción de impresión como el incremento i++ forman parte del bloque iterativo.\nSegún el material de estudio, las estructuras de repetición como for o while permiten ejecutar repetidamente un bloque de instrucciones mientras se cumpla una condición. Si ambas instrucciones están correctamente agrupadas dentro del bloque del bucle, lo normal es que la impresión se ejecute 10 veces y también el incremento i++ se ejecute 10 veces.\nA modo de aclaración sobre por qué las demás opciones serían incorrectas en ese escenario:\nLa opción A solo sería correcta si, por un problema de sintaxis o por ausencia de llaves, la única instrucción controlada por el bucle fuera i++.\nLa opción B sería posible si el incremento quedara fuera del bloque y la impresión estuviera dentro, aunque eso dependería completamente de cómo estuviera escrito el código concreto.\nLa opción D sería falsa en un bucle estándar cuya condición inicial permita entrar en él al menos una vez.\nPor tanto, tomando como referencia la forma más habitual y correcta de este tipo de ejercicios, la opción más probable es la C."
  },
  {
    q: "Qué método permite obtener una línea completa por teclado.",
    options: [
      "Next().",
      "nextLine().",
      "hasNext().",
      "hasNextInt()."
    ],
    correct: 1,
    explanation: "La respuesta correcta es la B. nextLine().\nSegún el material de estudio, concretamente en el apartado dedicado a la clase Scanner para la lectura de datos, el método nextLine() se define explícitamente como aquel que devuelve como un String la línea completa.\nA modo de aclaración sobre por qué las demás opciones son incorrectas, el temario detalla el funcionamiento exacto de cada uno de estos métodos:\nLa opción A es falsa, ya que next() no obtiene la línea completa, sino que únicamente devuelve como un String el siguiente token, es decir, normalmente una sola palabra hasta encontrar un espacio en blanco.\nLa opción C es falsa, debido a que hasNext() no sirve para extraer o leer un texto introducido por teclado, sino que es un método de comprobación que retorna true en caso de que el escáner pueda devolver otro token.\nLa opción D es falsa, porque hasNextInt() es también un método lógico de validación que devuelve true solo si se puede interpretar el siguiente token como un valor entero. No sirve para capturar líneas de texto."
  },
  {
    q: "Una aplicación…",
    options: [
      "No necesita manejar información.",
      "Necesita el manejo de información dependiendo de la funcionalidad.",
      "Necesita el manejo de información existiendo solo una entrada de datos.",
      "Necesita el manejo de información existiendo una entrada y salida de datos."
    ],
    correct: 3,
    explanation: "La respuesta correcta es la D. Necesita el manejo de información existiendo una entrada y salida de datos.\nSegún el material de estudio, concretamente en el resumen de la unidad sobre estructuras de control y el manejo de información, se establece de forma explícita que \"Cualquier programa necesita del manejo de información siendo necesario una entrada por donde recibe los datos y una salida para mostrar los datos hacia el usuario\".\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es falsa, ya que el temario indica textualmente que cualquier programa necesita de este manejo de información.\nLa opción B es incompleta, debido a que aunque el manejo de información dependa de la funcionalidad, todas las aplicaciones sin excepción requieren una entrada y una salida de datos como mínimo.\nLa opción C es parcial e incorrecta, porque no solo necesita una entrada, sino que también requiere obligatoriamente una salida para que el usuario reciba los resultados del procesamiento."
  }
]
        },

        unidad6: {
          name: "Unidad 6: Campos",
          questions: [
            {"q": "Static:", "options": ["Palabra para campo común", "getter", "setter", "Todas incorrectas"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "Garbage collector es un mecanismo de:", "options": ["C++", "Delphi", "Java", "Ninguna"], "correct": 2, "explanation": "La respuesta correcta es C."},
            {"q": "JFreeChart es:", "options": ["Librería", "Tipo de dato", "Llamada métodos", "Mecanismo"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "Los campos también pueden ser llamados:", "options": ["Atributos", "Variables", "Fields", "Todas"], "correct": 3, "explanation": "La respuesta correcta es D."},
            {"q": "Los métodos pueden operar devolviendo:", "options": ["Null", "Void", "0", "000"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "Para instanciar un objeto:", "options": ["&", "%", "$", "Ninguno"], "correct": 3, "explanation": "La respuesta correcta es D."},
            {"q": "Sobrecarga de métodos:", "options": ["Métodos diferentes", "Mismo parámetro", "Mismo método diferentes parámetros", "Diferentes parámetros"], "correct": 2, "explanation": "La respuesta correcta es C."},
            {"q": "Observadores:", "options": ["Constructores", "Observadores", "Modificadores", "Ninguna"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "Protected:", "options": ["Public", "Protected", "Package", "Private"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "Por valor:", "options": ["Referencia", "Frecuencia", "Constantes", "Valor"], "correct": 3, "explanation": "La respuesta correcta es D."}
          ]
        },

        unidad7: {
          name: "Unidad 7: Herencia",
          questions: [
            {"q": "Al sobrescribir el método:", "options": ["Se eliminará", "Seguirá disponible", "También se sobrescribirá", "Visibilidad pública"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "instanceof:", "options": ["Crear instancia", "Sin heredar", "Comprobar instancia", "Todas incorrectas"], "correct": 2, "explanation": "La respuesta correcta es C."},
            {"q": "La interfaz permite:", "options": ["Organización", "Separación visual", "Las dos", "Ninguna"], "correct": 2, "explanation": "La respuesta correcta es C."},
            {"q": "Las clases abstractas:", "options": ["Instantiarse normalmente", "Con abstract", "No instantiarse", "No instantiarse pero herencia"], "correct": 3, "explanation": "La respuesta correcta es D."},
            {"q": "Constructores herencia:", "options": ["Facilitar construcción", "No heredados directamente", "Sobrescribir Override", "Todas"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "@override:", "options": ["@override", "@overwrite", "$override", "$overwrite"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "No pueden pasar override:", "options": ["Métodos", "Abstractos", "Constructores", "Todas incorrectas"], "correct": 2, "explanation": "La respuesta correcta es C."},
            {"q": "palabra reservada interfaz:", "options": ["null", "void", "status", "Ninguna"], "correct": 3, "explanation": "La respuesta correcta es D."},
            {"q": "Relación dependiente:", "options": ["Asociación", "Composición", "Agregación", "Entrelazado"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "Subrutina instanciar:", "options": ["Constructores", "Observadores", "Modificadores", "Ninguna"], "correct": 0, "explanation": "La respuesta correcta es A."}
          ]
        },

        unidad8: {
          name: "Unidad 8: Arrays",
          questions: [
            {"q": "Longitud array:", "options": ["Recorriendo", ".length", "Opciones a) y b)", "Ninguna"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "Tipo se puede declarar array:", "options": ["Primitivo o abstracto", "Primitivo", "Abstracto", "Ninguna"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "¿Es posible cambiar tamaño array?", "options": ["Sí", "Solo primer valor", "Cualquier momento", "No, solo en declaración"], "correct": 3, "explanation": "La respuesta correcta es D."},
            {"q": "Función cortar cadena:", "options": ["replace", "substring", "trim", "contains"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "El tipo String se considera:", "options": ["Primitivo cadena", "Primitivo agrupación", "Primitivo conjunto", "Todas falsas"], "correct": 3, "explanation": "La respuesta correcta es D."},
            {"q": "Cambiar número a cadena:", "options": ["String.valueOf", "Float.parseFloat", "New String", "String.parseString"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "Inicializar array:", "options": ["new int[2][1]", "{{1},{2}}", "números.clone()", "Todas"], "correct": 3, "explanation": "La respuesta correcta es D."},
            {"q": "Copia exacta independiente:", "options": ["Shallow", "Deep", "Uno a uno", "Incremental"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "Primer y último elemento:", "options": ["[1] y [9]", "[1] y [10]", "[0] y [9]", "[0] y [10]"], "correct": 2, "explanation": "La respuesta correcta es C."},
            {"q": "Un array se puede definir como:", "options": ["Estático ilimitado", "Estático limitado", "Dinámico limitado", "Dinámico ilimitado"], "correct": 1, "explanation": "La respuesta correcta es B."}
          ]
        },

        unidad9: {
          name: "Unidad 9: Colecciones",
          questions: [
            {"q": "¿Qué es una colección?", "options": ["Estática ilimitada", "Estática limitada", "Dinámica limitada", "Dinámica ilimitada"], "correct": 3, "explanation": "La respuesta correcta es D."},
            {"q": "Collection interfaz de:", "options": ["Set, List y Queue", "Map", "TreeMap", "Ninguna"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "Con ArrayDeque se puede implementar:", "options": ["Cola", "Pila", "Cola y pila", "Todas"], "correct": 3, "explanation": "La respuesta correcta es D."},
            {"q": "Característica colección Set", "options": ["Repetidos", "Ordena", "Valores null", "No repetidos"], "correct": 3, "explanation": "La respuesta correcta es D."},
            {"q": "Map almacena elementos:", "options": ["Clave y valor", "Tabla hash", "Índices", "No usa nada"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "PriorityQueue se puede definir:", "options": ["Collection duplicados natural", "Collection únicos prioridad", "Collection duplicados prioridad", "Map únicos prioridad"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "Estructura ordenada Set:", "options": ["HashSet", "LinkedHashSet", "TreeSet", "Ninguna"], "correct": 2, "explanation": "La respuesta correcta es C."},
            {"q": "Método lastIndexOf ArrayList:", "options": ["Primera ocurrencia", "Última ocurrencia", "Mayor de 0", "Menor de 0"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "Interfaces raíces colecciones:", "options": ["ArrayList y LinkedList", "Collection y Map", "Collection y ArrayDeque", "Ninguna"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "ArrayList se puede definir como:", "options": ["Estático no modificable", "Dinámico modificable", "Estático ordenado", "Dinámico ordenado"], "correct": 1, "explanation": "La respuesta correcta es B."}
          ]
        },

        unidad10: {
          name: "Unidad 10: Excepciones",
          questions: [
            {"q": "¿Qué es una excepción?", "options": ["Error ejecución", "Error compilación", "Código especial", "Código especial casos"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "¿Cómo podemos capturar una excepción?", "options": ["try", "catch", "finally", "Método exclusivo"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "¿Cómo podemos tratar una excepción?", "options": ["try", "catch", "constructor", "Método exclusivo"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "Con throw podemos:", "options": ["Invocar excepciones", "Capturar", "Propagar", "Ninguna"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "Recomendación no correcta:", "options": ["No abusar", "Genéricas", "No crear nuevas", "No excepciones graves"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "Pila de llamadas:", "options": ["Lista métodos", "Contenedor métodos", "Estructura flujo", "Ninguna"], "correct": 2, "explanation": "La respuesta correcta es C."},
            {"q": "¿Qué hace finally?", "options": ["Cuando excepción", "Siempre", "Sin excepción", "Finaliza programa"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "Palabra reservada throws:", "options": ["Invocar", "Propagar", "Capturar", "Ninguna"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "Excepciones heredar de:", "options": ["main o subclase", "Throwable o subclase", "System o subclase", "Ninguna"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "Excepción Checked", "options": ["Grave no tratar", "Grave tratar", "Leve obligatorio", "Leve no recomendable"], "correct": 2, "explanation": "La respuesta correcta es C."}
          ]
        },

        unidad11: {
          name: "Unidad 11: Recursividad",
          questions: [
            {"q": "Recursividad cruzada:", "options": ["Una llamada", "Dos métodos", "Más de una", "Parámetro llamada"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "En recursividad encontramos:", "options": ["Terminación", "Llamada a sí mismo", "Las dos", "Ninguna"], "correct": 2, "explanation": "La respuesta correcta es C."},
            {"q": "Complejidad algorítmica medida:", "options": ["Big-O", "Cromática", "Unidades tiempo", "Unidades métricas"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "Diferencia simple y multiple:", "options": ["Número llamadas", "Parámetros", "Métodos", "Ninguna"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "Orden complejidad peor:", "options": ["O(1)", "O(n log n)", "O(n2)", "O(log n)"], "correct": 2, "explanation": "La respuesta correcta es C."},
            {"q": "Reglas calcular complejidad:", "options": ["Recursividad caso base", "If/else mayor", "Bucles anidados", "Todas"], "correct": 3, "explanation": "La respuesta correcta es D."},
            {"q": "Tipos recursividad:", "options": ["Simple multiple cruzada anidada", "Simple multiple cruzada anillada", "Doble unificada indirecta", "Doble anillada simple"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "Ventaja no aporta:", "options": ["Patrones concretos", "Apenas memoria", "Sencillo algoritmo", "Evitar sentencias control"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "Recursividad definir como:", "options": ["Flujo lineal", "Cualquier problema", "Flujo cíclico extrayendo", "Flujo cíclico dividiendo"], "correct": 3, "explanation": "La respuesta correcta es D."},
            {"q": "Orden complejidad código:", "options": ["O(1)", "O(log n)", "O(n3)", "O(n log n)"], "correct": 1, "explanation": "La respuesta correcta es B."}
          ]
        },

        unidad12: {
          name: "Unidad 12: Ficheros",
          questions: [
            {"q": "Comprobar fichero existe:", "options": ["isFile()", "isDirectory()", "exists()", "getPath()"], "correct": 2, "explanation": "La respuesta correcta es C."},
            {"q": "Con FileWriter podemos:", "options": ["Caracteres", "Bytes", "Predeterminado", "Bytes leer"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "Flujo se denomina:", "options": ["Flush", "Stream", "Eoa", "Ninguna"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "Ficheros tipo datos:", "options": ["Bytes o caracteres", "Enteros", "Cadena", "Hexadecimal"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "Serialización consiste en:", "options": ["Datos primitivo", "Objetos", "Serie datos", "Cadena"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "Etapas flujos:", "options": ["Transmisión y cierre", "Apertura transmisión cierre", "Apertura transmisión", "Ninguna"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "Flujos predeterminados:", "options": ["Ya creados", "No habituales", "Crearlos definir", "Ninguna"], "correct": 0, "explanation": "La respuesta correcta es A."},
            {"q": "Crear directorio usaremos:", "options": ["createNewFile()", "createDirectory()", "File(String ruta)", "mkdir()"], "correct": 3, "explanation": "La respuesta correcta es D."},
            {"q": "Acceso directo fichero:", "options": ["FileReader", "RandomAccessFile", "BufferedReader", "File"], "correct": 1, "explanation": "La respuesta correcta es B."},
            {"q": "Clasificaciones flujos:", "options": ["Tipo dirección acceso", "Canal medio codificación", "Uso destinado", "Acceso"], "correct": 0, "explanation": "La respuesta correcta es A."}
          ]
        },

        unidad13: {
          name: "Unidad 13: JPA",
          questions: [
  {
    q: "¿Qué es JPA?",
    options: [
      "Un lenguaje de programación.",
      "Un conjunto de herramientas para trabajar la persistencia en base de datos en Java.",
      "Un conjunto de herramientas para trabajar la persistencia en base de datos en cualquier plataforma.",
      "Ninguna de las anteriores."
    ],
    correct: 1,
    explanation: "La respuesta correcta es la B. Un conjunto de herramientas para trabajar la persistencia en base de datos en Java.\nSegún el material de estudio, JPA (Java Persistence API) se define como un API o un conjunto de herramientas utilizado para trabajar con la persistencia en bases de datos específicamente para Java.\nEs el estándar establecido para manejar y persistir datos relacionales a objetos directamente desde este lenguaje de programación.\n\nA modo de aclaración sobre las demás opciones:\nLa opción A es incorrecta porque JPA no es un lenguaje de programación por sí mismo, sino una Interfaz de Programación de Aplicaciones (API) orientada al lenguaje Java.\n(Para las consultas dentro de JPA se suele utilizar el lenguaje JPQL).\nLa opción C es incorrecta porque JPA está diseñado y estandarizado específicamente para el ecosistema de Java, no para trabajar la persistencia de forma nativa en \"cualquier plataforma\" o lenguaje."
  },
  {
    q: "¿Qué gestor de base de datos aplica orientado a objetos?",
    options: [
      "Microsoft SQL Server",
      "MySQL",
      "ObjectDB",
      "MongoDB"
    ],
    correct: 2,
    explanation: "La respuesta correcta es la C. ObjectDB.\nSegún el material de estudio, ObjectDB es uno de los gestores que aplica el modelo de base de datos orientada a objetos (BDOO), y es la herramienta específica que se utiliza en el temario para aprender a trabajar la persistencia de objetos en Java.\nOtros ejemplos de este tipo de bases de datos mencionados en el texto son Db4o, Objectivity/DB, ObjectStore, GemStone/S y Wakanda.\n\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLas opciones A (Microsoft SQL Server) y B (MySQL) son incorrectas porque se definen en el temario explícitamente como gestores de bases de datos relacionales.\nLa opción D (MongoDB) es incorrecta, ya que no forma parte de los ejemplos de bases de datos orientadas a objetos citados en el material."
  },
  {
    q: "Con el método .createQuery(String) podemos:",
    options: [
      "Crear una query de consulta, actualización o borrado pasada como String por parametro.",
      "Crear una query de solo consulta pasada como String por parametro.",
      "Crear una query de inserción pasada como String por parametro.",
      "Crear una query de actualización o borrado pasada como String por parametro."
    ],
    correct: 0,
    explanation: "La respuesta correcta es la A. Crear una query de consulta, actualización o borrado pasada como String por parametro.\nSegún el material de estudio, el método .createQuery(String) se utiliza para construir una query dinámica en tiempo de ejecución, pasando como parámetro una cadena de texto (String) con la sentencia escrita en lenguaje JPQL.\nEste lenguaje soporta SELECT, UPDATE y DELETE.\n\nA modo de aclaración:\nLa opción B es falsa porque no se limita solo a consultas.\nLa opción C es falsa porque la inserción se realiza con .persist().\nLa opción D es falsa porque es incompleta."
  },
  {
    q: "¿Qué campos de una clase no se guardarán en una base de datos orientada a objetos?",
    options: [
      "Todos los campos se guardan siempre.",
      "Los campos que se declaren como final, static, transient o lleve la etiqueta @Transient",
      "Los que tengan visibilidad privada.",
      "Los que lleven la etiqueta @FieldNotIncluded."
    ],
    correct: 1,
    explanation: "La respuesta correcta es la B. Los campos que se declaren como final, static, transient o lleve la etiqueta @Transient.\nSegún el material de estudio, estos campos no son persistentes.\n\nAclaraciones:\nLa opción A es falsa.\nLa opción C es falsa (deben ser privados).\nLa opción D es falsa porque no existe esa anotación."
  },
  {
    q: "¿Qué característica es correcta en una base de datos orientada a objetos?",
    options: [
      "Su acceso es lento.",
      "Usan los mismos tipos de datos que el lenguaje de programación.",
      "Se basan en relaciones.",
      "Trabaja con tablas."
    ],
    correct: 1,
    explanation: "La respuesta correcta es la B.\nSegún el material, usan los mismos tipos de datos del lenguaje.\n\nAclaraciones:\nLa opción A es falsa (son más rápidas).\nC y D pertenecen a bases relacionales."
  },
  {
    q: "¿Qué condición debe cumplir una clase para persistirse?",
    options: [
      "Tiene que tener un constructor sin argumentos.",
      "Los campos deben ser públicos.",
      "No necesita getters/setters.",
      "No debe ser serializable."
    ],
    correct: 0,
    explanation: "La respuesta correcta es la A.\nDebe tener constructor sin argumentos, campos privados, getters/setters y ser serializable.\n\nLas demás opciones son falsas."
  },
  {
    q: "¿Qué hace el método .persist(Object)?",
    options: [
      "Mantiene el objeto en memoria.",
      "Aplica serialización.",
      "Inicia una transacción.",
      "Guardar el objeto en la base de datos."
    ],
    correct: 3,
    explanation: "La respuesta correcta es la D.\nEl método .persist() guarda el objeto en la base de datos.\n\nLas demás opciones son incorrectas."
  },
  {
    q: "¿Qué hace entityManager.find(Persona.class, 1)?",
    options: [
      "Busca una Persona con clave primaria 1.",
      "Busca una persona.",
      "Sustituye una persona.",
      "Ninguna."
    ],
    correct: 0,
    explanation: "La respuesta correcta es la A. Busca en la base de datos un elemento Persona que tiene como clave primaria el valor 1.\nSegún el material de estudio, se utiliza el método .find(clase, identificador).\n\nLas demás opciones son incorrectas."
  },
  {
    q: "JPQL se puede usar para",
    options: [
      "Definir objetos.",
      "Inserción de datos.",
      "Consultas, actualización y borrado de datos.",
      "Ninguna."
    ],
    correct: 2,
    explanation: "La respuesta correcta es la C.\nJPQL permite SELECT, UPDATE y DELETE.\n\nLas demás opciones son incorrectas."
  },
  {
    q: "Una base de datos orientada a objetos...",
    options: [
      "La información la representa en forma de objetos.",
      "Aplica el paradigma orientado a objetos.",
      "Se caracteriza por ser NoSQL.",
      "Todas las opciones son correctas."
    ],
    correct: 3,
    explanation: "La respuesta correcta es la D.\nCumple todas esas características."
  }
]
        },

        unidad14: {
          name: "Unidad 14: SQL",
          questions: [
            {"q": "DELETE SQL:", "options": ["Borrar filas", "Borrar registros", "Borrar columnas", "Las dos primeras son correctas"], "correct": 3, "explanation": "La respuesta correcta es D: Las dos primeras son correctas. La opción C es incorrecta, ya que la sentencia DELETE de SQL interviene sobre los registros/filas y no se utiliza para borrar las columnas que representan la estructura o los campos de la tabla."},
            {"q": "Existen claves primarias o PK dentro de una tabla que identifican inequívocamente:", "options": ["Campo", "Columna", "Registro", "Ninguna de las anteriores es correcta."], "correct": 2, "explanation": "La respuesta correcta es C: Un registro. Dentro de esta tabla, existen claves primarias o PK que sirven exactamente para identificar inequívocamente un registro.\n\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\n\nLas opciones A y B son falsas, debido a que un campo y una columna son el mismo concepto (representan la estructura o los atributos de la tabla), mientras que la clave primaria (PK) se utiliza para distinguir y localizar individualmente cada registro o fila completa de datos almacenada en esa tabla."},
            {"q": "Lenguaje de programación para la definición de estructuras de datos, empleado en los sistemas gestores de bases de datos:", "options": ["DDL", "DML", "DCL", "Todas las anteriores son incorrectas"], "correct": 0, "explanation": "La respuesta correcta es A: DDL. Según el material de estudio, DDL (Data Definition Language o Lenguaje de Definición de Datos) se describe textualmente como el \"lenguaje de programación para la definición de estructuras de datos, empleado en los sistemas gestores de bases de datos\".\n\nMediante el uso de sentencias DDL es posible realizar la definición inicial de los datos, como crear las bases de datos, las tablas y las vistas.\n\nA modo de aclaración sobre por qué la alternativa más cercana es incorrecta:\n\nLa opción B (DML) es falsa en este contexto, ya que DML (Data Manipulation Language o Lenguaje de Modificación de Datos) no crea la estructura, sino que se emplea para manipular o modificar los datos dentro de una estructura ya creada (es decir, para añadir, cambiar o eliminar la información contenida en las tablas)."},
            {"q": "Los drivers son librerías en ficheros .jar:", "options": [".jar", ".xml", ".iso", "Ninguna de las anteriores es correcta"], "correct": 0, "explanation": "La respuesta correcta es A: .jar. Según el material de estudio, para establecer cualquier conexión a una base de datos desde Java, es necesario usar un driver específico que dependerá del tipo de base de datos y del proveedor.\n\nEl temario especifica textualmente que \"los drivers son librerías en ficheros .jar\" que se descargan desde las páginas web oficiales de cada proveedor y se añaden al proyecto (por ejemplo, en el Java Build Path) para dotarlo de la funcionalidad necesaria.\n\nA modo de aclaración sobre las demás opciones:\n\nLas extensiones .xml (archivos de marcas/configuración) e .iso (imágenes de discos) son incorrectas, ya que en el ecosistema Java las librerías empaquetadas (como es el caso de los drivers de conexión JDBC) utilizan siempre la extensión de archivo comprimido Java Archive (.jar)."},
            {"q": "MariaDB es:", "options": ["Librería", "Un gestor de base de datos relacionales.", "Objeto SQL", "Un tipo de base de datos orientada a objetos."], "correct": 1, "explanation": "La respuesta correcta es B: Un gestor de base de datos relacionales. A modo de aclaración sobre las demás opciones:\n\nLa opción A es incorrecta, porque en este contexto una \"librería\" hace referencia al archivo empaquetado (el driver .jar, como mariadb-java-client-3.0.5.jar) que se añade al proyecto Java para establecer la conexión, pero MariaDB en sí mismo es el servidor/gestor completo.\n\nLa opción C es falsa, ya que SQL (Structured Query Language) es el lenguaje estandarizado que se emplea para interactuar con la base de datos (mediante sentencias como SELECT, INSERT o UPDATE), no un objeto.\n\nLa opción D es falsa, debido a que el material hace una distinción muy clara entre las bases de datos orientadas a objetos (como ObjectDB, abordada en un tema anterior) y las bases de datos relacionales (como MariaDB), las cuales estructuran su información mediante tablas, columnas y filas."},
            {"q": "MariaDB permite introducir comandos SQL mediante:", "options": ["Client Command", "Command MySQL", "MySQL Client", "Ninguna de las anteriores es correcta"], "correct": 2, "explanation": "La respuesta correcta es C: MySQL Client. Según el material de estudio, una vez instalado el servidor de MariaDB, esta plataforma contiene y permite hacer uso de la herramienta MySQL Client.\n\nEste programa se define explícitamente como \"un cliente de tipo consola para introducir comandos SQL para operar con las bases de datos\", permitiendo trabajar directamente con el servidor para crear bases de datos, tablas, etc.\n\nA modo de aclaración sobre las demás opciones:\n\nLas opciones A y B son incorrectas porque \"Client Command\" y \"Command MySQL\" no son los nombres reales de la herramienta de consola incluida con MariaDB para este fin."},
            {"q": "Para establecer cualquier conexión a una base de datos desde Java, es necesario:", "options": ["Emplear un driver específico", "Emplear el objeto statement.", "Emplear una librería con ficheros .iso.", "Todas incorrectas"], "correct": 0, "explanation": "La respuesta correcta es A: Emplear un driver específico. A modo de aclaración sobre las demás opciones:\n\nLa opción B es incorrecta, ya que el objeto Statement (declaración de trabajo) se crea a partir de la conexión una vez que esta ya ha sido exitosamente establecida; su función es permitir la ejecución de operaciones y sentencias SQL sobre la base de datos, no iniciar la conexión.\n\nLa opción C es incorrecta, debido a que el temario especifica textualmente que \"los drivers son librerías en ficheros .jar\", por lo que utilizan la extensión nativa de Java y no el formato .iso."},
            {"q": "Podemos ejecutar sentencias SQL en las bases de datos mediante el empleo de:", "options": ["El Objeto statement", "ElObjeto abstract", "El Objeto execute", "Todas incorrectas"], "correct": 0, "explanation": "La respuesta correcta es A: El objeto statement. A modo de aclaración sobre por qué las demás opciones son incorrectas:\n\nLas opciones B y C son falsas porque en la API de conexión a bases de datos de Java (JDBC) no se utilizan objetos llamados \"abstract\" ni \"execute\" para este propósito. Cabe destacar que execute, executeQuery o executeUpdate son los métodos (las acciones) que se invocan a través del objeto Statement para lanzar la sentencia, pero no son el objeto en sí."},
            {"q": "Tras emplear setAutoCommit(false) deberemos emplear:", "options": ["commit()", "rollback()", "Las dos anteriores son correctas", "Todas incorrectas"], "correct": 2, "explanation": "La respuesta correcta es C: Las dos anteriores son correctas. Se empleará commit() si todas las operaciones del bloque se han ejecutado correctamente para guardar los cambios de forma definitiva.\n\nSe empleará rollback() en caso de que ocurra algún fallo (capturado generalmente en un bloque catch), para cancelar la transacción y revertir los cambios realizados hasta ese momento.\n\nAl ser necesarios y correctos ambos métodos para la gestión manual de la transacción, la opción C es la adecuada."},
            {"q": "UPDATE SQL permite:", "options": ["Introducir nuevas filas", "Actualizar filas", "Introducir columnas", "Actualizar columnas"], "correct": 1, "explanation": "La respuesta correcta es B: Actualizar filas. A modo de aclaración sobre por qué las demás opciones son incorrectas:\n\nLa opción A es falsa, ya que para introducir nuevas filas en las tablas de la base de datos se emplea la sentencia de inserción INSERT INTO, no UPDATE.\n\nLas opciones C y D son falsas, porque UPDATE forma parte del Lenguaje de Modificación de Datos (DML) y sirve para manipular la información contenida en las filas/registros existentes. No se utiliza para modificar la estructura de la tabla (como introducir o actualizar la estructura de las columnas), lo cual correspondería a sentencias del Lenguaje de Definición de Datos (DDL). Aunque con UPDATE se modifiquen los valores que toman ciertas columnas en un registro, la acción en sí se define como actualizar la fila."}
          ]
        },

        unidad15: {
          name: "Unidad 15: Interfaz gráfica",
           questions: [
            {"q": "AWT:", "options": ["A. Es una librería anterior que ha permitido la creación de otras como Swing.", "B. AWT y Swing se encuentran al mismo nivel, sin influenciarse la una a la otra.", "C. AWT es una evolución de Swing.", "D. Ninguna de las anteriores es correcta."], "correct": 0, "explanation": "Según el material de estudio, AWT (Abstract Window Toolkit) es la librería más nativa de Java para la creación de interfaces gráficas. Posteriormente, se desarrolló la librería Swing, la cual se define explícitamente en el temario como \"una evolución de AWT que incorpora nuevas herramientas al tiempo que elimina algunas limitaciones\". Por lo tanto, AWT es la tecnología predecesora sobre la que se construyó Swing.\n\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\n\nLa opción B es falsa, ya que no se encuentran al mismo nivel ni son independientes; Swing es una evolución directa que parte de la base de AWT.\n\nLa opción C es falsa, porque afirma exactamente lo contrario a la realidad: es Swing la que es una evolución de AWT, y no al revés."},
            {"q": "Coloca cada componente horizontalmente de izquierda a derecha. Si sobrepasa la fila comienza en la siguiente:", "options": ["A. BorderLayout.", "B. CardLayout.", "C. FlowLayout.", "D. GridLayout."], "correct": 2, "explanation": "Según el material de estudio, el administrador de componentes FlowLayout se define textualmente como aquel que \"coloca cada componente horizontalmente de izquierda a derecha. Si sobrepasa la fila comienza en la siguiente\".\n\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\n\nLa opción A es falsa, ya que BorderLayout no organiza los elementos en filas, sino que los distribuye en el centro de la ventana y en sus cuatro bordes (identificados como NORTH, SOUTH, EAST y WEST).\n\nLa opción B es falsa, debido a que CardLayout gestiona los componentes superponiéndolos en el mismo espacio, permitiendo mostrarlos uno tras otro como si fuera una baraja de cartas haciendo uso del método .next().\n\nLa opción D es falsa, porque aunque GridLayout también distribuye los componentes de izquierda a derecha, obliga a que estos sigan estrictamente \"el patrón de una tabla\", encajándolos en una cuadrícula de filas y columnas predefinidas."},
            {"q": "Deberemos instalar WindowBuilder si:", "options": ["A. NetBeans no cuenta con un módulo para la herramienta gráfica.", "B. Eclipse no cuenta con un módulo para la herramienta gráfica.", "C. MySQL no cuenta con un módulo para la herramienta gráfica.", "D. Ninguna de las anteriores."], "correct": 1, "explanation": "Según el material de estudio, el entorno de desarrollo NetBeans ya trae incorporado por defecto un módulo que ofrece la herramienta gráfica para el desarrollo de interfaces. Sin embargo, en el caso de Eclipse, si no lleva el módulo instalado, será necesario instalar la herramienta WindowBuilder desde el Marketplace ubicado en el menú de ayuda.\n\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\n\nLa opción A es falsa porque NetBeans no necesita instalación adicional para esto, ya que la herramienta gráfica viene incorporada por defecto en el propio IDE.\n\nLa opción C es falsa ya que MySQL es un gestor de bases de datos relacionales y no un entorno de desarrollo integrado (IDE) de Java orientado a la creación de interfaces gráficas mediante herramientas como WindowBuilder."},
            {"q": "Elemento que capta un evento producido, por ejemplo, pulsando un botón, e inicia la acción consecuente:", "options": ["A. Driver.", "B. Listener.", "C. Writer.", "D. Todas las anteriores son incorrectas."], "correct": 1, "explanation": "Según el material de estudio, concretamente en los conceptos fundamentales del tema de creación de interfaces gráficas, un Listener (o escuchador) se define textualmente como el \"elemento que capta un evento producido, por ejemplo, pulsando un botón, e inicia la acción consecuente\". Para que un evento se lleve a cabo, se necesita que un listener capture la interacción del usuario y ejecute la funcionalidad asociada.\n\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\n\nLa opción A es falsa, ya que un Driver, como vimos en temas anteriores, es una librería (fichero .jar) necesaria para establecer una conexión a una base de datos desde Java, no para interactuar con botones de una interfaz.\n\nLa opción C es falsa, debido a que Writer (y sus clases derivadas como FileWriter o PrintWriter) se refiere a las herramientas empleadas para manejar los flujos de salida o escritura de información (por ejemplo, guardar datos en un archivo de texto), y no a la gestión de eventos visuales."},
            {"q": "GridBagLayout:", "options": ["A. No existe.", "B. Es de AWT.", "C. Es de Swing.", "D. Aparece en ambos."], "correct": 2, "explanation": "Según el material de estudio, en el apartado dedicado a la librería Swing, se explica que aunque esta librería hereda y utiliza los mismos manejadores (layouts) que AWT, también incorpora nuevos layouts más avanzados. El resumen de la unidad especifica textualmente que con Swing \"Se añaden layout como GridBagLayout, permitiendo colocar cada componente en la celda deseada de una cuadricula ya hecha\". Por lo tanto, el temario lo clasifica y presenta como una herramienta propia añadida en la evolución hacia Swing, destacando que es mucho más flexible que el GridLayout tradicional de AWT."},
            {"q": "Los componentes con una letra J delante del nombre:", "options": ["A. Necesitan la instalación de ambas librerías AWT y Swing.", "B. Requieren ser incorporados mediante código.", "C. Son componentes de prueba, se verán en la IDE, pero no en la interfaz real.", "D. Ninguna de las anteriores es correcta."], "correct": 3, "explanation": "Según el material de estudio, los componentes que llevan una letra \"J\" delante de su nombre (como JButton, JFrame o JPanel) indican simplemente que pertenecen a la librería gráfica Swing, diferenciándose así de sus homólogos en la librería más antigua AWT (como Button o Frame).\n\nA modo de aclaración sobre por qué las demás opciones son falsas:\n\nLa opción A es falsa, ya que tanto AWT como Swing forman parte de los paquetes estándar de Java (java.awt y javax.swing) y no requieren una \"instalación\" externa conjunta. Simplemente se importan en el código según se necesiten.\n\nLa opción B es falsa, debido a que los componentes con la letra J (de Swing) no requieren obligatoriamente ser incorporados escribiendo código. Entornos de desarrollo como NetBeans o Eclipse (con WindowBuilder) disponen de herramientas gráficas con una paleta que permite añadirlos mediante \"arrastrar y soltar\" (drag and drop) en una pestaña de diseño visual.\n\nLa opción C es falsa, porque los componentes de Swing son los elementos definitivos que estructuran y dotan de funcionalidad a la interfaz gráfica real de la aplicación, no son meros componentes de prueba."},
            {"q": "Los eventos de Swing se diferencian en los de AWT en que:", "options": ["A. Deben incluir una J inicial.", "B. No requieren listener.", "C. Requieren que se diseñen en la pestaña Design.", "D. Ninguna de las anteriores es correcta."], "correct": 3, "explanation": "Según el material de estudio, concretamente en el apartado dedicado a los eventos en la librería Swing, se especifica textualmente que \"El procedimiento de eventos es idéntico a AWT\". Por lo tanto, el manejo de eventos no presenta las diferencias descritas en ninguna de las otras alternativas.\n\nA modo de aclaración sobre por qué las demás opciones son falsas:\n\nLa opción A es falsa, ya que la letra \"J\" inicial se utiliza exclusivamente para nombrar y diferenciar los componentes o contenedores visuales de Swing (como JButton o JFrame) con respecto a los de AWT, pero esta regla no se aplica a las clases de los eventos (que siguen siendo los estándares de Java como ActionEvent, WindowEvent, etc.).\n\nLa opción B es falsa, debido a que el temario detalla que, para que un evento inicie una acción tras la interacción del usuario, siempre se requiere añadir un capturador o listener (como ActionListener), y esto es exactamente igual tanto en AWT como en Swing.\n\nLa opción C es falsa, porque aunque el uso de herramientas gráficas como WindowBuilder facilita el diseño visual arrastrando elementos en la pestaña Design, todo se puede programar e incorporar también de forma manual directamente escribiendo código en la pestaña Source."},
            {"q": "MotifLookAndFeel es un:", "options": ["A. Layout.", "B. Componente.", "C. Estilo para controles.", "D. Ninguna de las anteriores es correcta."], "correct": 2, "explanation": "Según el material de estudio, dentro del apartado dedicado a la modificación de la apariencia en la librería Swing, se explica que esta librería permite cambiar el aspecto con el que se muestran los controles mediante una característica denominada Look & Feel. El temario lista explícitamente a MotifLookAndFeel como uno de los 5 estilos predefinidos a los que es posible cambiar la apariencia de la interfaz.\n\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\n\nLa opción A es falsa, ya que un Layout (como BorderLayout o FlowLayout) es un manejador utilizado para organizar y posicionar los elementos dentro de la ventana, no para darles estilo o color.\n\nLa opción B es falsa, debido a que los componentes son los propios elementos interactivos o visuales (como JButton, JLabel o JTextField) sobre los cuales se aplican estos estilos."},
            {"q": "No es un tipo de control de menús:", "options": ["A. MenuBar.", "B. ShortMenuCut.", "C. MenuItem.", "D. PopupMenu."], "correct": 1, "explanation": "Según el material de estudio, concretamente en el apartado dedicado a la creación de menús dentro de la librería gráfica, se detalla que la clase principal para desarrollarlos es MenuComponent y que sus posibles controles son: MenuBar, Menu, MenuItem, MenuShortcut, PopupMenu y CheckboxMenuItem.\n\nA modo de aclaración:\n\nEl nombre correcto del control para gestionar atajos de teclado en los menús es MenuShortcut y no ShortMenuCut (que es un término inventado o mal escrito). Por lo tanto, al no existir, es la opción correcta para esta pregunta.\n\nLas demás alternativas (MenuBar, MenuItem y PopupMenu) sí son controles reales y válidos para la gestión de menús."},
            {"q": "Una interfaz gráfica permite emplear:", "options": ["A. Listener.", "B. Drag and drop.", "C. JTree.", "D. Ninguna de las anteriores."], "correct": 1, "explanation": "Según el material de estudio, concretamente en el apartado dedicado a las Herramientas gráficas, se explica que desarrollar interfaces gráficas programando manualmente todo el código es una tarea costosa. Para evitar esto, los entornos de desarrollo (como Eclipse o NetBeans) disponen de un módulo de diseño visual (una interfaz gráfica de desarrollo en la pestaña Design) que nos facilita esta tarea \"permitiendo hacer drag a drop (arrastrar y soltar) de los controles\" desde una paleta directamente sobre la ventana, generando el código de forma automática. En las diapositivas de la unidad se destaca textualmente como una de sus características principales: \"Permiten el drag and drop\".\n\nA modo de aclaración sobre las demás opciones:\n\nLa opción A (Listener) es incorrecta como característica definitoria de la creación mediante interfaz gráfica, ya que un Listener (escuchador) es un elemento interno del código lógico que se emplea para captar un evento (como pulsar un botón) e iniciar una acción consecuente, independientemente de si la interfaz se hizo de manera visual o manual.\n\nLa opción C (JTree) es incorrecta, porque JTree no es una funcionalidad, técnica o herramienta en sí, sino un control o componente específico de la librería Swing que sirve para representar una estructura de datos en forma de jerarquía o árbol."}
          ] 
        }
      }
    }
  };

  const handleAnswerSelect = (questionIndex, optionIndex) => {
    if (showExplanation) return;
    
    setAnswers({
      ...answers,
      [questionIndex]: optionIndex
    });
  };

  const checkAnswer = () => {
    if (answers[currentQuestion] === undefined) {
      alert("Por favor, selecciona una respuesta");
      return;
    }
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    const exams = subjects[selectedSubject].exams;
    const exam = exams[selectedExam];
    if (currentQuestion < exam.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowExplanation(Object.keys(answers).includes(String(currentQuestion - 1)));
    }
  };

  const handleSubmit = () => {
    const exams = subjects[selectedSubject].exams;
    const exam = exams[selectedExam];
    let correctCount = 0;

    exam.questions.forEach((q, i) => {
      if (answers[i] === q.correct) correctCount++;
    });

    setScore(correctCount);
    setShowResults(true);
  };

  const resetExam = () => {
    setAnswers({});
    setShowResults(false);
    setShowExplanation(false);
    setScore(0);
    setCurrentQuestion(0);
  };

  const selectExam = (examKey) => {
    setSelectedExam(examKey);
    resetExam();
  };

  const selectSubject = (subjectKey) => {
    setSelectedSubject(subjectKey);
    setSelectedExam(null);
    resetExam();
  };

  const backToSubjects = () => {
    setSelectedSubject(null);
    setSelectedExam(null);
    resetExam();
  };

  const backToExams = () => {
    setSelectedExam(null);
    resetExam();
  };

  // Pantalla de selección de asignatura
  if (!selectedSubject) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <BookOpen className="w-20 h-20 mx-auto mb-6 text-indigo-600" />
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Exámenes
            </h1>
            <p className="text-xl text-gray-600">Selecciona una asignatura para comenzar</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(subjects).map(([key, subject]) => (
              <button
                key={key}
                onClick={() => selectSubject(key)}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-105 text-left border-2 border-transparent hover:border-indigo-400 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-indigo-100 p-3 rounded-lg group-hover:bg-indigo-200 transition-colors">
                    <BookOpen className="w-8 h-8 text-indigo-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {subject.name}
                </h3>
                <p className="text-gray-600 mb-4">{subject.description}</p>
                <div className="flex items-center text-indigo-600 font-semibold group-hover:translate-x-2 transition-transform">
                  Acceder <ChevronRight className="ml-2 w-5 h-5" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Pantalla de selección de examen
  if (!selectedExam) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={backToSubjects}
                className="text-white/90 hover:text-white font-semibold flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                Volver
              </button>
            </div>
            <BookOpen className="w-20 h-20 mx-auto mb-6 text-indigo-600" />
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              {subjects[selectedSubject].name}
            </h1>
            <p className="text-xl text-gray-600">Elige un test para comenzar</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(subjects[selectedSubject].exams).map(([key, exam]) => (
              <button
                key={key}
                onClick={() => selectExam(key)}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:scale-105 text-left border-2 border-transparent hover:border-indigo-400 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-indigo-100 p-3 rounded-lg group-hover:bg-indigo-200 transition-colors">
                    <BookOpen className="w-8 h-8 text-indigo-600" />
                  </div>
                  <span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                    {exam.questions.length} preguntas
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {exam.name}
                </h3>
                <div className="flex items-center text-indigo-600 font-semibold group-hover:translate-x-2 transition-transform">
                  Comenzar test <ChevronRight className="ml-2 w-5 h-5" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Pantalla de examen (preguntas)
  const exams = subjects[selectedSubject].exams;
  const exam = exams[selectedExam];
  const currentQ = exam.questions[currentQuestion];
  const isAnswered = answers[currentQuestion] !== undefined;
  const isCorrect = isAnswered && answers[currentQuestion] === currentQ.correct;
  const allQuestionsAnswered = Object.keys(answers).length === exam.questions.length;

  if (showResults) {
    const percentage = ((score / exam.questions.length) * 100).toFixed(1);
    const passed = percentage >= 50;

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-12">
            <div className="text-center mb-10">
              <div className={`inline-block p-6 rounded-full mb-6 ${passed ? 'bg-green-100' : 'bg-orange-100'}`}>
                <Award className={`w-24 h-24 ${passed ? "text-green-500" : "text-orange-500"}`} />
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {passed ? "¡Excelente trabajo!" : "Sigue practicando"}
              </h2>
              <p className={`text-7xl font-bold mb-6 ${passed ? 'text-green-500' : 'text-orange-500'}`}>
                {percentage}%
              </p>
              <p className="text-2xl text-gray-600 mb-2">
                {score} de {exam.questions.length} respuestas correctas
              </p>
              <p className="text-gray-500">
                {passed ? "¡Has aprobado el test!" : "Necesitas al menos 50% para aprobar"}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-green-50 p-6 rounded-xl text-center">
                <Check className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-3xl font-bold text-green-600 mb-1">{score}</p>
                <p className="text-sm text-gray-600">Correctas</p>
              </div>
              <div className="bg-red-50 p-6 rounded-xl text-center">
                <X className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <p className="text-3xl font-bold text-red-600 mb-1">
                  {exam.questions.length - score}
                </p>
                <p className="text-sm text-gray-600">Incorrectas</p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-xl text-center">
                <BookOpen className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                <p className="text-3xl font-bold text-indigo-600 mb-1">
                  {exam.questions.length}
                </p>
                <p className="text-sm text-gray-600">Total</p>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={resetExam}
                className="flex-1 bg-indigo-600 text-white py-4 px-6 rounded-xl hover:bg-indigo-700 transition-colors font-semibold flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
              >
                <RotateCcw className="w-5 h-5" />
                Reintentar examen
              </button>
              <button
                onClick={() => setSelectedExam(null)}
                className="flex-1 bg-gray-600 text-white py-4 px-6 rounded-xl hover:bg-gray-700 transition-colors font-semibold shadow-lg hover:shadow-xl"
              >
                Elegir otro examen
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-bold">{exam.name}</h2>
              <button
                onClick={() => setSelectedExam(null)}
                className="text-white/90 hover:text-white font-semibold flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                Volver
              </button>
            </div>
            
            <div className="flex justify-between items-center text-sm mb-3">
              <span className="bg-white/20 px-4 py-2 rounded-lg">
                Pregunta {currentQuestion + 1} de {exam.questions.length}
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-lg">
                {Object.keys(answers).length} respondidas
              </span>
            </div>
            
            <div className="w-full bg-white/20 rounded-full h-3">
              <div
                className="bg-white h-3 rounded-full transition-all duration-500 shadow-lg"
                style={{
                  width: `${((currentQuestion + 1) / exam.questions.length) * 100}%`
                }}
              />
            </div>
          </div>

          {/* Question Content */}
          <div className="p-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 leading-relaxed">
              {currentQ.q}
            </h3>
            
            {currentQ.image && (
              <div className="mb-8 flex justify-center">
                <img 
                  src={currentQ.image} 
                  alt="Código de ejemplo" 
                  className="max-w-full h-auto rounded-lg shadow-lg border-2 border-gray-200"
                />
              </div>
            )}
            
            <div className="space-y-4 mb-8">
              {currentQ.options.map((option, i) => {
                const isSelected = answers[currentQuestion] === i;
                const isCorrectOption = i === currentQ.correct;
                const showCorrect = showExplanation && isCorrectOption;
                const showIncorrect = showExplanation && isSelected && !isCorrectOption;

                return (
                  <button
                    key={i}
                    onClick={() => handleAnswerSelect(currentQuestion, i)}
                    disabled={showExplanation}
                    className={`w-full text-left p-6 rounded-xl border-2 transition-all ${
                      showCorrect
                        ? "border-green-500 bg-green-50 shadow-lg"
                        : showIncorrect
                        ? "border-red-500 bg-red-50 shadow-lg"
                        : isSelected
                        ? "border-indigo-600 bg-indigo-50 shadow-md scale-105"
                        : "border-gray-200 hover:border-indigo-300 hover:bg-gray-50 hover:shadow-md"
                    } ${showExplanation ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg ${
                          showCorrect
                            ? "bg-green-500 text-white"
                            : showIncorrect
                            ? "bg-red-500 text-white"
                            : isSelected
                            ? "bg-indigo-600 text-white"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {String.fromCharCode(65 + i)}
                      </span>
                      <span className={`flex-1 text-lg ${isSelected && !showExplanation ? 'font-semibold' : ''}`}>
                        {option}
                      </span>
                      {showCorrect && (
                        <Check className="w-6 h-6 text-green-600 flex-shrink-0" />
                      )}
                      {showIncorrect && (
                        <X className="w-6 h-6 text-red-600 flex-shrink-0" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Explanation */}
            {showExplanation && (
              <div className={`p-6 rounded-xl border-l-4 mb-8 ${
                isCorrect 
                  ? 'bg-green-50 border-green-500' 
                  : 'bg-orange-50 border-orange-500'
              }`}>
                <div className="flex items-start gap-3 mb-3">
                  {isCorrect ? (
                    <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  ) : (
                    <X className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  )}
                  <div>
                    <h4 className={`text-lg font-bold mb-2 ${
                      isCorrect ? 'text-green-800' : 'text-orange-800'
                    }`}>
                      {isCorrect ? '¡Correcto!' : 'Respuesta incorrecta'}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Respuesta correcta:</strong> {String.fromCharCode(65 + currentQ.correct)}) {currentQ.options[currentQ.correct]}
                    </p>
                  </div>
                </div>
                <div className="ml-9 mt-4 p-4 bg-white rounded-lg">
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-indigo-600">📖 Explicación:</strong> {currentQ.explanation}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="bg-gray-50 p-8 flex justify-between items-center border-t-2 border-gray-100">
            <button
              onClick={previousQuestion}
              disabled={currentQuestion === 0}
              className="bg-gray-600 text-white py-3 px-8 rounded-xl hover:bg-gray-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-md hover:shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
              Anterior
            </button>

            <div className="flex gap-4">
              {!showExplanation && isAnswered && (
                <button
                  onClick={checkAnswer}
                  className="bg-green-600 text-white py-3 px-8 rounded-xl hover:bg-green-700 transition-colors font-semibold flex items-center gap-2 shadow-md hover:shadow-lg"
                >
                  <Check className="w-5 h-5" />
                  Comprobar
                </button>
              )}

              {showExplanation && currentQuestion < exam.questions.length - 1 && (
                <button
                  onClick={nextQuestion}
                  className="bg-indigo-600 text-white py-3 px-8 rounded-xl hover:bg-indigo-700 transition-colors font-semibold flex items-center gap-2 shadow-md hover:shadow-lg"
                >
                  Siguiente
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}

              {showExplanation && currentQuestion === exam.questions.length - 1 && allQuestionsAnswered && (
                <button
                  onClick={handleSubmit}
                  className="bg-purple-600 text-white py-3 px-8 rounded-xl hover:bg-purple-700 transition-colors font-semibold flex items-center gap-2 shadow-md hover:shadow-lg"
                >
                  <Award className="w-5 h-5" />
                  Ver Resultados
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamTestApp;
