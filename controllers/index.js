const main = (req,res)=>{
  res.render('home',{
    time: new Date().toUTCString()
  })
  
}

const p1 = (req,res)=>{
  res.send('Pagina 01')
}

module.exports = {
  main,
  p1
}