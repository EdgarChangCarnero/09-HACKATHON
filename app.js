/*-----------------------------------------------------------------------------------------------------
1. Implementar un algoritmo que reciba 2 argumentos y los sume, 
   el resultado se deberá imprimir en pantalla
-----------------------------------------------------------------------------------------------------*/
const preguntaUno = () => {
    let argumentoUno = Number(prompt('Ingrese el primer argumento, por ejemplo 10:'));
    let argumnetoDos = Number(prompt('Ingrese el segundo argumento, por ejemplo 10:'));
    let preguntaUno = argumentoUno + argumnetoDos;
    //Se investigó la función isNaN()    
    (isNaN(preguntaUno)) ?
    console.log('Pregunta 1: Los datos ingresados son incorrecto. Verifique que los datos ingresados sean numéricos'):
        console.log(`Pregunta 1: El resultado es: ${preguntaUno}`);
}
//Llamo por consola (f12) el resultado de la suma de 2 argumento, validando que sea numéricos.
preguntaUno();


/*-----------------------------------------------------------------------------------------------------
2. Un estudiante realiza 4 exámenes, calcular el promedio de estos
-----------------------------------------------------------------------------------------------------*/
const preguntaDos = () => {
    let examenUno = Number(prompt('Ingrese la Nota del primer examen en un rango de 0 al 20, por ejemplo 20:'))
    let examenDos = Number(prompt('Ingrese la Nota del segundo examen en un rango de 0 al 20, por ejemplo 18:'))
    let examenTres = Number(prompt('Ingrese la Nota del tercer examen en un rango de 0 al 20, por ejemplo 17:'))
    let examenCuatro = Number(prompt('Ingrese la Nota del cuarto examen en un rango de 0 al 20, por ejemplo 20:'))
    let sumaExamenes = examenUno + examenDos + examenTres + examenCuatro;
    let promedio = sumaExamenes / 4;
    //Se investigó la función isNaN()
    (isNaN(promedio)) ? console.log('Pregunta 2: Los datos ingresados son incorrecto. Verifique que los datos sean numéricos'):
        (examenUno >= 0 && examenUno <= 20 && examenDos >= 0 && examenDos <= 20 && examenTres >= 0 && examenTres <= 20) ?
        console.log(`Pregunta 2. El promedio de examenes es: ${promedio}`) :
        console.log(`Pregunta 2. Los datos ingresados no se encuentran en el rango de 0 a 20`);
}
//Llamo por consola (f12) el promedio de la suma de 4 notas, validando que sea numéricos.
preguntaDos();

/*-----------------------------------------------------------------------------------------------------
3. Calcular el área de un rectángulo
-----------------------------------------------------------------------------------------------------*/
const preguntaTres = () => {
    let altura = Number(prompt('Ingrese la altura del rectángulo, por ejemplo 10:'));
    let base = Number(prompt('Ingrese la base del rectángulo, por ejemplo 20:'));
    let area = altura * base;
    (isNaN(area)) ? console.log('Pregunta 3: Los datos ingresados son incorrecto. Verifique que los datos sean numéricos'):
        console.log(`Pregunta 3: El área del rectángulo es: ${area}`);
}
preguntaTres();

/*-----------------------------------------------------------------------------------------------------
4. Calcular el área de un triángulo
-----------------------------------------------------------------------------------------------------*/
const preguntaCuatro = () => {
    let baseT = Number(prompt('Ingre la base del triángulo, por ejemplo 10:'));
    let alturaT = Number(prompt('Ingrese la altura del triángulo, por ejemplo 10:'));
    let areaT = (baseT * alturaT) / 2;
    (isNaN(areaT)) ? console.log('Pregunta 4: Los datos ingresados son incorrecto. Verifique que los datos sean numéricos'):
        console.log(`Pregunta 4: El área del triángulo es: ${areaT}`);
}
preguntaCuatro();

/*-----------------------------------------------------------------------------------------------------
5. Calcular el área de una circunferencia
-----------------------------------------------------------------------------------------------------*/
const preguntaCinco = () => {
    const pi = 3.14;
    let radio = Number(prompt('Ingrese el radio de la circunferencia, por ejemplo 10:'));
    let radioExponente = Math.pow(radio, 2);
    let areaCirc = pi * radioExponente;
    (isNaN(areaCirc)) ? console.log('Pregunta 5: Los datos ingresados son incorrecto. Verifique que los datos sean numéricos'):
        console.log(`Pregunta 5: El área de la circunferencia es: ${areaCirc}`);
}
preguntaCinco();

