// Con la función getMonth() realiza un script para escriba el nombre del mes en el que
// estamos. La variable a usar seria:

function getMonth() {
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const mesActual = new Date().getMonth();
    return meses[mesActual]
}

console.log(getMonth())