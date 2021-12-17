package com.example.cleanNiceAB.repos;

import com.example.cleanNiceAB.entities.Booking;
import com.example.cleanNiceAB.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BookingRepo extends JpaRepository<Booking, Long> {

    void deleteBookingById(Long id);

    List<Booking> findAllByUserId(Long id);

    List<Booking> findByName(String name);
}
