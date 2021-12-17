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

        boolean isTokenValid = jwtService.jwtIsValid(token);

        if (isTokenValid){

            User user = jwtService.getJwtOwner(token);

            //System.out.println(tokenDetails.getUserName() + "ID: "+ tokenDetails.getUserID());

            MyPageDetails tokenDetails = new MyPageDetails(user.getName(), user.getId().toString());
            //String[] returnUser = {user.getName(), user.getUserId().toString()};

            System.out.println(user.getName() + "ID: "+ user.getId());

            return tokenDetails;
        }
        return null;
    }


    //DTO
    @Value
    public static class MyPageDetails {
         String userName;
         String userID;


        public MyPageDetails(String userName, String userID) {
            this.userName = userName;
            this.userID = userID;
        }

        public String getUserName() {
            return userName;
        }

        public String getUserID() {
            return userID;
        }
    }


}
