//------------------Menu-----------------------
let menu = function () {
    console.log('------------------------------------------------\n------------------------------------------------');
    console.log('1.Agregar Producto');
    console.log('2.Modificar Stock');
    console.log('3.Registrar venta y producir stock');
    console.log('4.Mostrar promedio de ventas realizadas');
    console.log('5.Mostrar productos con stock 0');
    console.log('6.Salir del sistema');
    console.log('------------------------------------------------\n------------------------------------------------');
}

let validarMenu = function () {
    var op = 0;
    menu();
    op = prompt('Ingresa una de las opciones:');
    if (op != 1 && op != 2 && op != 3 && op != 4 && op != 5 && op != 6) validarMenu();
    tarea1(op);
}
//------------------------------------------------
//------------------Agregar-----------------------
inventario = function (product) {
    laJefecita.push(product);
    validarMenu();
}

let ingresarP = function () {
    c = prompt('Ingresa el codigo: ');
    d = prompt('Ingresa una descripcion: ');
    tp = prompt('Ingresa el tipo de producto: ');
    pc = prompt('Ingresa el precio de compra: ');
    pv = prompt('Ingresa el precio de venta: ');
    s = prompt('Ingresa la cantidad en stock');
    let producto = {
        Codigo: c,
        Descripcion: d,
        tipoProducto: tp,
        precioCompra: pc,
        precioVenta: pv,
        Stock: s
    };
    inventario(producto);
}
//------------------------------------------------
//------------------Modificar-----------------------
let modificarS = function () {
    c = prompt('Ingresa el codigo del producto: ');
    for (let i of laJefecita) {
        (i.Codigo == c) ? sustituir(laJefecita.indexOf(i)) : console.log('No se encontro el producto');
    }
}

let sustituir = function (indice) {
    laJefecita[indice].Descripcion = prompt('Ingresa una descripcion: ');
    laJefecita[indice].tipoProducto = prompt('Ingresa el tipo de producto: ');
    laJefecita[indice].precioCompra = prompt('Ingresa el precio de compra: ');
    laJefecita[indice].precioVenta = prompt('Ingresa el precio de venta: ');
    laJefecita[indice].Stock = prompt('Ingresa la cantidad en stock');
    validarMenu();
}
//------------------------------------------------
//------------------RegVenta, RedStock-----------------------
let rVentaStock = function () {
    c = prompt('Ingresa el codigo del producto: ');
    for (let i of laJefecita) {
        (i.Codigo == c) ? camb(laJefecita.indexOf(i), i) : console.log('No se encontro el producto');
    }
}

let camb = function (indice, objeto) {
    vendido = prompt('Ingresa la cantidad vendida: ');
    stockProv = objeto.Stock - vendido;
    if (stockProv > -1) {
        cantVentas.push(vendido);
        objeto.Stock = stockProv;
        if (objeto.Stock == 0) {
            stockCero.push(objeto);
            laJefecita = deleteP(indice);
        }
        else {
            console.log('Operacion realizada quedan ' + stockProv + ' en stock');
            validarMenu();
        }
    }
}

let deleteP = function (indice) {
    return laJefecita.slice(0, indice).concat(laJefecita.slice(indice + 1));
}
//------------------------------------------------
//------------------Promedio-----------------------
let prom = function () {
    if (cantVentas.length == 0) console.log('Aun no se han realizado ventas...');
    x = sumatoria(cantVentas) / cantVentas.legth;
    console.log('El promedio de ventas es: ' + x + '.');
    validarMenu();
}

let sumatoria = function (datos) {
    result = 0;
    for (let i of datos) result += i;
    return result;
}
//------------------------------------------------
//------------------stock = 0-----------------------
let mostrarVendido = function () {
    i = 1;
    if (stockCero.length != 0) {
        console.log('Los productos vendidos son: ');
        for (let x of stockCero) {
            console.log(i + '-' + x + ' codigo: ' + x.Codigo);
            i++;
        }
    } else console.log('Aun no se ha vendido nada...');
}
//------------------------------------------------
//------------------Administrador de opts-----------------------
let tarea1 = function (opt) {
    switch (opt) {
        case '1':
            ingresarP();
            break;
        case '2':
            modificarS();
            break;
        case '3':
            rVentaStock()
            break;
        case '4':
            prom();
            break;
        case '5':
            mostrarVendido();
            break;
        case '6':
            return '';
            break;
        default:
            validarMenu();
    }
}
//------------------------------------------------
//#######-MAIN Y DECLARACION DE VAR'S-##########
laJefecita = [];
stockCero = [];
cantVentas = [];

validarMenu();
