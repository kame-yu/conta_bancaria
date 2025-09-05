import {Conta} from './Conta';
import * as readlineSync from 'readline-sync';


export class ContaCorrente extends Conta {

private _limite: number;
constructor(numero:number, agencia:number, tipo:number, titular:string, saldo:number, limite:number){

    super(numero, agencia, tipo, titular, saldo);
    this._limite = limite;
}

public get limite(): number {
    return this._limite;
}

public set limite(limite: number) {
    this._limite = limite;
}

public sacar(valor:number):boolean{

    if (valor > (this.saldo + this._limite)){
        console.log("\n Saldo Insuficiente. Tá liso, dorme.");
        return false;
    }

    this.saldo = this.saldo - valor;
    return true;
}

public visualizar():void{
    super.visualizar();
    console.log(`Limite: R$ ${this._limite.toFixed(2)}`);
    console.log(`\n\n***************************************`);

}
}
