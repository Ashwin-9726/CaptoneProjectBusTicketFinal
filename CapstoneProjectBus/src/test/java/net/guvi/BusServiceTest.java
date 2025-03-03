package net.guvi;

import net.guvi.entity.Bus;
import net.guvi.repository.BusRepository;
import net.guvi.service.BusService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class BusServiceTest {
    @Mock
    private BusRepository busRepository;
    @InjectMocks
    private BusService busService;

    @Test
    public void testGetAllBuses() {
        Bus bus1 = new Bus(1L, "BUS001", "CityA", "CityB", LocalDateTime.now(), 50, 50, 50.0);
        Bus bus2 = new Bus(2L, "BUS002", "CityC", "CityD", LocalDateTime.now(), 40, 40, 40.0);
        List<Bus> mockBuses = Arrays.asList(bus1, bus2);
        when(busRepository.findAll()).thenReturn(mockBuses);
        List<Bus> buses = busService.getAllBuses();
        assertEquals(2, buses.size());
        assertEquals("BUS001", buses.get(0).getBusNumber());
        verify(busRepository, times(1)).findAll();
    }
}