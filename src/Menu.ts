import * as readlineSync from "readline-sync";
import { Colors } from "./util/Colors";
import { Conta } from "./model/Conta";
import { ContaCorrente } from "./model/ContaCorrente";
import { ContaPoupanca } from "./model/ContaPoupanca";
import { ContaController } from "./controller/ContaController";


export function main() {

  let opcao: string;
  let contas: ContaController = new ContaController();

  let numero, agencia, tipo, saldo, limite, LimiteSaqueMensal, valor, numeroDestino: number;
  let titular:string;

  const tiposdeConta = ["Corrente", "Poupança"];

  console.log("\nCriar Contas\n");

let cc1: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 123, 1, "João Gomes", 1000, 100.0);
contas.cadastrar(cc1);

let cc2: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 124, 1, "Maria Gadu", 2000, 100.0);
contas.cadastrar(cc2);

let cp1: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Marina Sena", 4000, 12);
contas.cadastrar(cp1);

let cp2: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Juliano Henrique", 8000, 15);
contas.cadastrar(cp2);

contas.listarTodas();


while (true) {

    console.clear();
    console.log(Colors.colorize("====================================", Colors.FgMagenta));
    console.log(Colors.colorize("          PROJETO NEWBANK           ", Colors.FgWhite));
    console.log(Colors.colorize("====================================\n", Colors.FgMagenta));
    console.log(Colors.colorize("[1] - Criar conta", Colors.FgWhite));
    console.log(Colors.colorize("[2] - Listar todas as contas", Colors.FgWhite));
    console.log(Colors.colorize("[3] - Buscar conta por número", Colors.FgWhite));
    console.log(Colors.colorize("[4] - Atualizar dados da conta", Colors.FgWhite));
    console.log(Colors.colorize("[5] - Apagar conta", Colors.FgWhite));
    console.log(Colors.colorize("[6] - Sacar", Colors.FgWhite));
    console.log(Colors.colorize("[7] - Depositar", Colors.FgWhite));
    console.log(Colors.colorize("[8] - Transferir", Colors.FgWhite));
    console.log(Colors.colorize("[9] - Sair\n", Colors.FgWhite));
    console.log(Colors.colorize("====================================\n", Colors.FgMagenta));


   console.log("Entre com a opção desejada: ");
   opcao = readlineSync.question("");


    switch (opcao) {
        case "1":
          console.log("Opcao 1 selecionada: Criar conta");
              console.log("Digite o nome do titular: ");
              titular = readlineSync.question();
              console.log("Digite o número da agência:")
              agencia = parseInt(readlineSync.question());
              console.log("Digite o tipo de conta (1 - Corrente, 2 - Poupanca): ");
              tipo = readlineSync.keyInSelect(tiposdeConta, "Escolha uma opcão:") + 1;
              console.log("Digite o saldo inicial (R$): ");
              saldo = parseFloat(readlineSync.question());

              switch (tipo) {
                case 1:
                    console.log("Digite o limite do cheque especial (R$): ");
                    limite = parseFloat(readlineSync.question());
                    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite));
                    break;
              
                case 2:
                    console.log("Digite o limite de saques mensais: ");
                    LimiteSaqueMensal = parseInt(readlineSync.question());
                    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, LimiteSaqueMensal));
                    break;
              }

              numero = contas.gerarNumero();
          keyPress();
          break;
        case "2":
          console.log("Opcao 2 selecionada: Listar todas as contas");
          contas.listarTodas();
              readlineSync.question("\nPressione ENTER para continuar...");

          break;
        case "3":
          console.log("Opcao 3 selecionada: Buscar conta");
              console.log("Digite o número da conta: ");
              numero = readlineSync.questionInt();
              contas.procurarPorNumero(numero);
              readlineSync.question("\nPressione ENTER para continuar...");

          break;
        case "4":
          console.log("Opcao 4 selecionada: Atualizar dados");
          console.log("Digite o número da conta: ");
              numero = readlineSync.questionInt();
              let conta = contas.buscarNoArray(numero);
              if (conta != null) {
                  console.log("Digite o nome do titular: ");
                  titular = readlineSync.question();
                  console.log("Digite o número da agência:")
                  agencia = parseInt(readlineSync.question());
                  tipo = conta.tipo;
                  console.log("Digite o saldo (R$): ");
                  saldo = parseFloat(readlineSync.question());
                  switch (tipo) {
                    case 1:
                    console.log("Digite o limite do cheque especial (R$): ");
                    limite = parseFloat(readlineSync.question());
                    contas.atualizar(new ContaCorrente(numero, agencia, tipo, titular, saldo, limite));
                    break;
              
                case 2:
                    console.log("Digite o limite de saques mensais: ");
                    LimiteSaqueMensal = parseInt(readlineSync.question());
                    contas.atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo, LimiteSaqueMensal));
                    break;
                  }
              } else {
                  console.log(Colors.colorize("\nConta não encontrada! Verifique se o número digitado está correto.", Colors.FgRed));
              }
              readlineSync.question("\nPressione ENTER para continuar...");
          break;

        case "5":
          console.log("Opcao 5 selecionada: Apagar Conta");
          console.log("Digite o número da conta: ");
              numero = readlineSync.questionInt();
              contas.deletar(numero);
              readlineSync.question("\nPressione ENTER para continuar...");

          break;
        case "6":
          console.log("Opcao 6 selecionada: Sacar");
          console.log("Digite o número da conta: ");
              numero = readlineSync.questionInt();
              console.log("Digite o valor do saque (R$): ");
              valor = readlineSync.questionFloat();
              contas.sacar(numero, valor);
              readlineSync.question("\nPressione ENTER para continuar...");

          break;
        case "7":
          console.log("Opcao 7 selecionada: Depositar");
          console.log("Digite o número da conta: ");
              numero = readlineSync.questionInt();
              console.log("Digite o valor do depósito (R$): ");
              valor = readlineSync.questionFloat();
              contas.depositar(numero, valor);
              readlineSync.question("\nPressione ENTER para continuar...");

          break;
        case "8":
          console.log("Opcao 8 selecionada: Transferir");
          console.log("Digite o número da conta de origem: ");
              numero = readlineSync.questionInt();
            console.log("Digite o número da conta de destino: ");
              numeroDestino = readlineSync.questionInt();
              console.log("Digite o valor da transferência (R$): ");
              valor = readlineSync.questionFloat();
              contas.transferir(numeroDestino, numero, valor);
              readlineSync.question("\nPressione ENTER para continuar...");

          break;
        case "9":
            console.clear();
            console.log(Colors.colorize("\nNEWBANK - A gente se vê por aqui!", Colors.FgMagenta));
            sobre();
            process.exit(0);
          break;

        default:
          console.log(Colors.colorize("\nOpção inválida.", Colors.FgRed));
          readlineSync.question("\nPressione ENTER para continuar...");
          keyPress();
          break;
      }
    }
  }

  function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Eric Silva - erics@genstudents.org");
    console.log("github.com/kame-yu/conta_bancaria");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    readlineSync.prompt();
}

main();