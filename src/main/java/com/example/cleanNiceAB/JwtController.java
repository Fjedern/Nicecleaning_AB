package com.example.cleanNiceAB;

import com.example.cleanNiceAB.Services.JwtService;
import com.example.cleanNiceAB.entities.User;
import lombok.Value;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class JwtController {

    @Autowired
    JwtService jwtService;

    @PostMapping("/getUsername")
    public MyPageDetails getUsernameToFrontend(@RequestBody String token){
        token = token.replace("\"", "");
        //System.out.println("Token: " + token);
        boolean isTokenValid = jwtService.jwtIsValid(token);

        if (isTokenValid){

            User user = jwtService.getJwtOwner(token);
            MyPageDetails tokenDetails = new MyPageDetails(user.getName(), user.getId().toString());
            //String[] returnUser = {user.getName(), user.getUserId().toString()};

            //System.out.println(tokenDetails.getUserName() + "ID: "+ tokenDetails.getUserID());
            return tokenDetails;
        }
        return null;
    }

    //DTO
    @Value
    public static class MyPageDetails {
         String userName;
         String userID;


    }


}
