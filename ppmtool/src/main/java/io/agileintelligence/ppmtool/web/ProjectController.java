package io.agileintelligence.ppmtool.web;

import io.agileintelligence.ppmtool.domain.Project;
import io.agileintelligence.ppmtool.repository.ProjectRepository;
import io.agileintelligence.ppmtool.services.MapValidationErrorService;
import io.agileintelligence.ppmtool.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/project")
@CrossOrigin //za pristup iz React-a
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;
    @PostMapping("") //ako stoji samo @Valid bez binding result, onda kad uradimo post vraca gresku 400 i vraca objekat sa svim greskama validacije koje su se desile nad objektom
    public ResponseEntity<?> createNewProject(@Valid @RequestBody Project project, BindingResult result){ //trazimo validirani body response //Binding resault je interfejs koji zove validator na object //analizira objekat i gleda da li ima gresaka u kreiranju objekta
//        if(result.hasErrors()){ //da vidimo da li je proslo validacije ili ima gresaka
//            return new ResponseEntity<String>("Invalid Project Object", HttpStatus.BAD_REQUEST); // promenimo da je povratna vrednost Generic(?) da bismo ovde vratili string i rekli da je u pitanju los http zahtev
//        } //bitno nam je da hvatamo izuzetke sa smislom da bismo posle pomocu react-a handlovali lakse i uzeli sa servera i prebacili na front
//         //hocemo da nam odgovor vrati ovaj format "field":'error message'..
//        if(result.hasErrors()){
//            Map<String, String> errorMap = new HashMap<>();
//            for (FieldError error: result.getFieldErrors()){
//                errorMap.put(error.getField(), error.getDefaultMessage());
//            }
//            return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
//        }
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap!=null){
            return errorMap;
        }
        Project project1 = projectService.saveOrUpdateProject(project); //ovde se desi greska kad nije unique ID, a ne za validaciju, validacija prodje jer ona samo gleda taj objekat a nema dodira sa bazom
        return new ResponseEntity<Project>(project, HttpStatus.CREATED);
    }

    @GetMapping("/{projectId}") //"api/project/{id}" je to, kad preuzmemo taj id, saljemo ga do servisa i onda obradjujemo
    public ResponseEntity<?> getProjectById(@PathVariable String projectId){
        Project project = projectService.findProjectByIdentifier(projectId);
        return new ResponseEntity<Project>(project, HttpStatus.OK);
    }

    @GetMapping("/all")
    public Iterable<Project> getProjects(){
        return projectService.findAllProjects();
    }

    @DeleteMapping("/{projectId}")
    public ResponseEntity<?> deleteProject(@PathVariable String projectId){
        projectService.deleteProjectByIdentifier(projectId);
        return new ResponseEntity<String>("Project with ID: "+ projectId+" was deleted successfully", HttpStatus.OK);
    }
}
