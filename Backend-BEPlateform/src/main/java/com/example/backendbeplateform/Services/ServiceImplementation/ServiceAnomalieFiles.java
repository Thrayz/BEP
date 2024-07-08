package com.example.backendbeplateform.Services.ServiceImplementation;

import com.example.backendbeplateform.DAO.Entities.Anomalie;
import com.example.backendbeplateform.DAO.Entities.AnomalieFiles;
import com.example.backendbeplateform.DAO.Repositories.AnomalieFilesRepository;
import com.example.backendbeplateform.DAO.Repositories.AnomalieRepository;
import com.example.backendbeplateform.Services.ServiceInterfaces.IServiceAnomalieFiles;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ServiceAnomalieFiles implements IServiceAnomalieFiles {

    @Autowired
    private AnomalieFilesRepository anomalieFilesRepo;

    @Autowired
    private AnomalieRepository anomalieRepo;

    @Override
    public List<AnomalieFiles> getAll() {
        return anomalieFilesRepo.findAll();
    }

    @Override
    public AnomalieFiles getAnomalieFilesById(Integer id) {
        return anomalieFilesRepo.findById(id).get();
    }

    @Override
    public AnomalieFiles addAnomalieFiles(AnomalieFiles anomalieFiles) {
        return anomalieFilesRepo.save(anomalieFiles);
    }

    @Override
    public AnomalieFiles updateAnomalieFiles(AnomalieFiles anomalieFiles) {
        return anomalieFilesRepo.save(anomalieFiles);
    }

    @Override
    public void deleteAnomalieFiles(Integer id) {
        anomalieFilesRepo.deleteById(id);
    }

    @Override
    public List<AnomalieFiles> getAnomalieFileByAnomalie(Integer id) {
        Optional<Anomalie> anomalie = anomalieRepo.findById(id);
        if(anomalie.isPresent())
        {
            return anomalieFilesRepo.findAnomalieFilesByAnomalie(anomalie.get());
        }
        else
        {
            throw new RuntimeException("anomalie not found !!!");
        }
    }
}
