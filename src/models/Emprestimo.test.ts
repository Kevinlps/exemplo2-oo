import TipoCliente from "../enums/TipoCliente"
import Emprestimo from "./Emprestimo"

describe('testes de emprestimo para cliente do tipo standard',()=>{
    test('deve permitir um emprestimo em condição cliente tipo standad',()=>{
        const emprestimo = new Emprestimo(TipoCliente.STANDARD, 2000, 12)
        expect(emprestimo.simularValorReal()).toBe(2600)
        const prestacao = emprestimo.simularValorPretacao()
        expect(prestacao.toFixed(2)).toBe('216.67')
    })
    test('Não deve permitir um emprestimo em condição cliente tipo standad',()=>{
        const emprestimo = new Emprestimo(TipoCliente.STANDARD, 20000, 12)
        expect(emprestimo.simularValorReal()).toBe(0)
        const prestacao = emprestimo.simularValorPretacao()
        expect(prestacao).toBe(0)
    })
})

describe('testes de emprestimo para cliente do tipo PLATINUM',()=>{
    test('deve permitir um emprestimo em condição cliente tipo platinum',()=>{
        const emprestimo = new Emprestimo(TipoCliente.PLATINUM, 30000, 24)
        expect(emprestimo.simularValorReal()).toBe(44328)
        const prestacao = emprestimo.simularValorPretacao()
        expect(prestacao).toBe(1847)
    })
    test('Não deve permitir um emprestimo em condição cliente tipo platinum',()=>{
        const emprestimo = new Emprestimo(TipoCliente.PLATINUM, 20000, 25)
        expect(emprestimo.simularValorReal()).toBe(0)
        const prestacao = emprestimo.simularValorPretacao()
        expect(prestacao).toBe(0)
    })
})
describe('testes de emprestimo para cliente do tipo GOLD',()=>{
    test('deve permitir um emprestimo em condição cliente tipo gold',()=>{
        const emprestimo = new Emprestimo(TipoCliente.GOLD, 180000, 48)
        expect(emprestimo.simularValorReal()).toBe(283680)
        const prestacao = emprestimo.simularValorPretacao()
        expect(prestacao).toBe(5910)
    })
    test('Não deve permitir um emprestimo em condição cliente tipo gold',()=>{
        const emprestimo = new Emprestimo(TipoCliente.GOLD, 20000, 50)
        expect(emprestimo.simularValorReal()).toBe(0)
        const prestacao = emprestimo.simularValorPretacao()
        expect(prestacao).toBe(0)
    })
})