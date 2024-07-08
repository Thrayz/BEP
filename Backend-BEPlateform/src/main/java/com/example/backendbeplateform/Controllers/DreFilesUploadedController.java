package com.example.backendbeplateform.Controllers;

import com.example.backendbeplateform.DAO.Entities.AnomalieFiles;
import com.example.backendbeplateform.DAO.Entities.DRE.DreFilesUploaded;
import com.example.backendbeplateform.Services.ServiceInterfaces.IServiceAnomalieFiles;
import com.example.backendbeplateform.Services.ServiceInterfaces.IServiceDreFilesUpload;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*" )
@RestController
public class DreFilesUploadedController {

    @Autowired
    private IServiceDreFilesUpload serviceDreFilesUpload;

    @GetMapping("/DreFiles/getByIdDemandeRetouce/{id}")
    public List<DreFilesUploaded> getByIdDemandeRetouce(@PathVariable Integer id) {
        return serviceDreFilesUpload.getDreFilesUploadedByDemandeRetouche(id);
    }
}
