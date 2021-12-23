package com.example.cleanNiceAB.controllers;

import com.example.cleanNiceAB.Services.UserService;
import com.example.cleanNiceAB.entities.User;
import com.example.cleanNiceAB.utils.SecureUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.json.GsonBuilderUtils;
import org.springframework.web.bind.annotation.*;
import org.w3c.dom.ls.LSOutput;

import java.security.NoSuchAlgorithmException;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;

    }

    @PostMapping("/add")
    public ResponseEntity<User> addUser(@RequestBody User user) throws NoSuchAlgorithmException {
        user.setSalt(SecureUtils.getSalt());
        user.setPassword(SecureUtils.getSecurePassword(user.getPassword(), user.getSalt()));
        User newUser = userService.addUser(user);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }
}
