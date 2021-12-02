package com.example.cleanNiceAB.repos;

import com.example.cleanNiceAB.entities.Booking;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Component
public interface BookingRepo extends JpaRepository<Booking, Long> {

    void deleteBookingById(Long id);


    Optional<Booking> findById(Long id);
}
