package com.example.cleanNiceAB.controllers;

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
    public MyPageDetails getUsernameToFrontend(@RequestBody String token) {
        token = token.replace("\"", "");

        boolean isTokenValid = jwtService.jwtIsValid(token);

        if (isTokenValid) {

            User user = jwtService.getJwtOwner(token);

            MyPageDetails tokenDetails = new MyPageDetails(
            user.getName(), user.getId().toString(), user.getUserType(), user.getAddress(), user.getPhoneNr(), user.getEmail());

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
        String userAddress;
        String userPhoneNr;
        String userEmail;

        public MyPageDetails(String userName, String userID, String userType, String userAddress, String userPhoneNr, String userEmail) {
            this.userName = userName;
            this.userID = userID;
            this.userType = userType;
            this.userAddress = userAddress;
            this.userPhoneNr = userPhoneNr;
            this.userEmail = userEmail;
        }

        public String getUserName() {
            return userName;
        }

        public String getUserID() {
            return userID;
        }

        public String getUserType() {
            return userType;
        }

        public String getUserAddress() {
            return userAddress;
        }

        public String getUserPhoneNr() {
            return userPhoneNr;
        }

        public String getUserEmail() {
            return userEmail;
        }
    }
}
