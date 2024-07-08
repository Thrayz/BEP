package com.example.backendbeplateform.Controllers;

import com.example.backendbeplateform.DAO.Entities.DRE.DemandeRetouche;
import com.example.backendbeplateform.Services.ServiceInterfaces.IServiceDemandeRetouche;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.Semaphore;

@CrossOrigin(origins = "*" )
@RestController
public class DemandeRetoucheController {

    @Autowired
    private IServiceDemandeRetouche serviceDemandeRetouche;

    private final Semaphore semaphore = new Semaphore(1); // Only one permit available


    @GetMapping("/demandeRetouche/get")
    public List<DemandeRetouche> GetAll() {
        return serviceDemandeRetouche.getAll();
    }

    @GetMapping("/demandeRetouche/get/{id}")
    public DemandeRetouche Get(@PathVariable Integer id) {
        return serviceDemandeRetouche.getDemandeRetoucheById(id);
    }

    @PostMapping("/demandeRetouche/add")
    public DemandeRetouche Post(@RequestBody DemandeRetouche demandeRetouche) {
        return serviceDemandeRetouche.addDemandeRetouche(demandeRetouche);
    }

    @PutMapping("/demandeRetouche/update")
    public DemandeRetouche Update(@RequestBody DemandeRetouche demandeRetouche) {
        return serviceDemandeRetouche.updateDemandeRetouche(demandeRetouche);
    }

    @DeleteMapping("/demandeRetouche/delete/{id}")
    public void Delete(@PathVariable Integer id) {
        serviceDemandeRetouche.deleteDemandeRetouche(id);
    }

    @PostMapping("/demandeRetouche/add/{idAnomalie}")
    public DemandeRetouche addDemandeRetoucheWithAnomalie(@RequestBody DemandeRetouche demandeRetouche, @PathVariable("idAnomalie") int idAnomalie){
        try {
            if (semaphore.tryAcquire()) {
                return serviceDemandeRetouche.addDemandeRetoucheWithAnomalie(demandeRetouche,idAnomalie);
            } else {
                System.out.println("Semaphore blocked !!!");
                return null;
            }
        } finally {
            semaphore.release(); // Release the semaphore permit
        }
    }
}
