package com.BankApplication.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.BankApplication.Service.BankService;
import com.BankApplication.Service.StatementService;
import com.BankApplication.Service.UserService;
import com.BankApplication.dto.BankAccountDTO;
import com.BankApplication.dto.SendMoneyRequest;
import com.BankApplication.dto.StatementDTO;
import com.BankApplication.dto.UserDTO;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	UserService userService;
	@Autowired
	BankService bankService;
	@Autowired
	StatementService statementService;

	@GetMapping("/get")
	public List<UserDTO> getUser() {
		return userService.getUser();
	}

	@PostMapping("/add")
	public UserDTO addUser(@RequestBody UserDTO userDTO) {
		return userService.createUser(userDTO);
	}

	@GetMapping("/get/{userName}")
	public UserDTO getUserByName(@PathVariable String userName) {
		return userService.getUserByName(userName);
	}

	@GetMapping("/getLoggedInUserWithAccounts/{userName}")
	public UserDTO getLoggedInUserWithAccounts(@PathVariable String userName) {
		return userService.getUserWithAccounts(userName);
	}

	@PostMapping("/addaccount")
	public BankAccountDTO addBankAccount(@RequestBody BankAccountDTO bankAccountDTO) {
		return bankService.createBankAccount(bankAccountDTO);
	}

	@PostMapping("/addMoney/{accountId}/{amount}")
	public BankAccountDTO addMoneyToAccount(@PathVariable Integer accountId, @PathVariable double amount) {
		return bankService.addMoneyToAccount(accountId, amount);
	}

	@PostMapping("/sendMoney/{senderAccountId}")
	public BankAccountDTO sendMoney(@PathVariable Integer senderAccountId,
			@RequestBody SendMoneyRequest sendMoneyRequest) {
		return bankService.sendMoney(senderAccountId, sendMoneyRequest);
	}

	@PostMapping("/createStatement")
	public StatementDTO createStatement(@RequestBody StatementDTO statementDTO) {
		return statementService.createStatement(statementDTO.getAmount(), statementDTO.getFromAccountId(),
				statementDTO.getToAccountId(), statementDTO.getBankAccountId() // Include bank account ID
		);
	}


    @GetMapping("/statements/{bankAccountId}")
    public List<StatementDTO> getStatementsForAccount(@PathVariable Integer bankAccountId) {
        return statementService.getStatementsForAccount(bankAccountId);
    }

}
