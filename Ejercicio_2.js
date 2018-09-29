let menuL = function () {
    console.log('1.Metros <=> Centímetros.');
    console.log('2.Kilómetros <=> Metros.');
    console.log('3.Pies <=> Metros.');
}

let menuT = function () {
    console.log('1.Celsius <=> Fahrenheit.');
    console.log('2.Kelvin <=> Fahrenheit.');
    console.log('3.elvin <=> Celsius.');
}

let porcien = function (m) {
    return 'Resultado=' + m * 100;
}

let longitud = function (m, u, uC) {
    menuL();
    var op;
    (u == 'm' && uC == 'cm') ? op = 1 : console.log('unidad a la que se desea convertir incorrecta');
    ((u == 'km' || u == 'Km') && uC == 'm') ? op = 2 : console.log('unidad a la que se desea convertir incorrecta');
    (u == 'ft' && uC == 'm') ? op = 3 : console.log('unidad a la que se desea convertir incorrecta');
    switch (op) {
        case 1:
            console.log(porcien(m) + uC);
            break;
        case 2:
            console.log(porcien(m) + uC);
            break;
        case 3:
            console.log((m/3.28) + uC);
            break;
    }
}

let temperatura(m, u, uC) {
    menuT();
    var op;
    (u == 'c' && uC == 'f') ? op = 1 : console.log('unidad a la que se desea convertir incorrecta');
    (u == 'k' || u == 'f') ? op = 2 : console.log('unidad a la que se desea convertir incorrecta');
    (u == 'k' && uC == 'c') ? op = 3 : console.log('unidad a la que se desea convertir incorrecta');
    switch (op) {
        case 1:
            console.log(((u * 1.8) +32) + uC);
            break;
        case 2:
            console.log(((9*(m - 273.15)/5) + 32) + uC);
            break;
        case 3:
            console.log((m - 273.15) + uC);
            break;
    }
}

let tarea2 = function (medida, unidad, unidadConvertir, tipo) {
    while (tipo != 'L' && tipo != 'T') {
        switch (tipo) {
            case 'L':
                longitud(medida, unidad, unidadConvertir);
                break;
            case 'T':
                temperatura(medida, unidad, unidadConvertir);
                break;
            default:
                tarea2();
                break;
        }
    }
}