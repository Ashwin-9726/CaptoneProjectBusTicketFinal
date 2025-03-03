package net.guvi.controller;

import io.swagger.v3.oas.annotations.tags.Tag;
import net.guvi.entity.Passenger;
import net.guvi.service.PassengerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Tag(name="CRUD REST API for Passenger Controller resource ",
        description = "Crud APIs for Bus Ticket Passenger Resource")

@RestController
@RequestMapping("/api/passengers")
public class PassengerController {
    @Autowired
    private PassengerService passengerService;

    @PostMapping
    public ResponseEntity<Passenger> createPassenger(@RequestBody Passenger passenger) {
        return ResponseEntity.ok(passengerService.createPassenger(passenger));
    }
}