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
    public MyPageDetails getUsernameToFrontend(@RequestBody String token){
        token = token.replace("\"", "");
        System.out.println("Token: " + token);
        boolean isTokenValid = jwtService.jwtIsValid(token);

        System.out.println("inne");

        if (isTokenValid){

            User user = jwtService.getJwtOwner(token);
            MyPageDetails tokenDetails = new MyPageDetails(user.getName(), user.getUserId().toString());
            //String[] returnUser = {user.getName(), user.getUserId().toString()};

            System.out.println(user.getName() + "ID: "+ user.getUserId());
            return tokenDetails;
        }
        return null;
    }

    public static class MyPageDetails {
        private String userName;
        private String userID;

        public MyPageDetails() {
        }

        public MyPageDetails(String userName, String userID) {
            this.userName = userName;
            this.userID = userID;
        }

        public String getUserName() {
            return userName;
        }

        public void setUserName(String userName) {
            this.userName = userName;
        }

        public String getUserID() {
            return userID;
        }

        public void setUserID(String userID) {
            this.userID = userID;
        }
    }


}
