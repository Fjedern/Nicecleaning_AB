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
    public ResponseEntity<?> loginValidator(@RequestBody String userName, String password) {
        List<User> userList = userService.getAll();



        for (User user: userList){
            System.out.println(userName +" " + user.getEmail());
            if (userName.equals("\""+user.getEmail()+"\"")) {
                System.out.println("SUCCESS ONE");
                password = SecureUtils.getSecurePassword(password, user.getSalt());
                
                if (user.getPassword().equals(password)) {
                    System.out.println("SUCCESS TWO");
                    final String token = JwtUtils.createJWT(user);
                    return ResponseEntity.ok(new JwtResponse(token));
                }
            }
        }

        return null;

    }
}
