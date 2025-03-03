package net.guvi.repository;

import net.guvi.entity.Booking;
import net.guvi.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long> {
    List<Booking> findByPassengerUser(User user);
}