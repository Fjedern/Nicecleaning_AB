package com.example.cleanNiceAB;

import com.example.cleanNiceAB.Services.UserService;
import com.example.cleanNiceAB.entities.User;
import com.example.cleanNiceAB.utils.JwtUtils;
import com.example.cleanNiceAB.utils.SecureUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<?> loginValidator(@RequestBody String loginFormData) throws NoSuchFieldException {
        List<User> userList = userService.getAll();

        String split[] = loginFormData.split("\"");
        String loginEmail = split[3];
        String loginPassword = split[7];

        System.out.println("JASON EMAIL: " + loginEmail);
        System.out.println("JASON PASSWORD: " + loginPassword);
        System.out.println("JASON STRING: " + loginFormData);


        for (User user: userList){
            if (loginEmail.equals(user.getEmail())) {
                loginPassword = SecureUtils.getSecurePassword(loginPassword, user.getSalt());

                if (user.getPassword().equals(loginPassword)) {
                    System.out.println("SUCCESS TWO");
                    final String token = JwtUtils.createJWT(user);
                    return ResponseEntity.ok(new JwtResponse(token));
                }
            }
        }

        return null;

    }
}
