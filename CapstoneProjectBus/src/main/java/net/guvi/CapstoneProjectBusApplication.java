package net.guvi;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@OpenAPIDefinition(
		info = @Info(
				title = "Bus Ticket Booking REST API Documentation",
				description = "Bus Ticket Booking System",
				version = "v1.0",
				contact = @Contact(
						name = "Ashwin",
						email = "ashwin@gmail.com",
						url = "http://www.google.com"
				)
		)
)
public class CapstoneProjectBusApplication {

	public static void main(String[] args) {
		SpringApplication.run(CapstoneProjectBusApplication.class, args);
	}

}
