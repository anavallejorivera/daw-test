 [
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
    explanation: "La respuesta correcta es la D. Necesita el manejo de información existiendo una entrada y salida de datos.\nSegún el material de estudio, concretamente en el resumen de la unidad sobre estructuras de control y el manejo de información, se establece de forma explícita que \"Cualquier programa necesita del manejo de información siendo necesario una entrada por donde recibe los datos y una salida para mostrar los datos hacia el usuario\".\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es falsa, ya que el temario indica textualmente que cualquier programa necesita de este manejo de información.\n
 
  ]    
