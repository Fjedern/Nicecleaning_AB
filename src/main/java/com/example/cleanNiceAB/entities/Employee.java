package com.example.cleanNiceAB.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "Employees")
public class Employee implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long Id;
    @Column(name = "email")
    private String email;
    @Column(name = "password")
    private String password;
    @Column(name= "salt")
    private byte[] salt;
    @Column(name = "name")
    private String name;
    @Column(name = "phone_nr")
    private String phoneNr;
    @Column(name = "address")
    private String address;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(name = "employee_bookings",
            joinColumns = @JoinColumn(name = "employee_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "booking_id", referencedColumnName = "id"))
    private Set<Booking> bookings = new HashSet<>();

}
