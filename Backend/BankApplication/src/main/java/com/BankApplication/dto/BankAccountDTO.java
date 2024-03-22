package com.BankApplication.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "bank_info")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "accountId")
public class BankAccountDTO {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer accountId;

	@ManyToOne
	@JoinColumn(name = "userId")
	private UserDTO user;
	@Column(unique = true)
	private String bankAccountNumber;
	@Column
	private String bankName;
	@Column
	private String ifscCode;
	@Column
	private String accountType;
	@Column
	private double currentBalance;

	public BankAccountDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public BankAccountDTO(Integer accountId, UserDTO user, String bankAccountNumber, String bankName, String ifscCode,
			String accountType, double currentBalance) {
		super();
		this.accountId = accountId;
		this.user = user;
		this.bankAccountNumber = bankAccountNumber;
		this.bankName = bankName;
		this.ifscCode = ifscCode;
		this.accountType = accountType;
		this.currentBalance = currentBalance;
	}

	public Integer getAccountId() {
		return accountId;
	}

	public void setAccountId(Integer accountId) {
		this.accountId = accountId;
	}

	public UserDTO getUser() {
		return user;
	}

	public void setUser(UserDTO user) {
		this.user = user;
	}

	public String getBankAccountNumber() {
		return bankAccountNumber;
	}

	public void setBankAccountNumber(String bankAccountNumber) {
		this.bankAccountNumber = bankAccountNumber;
	}

	public String getBankName() {
		return bankName;
	}

	public void setBankName(String bankName) {
		this.bankName = bankName;
	}

	public String getIfscCode() {
		return ifscCode;
	}

	public void setIfscCode(String ifscCode) {
		this.ifscCode = ifscCode;
	}

	public String getAccountType() {
		return accountType;
	}

	public void setAccountType(String accountType) {
		this.accountType = accountType;
	}

	public double getCurrentBalance() {
		return currentBalance;
	}

	public void setCurrentBalance(double currentBalance) {
		this.currentBalance = currentBalance;
	}

	@Override
	public String toString() {
		return "BankAccountDTO [accountId=" + accountId + ", user=" + user + ", bankAccountNumber=" + bankAccountNumber
				+ ", bankName=" + bankName + ", ifscCode=" + ifscCode + ", accountType=" + accountType
				+ ", currentBalance=" + currentBalance + "]";
	}

}

