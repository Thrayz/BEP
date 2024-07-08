package com.example.backendbeplateform.Services.ServiceImplementation;

import com.example.backendbeplateform.DAO.Entities.Anomalie;
import com.example.backendbeplateform.DAO.Entities.DecisionProduitExtends.Maitrise;
import com.example.backendbeplateform.DAO.Repositories.AnomalieRepository;
import com.example.backendbeplateform.DAO.Repositories.MaitriseRepository;
import com.example.backendbeplateform.Services.ServiceInterfaces.IServiceMaitrise;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
public class ServiceMaitrise implements IServiceMaitrise {

    @Autowired
    private MaitriseRepository maitriseRepo;

    @Autowired
    private AnomalieRepository anomalieRepo;


    @Override
    public Maitrise addMaitriseWithAnomalie(Maitrise maitrise, int idAnomalie){
        Optional<Anomalie> anomalieObject = anomalieRepo.findById(idAnomalie);
        if(anomalieObject.isPresent()){
            maitrise.setAnomalie(anomalieObject.get());
            return maitriseRepo.save(maitrise);
        }
        else
            throw new RuntimeException("No anomalie Present");
    }

}
