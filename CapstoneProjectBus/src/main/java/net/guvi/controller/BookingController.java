package net.guvi.controller;

import io.swagger.v3.oas.annotations.tags.Tag;
import net.guvi.dto.BookingRequest;
import net.guvi.entity.Booking;
import net.guvi.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@Tag(name="CRUD REST APIs for Booking Controller resource ",
        description = "Crud APIs for Bus Ticket Booking Resource")

@RestController
@RequestMapping("/api/bookings")
@PreAuthorize("hasRole('USER')")
public class BookingController {
    @Autowired
    private BookingService bookingService;

    @PostMapping
    public ResponseEntity<Booking> createBooking(@RequestBody BookingRequest request) {
        Booking booking = bookingService.createBooking(request);
        return ResponseEntity.ok(booking);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Booking> getBooking(@PathVariable Long id) {
        return ResponseEntity.ok(bookingService.getBooking(id));
    }

    @GetMapping("/history")
    public ResponseEntity<List<Booking>> getBookingHistory(Authentication authentication) {
        String username = authentication.getName();
        List<Booking> bookings = bookingService.getUserBookings(username);
        return ResponseEntity.ok(bookings);
    }
}