/*-----------------------------------------------------------------------------------------------------
6. Determinar el sueldo semanal de un trabajador basándose en sus horas trabajadas y su salario de hora hombre
-----------------------------------------------------------------------------------------------------*/
const preguntaSeis = () => {
    let horasTrab = Number(prompt('Ingrese las horas trabajadas, por ejemplo 10:'));
    let salarioHoraHombre = Number(prompt('Ingrese el salario de horas hombre, por ejemplo 10:'));
    const diasSemana = 7;
    let sueldoSemanal = horasTrab * salarioHoraHombre * 7;
    (isNaN(sueldoSemanal)) ? console.log('Pregunta 6: Los datos ingresados son incorrecto. Verifique que los datos sean numéricos'):
        console.log(`Pregunta 6. El suldo semanal de un trabajador es: ${sueldoSemanal}`);
}
preguntaSeis();

/*-----------------------------------------------------------------------------------------------------
7. Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero. 
   Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas, 
   pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a resolver el problema, determinando cuantas pulgadas debe pedir con base en 
   los metros que requiere. Represéntelo mediante el diagrama de flujo y el 
   pseudocódigo(1 pulgada = 0.0254 m)
-----------------------------------------------------------------------------------------------------*/
const preguntaSiete = () => {
    let metros = Number(prompt('Ingrese los metros de tela, por ejemplo 10:'));
    const unaPulgada = 0.0254;
    let pulgadasAPedir = (metros / unaPulgada);
    let redondeoADosDecimales = pulgadasAPedir.toFixed(2);
    (isNaN(redondeoADosDecimales)) ? console.log('Pregunta 7: Los datos ingresados son incorrecto. Verifique que los datos sean numéricos'):
        console.log(`Pregunta 7: Las pulgadas que debe pedir es: ${redondeoADosDecimales}`);
}
preguntaSiete();

/*-----------------------------------------------------------------------------------------------------
8. Una empresa importadora desea determinar cuántos dólares puede adquirir 
   con equis cantidad de dinero peruano
-----------------------------------------------------------------------------------------------------*/
const preguntaOcho = () => {
    let dolares = Number(prompt('Ingrese el número de dolares, por ejemplo 100:'));
    const cambioSoles = 3.81;
    let dineroPeruano = dolares * cambioSoles;
    (isNaN(dineroPeruano)) ? console.log('Pregunta 8: Los datos ingresados son incorrecto. Verifique que los datos sean numéricos'):
        console.log(`Pregunta 8: La cantidad de dinero en dinero peruano es: ${dineroPeruano}`);
}
preguntaOcho();

/*-----------------------------------------------------------------------------------------------------
9. Una empresa que contrata personal requiere determinar la edad de las 
   personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo se 
   les pregunta el año en que nacieron
-----------------------------------------------------------------------------------------------------*/
const preguntaNueve = () => {
    let anioNacieron = Number(prompt('Ingrese el año que nacieron, por ejemplo 1990:'));
    const anioActual = 2021;
    let edad = anioActual - anioNacieron;
    (isNaN(edad)) ? console.log('Pregunta 9: Los datos ingresados son incorrecto. Verifique que los datos sean numéricos'):
        console.log(`Pregunta 9. La edad de la persona es: ${edad}`);
}
preguntaNueve();

