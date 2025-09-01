import * as readlineSync from "readline-sync";
import { Colors } from "./util/Colors";


export class Menu {
  private running = true;

  constructor() {}

  private cabecalho(): void {
    console.clear();
    console.log(Colors.colorize("====================================", Colors.FgMagenta));
    console.log(Colors.colorize("          PROJETO NEWBANK           ", Colors.FgWhite));
    console.log(Colors.colorize("====================================\n", Colors.FgMagenta));
  }

  private mostrarmenu(): void {
    console.log(Colors.colorize("[1] - Criar conta", Colors.FgYellow));
    console.log(Colors.colorize("[2] - Listar todas as contas", Colors.FgYellow));
    console.log(Colors.colorize("[3] - Buscar conta por número", Colors.FgYellow));
    console.log(Colors.colorize("[4] - Atualizar dados da conta", Colors.FgYellow));
    console.log(Colors.colorize("[5] - Apagar conta", Colors.FgYellow));
    console.log(Colors.colorize("[6] - Sacar", Colors.FgYellow));
    console.log(Colors.colorize("[7] - Depositar", Colors.FgYellow));
    console.log(Colors.colorize("[8] - Transferir", Colors.FgYellow));
    console.log(Colors.colorize("[9] - Sair\n", Colors.FgYellow));
    console.log(Colors.colorize("====================================\n", Colors.FgMagenta));
  }

        private sair(): void {
        console.log(Colors.colorize("\nSaindo... Até logo!\n", Colors.FgCyan));
        this.running = false;
  }

  public opcoes(): void {
    while (this.running) {
      this.cabecalho();
      this.mostrarmenu();
      const option = readlineSync.question("Digite a opcao desejada: ").trim();
      switch (option) {
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
          console.log(Colors.colorize("\nSaindo do sistema...", Colors.FgGreen));
              readlineSync.question("\nPressione ENTER para continuar...");

          this.sair();

          break;

        default:
          console.log(Colors.colorize("\nOpção inválida.", Colors.FgRed));
          readlineSync.question("\nPressione ENTER para continuar...");
      }
    }
  }

}
