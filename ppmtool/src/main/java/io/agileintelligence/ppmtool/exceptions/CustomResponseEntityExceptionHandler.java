package io.agileintelligence.ppmtool.exceptions;


import io.agileintelligence.ppmtool.exceptions.ProjectIdExceptionResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice//mehanizam koji pomaze da umaknete od imanja exception hendlera koji su specificni za kontrolera, daje nam globalno hendlovanje za kontrolera
// ako se desi neki izuzetak, ovde se dodje da se vidi sta da se uradi
@RestController
public class CustomResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler
    public final ResponseEntity<Object> handleProjectIdException(ProjectIdException ex, WebRequest request){
        ProjectIdExceptionResponse exceptionResponse = new ProjectIdExceptionResponse(ex.getMessage());
        return new ResponseEntity(exceptionResponse, HttpStatus.BAD_REQUEST);
    }
//u ProjectIdExceptionResponse imamo getere i setere i konstruktor sa parametrom, imamo i atribut i tu se pravi json objekat za odgovor a u exception imamo samo da nasledjujemo Runtime exception i definisemo poruku

}
