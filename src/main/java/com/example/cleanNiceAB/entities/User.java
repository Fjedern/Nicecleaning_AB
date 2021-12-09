package com.example.cleanNiceAB.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "user")
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;
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
    @Column(name="user_type")
    private String userType;
    @Column(nullable = false, columnDefinition = "TINYINT(1)", name="is_company")
    private boolean company;


}
