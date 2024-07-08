package com.example.backendbeplateform.Controllers;

import com.example.backendbeplateform.DAO.Entities.Anomalie;
import com.example.backendbeplateform.DAO.Entities.AnomalieFiles;
import com.example.backendbeplateform.Services.ServiceInterfaces.IServiceAnomalie;
import com.example.backendbeplateform.Services.ServiceInterfaces.IServiceAnomalieFiles;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*" )
@RestController
public class AnomalieFileController {

    @Autowired
    private IServiceAnomalieFiles serviceAnomalieFiles;


    @GetMapping("/anomalieFiles/get")
    public List<AnomalieFiles> GetAll() {
        return serviceAnomalieFiles.getAll();
    }

    @GetMapping("/anomalieFiles/get/{id}")
    public AnomalieFiles Get(@PathVariable Integer id) {
        return serviceAnomalieFiles.getAnomalieFilesById(id);
    }

    @PostMapping("/anomalieFiles/add")
    public AnomalieFiles Post(@RequestBody AnomalieFiles anomalieFiles) {
        return serviceAnomalieFiles.addAnomalieFiles(anomalieFiles);
    }

    @PutMapping("/anomalieFiles/update")
    public AnomalieFiles Update(@RequestBody AnomalieFiles anomalieFiles) {
        return serviceAnomalieFiles.updateAnomalieFiles(anomalieFiles);
    }

    @DeleteMapping("/anomalieFiles/delete/{id}")
    public void Delete(@PathVariable Integer id) {
        serviceAnomalieFiles.deleteAnomalieFiles(id);
    }

    @GetMapping("/anomalieFiles/getByIdAnomalie/{id}")
    public List<AnomalieFiles> getByIdAnomalie(@PathVariable Integer id) {
        return serviceAnomalieFiles.getAnomalieFileByAnomalie(id);
    }



}
