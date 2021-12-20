package com.example.cleanNiceAB.Services;

import com.example.cleanNiceAB.entities.Employee;
import com.example.cleanNiceAB.entities.User;
import com.example.cleanNiceAB.utils.JwtUtils;
import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class JwtService {

    @Autowired
    EmployeeService employeeService;
    @Autowired
    UserService userService;



    public boolean jwtIsValid(String jwt){
        Claims claims = JwtUtils.decodeJWT(jwt);
        Long nowMillis = System.currentTimeMillis();
        Date now = new Date(nowMillis);

        if (claims.getExpiration().compareTo(now) > 0){
            return true;
        }
        return false;
    }

    public User getJwtOwner(String jwt){
        Claims claims = JwtUtils.decodeJWT(jwt);

            List<User> userList = userService.getAll();

            User foundUser;

            for (User user : userList) {
                if (user.getId().equals(Long.valueOf(claims.getId()))) {
                    foundUser = user;
                    return foundUser;
                }
            }


        return null;
    }

    public Employee getEmployeeByJwt(String jwt){
        Claims claims = JwtUtils.decodeJWT(jwt);

        List<Employee> employeeList = employeeService.findAllEmployees();

        Employee foundEmployee;

        for (Employee employee : employeeList){
            if (employee.getId().equals(Long.valueOf(claims.getId()))){
                foundEmployee = employee;
                return foundEmployee;
            }
        }
        return null;
    }
}
