const clients = (req,res)=>{
  res.send('Pagina de clientes')
}

const list = (req, res)=>{
  res.send('Pagina de lista de clientes')
}

const novo = (req, res)=>{
  res.send('Pagina de cadastro de clientes')
}

module.exports ={
  clients,
  list,
  novo
}