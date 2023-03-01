const clientsController = require('./clients')
const expect = require('chai').expect
const sinon = require('sinon')

describe('clients controller', ()=>{
  it('Retorna a página de clientes',()=>{
    let res = {
      send:()=>{}
    }
    let mock = sinon.mock(res)
    mock.expects('send').once().withArgs('Pagina de clientes')
    clientsController.clients({},res)
    
  })
})

describe('clients controller',()=>{
  it('Retorna a página de lista de clientes', ()=>{
    let res = {
      send: ()=>{}
    }
    let mock = sinon.mock(res)
    mock.expects('send').once().withArgs('Pagina de lista de clientes')
    clientsController.list({},res)
  })
})

describe('clients controller', ()=>{
  it('Retorna a página de cadastro de clientes', ()=>{
    let res = {
      send: ()=>{}
    }
    let mock = sinon.mock(res)
    mock.expects('send').once().withArgs('Pagina de cadastro de clientes')
    clientsController.novo({},res)
  })
})