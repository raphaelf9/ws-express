const calc = (req, res)=>{
  
  const {num1, num2} = req.query
  if(num1 & num2){
    let soma = parseFloat(num1) + parseFloat(num2)
    res.send(`A soma dos valores recebidos na query string é: ${soma}`)
    console.log(parseFloat(num1) + parseFloat(num2))
  }else{
    res.send(`Passe dois numeros por query strings para ver sua soma!`)
  }
}

module.exports = {
  calc
}