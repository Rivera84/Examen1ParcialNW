exports.home = (req, res, next) =>{
    res.render("amortizacion");
}

exports.resultado = (req, res, next)=>{
    const {prestamo, interes, mes} = req.body;
    const cuota = (prestamo*interes)/ Math.pow(1-(1+interes),-4)
    res.send(
       `La Cuota es: ${cuota}`
        );

 
 }
