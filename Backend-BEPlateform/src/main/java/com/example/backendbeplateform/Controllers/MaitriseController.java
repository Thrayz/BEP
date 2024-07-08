package com.example.backendbeplateform.Controllers;

import com.example.backendbeplateform.DAO.Entities.DecisionProduitExtends.Maitrise;
import com.example.backendbeplateform.Services.ServiceInterfaces.IServiceMaitrise;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.Semaphore;

@CrossOrigin(origins = "*" )
@RestController
public class MaitriseController {

    @Autowired
    private IServiceMaitrise serviceMaitrise;

    private final Semaphore semaphore = new Semaphore(1); // Only one permit available


    @PostMapping("/maitrise/add/{idAnomalie}")
    public Maitrise addMaitriseWithAnomalie(@RequestBody Maitrise maitrise, @PathVariable("idAnomalie") int idAnomalie){
        try {
            if (semaphore.tryAcquire()) {
                return serviceMaitrise.addMaitriseWithAnomalie(maitrise,idAnomalie);
            } else {
                System.out.println("Semaphore blocked !!!");
                return null;
            }
        } finally {
            semaphore.release(); // Release the semaphore permit
        }
    }
}
