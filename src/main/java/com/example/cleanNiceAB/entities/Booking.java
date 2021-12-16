package com.example.cleanNiceAB.entities;

import com.fasterxml.jackson.annotation.JsonCreator;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "booking")
public class Booking implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;
    @Column(name = "cleaning_package")
    private String cleaningPackage;
    @Column(name = "address")
    private String address;
    @Column(name = "name")
    private String name;
    @Column(name = "date")
    private Date date;
    @Column(name = "user_id")
    private String cusID;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE) //removed
    @JoinColumn(name = "FK_customerId", referencedColumnName = "id")
    private User user;

}
