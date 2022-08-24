export default class Emprestimo {
    private _valor : number
    private _valorPrestacao : number
    private _quantidadeParcelas : number
    private _standard : number
    private _platinum : number
    private _gold : number
    private _montante : number 
    constructor() {
        this._valor= 0
        this._valorPrestacao = 0
        this._quantidadeParcelas = 0
        this._standard = 2.5
        this._platinum = 1.99
        this._gold =  1.2
        this._montante = 0
    }

    valorDoEmprestimo(value:number){
        if(value>0){
            this._valor += value
        }else{
            console.log('O valor informado é invalido')
        }
    }
    quantidadeDeParcelas(value:number){
        if(value>0){
            this._quantidadeParcelas += value
        }
    }
    valorRealEmprestimoPlatinum(value:number){
        const platinum = this._platinum
        const valor = this.valor
        const parcela = this.quantidadedeparcelas
        this._montante = valor *(1+((platinum/100)*parcela))    
    }
    valorRealEmprestimoStandard(value:number){
        const standard = this._standard
        const valor = this.valor
        const parcela = this.quantidadedeparcelas
        this._montante = valor *(1+((standard/100)*parcela))    
    }
    valorRealEmprestimoGold(value:number){
        const gold = this._gold
        const valor = this.valor
        const parcela = this.quantidadedeparcelas
        this._montante = valor *(1+((gold/100)*parcela))    
    }
    prestacao(value:number){
        this._valorPrestacao = this.montante / this.quantidadedeparcelas
    }

    get valor (){
        return this._valor
    }
    get quantidadedeparcelas(){
        return this._quantidadeParcelas
    }
    get montante (){
        return this._montante
    }
}