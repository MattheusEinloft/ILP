package br.ufsm.lpbd.banking.aspect;

import br.ufsm.lpbd.banking.core.*;

/*
 * Aspecto que adiciona um valor de 1% do valor da transa��o referente a taxa banc�ria sempre que um empr�stimo for realizado (transfer�ncia da
 * conta overdraft para a conta corrente). As taxas ser�o processadas no final do m�s por um outro sistema para ent�o ter o saldo das contas 
 * corrente e poupan�a atualizados.
 */

public aspect Exercicio5 {
	pointcut execucoesDebitOverdraft(OverdraftAccount account, float amount): execution(void Account.debit(float)) && args(amount) && target(account);
	
	after(OverdraftAccount account, float amount) : execucoesDebitOverdraft(account, amount) {
		float taxa = (float) (amount * 0.01);
		account.registerTax(taxa);
		System.out.println("Taxa de 1% (valor = " + taxa + ") registrada na conta " + account.getAccountNumber() + "\n");
	}
}