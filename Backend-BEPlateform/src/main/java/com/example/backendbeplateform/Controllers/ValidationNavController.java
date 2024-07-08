package com.example.backendbeplateform.Controllers;

import com.example.backendbeplateform.DAO.Entities.ValidationCompExtends.ValidationNav;
import com.example.backendbeplateform.Services.ServiceInterfaces.IServiceValidationNav;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.Semaphore;

@CrossOrigin(origins = "*" )
@RestController
public class ValidationNavController {

    @Autowired
    private IServiceValidationNav serviceValidationNav;

    private final Semaphore semaphore = new Semaphore(1); // Only one permit available


    @GetMapping("/validationNav/get")
    public List<ValidationNav> GetAll() {
        return serviceValidationNav.getAll();
    }

    @GetMapping("/validationNav/get/{id}")
    public ValidationNav Get(@PathVariable Integer id) {
        return serviceValidationNav.getValidationNavById(id);
    }

    @PostMapping("/validationNav/add")
    public ValidationNav Post(@RequestBody ValidationNav validationNav) {
        return serviceValidationNav.addValidationNav(validationNav);
    }

    @PutMapping("/validationNav/update")
    public ValidationNav Update(@RequestBody ValidationNav validationNav) {
        return serviceValidationNav.updateValidationNav(validationNav);
    }

    @DeleteMapping("/validationNav/delete/{id}")
    public void Delete(@PathVariable Integer id) {
        serviceValidationNav.deleteValidationNav(id);
    }


    @PostMapping("/validationNav/add/{idAnomalie}")
    public ValidationNav addValidationNavWithAnomalie(@RequestBody ValidationNav validationNav, @PathVariable("idAnomalie") int idAnomalie){
        try {
            if (semaphore.tryAcquire()) {
                return serviceValidationNav.addValidationNavWithAnomalie(validationNav,idAnomalie);
            } else {
                System.out.println("Semaphore blocked !!!");
                return null;
            }
        } finally {
            semaphore.release(); // Release the semaphore permit
        }
    }
}
