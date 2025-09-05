import { Conta } from "../model/Conta";

export interface ContaRepository {

    //CRUD

    cadastrar(conta: Conta): void;
    procurarPorNumero(numero:number): void;
    listarTodas(): Conta[];
    atualizar(conta: Conta): void;
    deletar(numero: number): void;

    // OPERAÇOES DA CONTA
    sacar(numero: number, valor: number): boolean;
    depositar(numero: number, valor: number): void;
    transferir(numeroOrigem:number, numeroDestino:number, valor:number): void;
}