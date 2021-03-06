package com.example.cleanNiceAB.Services;

import com.example.cleanNiceAB.entities.Booking;
import com.example.cleanNiceAB.entities.Employee;
import com.example.cleanNiceAB.repos.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    @Autowired
    EmployeeRepo employeeRepo;

    public EmployeeService(EmployeeRepo employeeRepo) {
        this.employeeRepo = employeeRepo;
    }

    public Employee addEmployee(Employee employee){
        return employeeRepo.save(employee);
    }

    public List<Employee> findAllEmployees(){
        return employeeRepo.findAll();
    }

    public Optional<Employee> findEmployeeById(Long id) {
        return employeeRepo.findById(id);
    }


}
