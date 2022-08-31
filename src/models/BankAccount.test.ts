import BankAccount from "./BankAccount"
//import Emprestimo from "./Emprestimo"
describe('Tests over the account balance', () => {
    test('It should apply 0 to balance when account is created', () =>{
        const account = new BankAccount()
        expect(account.balance).toBe(0)
    })
    test('It should change balence correctly after a sequence of deposits', () => {
        const account = new BankAccount()
        account.deposit(25)
        account.deposit(50)
        account.deposit(100.24)
        expect (account.balance).toBe(175.24)
    })
    test('It should noe allow negative deposits', () => {
        const accont = new BankAccount()
        accont.deposit(-55)
        expect(accont.balance).toBe(0)
    })

    test('It should accept a valid withdraw', () => {
        const accont = new BankAccount()
        accont.deposit(123.45)
        accont.withdraw(53.45)
        expect(accont.balance).toBe(70)
        accont.withdraw(25)
        expect(accont.balance).toBe(45)
    })

    test('It should account not accept an withdrawn when balance is not enough',()=>{
        const accont = new BankAccount
        accont.withdraw(50)
        expect(accont.balance).toBe(0)
        accont.deposit(100)
        accont.withdraw(300)
        expect(accont.balance).toBe(100)
    })
})

describe('Test over account basic info (number and branch)', () => {
    test('It should create default account and branch numbers when object is instaciated ',()=>{
        const account = new BankAccount
        expect(account.getAccountInfo()).toBe('Number: 00000-0\nBranch: 0000-0')
    })
    test('It should correctly display account and branch numbers at account info', () => {
        const account = new BankAccount
        account.branch = '0123-4'
        account.number = '56789-0'

        expect(account.getAccountInfo()).toBe('Number: 56789-0\nBranch: 0123-4')
    })
    test('It should not display invalid account and branch numbers account info', ()=>{
        const account = new BankAccount
        account.branch = '12121'
        account.number = '121212'
        expect(account.getAccountInfo()).toBe('Number: 00000-0\nBranch: 0000-0')
    })





   /* test('deposito',()=>{
        const dinheiro = new Emprestimo
        dinheiro.valorDoEmprestimo(100000)
        expect(dinheiro.valor).toBe(100000)
    })
    test('parcela',()=>{
        const dinheiro = new Emprestimo
        dinheiro.quantidadeDeParcelas(100)
        expect(dinheiro.quantidadedeparcelas).toBe(100)
    })*/
})