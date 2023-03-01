const indexController = require('./index')
const expect = require('chai').expect
const sinon = require('sinon')

describe('index controller', ()=>{
  it('Retorna a página 01',()=>{
    let res = {
      send:()=>{}
    }
    let mock = sinon.mock(res)
    mock.expects('send').once().withArgs('Pagina 01')
    indexController.p1({},res)
    
  })
})

describe('index controller', ()=>{
  it('Retorna a página Principal',()=>{
    let res = {
      send:()=>{}
    }
    let mock = sinon.mock(res)
    mock.expects('send').once().withArgs('Bem vindo a página principal!')
    indexController.main({},res)
    
  })
})
