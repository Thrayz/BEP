package com.example.backendbeplateform.Controllers;

import com.example.backendbeplateform.DAO.Entities.DRE.PriseEnCompte;
import com.example.backendbeplateform.Services.ServiceInterfaces.IServicePriseEnCompte;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.Semaphore;

@CrossOrigin(origins = "*" )
@RestController
public class PriseEnCompteController {

    @Autowired
    private IServicePriseEnCompte servicePriseEnCompte;

    private final Semaphore semaphore = new Semaphore(1); // Only one permit available



    @GetMapping("/priseEnCompte/get")
    public List<PriseEnCompte> GetAll() {
        return servicePriseEnCompte.getAll();
    }

    @GetMapping("/priseEnCompte/get/{id}")
    public PriseEnCompte Get(@PathVariable Integer id) {
        return servicePriseEnCompte.getPriseEnCompteById(id);
    }

    @PostMapping("/priseEnCompte/add")
    public PriseEnCompte Post(@RequestBody PriseEnCompte priseEnCompte) {
        return servicePriseEnCompte.addPriseEnCompte(priseEnCompte);
    }

    @PutMapping("/priseEnCompte/update")
    public PriseEnCompte Update(@RequestBody PriseEnCompte priseEnCompte) {
        return servicePriseEnCompte.updatePriseEnCompte(priseEnCompte);
    }

    @DeleteMapping("/priseEnCompte/delete/{id}")
    public void Delete(@PathVariable Integer id) {
        servicePriseEnCompte.deletePriseEnCompte(id);
    }

    @PostMapping("/priseEnCompte/add/{idAnomalie}")
    public PriseEnCompte addPriseEnCompteWithAnomalie(@RequestBody PriseEnCompte priseEnCompte, @PathVariable("idAnomalie") int idAnomalie){
        try {
            if (semaphore.tryAcquire()) {
                return servicePriseEnCompte.addPriseEnCompteWithAnomalie(priseEnCompte,idAnomalie);
            } else {
                System.out.println("Semaphore blocked !!!");
                return null;
            }
        } finally {
            semaphore.release(); // Release the semaphore permit
        }
    }
}
