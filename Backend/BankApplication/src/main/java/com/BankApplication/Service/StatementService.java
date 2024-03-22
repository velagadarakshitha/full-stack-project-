package com.BankApplication.Service;

import com.BankApplication.Repository.StatementRepository;
import com.BankApplication.dto.StatementDTO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class StatementService {
	@Autowired
	private StatementRepository statementRepository;

	@Autowired
	public StatementService(StatementRepository statementRepository) {
		this.statementRepository = statementRepository;
	}

	public StatementDTO createStatement(Double amount, Integer fromAccountId, Integer toAccountId,
			Integer bankAccountId) {
		StatementDTO statementDTO = new StatementDTO();
		statementDTO.setAmount(amount);
		statementDTO.setFromAccountId(fromAccountId);
		statementDTO.setToAccountId(toAccountId);
		statementDTO.setBankAccountId(bankAccountId);
		statementDTO.setTransactionDate(LocalDateTime.now());

		// Save the statement to the repository
		return statementRepository.save(statementDTO);
	}

	public List<StatementDTO> getStatementsForAccount(Integer bankAccountId) {
		// Implement a method in the service to fetch statements for a given account
		return statementRepository.findByFromAccountIdOrToAccountId(bankAccountId, bankAccountId);
	}

}
