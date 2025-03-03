package net.guvi.service;

import net.guvi.dto.BookingRequest;
import net.guvi.entity.Booking;
import net.guvi.entity.Bus;
import net.guvi.entity.Passenger;
import net.guvi.entity.User;
import net.guvi.repository.BookingRepository;
import net.guvi.repository.BusRepository;
import net.guvi.repository.PassengerRepository;
import net.guvi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class BookingService {
    @Autowired
    private BookingRepository bookingRepository;
    @Autowired
    private BusRepository busRepository;
    @Autowired
    private PassengerRepository passengerRepository;
    @Autowired
    private UserRepository userRepository;

    public Booking createBooking(BookingRequest request) {
        Bus bus = busRepository.findById(request.getBusId())
                .orElseThrow(() -> new RuntimeException("Bus not found"));
        Passenger passenger = passengerRepository.findById(request.getPassengerId())
                .orElseThrow(() -> new RuntimeException("Passenger not found"));

        if (bus.getAvailableSeats() > 0) {
            bus.setAvailableSeats(bus.getAvailableSeats() - 1);
            busRepository.save(bus);

            Booking booking = new Booking();
            booking.setBus(bus);
            booking.setPassenger(passenger);
            booking.setBookingTime(LocalDateTime.now());
            booking.setStatus("PENDING");
            return bookingRepository.save(booking);
        }
        throw new RuntimeException("No seats available");
    }

    public Booking getBooking(Long id) {
        return bookingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found"));
    }

    public List<Booking> getUserBookings(String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return bookingRepository.findByPassengerUser(user);
    }
}