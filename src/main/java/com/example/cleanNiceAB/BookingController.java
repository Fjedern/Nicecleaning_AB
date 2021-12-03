package com.example.cleanNiceAB;

import com.example.cleanNiceAB.Services.BookingService;
import com.example.cleanNiceAB.entities.Booking;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/booking")
public class BookingController {

    private final BookingService bookingService;

    @Autowired
    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @GetMapping("/add")
    public ResponseEntity<Booking> addBooking(@RequestBody Booking booking){
        Booking newBooking = bookingService.addBooking(booking);
        return new ResponseEntity<>(newBooking, HttpStatus.CREATED);
    }

    @GetMapping("/api/start")
    public String test(){
        System.out.println("test");
        return "this is a test";

    }
}
