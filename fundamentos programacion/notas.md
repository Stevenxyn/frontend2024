### Lenguajes de programacion
- Alto nivel: es un lenguaje que es humanamente legible y cercano a como hablamos los humanos
- Bajo nivel: es lo mas cercano al lenguaje nativo de las pcs

### Algoritmo
Es un proceso para resolver problemas por lo general es ordenado y secuencial, siempre hay diferentes formas de resolver un mismo problema

### Variable
Es el espacio en memoria donde podemos almacenar datos y estos datos pueden cambiar en el futuro

### Palabras reservadas
Es una palabra que no podemos utilizar fuera de ese contexto para el que fue creada

### Case sentivie
Que los lenguajes de programacion diferencian entre Hola y hola ya que son la misma palabra pero la primera esta en mayuscula y la segunda no

### Diferencia entre IDE y editor de codigo
- IDE: Viene con todo lo necesario para trabajar en algun lenguaje de programacion o tecnologia
- Editor de codigo: Nosotros podemos instalarle lo que queramos para hacerlo parecer a un IDE

### Secuencia
Los programas se iran ejecutando linea tras linea lee una y despues va a la siguiente

### Dependencia
Una dependencia es algo que la aplicacion necesitara para funcionar
- Dependencies: dependencias que se ocupan en produccion
- devDependencies: dependencias que se ocupan de lado del desarrollo

### Errores comunes
- Error de sintaxis: Cuando invocamos mal variables, funciones etc o en el caso que escribamos mal alguna palabra reservada del lenguaje por ejemplo LET en lugar de let
- Error de logica: Estos son los complicados de resolver ya que en si no es un error de sintaxis porque algo haya quedado escrito mal sino que la logica que aplicamos en el algoritmo esta mal planteada

### Libreria
Es el conjunto de un monton de metodos y funciones, un conjunto de cosas

### Reglas sobre nombres de variables y constantes
- No podemos darle el nombre a una variable o constante igual a una palabra reservada del lenguaje de programacion

```
wrong way: 
let let = 20;

correct way:
let letra = 20;
```
- Nombre de variables y constantes deben tener un nombre significativo a lo que almacenaremos

```
wrong way: 
let namePersonal = 150;

correct way:
let namePersonal = 'Steven Lopez';
```
- Podemos usar letras numeros y guion bajo para definir variables y constantes. *NO PUEDES INICIAR EL NOMBRE DE UNA VARIABLE CON NUMERO*

```
correct way:
let nombre1;
let nombre_1;
let _nombre1;

wrong way
let 1nombre;
let nombre@;
let _;

```
- No podemos usar caracteres especiales al iniciar variables, perso si permite el signo $(dolar) pero debe usarlo con discrecion y saber que es lo que haras

```
wrong way
@ ( # °| # ! á é í ó ú)
let hol@;
let adiós;
let o´connor;
let año;


correct way
let $hola;
let ca$a;

```

### Recomendacion usar CamelCase - lowerCamelCase
- Usar la segunda palabra de cada variable en mayuscula

```
correct way

let nombreCompleto;
let direccionDeLaCasa;
let direccionCasa;
```

### Tipos de datos - Numericos
Es decirle a la computadora que tipo de contenido tiene una variable o constante.

```
let salario = 1500;
```

Quiere decir que esta variable contendra unicamente numericos que pueden ser asignados o producto de calculos matematicos.

```
JS
let promedioNotas = 85;

TS
let promedioNotas :number = 54;
```
### Tipos de datos - Strings
Puede contener grandes cantidades de textos, simbolos, frases o cadenas de textos.

```
JS
let nombre = "StevenLopez";
let nombre = 'StevenLopez';

TS
let nombre:string = "StevenLopez";
let nombre:string = 'StevenLopez';

```

### Tipos de datos - Blooleanos
Son variables que almacenan unicamente 2 estados verdadero o falso

#### Recomendacion
El nombre par auna variable tipo booleana debe de leerse en positivo

```
JS
let activo = true; //Aca esta activo
let activo = false; //Aca esta desactivado

TS
let activo:boolean = true;
let activo:boolean = false;

```

### Estructura de control if y else
Nos permite poder decirle a la computadora que accion tomar y que camino seguir dependiendo de condiciones y/o decisiones.

El if y else se pueden anidar, es decir en una condicion if podemos realizar otro if else y asi sucesivamente sin limite.

```
if (expresion o condicion)
else
```
### Estructura de control switch
Permite realizar multiples decisiones de forma limpia y eficiente

```
switch (variable o expresion a evaluar)
case1: "hoy es lunes";
  break
case2: "hoy es martes";
  break
case3: "hoy es miercoles";
  break
default: "No es ningun dia";
```

### Ciclos o loops
Nos permiten ejecutar las mismas lineas de codigo una y otra vez de forma consecutiva

El siguiente ciclo es muy util cuando no conocemos exactamente la cantidad d eveces que necesitamos ejecutar el codigo

```
while(condicion){

}
```

El siguiente codigo es util cuando sabemos la cantidad de veces que necesitamos ejecutar el codigo

https://prnt.sc/VL5SNf3wD8RF
```
for(let variable = 1;variable <= 10; variable++){

}
```
### Funciones
Una funcion es un conjunto de lineas de codigo que realizan una tarea especifica y puede retornar algo

### Que es un parametro / argumento
Es algo que podemos dar para que las funciones trabajen

### Export y imports
Esto nos sirve para tener el codigo separado y ordenado, debemos asignar el export a lo que queremos importar a otros lugares y no olvidar que debemos en donde estemos trabajando y tratemos de importar ya sean funciones o demas siempre importarlas antes
```
//Ejemplo
import {
  addTwoNumbers, 
  substractTwoNumbers, 
  timesTwoNumbers, 
  divideTwoNumbers
} from './sections/fundamentals/math-helpers';

```
### Arreglos- Arrays
Es un conjunto de cosas similares

```
let flores = ["rosa","clavel","otra flor];

//llamar a una flor es especifica
let florPrimera = flores[1]; =>clavel


```


### Objetos
Es una representacion abstracta de una cosa en la vida real
Por ejemplo:

Un auto
- Marca:Mitsubishi
- Color:Blanco
- Tipo:4x4
- Cantidad Llantas:Cuatro llantas
- Puertas:5 puertas

Los objetos son como variables que dentro de si tienen propiedades, estas estan amarradas al objeto en el ejemplo anterior el Auto

- Los metodos: son funciones que estan dentro del objeto cuando ponemos el . Los metodos pueden recibir argumentos

- cuando usamos this es para mencionar el llamado del mismo objeto en el que estamos, si en el futuro cambia no habria que modificar los llamados ya que estos apuntan al objeto en si con this


### Clases
Al igual que los objetos pueden ser representaciones abstractas de cosas. Lo explica en el curso es como pensar que son moldes para hacer galletas
