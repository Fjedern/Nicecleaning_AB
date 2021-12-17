package com.example.cleanNiceAB.Services;

import com.example.cleanNiceAB.entities.Booking;
import com.example.cleanNiceAB.entities.User;
import com.example.cleanNiceAB.repos.BookingRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;
import java.util.Optional;

@Service
public class BookingService {

    @Autowired
    private BookingRepo bookingRepo;

    public BookingService(BookingRepo bookingRepo) {
        this.bookingRepo = bookingRepo;
    }

    public Booking addBooking(Booking booking){

        return bookingRepo.save(booking);
    }

    public List<Booking> findAllBookings(){
        return bookingRepo.findAll();
    }

    public  List<Booking> findAllBookingsByCustomerName(String name){
        return bookingRepo.findByName(name);
    }

    /*public List<Booking> findAllBookingsByCustomerId(Long id){
        return bookingRepo.findAllById(id);
    }*/

    public List<Booking> findAllByUserId(Long id){
        return bookingRepo.findAllByUserId(id);
    }

    public Booking updateBooking(Booking booking){
        return bookingRepo.save(booking);
    }

    public void deleteBooking(Long id){bookingRepo.deleteBookingById(id);
    }
}
