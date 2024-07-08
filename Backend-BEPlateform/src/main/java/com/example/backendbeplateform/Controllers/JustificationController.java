package com.example.backendbeplateform.Controllers;

import com.example.backendbeplateform.DAO.Entities.DecisionProduitExtends.Justification;
import com.example.backendbeplateform.Services.ServiceInterfaces.IServiceJustification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.Semaphore;

@CrossOrigin(origins = "*" )
@RestController
public class JustificationController {

    @Autowired
    private IServiceJustification serviceJustification;

    private final Semaphore semaphore = new Semaphore(1); // Only one permit available


    @GetMapping("/justification/get")
    public List<Justification> GetAll() {
        return serviceJustification.getAll();
    }

    @GetMapping("/justification/get/{id}")
    public Justification Get(@PathVariable Integer id) {
        return serviceJustification.getJustificationById(id);
    }

    @PostMapping("/justification/add")
    public Justification Post(@RequestBody Justification justification) {
        System.out.println(justification);
        return serviceJustification.addJustification(justification);
    }

    @PutMapping("/justification/update")
    public Justification Update(@RequestBody Justification justification) {
        return serviceJustification.updateJustification(justification);
    }

    @DeleteMapping("/justification/delete/{id}")
    public void Delete(@PathVariable Integer id) {
        serviceJustification.deleteJustification(id);
    }

    @PostMapping("/justification/add/{idAnomalie}")
    public Justification addJustificationWithAnomalie(@RequestBody Justification justification, @PathVariable("idAnomalie") int idAnomalie){
        try {
            if (semaphore.tryAcquire()) {
                return serviceJustification.addJustificationWithAnomalie(justification,idAnomalie);
            } else {
                System.out.println("Semaphore blocked !!!");
                return null;
            }
        } finally {
            semaphore.release(); // Release the semaphore permit
        }
    }
}
