const questions = [
  {
    q: "¿Como podemos cerrar una conexión de la base de datos?",
    options: [
      "No hay mecanismos para cerrar la conexión.",
      "Haciendo uso del método .close() sobre el objeto Connection",
      "Estableciendo en la conexión que se autocierre cuando no se use.",
      "Todas las anteriores son incorrectas."
    ],
    correct: 1,
    explanation: "La respuesta correcta es la B. Haciendo uso del método .close() sobre el objeto Connection.\nSegún el material de estudio, dentro del procedimiento para establecer y manejar la conexión a una base de datos relacional mediante la API JDBC, el último paso obligatorio es cerrar la declaración y la conexión haciendo uso del método close().\nEn los diferentes ejemplos prácticos expuestos en el temario se aprecia explícitamente cómo, tras crear el objeto Connection y operar con la base de datos, se invoca la instrucción conexion.close(); para liberar los recursos y finalizar la comunicación de forma segura.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es falsa, ya que el temario detalla explícitamente que sí existen métodos integrados en la API para terminar la conexión con la base de datos, concretamente close().\nLa opción C es falsa, debido a que en ningún apartado del material sobre JDBC se menciona la posibilidad de configurar un autocierre por desuso. El cierre debe realizarse explícitamente mediante código o gestionándolo con estructuras de control adecuadas.\nAl ser correcta la opción B, la opción D queda lógicamente descartada."
  },
  {
    q: "¿Como podemos comprobar si un fichero o directorio existe?",
    options: [
      "Usando isFile()",
      "Usando isDirectory()",
      "Usando exists()",
      "Usando getPath()"
    ],
    correct: 2,
    explanation: "La respuesta correcta es la C. Usando exists().\nSegún el material de estudio, concretamente en la tabla de operaciones y métodos de la clase File, se establece explícitamente que el método exists() es el que comprueba si la ruta existe. Dado que una ruta puede apuntar tanto a un fichero como a un directorio, este es el método adecuado para verificar su existencia general.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es falsa, ya que el método isFile() no comprueba la existencia general, sino que determina específicamente si el elemento de la ruta es un fichero.\nLa opción B es falsa, debido a que isDirectory() se utiliza específicamente para comprobar si la ruta corresponde a un directorio.\nLa opción D es falsa, porque getPath() únicamente sirve para obtener la ruta en formato de texto y no realiza ninguna comprobación sobre si dicho archivo o directorio existe realmente en el sistema.\nAl ser correcta la opción C, las demás quedan descartadas."
  },
  {
    q: "¿Cuál es la palabra reservada que convierte a un campo en común entre todos los objetos de una clase?",
    options: [
      "Static.",
      "getter.",
      "setter.",
      "Todas las anteriores son incorrectas."
    ],
    correct: 0,
    explanation: "La respuesta correcta es la A. Static.\nSegún el material de estudio, concretamente en el apartado dedicado a los campos o atributos de una clase, se establece explícitamente que opcionalmente se puede incluir la palabra reservada static para hacer ese campo común entre todos los objetos de esa clase. A este tipo de campos se les denomina campos estáticos, campos de clase o variables de clase.\nEl resumen de la unidad también confirma que Static es la palabra reservada que convierte la visibilidad en un campo común entre todos los objetos de esa clase.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLas opciones B y C son falsas, ya que getter y setter no son palabras reservadas para definir campos comunes, sino nombres habituales para los métodos observadores y modificadores.\nAl ser correcta la opción A, la opción D queda lógicamente descartada."
  },
  {
    q: "¿Es posible cambiar el tamaño de un array durante su ejecución?",
    options: [
      "Sí.",
      "Sí, solo cuando tenga un primer valor asignado.",
      "Sí, en cualquier momento.",
      "No, solo se puede indicar su tamaño en la declaración inicial."
    ],
    correct: 3,
    explanation: "La respuesta correcta es la D. No, solo se puede indicar su tamaño en la declaración inicial.\nSegún el material de estudio, concretamente en el resumen dedicado a las estructuras de almacenamiento, se establece de forma explícita que los arrays son objetos estáticos y secuenciales, y no es posible cambiar su tipo de datos ni su tamaño para incrementarlo o decrementarlo en ejecución.\nEl temario define al array como una estructura que contiene un número fijo de valores. Por tanto, si durante el programa se necesita añadir o eliminar elementos superando esa capacidad, la única solución es crear un nuevo array con un tamaño distinto y copiar los datos del anterior.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLas opciones A, B y C son falsas porque afirman que sí es posible cambiar dinámicamente el tamaño del mismo array, lo cual contradice su naturaleza estática.\nPara disponer de estructuras dinámicas, el temario indica que se deben usar colecciones como ArrayList o LinkedList."
  },
  {
    q: "¿Qué es una colección?",
    options: [
      "Una estructura estática que almacena elementos de forma secuencial con un tamaño ilimitado de valores.",
      "Una estructura estática que almacena elementos con un tamaño limitado de valores.",
      "Una estructura dinámica que almacena un grupo de elementos limitado.",
      "Una estructura dinámica que almacena un grupo de elementos ilimitado."
    ],
    correct: 3,
    explanation: "La respuesta correcta es la D. Una estructura dinámica que almacena un grupo de elementos ilimitado.\nSegún el material de estudio, concretamente en el resumen dedicado a las colecciones, se define textualmente que las colecciones son estructuras dinámicas de un tamaño ilimitado que facilitan el tratamiento de un conjunto de valores. La teoría destaca que permiten agrupar elementos de una misma tipología y variar su tamaño según las necesidades del programa en tiempo de ejecución.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLas opciones A y B son falsas, ya que definen a la colección como una estructura estática. El temario especifica que la estructura estática corresponde a los arrays.\nLa opción C es falsa, debido a que indica que el grupo de elementos es limitado, cuando precisamente una de las principales ventajas de las colecciones es su tamaño dinámico e ilimitado.\nPor ello, la opción correcta es la D."
  },
  {
    q: "¿Qué es una excepción?",
    options: [
      "Un error producido en tiempo de ejecución y que altera el flujo normal del programa.",
      "Un evento producido en tiempo de compilación y que altera el flujo normal del programa.",
      "Un código excepcional que se usa cuando se produce un evento.",
      "Un código excepcional que se usa en casos especiales."
    ],
    correct: 0,
    explanation: "La respuesta correcta es la A. Un error producido en tiempo de ejecución y que altera el flujo normal del programa.\nSegún el material de estudio, concretamente en el resumen sobre el control y manejo de excepciones, se establece literalmente que las excepciones son eventos producidos por un error que alteran el flujo normal de ejecución. La teoría detalla además que se trata de eventos ante situaciones no previstas por errores funcionales o lógicos y que se producen en tiempo de ejecución.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción B es falsa, ya que indica que el error se produce en tiempo de compilación, cuando el temario subraya que las excepciones se manifiestan en tiempo de ejecución.\nLas opciones C y D son falsas porque definen la excepción como un código, cuando en realidad la excepción es el evento anómalo en sí. El código que utiliza el programador para manejarla es la estructura try/catch/finally.\nPor tanto, la respuesta correcta es la A."
  },
  {
    q: "¿Qué tipo de colección hace uso de una clave como identificador?",
    options: [
      "HashMap.",
      "ArrayList.",
      "HashSet.",
      "ArrayDeque."
    ],
    correct: 0,
    explanation: "La respuesta correcta es la A. HashMap.\nSegún el material de estudio, concretamente en el apartado dedicado a la interfaz Map, se establece de forma explícita que este tipo de estructura requiere hacer uso de un identificador para cada elemento, denominado clave-valor. El temario detalla que HashMap es una de las principales colecciones que implementan esta interfaz, guardando los datos a modo de diccionario donde la clave asocia de forma única a cada elemento.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción B es falsa, ya que ArrayList pertenece a la interfaz List y su acceso es secuencial e indexado, sin claves.\nLa opción C es falsa, debido a que HashSet forma parte de Set, cuya principal característica es no permitir duplicados.\nLa opción D es falsa, porque ArrayDeque implementa Queue y se utiliza para estructuras tipo cola o pila, no para almacenar elementos mediante claves.\nPor ello, la respuesta correcta es la A."
  },
  {
    q: "Al capturar una excepción que realiza este método printStackTrace()",
    options: [
      "Imprime la causa del error.",
      "Obtiene el código de error de la excepción",
      "Obtiene el mensaje de la excepción",
      "Imprime el flujo de llamadas donde ocurrió el error."
    ],
    correct: 3,
    explanation: "La respuesta correcta es la D. Imprime el flujo de llamadas donde ocurrió el error.\nSegún el material de estudio, concretamente en el apartado sobre los miembros de una excepción, se detalla que la función del método printStackTrace() es imprimir todo el flujo de llamadas a los métodos hasta donde se ha producido el error.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es falsa, ya que para obtener la causa del error se utiliza el método getCause().\nLa opción C es falsa, debido a que el mensaje de la excepción se obtiene mediante getMessage().\nLa opción B es falsa, porque printStackTrace() no extrae un código de error, sino la traza o historial de llamadas.\nPor tanto, la respuesta correcta es la D."
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
    explanation: "La respuesta correcta es la B. Código máquina.\nSegún el material de estudio, concretamente en el apartado de conceptos fundamentales sobre lenguajes de programación, se define literalmente al código máquina o código objeto como el código traducido para que pueda ser interpretado por el microprocesador.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es falsa, ya que el código fuente es el programa escrito en un lenguaje de alto nivel, cercano al lenguaje humano, y no reconocido directamente por la computadora sin traducción.\nLa opción C es falsa, debido a que el código intermedio, como el bytecode en Java, no se puede ejecutar directamente en el sistema operativo y requiere una segunda traducción o interpretación mediante una máquina virtual.\nAl ser correcta la opción B, la opción D queda descartada."
  },
  {
    q: "Coloca cada componente horizontalmente de izquierda a derecha. Si sobrepasa la fila comienza en la siguiente.:",
    options: [
      "BorderLayout.",
      "CardLayout.",
      "FlowLayout.",
      "GridLayout."
    ],
    correct: 2,
    explanation: "La respuesta correcta es la C. FlowLayout.\nSegún el material de estudio, concretamente en el apartado dedicado a los layouts o manejadores de componentes, se define de forma literal que FlowLayout coloca cada componente horizontalmente de izquierda a derecha y, si sobrepasa la fila, comienza en la siguiente.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es falsa, ya que BorderLayout permite colocar elementos en el centro y en los cuatro bordes.\nLa opción B es falsa, debido a que CardLayout gestiona los componentes en el mismo espacio mostrando uno cada vez.\nLa opción D es falsa, porque GridLayout distribuye los elementos en una tabla de filas y columnas, no con un flujo libre de línea.\nPor ello, la respuesta correcta es la C."
  },
  {
    q: "Como podemos capturar una excepción",
    options: [
      "Incluir el código que puede provocar una excepción dentro del bloque try.",
      "Incluir el código que puede provocar una excepción dentro del bloque catch.",
      "Incluir el código que puede provocar una excepción dentro del bloque finally.",
      "Incluir el código que puede provocar una excepción dentro de un método exclusivo."
    ],
    correct: 0,
    explanation: "La respuesta correcta es la A. Incluir el código que puede provocar una excepción dentro del bloque try.\nSegún el material de estudio, concretamente en el apartado de captura de excepciones, para capturar y tratar una excepción se debe hacer uso de la estructura try/catch/finally. La teoría especifica de forma literal que dentro de try se pondrá todo el código que puede producir el error.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción B es falsa, ya que el bloque catch está destinado al tratamiento del error una vez capturado, no a contener el código que lo provoca.\nLa opción C es falsa, debido a que finally se usa para el código que debe ejecutarse siempre, se produzca o no una excepción.\nLa opción D es falsa, porque incluir el código en un método exclusivo no forma parte del mecanismo de captura de excepciones en Java.\nPor ello, la respuesta correcta es la A."
  },
  {
    q: "El código fuente en java se identifica por:",
    options: [
      "Usar la extensión .class",
      "Usar la extensión .doc",
      "Usar la extensión .ear",
      "Usar la extensión .java"
    ],
    correct: 3,
    explanation: "La respuesta correcta es la D. Usar la extensión .java.\nSegún el material de estudio, concretamente en el apartado dedicado a los tipos de archivos empleados, se establece de forma literal que cuando utilizamos Java, el código fuente debe ser almacenado en un archivo de texto plano cuya extensión sea .java.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es falsa, ya que la extensión .class identifica al código intermedio o bytecode generado tras compilar el código fuente.\nLa opción C es falsa, debido a que la extensión .ear se utiliza para empaquetar módulos en aplicaciones empresariales.\nLa opción B es falsa porque .doc es una extensión ajena a los archivos empleados para programar en Java.\nPor tanto, la respuesta correcta es la D."
  },
  {
    q: "El código intermedio compilado en java se identifica por:",
    options: [
      "Usar la extensión .class",
      "Usar la extensión .doc",
      "Usar la extensión .ear",
      "Usar la extensión .java"
    ],
    correct: 0,
    explanation: "La respuesta correcta es la A. Usar la extensión .class.\nSegún el material de estudio, concretamente en el apartado dedicado a los tipos de archivos empleados, se establece de forma literal que al compilar con éxito un programa Java se devolverá un archivo que contenga código intermedio o bytecode cuya extensión será .class.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción B es falsa porque .doc no corresponde a ningún tipo de archivo de programación Java.\nLa opción C es falsa, ya que .ear se emplea para empaquetar módulos empresariales y no para identificar el código intermedio.\nLa opción D es falsa, debido a que .java se utiliza para identificar el código fuente original.\nPor ello, la respuesta correcta es la A."
  },
  {
    q: "El Pseudocódigo es",
    options: [
      "Un lenguaje de programación",
      "Un lenguaje descriptivo para desarrollar algoritmos.",
      "Código binario o hexadecimal.",
      "Una estructura de control."
    ],
    correct: 1,
    explanation: "La respuesta correcta es la B. Un lenguaje descriptivo para desarrollar algoritmos.\nSegún el material de estudio, concretamente en los apartados dedicados al pseudocódigo, se define como un lenguaje intermedio similar al lenguaje natural cuyo objetivo principal es desarrollar algoritmos. La teoría detalla que permite describir y estructurar de manera clara la lógica de un programa antes de pasarlo a un lenguaje de programación específico.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es falsa, ya que el temario especifica expresamente que el pseudocódigo no es un lenguaje de programación.\nLa opción C es falsa, debido a que el pseudocódigo no tiene una traducción directa a código binario y no se ejecuta por sí mismo.\nLa opción D es falsa, porque el pseudocódigo utiliza estructuras de control, pero no es una estructura de control en sí mismo.\nPor tanto, la respuesta correcta es la B."
  },
  {
    q: "En la utilización de los sistemas de ficheros, ¿Qué hace el método listFiles()?",
    options: [
      "Comprueba si la ruta existe.",
      "Comprueba si es un directorio",
      "Obtiene un listado de ficheros que hay en la ruta.",
      "Obtiene el directorio padre."
    ],
    correct: 2,
    explanation: "La respuesta correcta es la C. Obtiene un listado de ficheros que hay en la ruta.\nSegún el material de estudio, concretamente en las tablas que detallan las operaciones y métodos de la clase File, se establece de forma explícita que el método listFiles() obtiene un listado de tipo File de los ficheros que hay en la ruta.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es falsa, ya que para comprobar si la ruta existe se utiliza exists().\nLa opción B es falsa, debido a que para comprobar si una ruta corresponde a un directorio se usa isDirectory().\nLa opción D es falsa, porque el método empleado para obtener el directorio padre es getParent().\nPor ello, la respuesta correcta es la C."
  },
  {
    q: "En una aplicación en java:",
    options: [
      "Tiene que haber una clase denominada .x",
      "Es obligatorio usar paquetes.",
      "Tiene que haber un método main.",
      "Puede no haber ninguna clase."
    ],
    correct: 2,
    explanation: "La respuesta correcta es la C. Tiene que haber un método main.\nSegún el material de estudio, concretamente en el apartado dedicado al método main, se establece explícitamente que cualquier aplicación debe tener un método main en una clase para indicar el punto de inicio. La teoría detalla que todos los programas en Java necesitan este punto de entrada para comenzar su ejecución.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es falsa, ya que en ningún punto del temario se exige una clase denominada .x.\nLa opción B es falsa, debido a que aunque los paquetes son recomendables para organizar el proyecto, no son obligatorios para que una aplicación básica pueda ejecutarse.\nLa opción D es falsa, porque en Java todo el código debe estar dentro de una clase.\nPor ello, la respuesta correcta es la C."
  },
  {
    q: "Es habitual trabajar directamente con ficheros de tipo de datos",
    options: [
      "De bytes o caracteres.",
      "De enteros.",
      "De cadena de caracteres.",
      "De hexadecimal."
    ],
    correct: 0,
    explanation: "La respuesta correcta es la A. De bytes o caracteres.\nSegún el material de estudio, concretamente en los apartados dedicados a los tipos de flujo y los tipos de ficheros, se establece de forma explícita que la clasificación principal de los flujos para el manejo de información se divide en flujos de bytes y flujos de caracteres.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción C es incompleta, ya que aunque menciona las cadenas de caracteres, omite los ficheros de bytes, que son igualmente fundamentales.\nLas opciones B y D son falsas, puesto que enteros y hexadecimal no representan la clasificación base de los ficheros o flujos, aunque dentro de un fichero binario puedan almacenarse datos enteros.\nPor tanto, la respuesta correcta es la A."
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
    explanation: "La respuesta correcta es la B. Tipos de datos primitivos.\nSegún el material de estudio, concretamente en los apartados dedicados a los tipos de datos primitivos, se establece de forma explícita que int, double, char y boolean pertenecen a esta categoría básica de datos definida en el lenguaje por defecto.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es falsa, ya que las constantes son elementos que mantienen un valor fijo y se declaran usando variables inmutables, pero no son tipos de datos en sí.\nLa opción C es falsa, debido a que los operadores sirven para realizar operaciones aritméticas, lógicas o relacionales, no para definir el tipo de la información.\nAl ser correcta la opción B, la opción D queda descartada."
  },
  {
    q: "Indica que controlador permite introducir texto en un campo",
    options: [
      "Button.",
      "Label.",
      "Checkbox.",
      "TextField."
    ],
    correct: 3,
    explanation: "La respuesta correcta es la D. TextField.\nSegún el material de estudio, concretamente en los apartados dedicados a los controles de interfaces gráficas, se define de forma literal al componente TextField como un campo para introducir texto.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es falsa, ya que Button es un botón destinado a realizar acciones al hacer clic.\nLa opción B es falsa, debido a que Label es una etiqueta de información usada para mostrar texto, no para introducirlo.\nLa opción C es falsa, porque Checkbox es un botón de selección que permite marcar o desmarcar opciones, no escribir texto.\nPor tanto, la respuesta correcta es la D."
  },
  {
    q: "La estructura basada en bucles es:",
    options: [
      "Secuencial.",
      "Alternativa.",
      "Iterativa.",
      "Ninguna de las anteriores."
    ],
    correct: 2,
    explanation: "La respuesta correcta es la C. Iterativa.\nSegún el material de estudio, concretamente en los apartados dedicados a las estructuras de control, se establece de forma explícita que la estructura iterativa es la que crea un bucle en el que se repetirán las diferentes instrucciones mientras se cumpla una condición propuesta. El temario también se refiere a ellas como estructuras de repetición o bucles, como for, while o do while.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es falsa, ya que la estructura secuencial consiste simplemente en ejecutar una instrucción tras otra siguiendo el orden preasignado.\nLa opción B es falsa, debido a que la estructura alternativa corresponde a las condicionales como if/else o switch, que seleccionan un camino pero no repiten código.\nAl ser correcta la opción C, la opción D queda lógicamente descartada."
  },
  {
    q: "La estructura de una clase está compuesta por:",
    options: [
      "Solo variables",
      "Solo métodos",
      "Campos y métodos.",
      "Métodos y funciones."
    ],
    correct: 2,
    explanation: "La respuesta correcta es la C. Campos y métodos.\nSegún el material de estudio, concretamente en el apartado dedicado a la estructura y miembros de una clase, se establece explícitamente que las clases se componen de dos partes: campos y métodos. La teoría detalla que los campos o atributos permiten guardar la información y propiedades que debe contener la clase, mientras que los métodos dotan de acciones a esa clase haciendo uso de dichos datos.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLas opciones A y B son falsas, ya que afirmar que una clase está compuesta solo por variables o solo por métodos es incompleto.\nLa opción D es falsa, debido a que métodos y funciones hacen referencia a la misma categoría de comportamiento y omiten la parte estructural de almacenamiento de datos."
  },
  {
    q: "La estructura if",
    options: [
      "Permite hacer saltos incondicionales",
      "Permite ejecutar una parte de código según una condición.",
      "Permite ejecutar varias veces una parte de código.",
      "Solo se ejecuta una vez."
    ],
    correct: 1,
    explanation: "La respuesta correcta es la B. Permite ejecutar una parte de código según una condición.\nSegún el material de estudio, concretamente en el apartado dedicado a las estructuras de selección, la sentencia if sirve para evaluar una condición y, dependiendo del resultado, actuar de una cierta manera. Solo si la condición se cumple se ejecutará el bloque de instrucciones correspondiente.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es falsa, ya que los saltos incondicionales corresponden a sentencias como break y continue.\nLa opción C es falsa, debido a que ejecutar varias veces una parte de código corresponde a estructuras iterativas como for, while o do while.\nLa opción D es falsa, porque aunque un if no sea una estructura repetitiva, su función no es simplemente ejecutarse una vez, sino evaluar una condición."
  },
  {
    q: "La notación Big-0",
    options: [
      "Es un tipo de dato",
      "Permite medir la complejidad algorítmica.",
      "Es una herramienta para calcular los usuarios que puede soportar una aplicación",
      "Es una estructura de programación"
    ],
    correct: 1,
    explanation: "La respuesta correcta es la B. Permite medir la complejidad algorítmica.\nSegún el material de estudio, concretamente en los apartados dedicados a la recursividad y complejidad algorítmica, se establece de forma explícita que la notación Big-O es la unidad de medida para estudiar el consumo de recursos de la complejidad algorítmica. Esta notación se emplea para valorar cómo se comporta un algoritmo en función del tamaño de los datos de entrada.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es falsa, ya que un tipo de dato sirve para definir el formato de la información almacenada.\nLa opción C es falsa, debido a que Big-O no es una herramienta práctica para calcular usuarios concurrentes.\nLa opción D es falsa, porque no es una estructura de programación, sino una métrica."
  },
  {
    q: "Las clases abstractas:",
    options: [
      "Pueden ser instanciadas normalmente.",
      "Pueden ser instanciadas per requieren de la palabra reservada abstract.",
      "No puede ser instanciada ni empleada de otro modo.",
      "No puede ser instanciada, pero sí empleada para la herencia."
    ],
    correct: 3,
    explanation: "La respuesta correcta es la D. No puede ser instanciada, pero sí empleada para la herencia.\nSegún el material de estudio, concretamente en los apartados dedicados a las clases y métodos abstractos, se establece explícitamente que de una clase abstracta nunca se generan instancias. La teoría detalla que este tipo de clases sirve exclusivamente para la herencia, actuando como plantilla o superclase para indicar cómo deben implementarse los métodos en las clases hijas.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLas opciones A y B son falsas, ya que una clase abstracta no puede instanciarse bajo ninguna circunstancia.\nLa opción C es falsa, debido a que aunque no puede instanciarse, sí puede y debe emplearse como base para la herencia."
  },
  {
    q: "No es una forma de polimorfismo:",
    options: [
      "Asignación polimorfa.",
      "Ejecución polimorfa.",
      "Herencia polimorfa.",
      "Todas las anteriores son incorrectas."
    ],
    correct: 2,
    explanation: "La respuesta correcta es la C. Herencia polimorfa.\nSegún el material de estudio, concretamente en los apartados dedicados al polimorfismo, se establece de forma explícita que solo existen dos formas de polimorfismo: la asignación polimorfa y la ejecución polimorfa. Aunque el polimorfismo está estrechamente relacionado con la herencia, el concepto de herencia polimorfa no existe como forma reconocida.\nA modo de aclaración sobre por qué las demás opciones no son correctas como respuesta:\nLa opción A es falsa, ya que sí es una forma válida de polimorfismo.\nLa opción B es falsa, debido a que también es una forma válida.\nAl existir una opción inventada, la opción D queda descartada."
  },
  {
    q: "Para establecer cualquier conexión a una base de datos desde Java, es necesario:",
    options: [
      "Emplear un driver específico.",
      "Emplear el objeto statement.",
      "Emplear una librería con ficheros .iso.",
      "Todas las anteriores son incorrectas."
    ],
    correct: 0,
    explanation: "La respuesta correcta es la A. Emplear un driver específico.\nSegún el material de estudio, concretamente en el apartado dedicado al establecimiento de la conexión, se establece literalmente que para establecer cualquier conexión a una base de datos desde Java es necesario usar un driver específico dependiendo del tipo de base de datos y proveedor.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción B es falsa, ya que el objeto Statement no se utiliza para establecer la conexión inicial, sino para operar con la base de datos una vez conectados.\nLa opción C es falsa, debido a que el temario especifica que los drivers son librerías en ficheros .jar, no .iso.\nPor ello, la respuesta correcta es la A."
  },
  {
    q: "Para indicar a una clase que se almacene a una base de datos orientada a objetos, usaremos la etiqueta.",
    options: [
      "@Entity",
      "@Embedded",
      "@Transient",
      "@Id"
    ],
    correct: 0,
    explanation: "La respuesta correcta es la A. @Entity.\nSegún el material de estudio, concretamente en el apartado dedicado a las clases persistentes, se establece de forma literal que para que la clase sea almacenada se tendrá que indicar la etiqueta @Entity antes de la definición de la clase. Esta anotación sirve para definir una clase como persistente dentro de la base de datos.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción B es falsa, ya que @Embedded se utiliza para incrustar una clase dentro de otra como campo.\nLa opción C es falsa, debido a que @Transient indica que un campo no se guardará en la base de datos.\nLa opción D es falsa, porque @Id se usa para definir el identificador único o clave primaria de un campo."
  },
  {
    q: "Para montar la cadena de conexión ¿Que datos necesitamos?",
    options: [
      "Solo el nombre de la base de datos.",
      "La URL de la base de datos, el usuario y la contraseña.",
      "El nombre de la base de datos y la tabla que queremos consultar.",
      "No hace falta ningún dato, el driver ya dispone de los datos para conectarse."
    ],
    correct: 1,
    explanation: "La respuesta correcta es la B. La URL de la base de datos, el usuario y la contraseña.\nSegún el material de estudio, tanto en bases de datos orientadas a objetos como en relacionales, se necesitan estos datos fundamentales para poder conectarse. La teoría especifica que la conexión se crea haciendo uso de la URL, el usuario y la contraseña.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es falsa, ya que solo el nombre de la base de datos es insuficiente.\nLa opción C es falsa, debido a que la tabla que queremos consultar no forma parte de los parámetros de conexión, sino de las sentencias SQL posteriores.\nLa opción D es falsa, porque el driver no conoce automáticamente los datos concretos de conexión del servidor."
  },
  {
    q: "Podemos decir de la herencia:",
    options: [
      "Es una relación jerárquica entre una clase padre y una clase hija.",
      "En java solo se puede heredar de una superclase o clase padre.",
      "Las clases hijas o subclases heredan toda la funcionalidad de la clase padre.",
      "Todas las anteriores son correctas"
    ],
    correct: 3,
    explanation: "La respuesta correcta es la D. Todas las anteriores son correctas.\nSegún el material de estudio, concretamente en el apartado dedicado a la herencia, todas las afirmaciones expuestas son ciertas. La herencia se define como una relación jerárquica entre una clase padre y una clase hija, en Java solo es posible una herencia simple de una única clase, y las clases hijas heredan la funcionalidad de la clase padre.\nA modo de aclaración:\nLa opción A es correcta porque describe la naturaleza jerárquica de la herencia.\nLa opción B es correcta ya que Java no permite herencia múltiple entre clases.\nLa opción C es correcta porque las subclases heredan la funcionalidad de la superclase.\nAl ser válidas las tres afirmaciones, la respuesta global correcta es la D."
  },
  {
    q: "Que campos de una clase no se guardaran en una base de datos orientada a objetos",
    options: [
      "Todos los campos se guardan siempre.",
      "Los campos que se declaren como final, static, transient o lleve la etiqueta @Transient",
      "Los que tengan visibilidad privada.",
      "Los que lleven la etiqueta @FieldNotIncluded."
    ],
    correct: 1,
    explanation: "La respuesta correcta es la B. Los campos que se declaren como final, static, transient o lleve la etiqueta @Transient.\nSegún el material de estudio, concretamente en el apartado dedicado a los campos persistentes, se establece de forma explícita que todos los campos de una clase se guardarán en la base de datos por defecto, a excepción de aquellos declarados como final, static o transient, o si llevan la etiqueta @Transient.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es falsa, ya que el propio temario contempla excepciones.\nLa opción C es falsa, debido a que tener visibilidad privada no impide que el campo se persista; de hecho, suele ser la convención recomendada.\nLa opción D es falsa, porque @FieldNotIncluded no es una anotación estándar válida en JPA."
  },
  {
    q: "Que tipos de recursividad existen:",
    options: [
      "Simple, multiple, cruzada o anidada.",
      "Simple, multiple, cruzada o anillada.",
      "Doble, unificada, indirecta o anillada.",
      "Doble, anillada, simple o cruzada."
    ],
    correct: 0,
    explanation: "La respuesta correcta es la A. Simple, multiple, cruzada o anidada.\nSegún el material de estudio, concretamente en el apartado dedicado a los tipos de recursividad, se estipula de forma explícita que existen cuatro tipos principales: recursividad simple, múltiple, cruzada o indirecta, y anidada.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLas opciones B, C y D son falsas porque introducen clasificaciones inventadas o erróneas, como anillada, doble o unificada, que no forman parte de la clasificación oficial."
  },
  {
    q: "Queremos realizar las acciones de un semáforo, Verde para continuar, Amarillo y Rojo para parar. ¿Cómo se puede hacer?",
    options: [
      "Con una estructura switch",
      "Con una estructura if-else",
      "Con una estructura if-else if",
      "Todas las anteriores son correctas."
    ],
    correct: 3,
    explanation: "La respuesta correcta es la D. Todas las anteriores son correctas.\nSegún el material de estudio, concretamente en los apartados dedicados a las estructuras de selección o alternativa, cualquiera de las tres opciones propuestas sirve para implementar la lógica de un semáforo.\nLa opción A es correcta porque switch permite evaluar el valor de una variable y definir distintos casos.\nLa opción B es correcta porque if-else permite evaluar una condición principal y una alternativa.\nLa opción C es correcta porque if-else if permite encadenar varias condiciones específicas.\nAl ser válidas las tres estructuras, la respuesta correcta es la D."
  },
  {
    q: "Queremos sumar los 10 primeros números para que dé como resultado 55 ¿Qué código es correcto?",
    options: [
      "for (int i = 1; i <= 10; i++) { resultado += i; }",
      "int i=1; while(i<10) { resultado += i; }",
      "int i=1;do { i++; resultado +=i; } while(i<=10);",
      "Todas las anteriores son correctas."
    ],
    correct: 0,
    explanation: "La respuesta correcta es la A. for (int i = 1; i <= 10; i++) { resultado += i; }.\nSegún el material de estudio y los ejemplos prácticos de sumas iterativas, esta es la única opción que implementa correctamente la lógica. El bucle for inicializa i en 1, continúa mientras i sea menor o igual a 10 y acumula correctamente los valores del 1 al 10.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción B es falsa porque el bucle while carece de incremento dentro del bloque, lo que provocaría un bucle infinito.\nLa opción C es falsa porque incrementa i antes de sumar, perdiéndose el valor 1 y alterando la lógica del resultado.\nAl ser erróneas B y C, la opción D queda descartada."
  },
  {
    q: "Se considera la plantilla o estructura del elemento principal de POO:",
    options: [
      "Clase.",
      "Campo.",
      "Objeto.",
      "Ninguna de las anteriores es correcta."
    ],
    correct: 0,
    explanation: "La respuesta correcta es la A. Clase.\nSegún el material de estudio, concretamente en los apartados dedicados al concepto de clase, se establece de forma explícita que la clase es el elemento principal de la programación orientada a objetos y funciona como la plantilla o estructura con la cual se crean e instancian los objetos.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción B es falsa, ya que el campo es solo un elemento interno de la clase.\nLa opción C es falsa, debido a que el objeto es la instanciación práctica de la clase, no su plantilla.\nAl ser correcta la opción A, la opción D queda descartada."
  },
  {
    q: "Se puede decir de un constructor que...",
    options: [
      "Se encarga de crear instancias de objetos.",
      "Se encarga de destruir instancias de objetos.",
      "Un método personalizado que realizar una función concreta, por ejemplo, una suma.",
      "Es un atributo de una clase."
    ],
    correct: 0,
    explanation: "La respuesta correcta es la A. Se encarga de crear instancias de objetos.\nSegún el material de estudio, un constructor se define como un tipo especial de método que pertenece a una clase concreta y se utiliza para instanciar objetos que pertenecen a esta. También se describe como la subrutina que permite instanciar objetos a partir de una clase.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción B es falsa, ya que destruir objetos corresponde al concepto de destructor, que en Java se sustituye en la práctica por el recolector de basura.\nLa opción C es falsa, porque eso describe a un método personalizado, no a un constructor.\nLa opción D es falsa, debido a que un constructor es un método especial, no un atributo."
  },
  {
    q: "Si queremos acceder al primer elemento de un array, usaremos...",
    options: [
      "array[1]",
      "array[array.length]",
      "array[0]",
      "array[1][1]"
    ],
    correct: 2,
    explanation: "La respuesta correcta es la C. array[0].\nSegún el material de estudio, concretamente en los apartados dedicados al acceso y recorrido de arrays, se establece de forma explícita que el primer elemento tiene la posición 0. El índice de un array siempre comienza en 0 y termina en la cantidad total de elementos menos uno.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es falsa, ya que array[1] accede al segundo elemento.\nLa opción B es falsa, debido a que array.length devuelve el tamaño total, pero el último índice válido es length - 1.\nLa opción D es falsa porque corresponde a la sintaxis de un array multidimensional y, aun así, no señalaría el primer elemento absoluto."
  },
  {
    q: "Todas las excepciones deben de heredar de:",
    options: [
      "La clase que contiene el método main o cualquier subclase.",
      "La clase Throwable o cualquier subclase.",
      "La clase System o cualquier subclase.",
      "Ninguna de las anteriores."
    ],
    correct: 1,
    explanation: "La respuesta correcta es la B. La clase Throwable o cualquier subclase.\nSegún el material de estudio, concretamente en el apartado dedicado a la jerarquía de excepciones, se establece de forma explícita que todas las excepciones tienen una jerarquía usando como raíz java.lang.Throwable y por debajo Exception y Error. La teoría detalla que, si se necesita definir una nueva excepción, esta ha de heredar obligatoriamente de Throwable o cualquiera de sus hijos.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es falsa, ya que la clase que contiene el método main solo actúa como punto de entrada del programa.\nLa opción C es falsa, debido a que System se emplea para el manejo de entrada y salida estándar, no para la jerarquía de excepciones.\nAl ser correcta la opción B, la opción D queda descartada."
  },
  {
    q: "TreeSet",
    options: [
      "No existe este tipo de colección",
      "Es una colección que permite tener elementos duplicados",
      "Los datos se organizan en forma de árbol jerárquico",
      "Usa la interfaz map."
    ],
    correct: 2,
    explanation: "La respuesta correcta es la C. Los datos se organizan en forma de árbol jerárquico.\nSegún el material de estudio, concretamente en el apartado dedicado a las colecciones, se establece de forma explícita que TreeSet es una estructura en árbol binario. La teoría detalla que este tipo de estructura organiza jerárquicamente sus elementos y los mantiene ordenados según sus valores o un criterio definido.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es falsa, ya que TreeSet es una colección existente y ampliamente descrita en Java.\nLa opción B es falsa, debido a que al pertenecer a Set no permite elementos duplicados.\nLa opción D es falsa, porque TreeSet no usa Map, sino la interfaz Set."
  },
  {
    q: "Un caso base es",
    options: [
      "Una plantilla para hacer recursividad",
      "Una condición de terminación de la recursividad.",
      "Un ejemplo de recursividad.",
      "Ninguna de las anteriores"
    ],
    correct: 1,
    explanation: "La respuesta correcta es la B. Una condición de terminación de la recursividad.\nSegún el material de estudio, concretamente en los apartados dedicados a la recursividad, se establece de forma explícita que al dividir un problema recursivo en subproblemas más pequeños es necesario plantear una condición de terminación para esos casos más pequeños, denominada caso base. El glosario también lo define como la parte de la recursividad que hace que termine el flujo de llamadas para evitar bucles infinitos.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es falsa, ya que no es una plantilla, sino una condición lógica concreta.\nLa opción C es falsa, debido a que no es un ejemplo, sino un componente estructural obligatorio.\nAl ser correcta la opción B, la opción D queda descartada."
  },
  {
    q: "Una aplicación...",
    options: [
      "No necesita manejar información.",
      "Necesita el manejo de información dependiendo de la funcionalidad.",
      "Necesita el manejo de información existiendo solo una entrada de datos.",
      "Necesita el manejo de información existiendo una entrada y salida de datos."
    ],
    correct: 3,
    explanation: "La respuesta correcta es la D. Necesita el manejo de información existiendo una entrada y salida de datos.\nSegún el material de estudio, concretamente en el resumen sobre estructuras de control, se establece de forma literal que cualquier programa necesita del manejo de información, siendo necesaria una entrada por donde recibe los datos y una salida para mostrar los datos hacia el usuario. La teoría enfatiza que todo programa interactúa con elementos externos tanto para entrada como para salida de información.\nA modo de aclaración sobre por qué las demás opciones son incorrectas:\nLa opción A es falsa, ya que contradice el principio básico de que cualquier programa necesita manejar información.\nLa opción B es falsa, debido a que el manejo de información no es opcional, sino general a cualquier programa.\nLa opción C es falsa, porque ignora que además de entrada debe existir una salida de datos.\nPor ello, la respuesta correcta es la D."
  }
];


