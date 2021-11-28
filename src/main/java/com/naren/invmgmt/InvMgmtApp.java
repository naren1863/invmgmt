package com.naren.invmgmt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication

public class InvMgmtApp {

	public static void main(String[] args) {
		SpringApplication.run(InvMgmtApp.class, args);
		System.out.println("Application Started!!");
	}
}
