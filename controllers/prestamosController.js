const calcularmetodoFrances = (capital, tasa, plazo) =>{
    let deuda = capital;
    let cuota = 0;
    let mes = 0;
    let cuentaFixed =0;
    let interes = 0;
    let interesFixed = 0;
    const cuotas = [];

    //Transformar los anios en meses
    plazo = Math.round(plazo * 12);
    
    //Calcular la cuota
    //En el metodo frances la cuota siempre es la misma
    cuota = (capital * (tasa / 100))/(1 - (1 + tasa/100)**-plazo);
    cuotaFixed = cuota.toFixed(2);

    while(mes != plazo){
        //Calcular el interes 
        interes = deuda* (tasa/100);
        interesFixed = interes.toFixed(2);

        //El capital es la cuota - interes
        capital = cuotaFixed - interesFixed;

        //Actualizar la deuda
        deuda -= capital;

        //Alctualizar el mes
        mes++;
        cuotas.push({
            mes,
            capital,
            interesFixed,
            cuota,
            deuda
        });
    }
    return cuotas;
}

//Muestra el formulario
exports.metodoFrances = (req, res, next) =>{
    res.render("amortizacion");
}

//Desplegar los valores
exports.mostrarMetodoFrances = (req, res, next)=>{
    //Realizar los calculos
    const {monto, tasa, periodo} = req.body;
    const cuotas = calcularmetodoFrances(monto, tasa, periodo);
 
    res.render("prestamo", {cuotas});
    console.log(cuotas);
 }
