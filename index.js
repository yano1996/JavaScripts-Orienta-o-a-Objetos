import { Cliente } from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo",154548 );
const cliente2 = new Cliente("Alice",74894185);

const conta1 = new ContaCorrente(1001, cliente1);

conta1.depositar(500);

const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;
conta1.transferir(valor, conta2);

//Visualizar as informações da conta
console.log(conta1);
console.log(conta2);


//Conferir se todas as contas foram criadas
console.log("Quantidades de contas: ",ContaCorrente.numeroDeContas);