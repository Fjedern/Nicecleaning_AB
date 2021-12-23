package com.example.cleanNiceAB.repos;


import com.example.cleanNiceAB.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {

    void deleteUserById(Long id);

    Optional<User> findById(Long id);
}
