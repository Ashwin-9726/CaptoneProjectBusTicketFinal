package net.guvi.service;

import net.guvi.entity.Passenger;
import net.guvi.repository.PassengerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PassengerService {
    @Autowired
    private PassengerRepository passengerRepository;

    public Passenger createPassenger(Passenger passenger) {
        return passengerRepository.save(passenger);
    }
}