package com.players.Players.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value= HttpStatus.BAD_REQUEST)  // 404
public class ClientException extends RuntimeException {
    public ClientException(String message) {
        super(message);
    }
}
