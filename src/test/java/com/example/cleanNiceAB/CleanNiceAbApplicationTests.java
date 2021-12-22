package com.example.cleanNiceAB;

import com.example.cleanNiceAB.Services.BookingService;
import com.example.cleanNiceAB.Services.EmployeeService;
import com.example.cleanNiceAB.Services.JwtService;
import com.example.cleanNiceAB.controllers.EmployeeController;
import com.example.cleanNiceAB.controllers.LoginController;
import com.example.cleanNiceAB.entities.Employee;
import com.example.cleanNiceAB.entities.User;
import com.example.cleanNiceAB.utils.SecureUtils;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Date;

@SpringBootTest
class CleanNiceAbApplicationTests {
	@Autowired
	LoginController loginController;
	EmployeeController employeeController;


	@Autowired
	JwtService jwtService;
	EmployeeService employeeService;

	@Test
	void contextLoads() {
	}

	@Test
	void test_jwt_to_find_user_success (){
		User user = jwtService.getJwtOwner("eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxMyIsImlhdCI6MTYzOTE0MDk0NCwiaXNzIjoiU3TDpGRhRmludCBBQiIsInN1YiI6InVzZXIgaW5mbyIsImV4cCI6MTYzOTE1MTc0NH0.2gAIYrbM1ocLpMR8OsJtdlw6LTzeJtyGxxwKIvHLPPQ");
		System.out.println(user.getUserType());
		System.out.println(user.getEmail());
	}

	@Test
	void test_update_Employee_with_booking_success (){
		//employeeController.addEmployee(new Employee("test", "test", "test"));
		//employeeController.addEmployeeToBooking
		//Employee employee = employeeService.addEmployee("testmail", "test15", SecureUtils, "0988", "adrestest");

	}

}
