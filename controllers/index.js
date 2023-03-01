const main = (req,res)=>{
  res.send('Estamos online')
}

const p1 = (req,res)=>{
  res.send('Pagina 01')
}

module.exports = {
  main,
  p1
}