package com.example.cleanNiceAB;

import com.example.cleanNiceAB.exeptions.NoSuchUserNameOrPasswordException;
import com.mysql.cj.log.Log;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class CleanNiceAbApplicationTests {
@Autowired
	LoginController loginController;
	@Test
	void contextLoads() {
	}

}
