package com.example.cleanNiceAB;

import com.example.cleanNiceAB.Services.BookingService;
import com.example.cleanNiceAB.entities.Booking;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.json.GsonBuilderUtils;
import org.springframework.web.bind.annotation.*;
import org.w3c.dom.ls.LSOutput;

import java.util.List;

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
        return new ResponseEntity<>(newBooking, HttpStatus.CREATED);
    }

    @GetMapping("/viewAll")
    public List<Booking> getAllBookings(){
        return bookingService.findAllBookings();
    }

    @GetMapping("/viewAll/{name}")
    public List<Booking> getAllBookingsByCustomerName(@PathVariable("name") String name){
        return  bookingService.findAllBookingsByCustomerName(name);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteBooking (@PathVariable("id") Long id){
        bookingService.deleteBooking(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }



}
