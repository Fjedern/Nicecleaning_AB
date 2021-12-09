package com.example.cleanNiceAB;

import com.example.cleanNiceAB.Services.UserService;
import com.example.cleanNiceAB.entities.User;
import com.example.cleanNiceAB.exeptions.NoSuchUserNameOrPasswordException;
import com.example.cleanNiceAB.utils.JwtUtils;
import com.example.cleanNiceAB.utils.SecureUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/login")
public class LoginController {

    @Autowired
    UserService userService;

    @PostMapping("/validation")
    public ResponseEntity<?> loginValidator(@RequestBody UserDetails userDetails) {
        List<User> userList = userService.getAll();
        System.out.println(userDetails.password);
        System.out.println(userDetails.username);



        for (User user: userList){
            System.out.println(userDetails.username +" " + user.getEmail());
            if (userDetails.username.equals("\""+user.getEmail()+"\"")) {
                System.out.println(userDetails.password);
                userDetails.password = SecureUtils.getSecurePassword(userDetails.password, user.getSalt());
                
                if (user.getPassword().equals(userDetails.password)) {
                    System.out.println("SUCCESS TWO");
                    final String token = JwtUtils.createJWT(user);
                    return ResponseEntity.ok(new JwtResponse(token));
                }
            }
        }

        return null;

    }

    public static class UserDetails{
        private String username;
        private String password;

        public UserDetails() {
        }

        public UserDetails(String username, String password) {
            this.username = username;
            this.password = password;
        }

        public String getUsername() {
            return username;
        }

        public void setUsername(String username) {
            this.username = username;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }
    }
}
