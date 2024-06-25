package com.players.Players.controllers;

import com.google.common.base.CaseFormat;
import com.players.Players.dto.responses.errors.ErrorResponse;
import com.players.Players.dto.responses.errors.validation.ValidationErrorResponse;
import com.players.Players.exceptions.ClientException;
import com.players.Players.models.Violation;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.ConstraintViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.ArrayList;
import java.util.List;

@ControllerAdvice
public class ControllerExceptionHandler {
    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ResponseBody
    public ErrorResponse onException(Exception e) {
        return new ErrorResponse(e.getMessage());
    }

    @ExceptionHandler(ConstraintViolationException.class)
    @ResponseStatus(HttpStatus.UNPROCESSABLE_ENTITY)
    @ResponseBody
    public ValidationErrorResponse onConstraintValidationException(ConstraintViolationException e) {
        List<Violation> violationList = new ArrayList<>();

        for (ConstraintViolation<?> violation : e.getConstraintViolations()) {
            violationList.add(new Violation(getFieldName(violation.getPropertyPath().toString()), getLocaleKey(violation.getMessage())));
        }

        return new ValidationErrorResponse(violationList);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.UNPROCESSABLE_ENTITY)
    @ResponseBody
    public ValidationErrorResponse onMethodArgumentNotValidException(MethodArgumentNotValidException e) {
        List<Violation> violationList = new ArrayList<>();

        for (FieldError fieldError : e.getBindingResult().getFieldErrors()) {
            violationList.add(new Violation(getFieldName(fieldError.getField()), getLocaleKey(fieldError.getDefaultMessage())));
        }

        return new ValidationErrorResponse(violationList);
    }

    @ExceptionHandler(ClientException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ResponseBody
    public ErrorResponse onException(ClientException e) {
        return new ErrorResponse(e.getMessage());
    }

    private static String getFieldName(String fieldName) {
        return CaseFormat.LOWER_CAMEL.to(CaseFormat.LOWER_UNDERSCORE, fieldName);
    }

    private static String getLocaleKey(String message) {
        return message.toUpperCase().replace(' ', '_');
    }
}
