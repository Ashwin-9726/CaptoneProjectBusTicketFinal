package net.guvi.dto;

public class BookingRequest {
    private Long busId;

    public BookingRequest(long l, long l1) {
    }

    public Long getBusId() {
        return busId;
    }

    public void setBusId(Long busId) {
        this.busId = busId;
    }

    public Long getPassengerId() {
        return passengerId;
    }

    public void setPassengerId(Long passengerId) {
        this.passengerId = passengerId;
    }

    private Long passengerId;
}