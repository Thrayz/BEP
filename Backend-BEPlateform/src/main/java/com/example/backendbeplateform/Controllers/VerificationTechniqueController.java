package com.example.backendbeplateform.Controllers;

import com.example.backendbeplateform.DAO.Entities.DRE.VerificationTechnique;
import com.example.backendbeplateform.Services.ServiceInterfaces.IServiceVerificationTechnique;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.Semaphore;

@CrossOrigin(origins = "*" )
@RestController
public class VerificationTechniqueController {

    @Autowired
    private IServiceVerificationTechnique serviceVerificationTechnique;

    private final Semaphore semaphore = new Semaphore(1); // Only one permit available


    @GetMapping("/verificationTechnique/get")
    public List<VerificationTechnique> GetAll() {
        return serviceVerificationTechnique.getAll();
    }

    @GetMapping("/verificationTechnique/get/{id}")
    public VerificationTechnique Get(@PathVariable Integer id) {
        return serviceVerificationTechnique.getVerificationTechniqueById(id);
    }

    @PostMapping("/verificationTechnique/add")
    public VerificationTechnique Post(@RequestBody VerificationTechnique verificationTechnique) {
        return serviceVerificationTechnique.addVerificationTechnique(verificationTechnique);
    }

    @PutMapping("/verificationTechnique/update")
    public VerificationTechnique Update(@RequestBody VerificationTechnique verificationTechnique) {
        return serviceVerificationTechnique.updateVerificationTechnique(verificationTechnique);
    }

    @DeleteMapping("/verificationTechnique/delete/{id}")
    public void Delete(@PathVariable Integer id) {
        serviceVerificationTechnique.deleteVerificationTechnique(id);
    }


    @PostMapping("/verificationTechnique/add/{idAnomalie}")
    public VerificationTechnique addVerificationTechniqueWithAnomalie(@RequestBody VerificationTechnique verificationTechnique, @PathVariable("idAnomalie") int idAnomalie){
        try {
            if (semaphore.tryAcquire()) {
                return serviceVerificationTechnique.addVerificationTechniqueWithAnomalie(verificationTechnique,idAnomalie);
            } else {
                System.out.println("Semaphore blocked !!!");
                return null;
            }
        } finally {
            semaphore.release(); // Release the semaphore permit
        }
    }

}
