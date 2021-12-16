package com.example.cleanNiceAB.Services;

import com.example.cleanNiceAB.entities.User;
import com.example.cleanNiceAB.repos.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    public UserService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    public User addUser(User user){
        return userRepo.save(user);
    }

    public User updateUser(User user){
        return userRepo.save(user);
    }

    public User findUserByUserId(Long id) {
        return userRepo.getById(id);
    }

    public void deleteUser(Long id){
        userRepo.deleteUserByUserId(id);
    }

    public List<User> getAll() {
       return userRepo.findAll();
    }
}
