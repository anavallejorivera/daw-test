const questions = [
  {
    q: "Choose the correct answer:",
    options: [
      "I think it going to be sunny tomorrow.",
      "She is going to visit her cousins next weekend.",
      "Look at those clouds! It goes to rain this afternoon.",
      "We are going to watch a movie last night."
    ],
    correct: 1,
    explanation: "La respuesta correcta es la B. She is going to visit her cousins next weekend.\nLa opción B es correcta porque sigue perfectamente la regla gramatical para hablar de planes personales o intenciones en el futuro con la estructura to be going to. Su estructura correcta es: sujeto + verbo to be + going to + forma base del verbo. En esta oración se cumple a la perfección: She + is + going to + visit.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es incorrecta porque le falta el verbo to be conjugado, es decir, is, antes de going to. La forma correcta sería: I think it is going to be sunny tomorrow.\nLa opción C es incorrecta porque la estructura goes to no es válida para formar este tiempo verbal. Lo correcto es utilizar el verbo to be más going to, por lo que debería ser: It is going to rain.\nLa opción D es incorrecta porque presenta una contradicción temporal, ya que utiliza una estructura de futuro junto con una expresión de tiempo que indica pasado, last night."
  },
  {
    q: "Choose the correct passive form of the sentence: \"They will publish the results next week\".",
    options: [
      "The results are published next week.",
      "The results were published next week.",
      "The results are being published next week.",
      "The results will be published next week."
    ],
    correct: 3,
    explanation: "La respuesta correcta es la D. The results will be published next week.\nPara transformar una oración de voz activa a voz pasiva, la regla gramatical establece que se debe utilizar el verbo to be conjugado en el mismo tiempo verbal que el verbo de la oración activa, seguido del participio pasado del verbo principal.\nLa opción D es correcta porque la oración original está en futuro simple. Por lo tanto, en la voz pasiva el verbo to be debe ir en futuro, will be, acompañado del participio pasado del verbo publish, que es published.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es incorrecta porque conjuga el verbo to be en presente simple.\nLa opción B es incorrecta porque utiliza el pasado simple, lo cual no tiene sentido con la expresión de tiempo futuro next week.\nLa opción C es incorrecta porque utiliza la estructura del presente continuo en voz pasiva."
  },
  {
    q: "Choose the correct prepositions of place for this sentence: \"The children are playing ________ the garden ________ the big tree.\"",
    options: [
      "in / under",
      "on / next to",
      "at / near to",
      "on / between"
    ],
    correct: 0,
    explanation: "La respuesta correcta es la A. in / under.\nLa opción A es correcta porque la preposición in se utiliza para hablar de un lugar que está dentro de un espacio más grande o delimitado, como in the garden. Por su parte, under significa debajo de algo, lo cual encaja perfectamente con la idea de jugar debajo del gran árbol.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLas opciones B y D son incorrectas en su primera parte, ya que on indica una ubicación sobre una superficie. Decir on the garden es incorrecto.\nLa opción C es incorrecta porque at se emplea para lugares donde se realiza una actividad específica o para puntos concretos, no para un espacio acotado como un jardín.\nLa opción D también es incorrecta en su segunda parte porque between se usa para algo que está en medio de dos elementos, y aquí solo se menciona un objeto, the big tree."
  },
  {
    q: "Choose the correct reported version of the following command: \"Close the door\", she said to me.",
    options: [
      "She said to close the door.",
      "She told me to close the door.",
      "She told me to closing the door.",
      "She said to closed the door."
    ],
    correct: 1,
    explanation: "La respuesta correcta es la B. She told me to close the door.\nPara transformar una orden o mandato de estilo directo a estilo indirecto, se debe utilizar la estructura told + objeto + to + verbo en infinitivo.\nLa opción B es correcta porque sigue exactamente esta estructura: She + told + me + to close.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLas opciones A y D son incorrectas porque utilizan said en lugar de told. Para reportar órdenes directas, el verbo introductorio correcto es told.\nLa opción D también es incorrecta porque pone el verbo en pasado, closed, después de to.\nLa opción C es incorrecta porque después de la partícula to el verbo debe ir en infinitivo, close, y no en gerundio, closing."
  },
  {
    q: "Choose the correct Second Conditional sentence.",
    options: [
      "If I have a million dollars, I buy a big house.",
      "If I had a million dollars, I would buy a big house.",
      "If I has a million dollars, I bought a big house.",
      "If I had a million dollars, I buy a big house."
    ],
    correct: 1,
    explanation: "La respuesta correcta es la B. If I had a million dollars, I would buy a big house.\nLa opción B es correcta porque sigue exactamente la regla gramatical del segundo condicional, que se utiliza para hablar de situaciones imaginarias, irreales o improbables en el presente o futuro. La estructura obligatoria es: If + pasado simple, would + verbo en infinitivo.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es incorrecta porque utiliza presente simple en ambas partes, estructura que no corresponde al segundo condicional.\nLa opción C es incorrecta porque contiene un error de conjugación, I has, y además utiliza bought en lugar de would buy.\nLa opción D es incorrecta porque la segunda parte no utiliza el auxiliar would."
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
    explanation: "La respuesta correcta es la C. They played football in the park last week.\nLa opción C es correcta porque sigue la regla del Past Simple para verbos regulares, añadiendo la terminación -ed al verbo play, y además incluye la expresión temporal last week, que sitúa la acción en el pasado.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es incorrecta porque mantiene el verbo watch en presente a pesar de usar yesterday.\nLa opción B es incorrecta porque study debería transformarse en studied, cambiando la y por i y añadiendo -ed.\nLa opción D es incorrecta porque stops está en presente simple, no en pasado."
  },
  {
    q: "Choose the correct sentence in the Present Simple:",
    options: [
      "She go always to the gym.",
      "She goes always to the gym.",
      "She always goes to the gym.",
      "She always go to the gym."
    ],
    correct: 2,
    explanation: "La respuesta correcta es la C. She always goes to the gym.\nLa opción C es correcta porque cumple dos reglas fundamentales del Present Simple. En primer lugar, la tercera persona del singular requiere que el verbo go se conjugue como goes. En segundo lugar, el adverbio de frecuencia always debe colocarse delante del verbo principal.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es incorrecta porque no conjuga correctamente el verbo y además coloca mal el adverbio.\nLa opción B es incorrecta porque, aunque conjuga bien el verbo, sitúa always después del verbo principal.\nLa opción D es incorrecta porque no aplica la regla de la tercera persona del singular."
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
    explanation: "La respuesta correcta es la C. I was late for the meeting.\nEl verbo to be en pasado tiene dos formas principales: was y were. Según las reglas gramaticales, was se utiliza con I, he, she e it, mientras que were se emplea con you, we y they.\nLa opción C es correcta porque empareja adecuadamente el pronombre I con la forma was.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es incorrecta porque con they debe usarse were o weren't, no was.\nLa opción B es incorrecta porque con we debe utilizarse were.\nLa opción D es incorrecta porque con she la forma correcta es was."
  },
  {
    q: "Choose the correct superlative adjective to complete the sentence: \"That was ___________ movie I have ever seen!\"",
    options: [
      "Funnier",
      "the most funny",
      "the funniest",
      "funnier than"
    ],
    correct: 2,
    explanation: "La respuesta correcta es la C. the funniest.\nLa opción C es correcta porque sigue la regla para formar el superlativo de un adjetivo terminado en consonante más y, como funny. En este caso, la y cambia por i y se añade -est, precedido por the, formando the funniest.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción B es incorrecta porque the most se utiliza normalmente con adjetivos largos, no con funny.\nLas opciones A y D son incorrectas porque funnier es un comparativo, no un superlativo, y se usa para comparar dos elementos, no para expresar el grado máximo."
  },
  {
    q: "Choose the right answer:",
    options: [
      "She be a doctor.",
      "She is a doctor.",
      "She are a doctor.",
      "She am a doctor."
    ],
    correct: 1,
    explanation: "La respuesta correcta es la B. She is a doctor.\nEl verbo to be en presente tiene tres formas: am, is y are. Para la tercera persona del singular, es decir, he, she e it, la forma correcta es is.\nLa opción B es correcta porque conjuga adecuadamente el verbo con el sujeto she.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es incorrecta porque utiliza el verbo en forma base, be, sin conjugar.\nLa opción C es incorrecta porque are se utiliza con you, we y they.\nLa opción D es incorrecta porque am se utiliza únicamente con I."
  },
  {
    q: "Choose the right relative pronoun below:",
    options: [
      "That was the year when I started learning English.",
      "That year was the day which I started learning English.",
      "That year was the day who I started learning English.",
      "That year was the day where I started learning English."
    ],
    correct: 0,
    explanation: "La respuesta correcta es la A. That was the year when I started learning English.\nLa opción A es correcta porque, según las reglas de las oraciones de relativo, when se utiliza específicamente para referirse a un tiempo o momento definido, como the year.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción B es incorrecta porque which se emplea para cosas y animales, no para periodos de tiempo. Además, year y day no encajan semánticamente en esa estructura.\nLa opción C es incorrecta porque who se utiliza únicamente para personas.\nLa opción D es incorrecta porque where se usa para lugares físicos, no para expresiones temporales."
  },
  {
    q: "Choose the WRONG sentence.",
    options: [
      "He hasn't got a pet snake.",
      "We don't have a house at the beach.",
      "Does she have a brother?",
      "I don't have got a motorbike."
    ],
    correct: 3,
    explanation: "La respuesta correcta es la D. I don't have got a motorbike.\nLa opción D es la oración incorrecta porque mezcla dos estructuras distintas para expresar posesión. Se puede usar have got, cuya forma negativa es haven't got, o el verbo have con auxiliar, cuya forma negativa es don't have. Mezclar don't con got es un error.\nA modo de aclaración sobre por qué las demás opciones son correctas:\nLa opción A utiliza correctamente la negación de have got.\nLa opción B emplea correctamente la forma negativa del verbo have con el auxiliar don't.\nLa opción C forma la pregunta correctamente con el auxiliar does y el verbo base have."
  },
  {
    q: "Choose the WRONG sentence.",
    options: [
      "I go to the cinema usually.",
      "Sometimes, she watches anime.",
      "He plays tennis very often.",
      "They rarely listen to rock music."
    ],
    correct: 0,
    explanation: "La respuesta correcta es la A. I go to the cinema usually.\nLa opción A es la oración incorrecta porque no sigue la posición general de los adverbios de frecuencia. Normalmente, estos deben colocarse delante del verbo principal. La forma correcta sería: I usually go to the cinema.\nA modo de aclaración sobre por qué las demás opciones son correctas:\nLa opción B es correcta porque sometimes puede colocarse al principio de la oración.\nLa opción C es correcta porque very often puede aparecer al final.\nLa opción D es correcta porque sitúa rarely delante del verbo principal."
  },
  {
    q: "Complete the sentence using the Past Simple and the Past Continuous: \"While my brother __________ TV, the phone __________.\"",
    options: [
      "watched / rang",
      "was watching / rang",
      "watching / ring",
      "was watched / was ringing"
    ],
    correct: 1,
    explanation: "La respuesta correcta es la B. was watching / rang.\nLa opción B es correcta porque combina adecuadamente el Past Continuous para la acción en progreso y el Past Simple para la acción corta que la interrumpe. Después de while, la acción en desarrollo debe ir en pasado continuo: was watching. La acción breve que interrumpe va en pasado simple: rang.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es incorrecta porque utiliza pasado simple en ambas acciones.\nLa opción C es incorrecta porque carece del auxiliar necesario y además deja el segundo verbo en presente.\nLa opción D es incorrecta porque was watched es una estructura pasiva que no tiene sentido aquí y además no expresa adecuadamente la acción interruptora."
  },
  {
    q: "Complete the sentence using the Present Simple to talk about a future event: \"The plane ________ at 10:00 a.m. tomorrow.\"",
    options: [
      "arrive",
      "arrives",
      "arriving",
      "will arrive"
    ],
    correct: 1,
    explanation: "La respuesta correcta es la B. arrives.\nLa opción B es correcta porque el Present Simple se utiliza para hablar de horarios fijos, programas oficiales o medios de transporte en el futuro. Además, el sujeto the plane equivale a la tercera persona del singular, por lo que el verbo debe llevar -s.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es incorrecta porque omite la -s obligatoria de la tercera persona.\nLa opción C es incorrecta porque emplea un gerundio, no una forma de presente simple.\nLa opción D es incorrecta porque, aunque expresa futuro, utiliza Future Simple y el enunciado pide Present Simple."
  },
  {
    q: "Complete the sentence with a suitable indefinite pronoun: \"_____________ is knocking at the door\".",
    options: [
      "Anywhere",
      "Somewhere",
      "Someone",
      "Anything"
    ],
    correct: 2,
    explanation: "La respuesta correcta es la C. Someone.\nLa opción C es correcta porque someone es un pronombre indefinido que se refiere a una persona y significa alguien. En este contexto, tiene sentido decir que alguien está llamando a la puerta.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es incorrecta porque anywhere se refiere a lugares.\nLa opción B es incorrecta porque somewhere también se refiere a lugares y no puede ser el sujeto que llama a la puerta.\nLa opción D es incorrecta porque anything se refiere a cosas y además suele usarse en negativas e interrogativas."
  },
  {
    q: "Complete the sentence: \"She _________ you as soon as she arrives.\"",
    options: [
      "will called",
      "are calling",
      "called",
      "will call"
    ],
    correct: 3,
    explanation: "La respuesta correcta es la D. will call.\nLa opción D es correcta porque la oración expresa una acción futura. Para formar el Future Simple en afirmativa, se utiliza will seguido de la forma base del verbo. Por eso, la estructura correcta es She will call.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es incorrecta porque después de will el verbo no puede ir en pasado.\nLa opción B es incorrecta porque utiliza are, que no corresponde con she, y además no encaja con la estructura requerida.\nLa opción C es incorrecta porque emplea pasado simple, creando una contradicción temporal."
  },
  {
    q: "Complete the sentence: \"She ___________ sushi in her life\"",
    options: [
      "has never eaten",
      "have never eaten",
      "has ever eat",
      "have never ate"
    ],
    correct: 0,
    explanation: "La respuesta correcta es la A. has never eaten.\nLa opción A es correcta porque la oración se refiere a una experiencia de vida hasta el momento presente, lo que exige Present Perfect Simple. Con la tercera persona del singular, she, se utiliza has, seguido de never y del participio pasado del verbo eat, que es eaten.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLas opciones B y D son incorrectas porque utilizan have en lugar de has con she. Además, la opción D usa ate, que es pasado simple y no participio.\nLa opción C es incorrecta porque utiliza ever en lugar de never y deja el verbo en forma base, eat, en lugar del participio eaten."
  },
  {
    q: "Complete the sentence: \"When we were kids, we _________ cartoons every morning\"",
    options: [
      "used to watch",
      "use to watched",
      "was used to watch",
      "using to watch"
    ],
    correct: 0,
    explanation: "La respuesta correcta es la A. used to watch.\nLa opción A es correcta porque la estructura used to + verbo en infinitivo se emplea para hablar de hábitos repetidos en el pasado que ya no ocurren en el presente. Aquí describe correctamente el hábito de ver dibujos animados cada mañana cuando eran niños.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción B es incorrecta porque combina use to con watched, cuando el verbo principal debe ir en infinitivo.\nLa opción C es incorrecta porque añade el verbo to be, lo cual rompe la estructura correcta, y además usa was con we.\nLa opción D es incorrecta porque utiliza using, una forma en gerundio incompatible con esta estructura."
  },
  {
    q: "Complete this sentence with a question tag: \"You've been to Japan, ________?\"",
    options: [
      "don't you",
      "didn't you",
      "haven't you",
      "will you"
    ],
    correct: 2,
    explanation: "La respuesta correcta es la C. haven't you.\nLa opción C es correcta porque las question tags se forman con el mismo auxiliar de la oración principal y con polaridad opuesta. En la frase You've been to Japan, el auxiliar es have y la oración es afirmativa, por lo que la coletilla debe ser negativa: haven't you.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es incorrecta porque don't corresponde al Present Simple, no al Present Perfect.\nLa opción B es incorrecta porque didn't se usa con el Past Simple.\nLa opción D es incorrecta porque will no corresponde al tiempo verbal de la oración principal."
  },
  {
    q: "Fill in the gap with an appropriate connector: \"I wanted to go to the party. __________, I had to finish my homework first\".",
    options: [
      "For instance",
      "Because",
      "However",
      "Moreover"
    ],
    correct: 2,
    explanation: "La respuesta correcta es la C. However.\nLa opción C es correcta porque however es un conector de contraste que se utiliza para unir dos ideas opuestas o contradictorias. En este caso, contrasta el deseo de ir a la fiesta con el obstáculo de tener que terminar la tarea primero. Además, however encaja perfectamente con la puntuación de la oración, ya que conecta dos oraciones independientes.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es incorrecta porque for instance se utiliza para dar ejemplos, no para contrastar ideas.\nLa opción B es incorrecta porque because expresa causa, y aquí no se está indicando la razón del deseo de ir a la fiesta.\nLa opción D es incorrecta porque moreover es un conector de adición, usado para añadir información complementaria, no para introducir una oposición."
  },
  {
    q: "Fill in the gap with the correct comparative form of the adjective \"bad\": \"The weather today is _________ than it was yesterday\".",
    options: [
      "badder",
      "worse",
      "more bad",
      "baddest"
    ],
    correct: 1,
    explanation: "La respuesta correcta es la B. worse.\nLa opción B es correcta porque bad es un adjetivo irregular. Según las reglas gramaticales, su forma comparativa es worse y su forma superlativa es worst. Además, la presencia de than indica claramente que necesitamos un comparativo.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es incorrecta porque no se forma el comparativo de bad añadiendo -er.\nLa opción C es incorrecta porque more se usa con adjetivos largos regulares, no con adjetivos irregulares como bad.\nLa opción D es incorrecta porque intenta formar un superlativo y, además, lo hace de forma errónea."
  },
  {
    q: "Find the correct sentence:",
    options: [
      "There is some apples on the table.",
      "Are there any apples on the table?",
      "There isn't some milk in the fridge.",
      "Is there some oranges in the box?"
    ],
    correct: 1,
    explanation: "La respuesta correcta es la B. Are there any apples on the table?\nLa opción B es correcta porque utiliza correctamente la estructura are there para preguntar por la existencia de un sustantivo en plural, apples, y además emplea any, que es el cuantificador adecuado para preguntas generales.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es incorrecta porque mezcla there is, que es singular, con apples, que es plural.\nLa opción C es incorrecta porque en oraciones negativas debe usarse any, no some.\nLa opción D es incorrecta porque utiliza la forma singular is there con un sustantivo plural, oranges, y además usa some en una pregunta general."
  },
  {
    q: "Find the incorrect question.",
    options: [
      "Why do you study in the library?",
      "When she takes her last exam?",
      "Who is your brother?",
      "Where does she live?"
    ],
    correct: 1,
    explanation: "La respuesta correcta es la B. When she takes her last exam?\nLa opción B es la pregunta incorrecta porque le falta el verbo auxiliar obligatorio. En preguntas con partículas interrogativas en Present Simple, la estructura correcta es: Wh-word + auxiliar + sujeto + verbo principal. En este caso, con she, debería ser: When does she take her last exam?\nA modo de aclaración sobre por qué las demás opciones son correctas:\nLa opción A es correcta porque utiliza adecuadamente el auxiliar do.\nLa opción C es correcta porque con el verbo to be no se necesita auxiliar extra.\nLa opción D es correcta porque utiliza correctamente el auxiliar does con la tercera persona del singular."
  },
  {
    q: "Find the INCORRECT sentence.",
    options: [
      "There are many papers on the table.",
      "Are there any papers on the table?",
      "There aren't no papers on the table.",
      "There aren't any papers on the table."
    ],
    correct: 2,
    explanation: "La respuesta correcta es la C. There aren't no papers on the table.\nLa opción C es la oración incorrecta porque comete un error de doble negación. En inglés, si el verbo ya está en negativo, como aren't, debe utilizarse any y no no. La forma correcta sería There aren't any papers on the table o There are no papers on the table.\nA modo de aclaración sobre por qué las demás opciones son correctas:\nLa opción A es correcta porque emplea adecuadamente there are con un sustantivo plural y el cuantificador many.\nLa opción B es correcta porque utiliza la estructura interrogativa are there con any.\nLa opción D es correcta porque combina correctamente la forma negativa del verbo con el cuantificador any."
  },
  {
    q: "Identify the sentence that correctly uses the imperative form.",
    options: [
      "You must to close the door.",
      "Please, close the door!",
      "She is closing the door.",
      "You should closing the door."
    ],
    correct: 1,
    explanation: "La respuesta correcta es la B. Please, close the door!\nLa opción B es correcta porque el imperativo se forma con el verbo en su forma base, sin sujeto explícito, ya que este se sobreentiende. Además, se puede añadir please para hacer la petición más cortés.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es incorrecta porque utiliza el modal must y además añade erróneamente to.\nLa opción C es incorrecta porque está en Present Continuous y describe una acción, no una orden.\nLa opción D es incorrecta porque usa should, que expresa consejo, y además combina mal la estructura con closing."
  },
  {
    q: "Pick the correct preposition of movement to complete the sentence: \"She walked _________the bridge to get to the other side.\"",
    options: [
      "Off",
      "into",
      "through",
      "across"
    ],
    correct: 3,
    explanation: "La respuesta correcta es la D. across.\nLa opción D es correcta porque across significa al otro lado de y expresa movimiento de un lado a otro sobre una superficie, como un puente. La frase to get to the other side confirma precisamente esa idea.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es incorrecta porque off implica caerse o bajar de algo.\nLa opción B es incorrecta porque into significa dentro de, y no encaja con la idea de cruzar un puente.\nLa opción C es incorrecta porque through se usa normalmente para atravesar espacios cerrados o con volumen, como un túnel."
  },
  {
    q: "Transform the words of this sentence into a question: She / like / travel / around the world / ?",
    options: [
      "Does she like travelling around the world?",
      "Do she like travelling around the world?",
      "Does she likes travelling around the world?",
      "Does she like travel around the world?"
    ],
    correct: 0,
    explanation: "La respuesta correcta es la A. Does she like travelling around the world?\nLa opción A es correcta porque en preguntas de Present Simple con la tercera persona del singular se utiliza does y el verbo principal permanece en forma base. Además, después de like puede usarse el verbo en gerundio, travelling.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción B es incorrecta porque con she debe usarse does, no do.\nLa opción C es incorrecta porque, si ya aparece does, el verbo principal no puede llevar -s.\nLa opción D es incorrecta porque después de like no corresponde usar travel solo; debe ir como travelling o to travel."
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
    explanation: "La respuesta correcta es la B. Besides.\nLa opción B es correcta porque besides es un conector de adición. Se utiliza para añadir información extra a una idea o conversación.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es incorrecta porque although es un conector de contraste.\nLa opción C es incorrecta porque instead indica sustitución o alternativa.\nLa opción D es incorrecta porque therefore es un conector de causa y efecto."
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
    explanation: "La respuesta correcta es la A. Crying.\nLa opción A es correcta porque sigue la norma general para formar el gerundio: añadir -ing a la forma base del verbo. Los verbos terminados en y, como cry, no cambian su estructura.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción B es incorrecta porque run debe duplicar la consonante final: running.\nLa opción C es incorrecta porque make pierde la e antes de añadir -ing: making.\nLa opción D es incorrecta porque swim también duplica la consonante final: swimming."
  },
  {
    q: "Which is the right adjective?",
    options: [
      "I was very frightened after watching that horror film.",
      "I was very frightening after watching that horror film.",
      "I was very frighten after watching that horror film.",
      "I was very frightful after watching that horror film."
    ],
    correct: 0,
    explanation: "La respuesta correcta es la A. I was very frightened after watching that horror film.\nLa opción A es correcta porque los adjetivos terminados en -ed se utilizan para describir cómo se siente una persona. En este caso, el hablante expresa su sentimiento después de ver la película.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción B es incorrecta porque frightening describe la causa del miedo, no el sentimiento de la persona.\nLa opción C es incorrecta porque frighten es un verbo, no un adjetivo.\nLa opción D es incorrecta porque frightful significa espantoso o terrible, pero no describe el estado emocional de la persona."
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
    explanation: "La respuesta correcta es la D. To talk about habits and routines.\nLa opción D es el uso incorrecto del Present Continuous, ya que para hablar de hábitos y rutinas se utiliza el Present Simple.\nA modo de aclaración sobre por qué las demás opciones son correctas:\nLa opción A es correcta porque el Present Continuous sirve para acciones que están ocurriendo en el momento de hablar.\nLa opción B es correcta porque también se usa para acciones o situaciones temporales.\nLa opción C es correcta porque puede emplearse para planes o acuerdos futuros ya fijados."
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
    explanation: "La respuesta correcta es la C. Nobody.\nLa opción C es correcta porque nobody es un pronombre indefinido que se refiere específicamente a personas.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es incorrecta porque something se refiere a cosas.\nLa opción B es incorrecta porque anywhere se refiere a lugares.\nLa opción D es incorrecta porque everything también se refiere a cosas."
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
    explanation: "La respuesta correcta es la D. Theirs.\nLa opción D es correcta porque theirs es un pronombre posesivo. Se utiliza para indicar posesión sustituyendo a un sustantivo ya mencionado y evitando su repetición.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es incorrecta porque me es un pronombre objeto.\nLa opción B es incorrecta porque she es un pronombre sujeto.\nLa opción C es incorrecta porque their es un adjetivo posesivo y debe ir delante de un sustantivo."
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
    explanation: "La respuesta correcta es la C. Many.\nLa opción C es correcta porque many se utiliza específicamente con sustantivos contables para indicar una cantidad elevada.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es incorrecta porque much se usa con sustantivos incontables.\nLa opción B es incorrecta porque little también se usa con incontables.\nLa opción D es incorrecta porque a little se utiliza igualmente con sustantivos incontables."
  },
  {
    q: "Which quantifier would you use for a sufficient amount of something?",
    options: [
      "The bag is too heavy.",
      "The coffee has too much sugar.",
      "There are too many chairs in this classroom.",
      "We don t have enough time to be on time."
    ],
    correct: 3,
    explanation: "La respuesta correcta es la D. We don t have enough time to be on time.\nLa opción D es correcta porque enough + sustantivo se utiliza para expresar una cantidad suficiente de algo. En este caso, enough time indica la cantidad necesaria o suficiente de tiempo.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es incorrecta porque too heavy expresa exceso respecto a un adjetivo.\nLa opción B es incorrecta porque too much se usa para cantidades excesivas con incontables.\nLa opción C es incorrecta porque too many se usa para cantidades excesivas con contables."
  },
  {
    q: "Which sentence correctly uses a stative verb?",
    options: [
      "He is wanting ice cream.",
      "I remember your face.",
      "That car is belonging to me.",
      "You are liking football."
    ],
    correct: 1,
    explanation: "La respuesta correcta es la B. I remember your face.\nLa opción B es correcta porque remember es un verbo estático y está correctamente utilizado en Present Simple. Los verbos estáticos describen estados, emociones, pensamientos o posesión, y normalmente no se usan en tiempos continuos.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es incorrecta porque want es un verbo estático y no debe usarse como is wanting.\nLa opción C es incorrecta porque belong tampoco admite forma continua.\nLa opción D es incorrecta porque like es un verbo estático y no debe aparecer como are liking."
  },
  {
    q: "Which sentence is an example of the First Conditional?",
    options: [
      "If it rains, the ground gets well.",
      "If you study, you will pass the exam.",
      "If she had a car, she would drive to work.",
      "She will go to the party if you invites her."
    ],
    correct: 1,
    explanation: "La respuesta correcta es la B. If you study, you will pass the exam.\nLa opción B es correcta porque sigue la estructura del First Conditional: if + presente simple, will + verbo en infinitivo. Este condicional se utiliza para hablar de situaciones reales y posibles en el futuro.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es incorrecta porque corresponde al Zero Conditional, con ambos verbos en presente simple.\nLa opción C es incorrecta porque es un ejemplo del Second Conditional.\nLa opción D es incorrecta porque, aunque intenta formar un First Conditional, comete un error con la forma you invites, que debería ser you invite."
  },
  {
    q: "Which sentence is correct?",
    options: [
      "There are too many people in the room. We need more space.",
      "There are too much people in the room. We need more space.",
      "There are too enough people in the room. We need more space.",
      "There are very people in the room. We need more space."
    ],
    correct: 0,
    explanation: "La respuesta correcta es la A. There are too many people in the room. We need more space.\nLa opción A es correcta porque people funciona como un sustantivo contable en plural, y para expresar una cantidad excesiva con sustantivos contables se utiliza too many.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción B es incorrecta porque too much se utiliza con sustantivos incontables.\nLa opción C es incorrecta porque mezcla two con enough, estructuras incompatibles en este contexto.\nLa opción D es incorrecta porque very no funciona como cuantificador para sustantivos."
  },
  {
    q: "Which type of speech uses quotation marks (\"\")?",
    options: [
      "Reported speech",
      "Direct speech",
      "Indirect speech",
      "All answers are correct"
    ],
    correct: 1,
    explanation: "La respuesta correcta es la B. Direct speech.\nLa opción B es correcta porque el direct speech se utiliza para reproducir las palabras literales y exactas de una persona, lo cual exige el uso de comillas.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLas opciones A y C son incorrectas porque reported speech e indirect speech se refieren al estilo indirecto, que no utiliza comillas.\nLa opción D es incorrecta porque no todas las respuestas son correctas; el uso de comillas es exclusivo del estilo directo."
  }



] ;
