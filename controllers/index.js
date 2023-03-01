const main = (req,res)=>{
  res.send('Bem vindo a página principal!')
}

const p1 = (req,res)=>{
  res.send('Pagina 01')
}

module.exports = {
  main,
  p1
}