                                                // EJERCICIO 1
// const sumar = (num1, num2) => num1 + num2;
// console.log(sumar(2, 3));
// console.log(sumar(1.2, 3.4));
// console.log(sumar(3, -5));

                                                // EJERCICIO 2
// const restar = (num1, num2) => num1 - num2;
// console.log(restar(3, 2));
// console.log(restar(10, 5.5));
// console.log(restar(3, 5));

                                                // EJERCICIO 3
// const multiplicar = (num1, num2) => num1 * num2;
// console.log(multiplicar(2, 3));
// console.log(multiplicar(4, 0.5));

                                                // EJERCICIO 4
// const dividir = (num1, num2) => num1 / num2;
// console.log(dividir(10, 2));
// console.log(dividir(1.2, 0.5));
// console.log(dividir(3, -5));

                                                // EJERCICIO 5
// const esPar = (num) => num % 2 === 0;
// console.log(esPar(4));
// console.log(esPar(5));

                                                // EJERCICIO 6
// const esImpar = (num) => num % 2 !== 0;
// console.log(esImpar(5));
// console.log(esImpar(4));

                                                // EJERCICIO 7
// const areaTriangulo = (num1, num2) => num1 * num2 / 2;
// console.log(areaTriangulo(3 , 4));
// console.log(areaTriangulo(5 , 6));

                                                // EJERCICIO 8
const gritar = (word) => `¡${word}!`;
// console.log(gritar('hola'));
// console.log(gritar('aaaaaa'));

                                                // EJERCICIO 9
const getFullName = (nombre, apellido) => `${nombre} ${apellido}`;
// console.log(getFullName('Mariana', 'Juárez'));
// console.log(getFullName('Ada', 'Lovelace'));

                                                // EJERCICIO 10
const saludar = (nombre) => `Hola ${nombre}, un gusto conocerte`;
// console.log(saludar('Mariana'));
// console.log(saludar('Ada'));

                                                // EJERCICIO 11
const saludarGritando = (nombre, apellido) => gritar(saludar(getFullName(nombre, apellido)));
console.log(saludarGritando('Mariana', 'Juárez'));
console.log(saludarGritando('Ada', 'Lovelace'));

                                                // EJERCICIO 12
// const obtenerDatosDeCiudad = (nombre, poblacion, pais) => `La ciudad de ${nombre} tiene una población de ${poblacion} habitantes y está ubicada en ${pais}.`;
// console.log(obtenerDatosDeCiudad('Barquisimeto', 881127,'Venezuela'));
// console.log(obtenerDatosDeCiudad('Santa Fe', 545606,'Argentina'));

                                                // EJERCICIO 13
// const horasEnSegundos = (horas) => horas * 60 * 60;
// console.log(horasEnSegundos(1));
// console.log(horasEnSegundos(3));
// console.log(horasEnSegundos(4.5));

                                                // EJERCICIO 14
// const perimetroRectangulo = (ancho, alto) => (ancho + alto) * 2;
// console.log(perimetroRectangulo(3.2,5));
// console.log(perimetroRectangulo(10,20));

                                                // EJERCICIO 15
// const calcularPorcentaje = (numero, porcentaje) => numero * porcentaje / 100;
// console.log(calcularPorcentaje(100,15));
// console.log(calcularPorcentaje(10,50));
// console.log(calcularPorcentaje(200,10));

                                                // EJERCICIO 16
// const sumarPorcentaje = (numero, porcentaje) => numero + calcularPorcentaje(numero, porcentaje);
// console.log(sumarPorcentaje(100,15));
// console.log(sumarPorcentaje(10,50));
// console.log(sumarPorcentaje(200,10));

                                                // EJERCICIO 17
// const restarPorcentaje = (numero, porcentaje) => numero - calcularPorcentaje(numero, porcentaje);
// console.log(restarPorcentaje(100, 15));
// console.log(restarPorcentaje(10, 40));
// console.log(restarPorcentaje(200, 10));

                                                // EJERCICIO 18
// const calcularFPS = (fps, min) => (min*60) * fps;
// console.log(calcularFPS(1,1));
// console.log(calcularFPS(10,2));
// console.log(calcularFPS(2,3));

                                                // EJERCICIO 19
// const obtenerCompetencia = (a, b) => `${a} vs. ${b}`
// console.log(obtenerCompetencia('JavaScript', 'Python'));
// console.log(obtenerCompetencia('CocaCola', 'Pepsi'));
// console.log(obtenerCompetencia('Perros', 'Gatos'));

                                                // EJERCICIO 20
// const generarEmail = (usuario, dominio) => `${usuario}@${dominio}.com`;
// console.log(generarEmail('adalovelace', 'gmail'));

                                                // EJERCICIO 21
// const esMayorDeEdad = (edad) => edad >=18;
// console.log(esMayorDeEdad(15));
// console.log(esMayorDeEdad(18));
// console.log(esMayorDeEdad(27));

                                                // EJERCICIO 22
// const haceCalor = (temperatura) => temperatura >= 22;
// console.log(haceCalor(12));
// console.log(haceCalor(22));
// console.log(haceCalor(32));

                                                // EJERCICIO 23
// const haceFrio = (temperatura) => temperatura <= 12;
// console.log(haceFrio(12));
// console.log(haceFrio(22));
// console.log(haceFrio(3));
// console.log(haceFrio(-2));

                                                // EJERCICIO 24
// const calcularPuntaje = (facil, normal, dificil) => {
//     const ejercicio1 = facil * 3;
//     const ejercicio2 = normal * 5;
//     const ejercicio3 = dificil * 10;
//     return ejercicio1 + ejercicio2 + ejercicio3;
// };
// console.log(calcularPuntaje(3,0,0));
// console.log(calcularPuntaje(0,2,1));
// console.log(calcularPuntaje(5,1,2));

                                                // EJERCICIO 25
// const aceptaDeposito = (monto) => monto % 10 === 0 
// console.log(aceptaDeposito(440));
// console.log(aceptaDeposito(123));
// console.log(aceptaDeposito(500.50));
// console.log(aceptaDeposito(1000));