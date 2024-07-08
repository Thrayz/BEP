package com.example.backendbeplateform.Controllers;

import com.example.backendbeplateform.DAO.Entities.Anomalie;
import com.example.backendbeplateform.DAO.Entities.DecisionProduitExtends.Decision;
import com.example.backendbeplateform.Services.ServiceInterfaces.IServiceDecision;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.Semaphore;

@CrossOrigin(origins = "*" )
@RestController
public class DecisionController {

    @Autowired
    private IServiceDecision serviceDecision;

    private final Semaphore semaphore = new Semaphore(1); // Only one permit available


    @GetMapping("/decision/get")
    public List<Decision> GetAll() {
        return serviceDecision.getAll();
    }

    @GetMapping("/decision/get/{id}")
    public Decision Get(@PathVariable Integer id) {
        return serviceDecision.getDecisionById(id);
    }

    @PostMapping("/decision/add")
    public Decision Post(@RequestBody Decision decision) {
        return serviceDecision.addDecision(decision);
    }

    @PutMapping("/decision/update")
    public Decision Update(@RequestBody Decision decision) {
        return serviceDecision.updateDecision(decision);
    }

    @DeleteMapping("/decision/delete/{id}")
    public void Delete(@PathVariable Integer id) {
        serviceDecision.deleteDecision(id);
    }


    @PostMapping("/decision/add/{idAnomalie}")
    public Decision addDecisionWithAnomalie(@RequestBody Decision decision, @PathVariable("idAnomalie") int idAnomalie){
        try {
            if (semaphore.tryAcquire()) {
                return serviceDecision.addDecisionWithAnomalie(decision, idAnomalie);
            } else {
                System.out.println("Semaphore blocked !!!");
                return null;
            }
        } finally {
            semaphore.release(); // Release the semaphore permit
        }
    }
}
