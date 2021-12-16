package com.example.cleanNiceAB.repos;


import com.example.cleanNiceAB.entities.User;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Optional;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {

    void deleteUserByUserId(Long id);

    Optional<User> findById(Long id);
}
