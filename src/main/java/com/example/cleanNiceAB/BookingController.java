package com.example.cleanNiceAB;

import com.example.cleanNiceAB.Services.BookingService;
import com.example.cleanNiceAB.entities.Booking;
import com.example.cleanNiceAB.entities.User;
import lombok.Value;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/booking")
public class BookingController {

    private final BookingService bookingService;

    @Autowired
    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;

    }


    @PostMapping("/add")
    public ResponseEntity<Booking> addBooking(@RequestBody Booking booking){
        Booking newBooking = bookingService.addBooking(booking);

        return new ResponseEntity<>(newBooking, HttpStatus.CREATED); //newBooking = should be DTO
    }

    @GetMapping("/viewAll")
    public List<Booking> getAllBookings(){
        return bookingService.findAllBookings();
    }

    @GetMapping("/viewAll/{name}")
    public List<Booking> getAllBookingsByCustomerName(@PathVariable("name") String name){
        return  bookingService.findAllBookingsByCustomerName(name);
    }

    @GetMapping("/viewAllBookings/{id}")
    public List<Booking> getAllBookingsByCustomerId (@PathVariable("id") Long id){
        return  bookingService.findAllByUserId(id);
    }

    @Transactional
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteBooking (@PathVariable("id") Long id){
        bookingService.deleteBooking(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    //DTO
    @Value
    public static class DTOBooking {
        Long id;
        String name;
        String cleaningPackage;
        String address;
        Date date;
        User user;

    }



}
