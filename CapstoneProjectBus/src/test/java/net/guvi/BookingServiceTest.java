package net.guvi;

import net.guvi.dto.BookingRequest;
import net.guvi.entity.Booking;
import net.guvi.entity.Bus;
import net.guvi.entity.Passenger;
import net.guvi.repository.BookingRepository;
import net.guvi.repository.BusRepository;
import net.guvi.repository.PassengerRepository;
import net.guvi.repository.UserRepository;
import net.guvi.service.BookingService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import java.time.LocalDateTime;
import java.util.Collections;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class BookingServiceTest {
    @Mock
    private BookingRepository bookingRepository;
    @Mock
    private BusRepository busRepository;
    @Mock
    private PassengerRepository passengerRepository;
    @Mock
    private UserRepository userRepository;
    @InjectMocks
    private BookingService bookingService;

    @Test
    public void testCreateBooking() {
        Bus bus = new Bus(1L, "BUS001", "CityA", "CityB", LocalDateTime.now(), 50, 1, 50.0);
        Passenger passenger = new Passenger(1L, "John Doe", "john@example.com", "1234567890", null);
        BookingRequest request = new BookingRequest(1L, 1L);
        when(busRepository.findById(1L)).thenReturn(java.util.Optional.of(bus));
        when(passengerRepository.findById(1L)).thenReturn(java.util.Optional.of(passenger));
        when(bookingRepository.save(any(Booking.class))).thenAnswer(i -> i.getArguments()[0]);
        Booking booking = bookingService.createBooking(request);
        assertNotNull(booking);
        assertEquals("PENDING", booking.getStatus());
        verify(busRepository, times(1)).save(bus);
    }
}