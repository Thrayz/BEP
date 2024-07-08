package com.example.backendbeplateform.Services.ServiceImplementation;

import com.example.backendbeplateform.DAO.Entities.DRE.DemandeRetouche;
import com.example.backendbeplateform.DAO.Entities.DRE.DreFilesUploaded;
import com.example.backendbeplateform.DAO.Repositories.AnomalieRepository;
import com.example.backendbeplateform.DAO.Repositories.DemandeRetoucheRepository;
import com.example.backendbeplateform.DAO.Repositories.DreFilesUploadRepository;
import com.example.backendbeplateform.Services.ServiceInterfaces.IServiceDreFilesUpload;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ServiceDreFilesUpload implements IServiceDreFilesUpload {

    @Autowired
    private DreFilesUploadRepository dreFilesUploadRepo;

    @Autowired
    private AnomalieRepository anomalieRepo;

    @Autowired
    private DemandeRetoucheRepository demandeRetoucheRepo;

    @Override
    public List<DreFilesUploaded> getAll() {
        return dreFilesUploadRepo.findAll();
    }

    @Override
    public DreFilesUploaded getDreFilesUploadsById(Integer id) {
        return dreFilesUploadRepo.findById(id).get();
    }

    @Override
    public DreFilesUploaded addDreFilesUploads(DreFilesUploaded dreFilesUploaded) {
        return dreFilesUploadRepo.save(dreFilesUploaded);
    }

    @Override
    public DreFilesUploaded updateDreFilesUploads(DreFilesUploaded dreFilesUploaded) {
        return dreFilesUploadRepo.save(dreFilesUploaded);
    }

    @Override
    public void deleteDreFilesUploads(Integer id) {
        dreFilesUploadRepo.deleteById(id);
    }

    @Override
    public List<DreFilesUploaded> getDreFilesUploadedByDemandeRetouche(Integer id) {
        Optional<DemandeRetouche> demandeRetouche = demandeRetoucheRepo.findById(id);
        if(demandeRetouche.isPresent())
        {
            return dreFilesUploadRepo.findDreFilesUploadedByDemandeRetouche(demandeRetouche.get());
        }
        else
        {
            throw new RuntimeException("anomalie not found !!!");
        }
    }

}
