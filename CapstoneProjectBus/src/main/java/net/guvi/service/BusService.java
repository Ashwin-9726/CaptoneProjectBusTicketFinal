package net.guvi.service;

import net.guvi.entity.Bus;
import net.guvi.repository.BusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.OptionalInt;

@Service
public class BusService {
    @Autowired
    private BusRepository busRepository;

    public List<Bus> getAllBuses() {
        return busRepository.findAll();
    }

    public List<Bus> searchBuses(String source, String destination) {
        return busRepository.findBySourceAndDestination(source, destination);
    }

    public static <T> OptionalInt getBusById(Long id) {
        return OptionalInt.empty();
    }
}