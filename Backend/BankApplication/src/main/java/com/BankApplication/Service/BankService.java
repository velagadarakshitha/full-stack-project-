package com.BankApplication.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.BankApplication.Repository.BankRepository;

import com.BankApplication.dto.BankAccountDTO;
import com.BankApplication.dto.SendMoneyRequest;

@Service
public class BankService {

	@Autowired
	private BankRepository bankRepository;

	public List<BankAccountDTO> getAllBankAccounts() {
		return bankRepository.findAll();
	}

	public BankAccountDTO createBankAccount(BankAccountDTO bankAccount) {
		return bankRepository.save(bankAccount);
	}
	
	 public BankAccountDTO addMoneyToAccount(Integer accountId, double amount) {
	        // Retrieve the bank account from the database
	        BankAccountDTO bankAccount = bankRepository.findById(accountId).orElse(null);

	        if (bankAccount != null) {
	            // Add the specified amount to the current balance of the bank account
	            double currentBalance = bankAccount.getCurrentBalance();
	            double newBalance = currentBalance + amount;
	            bankAccount.setCurrentBalance(newBalance);

	            // Save the updated bank account to the database
	            bankAccount = bankRepository.save(bankAccount);

	            // Return the updated bank account details
	            return bankAccount;
	        } else {
	            // Handle the case where the bank account is not found
	            throw new RuntimeException("Bank account not found with ID: " + accountId);
	        }
	    }
	 public BankAccountDTO sendMoney(Integer senderAccountId, SendMoneyRequest sendMoneyRequest) {
		    // Retrieve the sender's bank account from the database
		    BankAccountDTO senderAccount = bankRepository.findById(senderAccountId).orElse(null);

		    if (senderAccount != null) {
		        // Check if the sender has enough balance
		        double senderBalance = senderAccount.getCurrentBalance();
		        double amountToSend = sendMoneyRequest.getAmount();

		        if (senderBalance >= amountToSend) {
		            // Deduct the amount from the sender's balance
		            senderAccount.setCurrentBalance(senderBalance - amountToSend);
		            // Update the sender's account
		            bankRepository.save(senderAccount);

		            // Find the recipient's account using the account number
		            BankAccountDTO recipientAccount = bankRepository.findByBankAccountNumber(sendMoneyRequest.getRecipientAccount());

		            if (recipientAccount != null) {
		                // Add the transferred amount to the recipient's balance
		                recipientAccount.setCurrentBalance(recipientAccount.getCurrentBalance() + amountToSend);
		                // Update the recipient's account
		                bankRepository.save(recipientAccount);
		                return senderAccount;
		            } else {
		                throw new RuntimeException("Recipient account not found with account number: " + sendMoneyRequest.getRecipientAccount());
		            }
		        } else {
		            throw new RuntimeException("Insufficient balance to transfer money.");
		        }
		    } else {
		        throw new RuntimeException("Sender account not found with ID: " + senderAccountId);
		    }
		}

	
}
