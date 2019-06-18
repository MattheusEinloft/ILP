package br.ufsm.lpbd.banking.aspect;

import br.ufsm.lpbd.banking.core.Account;

/*
 * Aspecto que notifica quando um saque maior que R$ 10.000,00 for realizado
 */
public aspect Exercicio1 {
	pointcut chamadasSaques(Account account, float amount): call(void Account.debit(float)) && args(amount) && target(account);
	
	before(Account account, float amount) : chamadasSaques(account, amount) {
		if(amount > 10000) {
			System.out.println("[1] Saque de " + amount + " na conta " + account.getAccountNumber());
		}
	}
}