/*-----------------------------------------------------------------------------------------------------
10. Se tiene el nombre y la edad de tres personas. Se desea saber el nombre y la 
    edad de la persona de menor edad
-----------------------------------------------------------------------------------------------------*/
const preguntaDiez = () => {
    let edadPersonaUno = Number(prompt('Ingrese la edad de la primera persona, por ejemplo 10:'));
    let nombrePersonaUno = String(prompt('Ingrese el nombre de la primera persona, , por ejemplo Edgar:'));
    let edadPersonaDos = Number(prompt('Ingrese la edad de la segunda persona, por ejemplo 20:'));
    let nombrePersonaDos = String(prompt('Ingrese el nombre de la segunda persona, por ejemplo Diego:'));
    let edadPersonaTres = Number(prompt('Ingrese la edad de la tercera persona, por ejemplo 30:'));
    let nombrePersonaTres = String(prompt('Ingrese el nombre de la tercera persona, por ejemplo Emily:'));

    (isNaN(edadPersonaUno) || isNaN(edadPersonaDos) || isNaN(edadPersonaTres)) ?
    console.log('Pregunta 10: Las edades ingresados son incorrecto. Verifique que sean numéricos'):
        (edadPersonaUno < edadPersonaDos && edadPersonaUno < edadPersonaTres) ?
        console.log(`Pregunta 10: La edad de la persona menor es: ${edadPersonaUno} y su nombre es: ${nombrePersonaUno}`) :
        (edadPersonaDos < edadPersonaUno && edadPersonaDos < edadPersonaTres) ?
        console.log(`Pregunta 10: La edad de la persona menor es: ${edadPersonaDos} y su nombre es: ${nombrePersonaDos}`) :
        (edadPersonaTres < edadPersonaUno && edadPersonaDos < edadPersonaTres) ?
        console.log(`Pregunta 10: La edad de la persona menor es: ${edadPersonaTres} y su nombre es: ${nombrePersona}`) :
        (edadPersonaUno === edadPersonaDos || edadPersonaUno === edadPersonaTres || edadPersonaDos === edadPersonaTres) ?
        console.log(`Pregunta 10: La edades de las personas ingresadas son igulaes con la edad ${edadPersonaUno} y sus nombres son: ${nombrePersonaUno}, ${nombrePersonaDos} y ${nombrePersonaTres}`) :
        (edadPersonaUno == edadPersonaDos && edadPersonaUno < edadPersonaTres) ?
        console.log(`Pregunta 10: La edades de la primera y segunda personas son igulaes y son los menores con la edad ${edadPersonaUno} y sus nombres son: ${nombrePersonaUno} y ${nombrePersonaDos}`) :
        (edadPersonaUno == edadPersonaTres && edadPersonaUno < edadPersonaDos) ?
        console.log(`Pregunta 10: La edades de la primera y tercera personas son igulaes y son los menores con la edad ${edadPersonaUno} y sus nombres son: ${nombrePersonaUno} y ${nombrePersonaTres}`) :
        (edadPersonaDos == edadPersonaTres && edadPersonaDos < edadPersonaUno) ?
        console.log(`Pregunta 10: La edades de la segunda y tercera personas son igulaes y son los menores con la edad ${edadPersonaDos} y sus nombres son: ${nombrePersonaDos} y ${nombrePersonaTres}`) :
        console.log('Eso es todo amigos con la pregunta 10 !!!!!');
}
preguntaDiez();

/*-----------------------------------------------------------------------------------------------------
11. Se les dará un bono por antigüedad a los empleados de una tienda. Si tienen un 
    año, se les dará $100; si tienen 2 años, $200, y así sucesivamente hasta los 5 
    años. Para los que tengan más de 5, el bono será de $1000. Realice un algoritmo 
    y represéntelo ,que permita determinar el bono que recibirá un trabajador
-----------------------------------------------------------------------------------------------------*/
const preguntaOnce = () => {
    const bonoUnAnio = 100;
    const bonoDosAnio = 200;
    const bonoTresAnio = 300;
    const bonoCuatroAnio = 400;
    const bonoQuintoAnio = 500;
    const bonoMasCincoAnio = 1000;
    let numeroAnios = Number(prompt('Ingrese el número de años, por ejemplo 10'));
    if (isNaN(numeroAnios)) {
        console.log('Pregunta 11: El número de anio es incorrecto. Verifique que sean numérico.');
    } else {
        switch (numeroAnios) {
            case 1:
                console.log(`Pregunta 11: El bono que recibirá es $${bonoUnAnio}`);
                break;
            case 2:
                console.log(`Pregunta 11: El bono que recibirá es $${bonoDosAnio}`);
                break;
            case 3:
                console.log(`Pregunta 11: El bono que recibirá es $${bonoTresAnio}`);
                break;
            case 4:
                console.log(`Pregunta 11: El bono que recibirá es $${bonoCuatroAnio}`);
                break;
            case 5:
                console.log(`Pregunta 11: El bono que recibirá es $${bonoQuintoAnio}`);
                break;
            case 5:
                console.log(`Pregunta 11: El bono que recibirá es $${bonoQuintoAnio}`);
                break;
            default:
                console.log(`Pregunta 11: El bono que recibirá es $${bonoMasCincoAnio}`);
                break;
        }
    }
}
preguntaOnce();
/*-----------------------------------------------------------------------------------------------------
12. Un profesor tiene un salario inicial de $1500, y recibe un incremento de 10 % anual 
    durante 6 años. ¿Cuál es su salario al cabo de 6 años? ¿Qué salario ha recibido 
    en cada uno de los 6 años? Realice el algoritmo y representan la solución, 
    utilizando el ciclo apropiado
-----------------------------------------------------------------------------------------------------*/
const preguntaDoce = () => {
    const salarioMensual = 1500;
    const salarioAnual = salarioMensual * 12;
    const incremento = 10 / 100;
    const incrementoAnual = salarioAnual * incremento;
    let salarioAnualMasIncrementoAnual = salarioAnual + incrementoAnual;
    let saliarioSeisAnios = salarioAnualMasIncrementoAnual * 6;
    console.log(`Pregunta 12: Salario mensual es ${salarioMensual}<br>`);
    console.log(`Pregunta 12: Salario anual es ${salarioAnual}<br>`);
    console.log(`Pregunta 12: El incremento anual es ${incremento}<br>`);
    console.log(`Pregunta 12: El salario anual + el incremento anual es ${salarioAnualMasIncrementoAnual}<br>`);
    console.log(`Pregunta 12: El salario anual + el incremento anual dentro de los 6 anios es ${saliarioSeisAnios}<br>`);
}
preguntaDoce();
/*-----------------------------------------------------------------------------------------------------
13. Realice un algoritmo para leer las calificaciones de N alumnos y determine el 
    número de aprobados y reprobados
-----------------------------------------------------------------------------------------------------*/
const preguntaTrece = () => {
    let numeroAlumnos = Number(prompt('Ingrese el número de alumnos, por ejemlo 5'));
    let determine;
    let aprobado = 0;
    let desaprobado = 0;
    if (isNaN(numeroAlumnos)) {
        console.log('Pregunta 13: El número de alumnos es incorrecto. Verifique que sea numérico.');
    } else {
        for (let step = 0; step < numeroAlumnos; step++) {
            // Se ejecuta 5 veces, con valores del paso 0 al 4.
            determine = String(prompt('Aprobado o desaprobado?'));
            if (determine.toLowerCase() == 'aprobado') {
                aprobado += 1;
            } else if (determine.toLowerCase() == 'desaprobado') {
                desaprobado += 1;
            }
        }
        console.log(`Pregunta 13: El número de aprobados es ${aprobado}`);
        console.log(`Pregunta 13: El número de desaprobados es ${desaprobado}`);
    }
}
preguntaTrece();

