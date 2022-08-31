import TipoCliente from "../enums/TipoCliente"
import CondicoesEnprestimo from "./CondicoesEmprestimo"

describe('teste sobre condições de emprestimo',() => {
    test('Deve definir condições corretas para clientes do tipo standard', ()=>{
        const condicoes = new CondicoesEnprestimo(TipoCliente.STANDARD)
        expect(condicoes.taxaJuros).toBe(2.5)
        expect(condicoes.limite).toBe(10000)
        expect(condicoes.quantidadeMaximaPrestacoes).toBe(12)
    })
    test('Deve definir condições corretas para clientes do tipo pLATINUM', ()=>{
        const condicoes = new CondicoesEnprestimo(TipoCliente.PLATINUM)
        expect(condicoes.taxaJuros).toBe(1.99)
        expect(condicoes.limite).toBe(50000)
        expect(condicoes.quantidadeMaximaPrestacoes).toBe(24)
    })
    test('Deve definir condições corretas para clientes do tipo GOLD', ()=>{
        const condicoes = new CondicoesEnprestimo(TipoCliente.GOLD)
        expect(condicoes.taxaJuros).toBe(1.2)
        expect(condicoes.limite).toBe(250000)
        expect(condicoes.quantidadeMaximaPrestacoes).toBe(48)
    })
})
