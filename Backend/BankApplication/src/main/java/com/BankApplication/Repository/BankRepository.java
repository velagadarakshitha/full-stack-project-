package com.BankApplication.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.BankApplication.dto.BankAccountDTO;

public interface BankRepository extends  JpaRepository<BankAccountDTO, Integer>{
	  BankAccountDTO findByBankAccountNumber(String bankAccountNumber);

}
