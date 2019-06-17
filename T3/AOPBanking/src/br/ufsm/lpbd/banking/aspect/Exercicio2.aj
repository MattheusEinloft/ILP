package br.ufsm.lpbd.banking.aspect;

import br.ufsm.lpbd.banking.core.Account;

/*
 * Aspecto de logging para cada transação realizada em Account. Para cada operação realizada,
 * antes da mesma ser realizada, deve-se imprimir o nome do método, o número da conta e a quantia
 * a ser transacionada. Ao final da transação deve-se imprimir o valor do saldo da conta.
 */
public aspect Exercicio2 {
	pointcut execucoesTransacoes(Account account, float amount): (execution(void Account.debit(float)) || execution(void Account.credit(float))) && args(amount) && target(account);
	
	// Antes da transacao
	before(Account account, float amount) : execucoesTransacoes(account, amount) {
		System.out.println("[ANTES] Nome do metodo = " + thisJoinPointStaticPart.getSignature());
		System.out.println("Numero da conta = " + account.getAccountNumber());
		System.out.println("Quantia da transacao = " + amount);
	}
	
	// Depois da transacao
	after(Account account, float amount) : execucoesTransacoes(account, amount) {
		System.out.println("[DEPOIS] Saldo da conta = " + account.getBalance() + "\n");
	}
}