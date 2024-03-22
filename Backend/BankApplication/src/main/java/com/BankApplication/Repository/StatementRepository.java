package com.BankApplication.Repository;

import com.BankApplication.dto.StatementDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StatementRepository extends JpaRepository<StatementDTO, Long> {
    List<StatementDTO> findByFromAccountIdOrToAccountId(Integer fromAccountId, Integer toAccountId);
}
