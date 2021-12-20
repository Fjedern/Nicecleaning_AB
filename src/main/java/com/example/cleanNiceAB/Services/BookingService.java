package com.example.cleanNiceAB.Services;

import com.example.cleanNiceAB.email.EmailSender;
import com.example.cleanNiceAB.email.EmailService;
import com.example.cleanNiceAB.entities.Booking;
import com.example.cleanNiceAB.repos.BookingRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingService {

    @Autowired
    private BookingRepo bookingRepo;

    @Autowired
    private EmailService emailService;
    public BookingService(BookingRepo bookingRepo, EmailService emailService) {
        this.bookingRepo = bookingRepo;
        this.emailService = emailService;
    }

    public Booking addBooking(Booking booking){
        emailService.send("jonas_holmkvist@hotmail.se", "jonas_holmkvist@hotmail.se");
        return bookingRepo.save(booking);
    }

    public List<Booking> findAllBookings(){
        return bookingRepo.findAll();
    }

    public  List<Booking> findAllBookingsByCustomerName(String name){
        return bookingRepo.findByName(name);
    }

    public List<Booking> findAllByUserId(Long id){
        return bookingRepo.findAllByUserId(id);
    }

    public Booking updateBooking(Booking booking){
        return bookingRepo.save(booking);
    }

    public void deleteBooking(Long id){bookingRepo.deleteBookingById(id);
    }
}
