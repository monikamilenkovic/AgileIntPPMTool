package io.agileintelligence.ppmtool.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
//ovde kreiramo exception
@ResponseStatus(HttpStatus.BAD_REQUEST) //ovo ide da bismo obezbedili da svaki put kad se baci taj izuzetak daje klijentu poruku o http bad request
public class ProjectIdException extends RuntimeException {

    public ProjectIdException(String message) {
        super(message);
    }
}