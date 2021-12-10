package com.example.cleanNiceAB;

import com.example.cleanNiceAB.Services.JwtService;
import com.example.cleanNiceAB.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class JwtController {

    @Autowired
    JwtService jwtService;

    @PostMapping("/getUsername")
    public String getUsernameToFrontend(@RequestBody String token){
        System.out.println(token);
        token = token.replace("\"", "");
        boolean isTokenValid = jwtService.jwtIsValid(token);

        System.out.println("inne");

        if (isTokenValid){

            User user = jwtService.getJwtOwner(token);
            System.out.println(user.getName());
            return user.getName();
        }
        return null;
    }


}
