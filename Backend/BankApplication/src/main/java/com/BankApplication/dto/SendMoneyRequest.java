package com.BankApplication.dto;

public class SendMoneyRequest {
    private String recipientAccount;
    private double amount;

    // Getters and setters for recipientAccount
    public String getRecipientAccount() {
        return recipientAccount;
    }

    public void setRecipientAccount(String recipientAccount) {
        this.recipientAccount = recipientAccount;
    }

    // Getters and setters for amount
    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }
}
