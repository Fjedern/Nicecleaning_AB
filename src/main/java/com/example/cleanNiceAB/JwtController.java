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

            //System.out.println(tokenDetails.getUserName() + "ID: "+ tokenDetails.getUserID());

            MyPageDetails tokenDetails = new MyPageDetails(user.getName(), user.getId().toString(), user.getUserType());
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
         String userType;

        public MyPageDetails(String userName, String userID, String userType) {
            this.userName = userName;
            this.userID = userID;
            this.userType = userType;
        }

        public String getUserName() {
            return userName;
        }

        public String getUserID() {
            return userID;
        }

        public String getUserType() { return userType; }
    }


}
