package com.BankApplication.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.BankApplication.dto.UserDTO;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<UserDTO, Long> {
	@Query("SELECT u FROM UserDTO u LEFT JOIN FETCH u.bankAccounts WHERE u.username = ?1")
	UserDTO findByUsernameWithAccounts(String userName);

	UserDTO findByUsername(String username);

}
