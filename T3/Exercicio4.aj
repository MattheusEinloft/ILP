package br.ufsm.lpbd.banking.aspect;

import java.util.List;

import br.ufsm.lpbd.banking.core.*;
import br.ufsm.lpbd.banking.exception.InsufficientBalanceException;

/*
 * Aspecto que garante que a seguinte regra: Se um cheque for compensado e náo houver saldo suficiente,
 * porém houver saldo suficiente na conta de empréstimo, o valor do saque é transferido para a conta
 * para que a operação de saque seja realizada.
 */
public aspect Exercicio4 {
	pointcut chamadasSavingsAccount(SavingsAccount account, float amount): call(void Account.debit(float)) && args(amount) && target(account);
	pointcut chamadasCheckingAccount(CheckingAccount account, float amount): call(void Account.debit(float)) && args(amount) && target(account);
	
	void around(SavingsAccount account, float amount) throws InsufficientBalanceException : chamadasSavingsAccount(account, amount) {
		System.out.println("Savings Account:");
		System.out.println("Numero da conta = " + account.getAccountNumber());
		System.out.println("Saldo disponivel = " + account.getBalance());
		System.out.println("Quantia de saque desejada = " + amount + "\n");
		
		if((account.getBalance() - amount) < 100) {
			Customer cust = account.getCustomer();
			List<Account> overdrafts = cust.getOverdraftAccounts();
			boolean permitido = false;
			for(int i = 0; i < overdrafts.size(); i++) {
				if(overdrafts.get(i).getBalance() + (account.getBalance() + 100) > amount) {
					float saque = amount - account.getBalance() + 100;
					overdrafts.get(i).debit(saque);
					account.credit(saque);
					
					permitido = true;
					System.out.println("Saque permitido (foi transferido o valor de " + saque + " reais da conta de emprestimo para a conta poupanca)");
					proceed(account, amount);
				}
			}
			
			if(!permitido) {
				System.out.println("A operacao nao foi permitida!\n");
				throw new InsufficientBalanceException("Limite minimo de seguranca atingido: saldo insuficiente");
			}
		}
		else {
			System.out.println("Saque permitido\n");
			proceed(account, amount);
		}
	}
	
	void around(CheckingAccount account, float amount) throws InsufficientBalanceException : chamadasCheckingAccount(account, amount) {
		System.out.println("Checking Account:");
		System.out.println("Numero da conta = " + account.getAccountNumber());
		System.out.println("Saldo disponivel = " + account.getBalance());
		System.out.println("Quantia de saque desejada = " + amount + "\n");
		
		if((account.getBalance() - amount) < 100) {
			Customer cust = account.getCustomer();
			List<Account> overdrafts = cust.getOverdraftAccounts();
			boolean permitido = false;
			for(int i = 0; i < overdrafts.size(); i++) {
				if(overdrafts.get(i).getBalance() + (account.getBalance() + 100) > amount) {
					float saque = amount - account.getBalance() + 100;
					overdrafts.get(i).debit(saque);
					account.credit(saque);
					
					permitido = true;
					System.out.println("Saque permitido (foi transferido o valor de " + saque + " reais da conta de emprestimo para a conta corrente)");
					proceed(account, amount);
				}
			}
			
			if(!permitido) {
				System.out.println("A operacao nao foi permitida!\n");
				throw new InsufficientBalanceException("Limite minimo de seguranca atingido: saldo insuficiente");
			}
		}
		else {
			System.out.println("Saque permitido\n");
			proceed(account, amount);
		}
	}
}