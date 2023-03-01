const calcController = require('./calculadora')
const expect = require('chai').expect
const sinon = require('sinon')

describe('calc controllers', ()=>{
  it('Retorna a página da calculadora sem passagem de parametro na query string',()=>{
    let res = {
      send:()=>{}
    }
    let mock = sinon.mock(res)
    mock.expects('send').once().withArgs('Passe dois numeros por query strings para ver sua soma!')
    calcController.calc({query:{}},res)
  })
  it('Retorna o calculo dos parâmetros vindo por query strings',()=>{
    let res = {
      send:()=>{}
    }
    let req = {
      query: {
        num1:'10',
        num2:'20'
      }
    }
    let mock = sinon.mock(res)
    mock.expects('send').once().withArgs('A soma dos valores recebidos na query string é: 30')
    calcController.calc(req,res)
  })
})