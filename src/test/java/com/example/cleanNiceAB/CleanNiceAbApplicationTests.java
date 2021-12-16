package com.example.cleanNiceAB;

import com.example.cleanNiceAB.Services.JwtService;
import com.example.cleanNiceAB.controllers.LoginController;
import com.example.cleanNiceAB.entities.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class CleanNiceAbApplicationTests {
	@Autowired
	LoginController loginController;

	@Autowired
	JwtService jwtService;
	@Test
	void contextLoads() {
	}

	@Test
	void test_jwt_to_find_user_success (){
		User user = jwtService.getJwtOwner("eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxMyIsImlhdCI6MTYzOTE0MDk0NCwiaXNzIjoiU3TDpGRhRmludCBBQiIsInN1YiI6InVzZXIgaW5mbyIsImV4cCI6MTYzOTE1MTc0NH0.2gAIYrbM1ocLpMR8OsJtdlw6LTzeJtyGxxwKIvHLPPQ");
		System.out.println(user.getUserType());
		System.out.println(user.getEmail());
	}

}