/*-----------------------------------------------------------------------------------------------------
14. Una compañía, fabrica focos de colores (verdes, blancos y rojos). Se desea 
    contabilizar, de un lote de N focos, el número de focos de cada color que hay en 
    existencia
-----------------------------------------------------------------------------------------------------*/
let preguntaCatorce = () => {
    let numeroFocos = Number(prompt('Ingrese el número de focos, por ejemplo 5'));
    let colorFoco;
    let verde = 0;
    let blanco = 0;
    let rojo = 0;
    let otros = 0;
    for (let i = 0; i < numeroFocos; i++) {
        colorFoco = String(prompt('Ingrese el color de focos, por ejempo verde o blanco o rojo u otro'));
        switch (colorFoco.toLowerCase()) {
            case 'verde':
                verde += 1;
                break;
            case 'blanco':
                blanco += 1;
                break;
            case 'rojo':
                rojo += 1;
                break;
            default:
                otros += 1;
        }
    }
    console.log(`Pregunta 14: El número de focos de color verde es ${verde}<br>`);
    console.log(`Pregunta 14: El número de focos de color blanco es ${blanco}<br>`);
    console.log(`Pregunta 14: El número de focos de color rojo es ${rojo}<br>`);
    console.log(`Pregunta 14: El número de focos de color otros es ${otros}<br>`);
}
preguntaCatorce();

/*-----------------------------------------------------------------------------------------------------
15. Realice un algoritmo para determinar si una persona puede votar con base en 
    su edad en las próximas elecciones
-----------------------------------------------------------------------------------------------------*/
const preguntaQuince = () => {
    const mayorEdad = 18;
    let anio_Nacieron = Number(prompt('Ingrese el año que nacieron, por ejemplo 1990'));
    const anio_Actual = 2021;
    let edad = anio_Actual - anio_Nacieron;

    (isNaN(anio_Nacieron)) ? console.log('Pregunta 15: El dato ingresado es incorrecto. Verifique que sea numérico'):
        (edad >= mayorEdad) ? console.log(`Pregunta 15: La persona tiene ${edad}, la cual puede votar en estas elecciones`) :
        console.log(`Pregunta 15: La persona tiene ${edad}, la cual NO puede votar en estas elecciones por ser menor de edad`)
}
preguntaQuince();