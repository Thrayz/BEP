package com.example.backendbeplateform.Controllers;

import com.example.backendbeplateform.DAO.Entities.Anomalie;
import com.example.backendbeplateform.DAO.Entities.User;
import com.example.backendbeplateform.Services.ServiceInterfaces.IServiceAnomalie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*" )
@RestController
public class AnomalieController {

    @Autowired
    private IServiceAnomalie serviceAnomalie;


    @GetMapping("/anomalie/get")
    public List<Anomalie> GetAll() {
        return serviceAnomalie.getAll();
    }

    @GetMapping("/anomalie/get/{id}")
    public Anomalie Get(@PathVariable Integer id) {
        return serviceAnomalie.getAnomalieById(id);
    }

    @PostMapping("/anomalie/add")
    public Anomalie Post(@RequestBody Anomalie anomalie) {
        return serviceAnomalie.addAnomalie(anomalie);
    }

    @PutMapping("/anomalie/update")
    public Anomalie Update(@RequestBody Anomalie anomalie) {
        return serviceAnomalie.updateAnomalie(anomalie);
    }

    @DeleteMapping("/anomalie/delete/{id}")
    public void Delete(@PathVariable Integer id) {
        serviceAnomalie.deleteAnomalie(id);
    }


    @GetMapping("/anomalie/anomalieEnAttente/{service}")
    public List<Anomalie> getAnomalieEnAttente(@PathVariable("service") String service){
        return serviceAnomalie.anomalieEnAttente(service);
    }

    @GetMapping("/anomalie/dreEnAttente/{service}")
    public List<Anomalie> getdreEnAttente(@PathVariable("service") String service){
        return serviceAnomalie.dreEnAttente(service);
    }

    @PutMapping("/anomalie/updateStatus/{idAnomalie}")
    public Anomalie updateStatusAnomalie(@PathVariable("idAnomalie") int idAnomalie,@RequestBody Anomalie anomalie){
        return serviceAnomalie.updateStatusAnomalie(idAnomalie,anomalie);
    }



}
