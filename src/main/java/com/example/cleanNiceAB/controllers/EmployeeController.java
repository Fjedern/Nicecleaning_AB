package com.example.cleanNiceAB.controllers;

import com.example.cleanNiceAB.Services.EmployeeService;
import com.example.cleanNiceAB.entities.Booking;
import com.example.cleanNiceAB.entities.Employee;
import com.example.cleanNiceAB.entities.User;
import com.example.cleanNiceAB.utils.JwtUtils;
import com.example.cleanNiceAB.utils.SecureUtils;
import io.jsonwebtoken.Claims;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.Optional;
import java.util.Set;


@RequestMapping("/employee")
@AllArgsConstructor
@RestController
public class EmployeeController {

    @Autowired
    private final EmployeeService employeeService;


    @PostMapping("/add")
    public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee) throws NoSuchAlgorithmException {
        employee.setSalt(SecureUtils.getSalt());
        employee.setPassword(SecureUtils.getSecurePassword(employee.getPassword(), employee.getSalt()));
        System.out.println("TEST"+employee.getPassword());
        Employee newEmployee = employeeService.addEmployee(employee);
        return new ResponseEntity<>(newEmployee, HttpStatus.CREATED);
    }

    @GetMapping("/viewAll")
    public List<Employee> getAllEmployees(@RequestHeader String token){
        return employeeService.findAllEmployees();
    }

    @GetMapping("/viewBookings")
    public Set<Booking> getBookings(@RequestHeader String token){
        Claims claims = JwtUtils.decodeJWT(token);
        Optional<Employee> optionalEmployee = employeeService.findEmployeeById(Long.parseLong(claims.getId()));
        Employee employee = optionalEmployee.get();
        return employee.getBookings();
    }
}
