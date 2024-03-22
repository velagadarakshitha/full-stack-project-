package com.BankApplication.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.BankApplication.Repository.UserRepository;
import com.BankApplication.dto.UserDTO;


@Service
public class UserService {
	 
	 @Autowired
		UserRepository userRepository;
		public List<UserDTO> getUser(){
			return userRepository.findAll();
			}
		public UserDTO  createUser (UserDTO userDetails) {
			return userRepository.save(userDetails);
		}
		public UserDTO getUserByName(String userName) {
			return userRepository.findByUsername(userName);
		}
		
		public UserDTO getUserWithAccounts(String userName) {
		    return userRepository.findByUsernameWithAccounts(userName);
		}

		
}
