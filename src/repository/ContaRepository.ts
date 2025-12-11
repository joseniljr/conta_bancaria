import { Conta } from "../Model/Conta"; 

export interface ContaRepository {
   // CRUD da Conta
   //assinatura do metodo
	procurarPorNumero(numero: number): void;
	listarTodas(): void;
	cadastrar(conta: Conta): void;
	atualizar(conta: Conta): void;
	deletar(numero: number): void;
	
	// Métodos Bancários específicos
	sacar(numero: number, valor: number): void;
	depositar(numero: number, valor: number): void;
	transferir(numeroOrigem: number, numeroDestino: number, valor: number): void;
	
}
