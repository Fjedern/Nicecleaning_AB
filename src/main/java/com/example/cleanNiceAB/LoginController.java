package com.example.cleanNiceAB;

import com.example.cleanNiceAB.Services.UserService;
import com.example.cleanNiceAB.entities.User;
import com.example.cleanNiceAB.exeptions.NoSuchUserNameOrPasswordException;
import com.example.cleanNiceAB.utils.SecureUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/login")
public class LoginController {

    @Autowired
    UserService userService;

    @PostMapping("/validation")
    public Boolean loginValidator(@RequestBody String userName, String password) throws NoSuchUserNameOrPasswordException {
        List<User> userList = userService.getAll();

        for (User user: userList){
            if (user.getUserName().equals(userName)) {
                password = SecureUtils.getSecurePassword(password, user.getSalt());
                if (user.getPassword().equals(password)) {
                    return true;

                }
            }
        }

        throw new NoSuchUserNameOrPasswordException("Wrong Username or Password");

    }
}
