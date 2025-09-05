import { Conta } from "./Conta";

export class ContaPoupanca extends Conta {

    private _limiteSaqueMensal: number;

    constructor(numero: number, agencia: number, tipo: number, titular: string, 
        saldo: number, limiteSaqueMensal: number) {
        super(numero, agencia, tipo, titular, saldo);
        this._limiteSaqueMensal = limiteSaqueMensal;
    }
    public get limiteSaqueMensal() {
        return this._limiteSaqueMensal;
    }

    public set limiteSaqueMensal(limiteSaqueMensal: number) {
        this._limiteSaqueMensal = limiteSaqueMensal;
    }

    public visualizar(): void {
        super.visualizar();
        console.log("Limite de saques mensais: " + this._limiteSaqueMensal);
    }

}