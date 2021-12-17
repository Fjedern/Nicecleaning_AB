package com.example.cleanNiceAB.repos;

import com.example.cleanNiceAB.entities.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BookingRepo extends JpaRepository<Booking, Long> {

    void deleteBookingById(Long id);

    List<Booking> findAllById(Long id);

    List<Booking> findByName(String name);
}
