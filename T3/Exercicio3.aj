package br.ufsm.lpbd.banking.aspect;

import br.ufsm.lpbd.banking.core.*;
import br.ufsm.lpbd.banking.exception.InsufficientBalanceException;

/*
 * Aspecto que garante que as transações de débito não permitam que o saldo fique
 * menor que o limite de segurança de R$ 100,00. Caso isso ocorra, uma exceção do
 * tipo InsufficientBalanceException deve ser sinalizada.
 */
public aspect Exercicio3 {
	pointcut execucoesDebit(Account account, float amount): execution(void Account.debit(float)) && args(amount) && target(account);
	
	void around(Account account, float amount) throws InsufficientBalanceException : execucoesDebit(account, amount) {
		System.out.println("Numero da conta = " + account.getAccountNumber());
		System.out.println("Saldo disponivel = " + account.getBalance());
		System.out.println("Quantia de saque desejada = " + amount);
		
		if((account.getBalance() - amount) < 100) {
			System.out.println("Saque nao permitido!\n");
			throw new InsufficientBalanceException("Limite minimo de seguranca atingido: saldo insuficiente");
		}
		else {
			System.out.println("Saque permitido\n");
			proceed(account, amount);
		}
	}
}