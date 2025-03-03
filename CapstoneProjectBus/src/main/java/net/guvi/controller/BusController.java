package net.guvi.controller;

import io.swagger.v3.oas.annotations.tags.Tag;
import net.guvi.entity.Bus;
import net.guvi.service.BusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@Tag(name="CRUD REST APIs for Bus Controller resource ",
        description = "Crud APIs for Bus Ticket Booking Bus Resource")

@RestController
@RequestMapping("/api/buses")
public class BusController {
    @Autowired
    private BusService busService;

    @GetMapping
    public List<Bus> getAllBuses() {
        return busService.getAllBuses();
    }

    @GetMapping("/search")
    public List<Bus> searchBuses(@RequestParam String source, @RequestParam String destination) {
        return busService.searchBuses(source, destination);
    }
}