import TipoCliente from "../enums/TipoCliente"
import CondicoesEnprestimo from "./CondicoesEmprestimo"

describe('teste sobre condições de emprestimo',() => {
    test('Deve definir condições corretas para clientes do tipo standard', ()=>{
        const condicoes = new CondicoesEnprestimo(TipoCliente.STANDARD)
        expect(condicoes.taxaJuros).toBe(2.5)
        expect(condicoes.limite).toBe(10000)
        expect(condicoes.quantidadeMaximaPrestacoes).toBe(12)
    })
})