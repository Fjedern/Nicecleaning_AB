package com.example.cleanNiceAB.controllers;

import com.example.cleanNiceAB.JwtResponse;
import com.example.cleanNiceAB.Services.EmployeeService;
import com.example.cleanNiceAB.Services.UserService;
import com.example.cleanNiceAB.entities.Employee;
import com.example.cleanNiceAB.entities.User;
import com.example.cleanNiceAB.utils.JwtUtils;
import com.example.cleanNiceAB.utils.SecureUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//@CrossOrigin("*")
@RequestMapping("/login")
public class LoginController {

    @Autowired
    UserService userService;

    @Autowired
    EmployeeService employeeService;

    @PostMapping("/validation")
    public JwtResponse loginValidator(@RequestBody UserDetails userDetails) {
        if (userDetails.type.equals("user")) {
            List<User> userList = userService.getAll();
            for (User user : userList) {
                if (userDetails.getEmail().equals(user.getEmail())) {
                    userDetails.setPassword(SecureUtils.getSecurePassword(userDetails.password, user.getSalt()));
                    if (user.getPassword().equals(userDetails.getPassword())) {
                        final String token = JwtUtils.createJWT(user);
                        return new JwtResponse(token);
                    }
                }
            }
        }

        if (userDetails.type.equals("employee")) {
            List<Employee> employeeList = employeeService.findAllEmployees();

            for (Employee employee : employeeList) {
                if (userDetails.getEmail().equals(employee.getEmail())) {
                    userDetails.setPassword(SecureUtils.getSecurePassword(userDetails.password, employee.getSalt()));
                    if (employee.getPassword().equals(userDetails.getPassword())) {
                        final String token = JwtUtils.createEmployeeJWT(employee);
                        return new JwtResponse(token);
                    }
                }
            }
        }


        return null;

    }

    public static class UserDetails {
        private String email;
        private String password;
        private String type;

        public UserDetails() {
        }

        public UserDetails(String email, String password, String type) {
            this.email = email;
            this.password = password;
            this.type = type;
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

        public String getType() {
            return type;
        }

        public void setType(String type) {
            this.type = type;
        }
    }
}
