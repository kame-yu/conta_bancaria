import { ContaRepository } from "../repository/ContaRepository";
import {Conta} from "../model/Conta";
import { Colors } from "../util/Colors";

export class ContaController implements ContaRepository {

    private listaContas: Array<Conta> = new Array<Conta>();
    numeroAtual: number = 1;


	cadastrar(conta: Conta): void {
		this.listaContas.push(conta);
        this.numeroAtual++;
        console.log(Colors.colorize("\nConta número " + conta.numero + " cadastrada com sucesso!", Colors.FgGreen));
	}

	 procurarPorNumero(numero: number): void {
        let buscarConta = this.buscarNoArray(numero);

        if (buscarConta != null) {
            console.log(Colors.colorize("\nConta encontrada:", Colors.FgGreen));
            buscarConta.visualizar();
        } else {
            console.log(Colors.colorize("\nConta não encontrada! Verifique se o número digitado está correto.", Colors.FgRed));
        }
    }

    listarTodas(): Conta[] {
        if (this.listaContas.length === 0) {
            console.log(Colors.colorize("\nNenhuma conta cadastrada.", Colors.FgYellow));
        } else {
            this.listaContas.forEach(conta => {
                conta.visualizar();
            });
        }
        return this.listaContas;
    }

	atualizar(conta: Conta): void {
		let buscaConta = this.buscarNoArray(conta.numero);
        if (buscaConta != null) {
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log(Colors.colorize("\nA conta numero " + conta.numero + " foi atualizada com sucesso.", Colors.FgGreen));
	} else {
            console.log(Colors.colorize("\nConta não encontrada! Verifique se o número digitado está correto.", Colors.FgRed));
        }
    }

	deletar(numero: number): void {
		let buscaConta = this.buscarNoArray(numero);
        if (buscaConta != null) {
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log(Colors.colorize("\nA conta numero " + numero + " foi removida com sucesso.", Colors.FgGreen));
        }
        else {
            console.log(Colors.colorize("\nConta não encontrada! Verifique se o número digitado está correto.", Colors.FgRed));
        }
	}

	depositar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);
        if (conta != null) {
            conta.depositar(valor);
            console.log(Colors.colorize(`\nDepósito de R$ ${valor.toFixed(2)} realizado na conta ${numero} com sucesso!`, Colors.FgGreen));
        } else {
            console.log(Colors.colorize("\nConta não encontrada! Verifique se o número digitado está correto.", Colors.FgRed));
        }
	}

    public sacar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);
        if (conta != null) {
            if (conta.sacar(valor) === true) {
                console.log(Colors.colorize(`\nSaque de R$ ${valor.toFixed(2)} realizado na conta ${numero} com sucesso!`, Colors.FgGreen));
            }

        } else {
            console.log(Colors.colorize("\nConta não encontrada! Verifique se o número digitado está correto.", Colors.FgRed));
        }

    }

	transferir(numeroCredito: number, numeroDebito: number, valor: number): void {
        let contaCredito = this.buscarNoArray(numeroCredito);
        let contaDebito = this.buscarNoArray(numeroDebito);
        if (contaCredito != null && contaDebito != null) {
            if (contaDebito.sacar(valor) === true) {
                contaCredito.depositar(valor);
                console.log(Colors.colorize(`\nTransferência de R$ ${valor.toFixed(2)} da conta ${numeroDebito} para a conta ${numeroCredito} realizada com sucesso!`, Colors.FgGreen));
            }
            else {
                console.log(Colors.colorize("\n Uma das contas não foi encontrada! Verifique se os números digitados estão corretos.", Colors.FgRed));
                        }
	}
}

    public gerarNumero(): number {
        return ++this.numeroAtual;
    }

    public buscarNoArray(numero: number): Conta | null {
        for (let conta of this.listaContas) {
            if (conta.numero === numero) {
                return conta;
            }
        }
        return null;
    }


}