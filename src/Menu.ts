import * as readlineSync from "readline-sync";
import { Colors } from "./util/Colors";
import { Conta } from "./model/Conta";
import { ContaCorrente } from "./model/ContaCorrente";
import { ContaPoupanca } from "./model/ContaPoupanca";


export function main() {

  let opcao: string;

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
              readlineSync.question("\nPressione ENTER para continuar...");

          break;
        case "2":
          console.log("Opcao 2 selecionada: Listar todas as contas");
              readlineSync.question("\nPressione ENTER para continuar...");

          break;
        case "3":
          console.log("Opcao 3 selecionada: Buscar conta");
              readlineSync.question("\nPressione ENTER para continuar...");

          break;
        case "4":
          console.log("Opcao 4 selecionada: Atualizar dados");
              readlineSync.question("\nPressione ENTER para continuar...");

          break;
        case "5":
          console.log("Opcao 5 selecionada: Apagar Conta");
              readlineSync.question("\nPressione ENTER para continuar...");

          break;
        case "6":
          console.log("Opcao 6 selecionada: Sacar");
              readlineSync.question("\nPressione ENTER para continuar...");

          break;
        case "7":
          console.log("Opcao 7 selecionada: Depositar");
              readlineSync.question("\nPressione ENTER para continuar...");

          break;
        case "8":
          console.log("Opcao 8 selecionada: Transferir");
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