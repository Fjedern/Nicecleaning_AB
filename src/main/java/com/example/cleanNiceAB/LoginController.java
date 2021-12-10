package com.example.cleanNiceAB;

import com.example.cleanNiceAB.Services.UserService;
import com.example.cleanNiceAB.entities.User;
import com.example.cleanNiceAB.utils.JwtUtils;
import com.example.cleanNiceAB.utils.SecureUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
//@CrossOrigin("*")
@RequestMapping("/login")
public class LoginController {

    @Autowired
    UserService userService;

    @PostMapping("/validation")

    public JwtResponse loginValidator(@RequestBody UserDetails userDetails){
        List<User> userList = userService.getAll();

        /*String split[] = loginFormData.split("\"");
        String loginEmail = split[3];
        String loginPassword = split[7];*/

       /* System.out.println("JASON EMAIL: " + loginEmail);
        System.out.println("JASON PASSWORD: " + loginPassword);
        System.out.println("JASON STRING: " + loginFormData);*/

        for (User user: userList){
            if (userDetails.getEmail().equals(user.getEmail())) {
                userDetails.setPassword(SecureUtils.getSecurePassword(userDetails.password, user.getSalt()));
                if (user.getPassword().equals(userDetails.getPassword())) {
                    System.out.println("SUCCESS TWO");
                    final String token = JwtUtils.createJWT(user);
                    System.out.println("TOKEN: " + token);
                    return new JwtResponse(token);
                }
            }
        }

        return null;

    }

    public static class UserDetails{
        private String email;
        private String password;

        public UserDetails() {
        }

        public UserDetails(String email, String password) {
            this.email = email;
            this.password = password;
        }

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }
    }
}
