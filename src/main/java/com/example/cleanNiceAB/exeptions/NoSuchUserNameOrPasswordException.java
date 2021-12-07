package com.example.cleanNiceAB.exeptions;

public class NoSuchUserNameOrPasswordException extends Exception {
    public NoSuchUserNameOrPasswordException(String message) {
        super(message);
    }
}
