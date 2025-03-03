package net.guvi.entity;

import jakarta.persistence.*;

@Entity
public class Passenger {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;

    public Passenger(Long id, String name, String email, String phone, User user) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public Passenger() {
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    private String phone;
    @ManyToOne
    private User user;
}