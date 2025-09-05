export abstract class Conta {

    
    protected _numero: number;
    protected _agencia: number;
    protected _tipo: number;
    protected _titular:string;
    protected _saldo: number;

    
    constructor(numero:number, agencia:number, tipo:number, titular:string, saldo:number){
        this._numero = numero;
        this._agencia = agencia;
        this._tipo = tipo;
        this._titular = titular;
        this._saldo = saldo;
    }

    public get numero(): number {
        return this._numero;
    }

    public set numero(numero: number) {
        this._numero = numero;
    }

    public get agencia(): number {
        return this._numero;
    }

    public set agencia(agencia: number) {
        this._agencia = this.agencia;
    }

    public get tipo(): number {
        return this._tipo;
    }

    public set tipo (tipo:number){
        this._tipo = tipo;
    }

    public get titular(): string {
        return this._titular;
    }

    public set titular(titular: string) {
        this._titular = titular;
    }

    public get saldo(): number {
        return this._saldo;
    }

    public set saldo(saldo: number) {
        this._saldo = saldo;
    }


    public sacar(valor:number):boolean{

        if (this._saldo < valor) {
            console.log("\n Saldo Insuficiente!");
            return false;
        }

        this._saldo = this._saldo - valor;
        return true;
    }

    public depositar(valor:number):void{
      this._saldo = this._saldo + valor;
        console.log(`\n Depósito de R$ ${valor.toFixed(2)} realizado com sucesso!`);
    }

    public visualizar():void{
        let tipo: string = "";

        switch (this._tipo){
            case 1:
                tipo = "Conta Corrente";
                break;
            case 2:
                tipo = "Conta Poupanca";
                break;
    }
        console.log(`\n\n***************************************`);
        console.log('Dados da conta\n\n');
        console.log(`Numero da conta: ${this._numero}`);
        console.log(`Agencia: ${this._agencia}`);
        console.log(`Tipo da Conta: ${tipo}`);
        console.log(`Titular: ${this._titular}`);
        console.log(`Saldo: R$ ${this._saldo.toFixed(2)}`);
        console.log(`\n\n***************************************`);
    }
}

