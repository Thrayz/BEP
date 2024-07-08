package com.example.backendbeplateform.Services.ServiceImplementation;

import com.example.backendbeplateform.DAO.Entities.Anomalie;
import com.example.backendbeplateform.DAO.Entities.DecisionProduitExtends.Justification;
import com.example.backendbeplateform.DAO.Repositories.AnomalieRepository;
import com.example.backendbeplateform.DAO.Repositories.JustificationRepository;
import com.example.backendbeplateform.Services.ServiceInterfaces.IServiceJustification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ServiceJustification implements IServiceJustification {

    @Autowired
    private JustificationRepository justificationRepo;

    @Autowired
    private AnomalieRepository anomalieRepo;

    @Override
    public List<Justification> getAll() {
        return justificationRepo.findAll();
    }

    @Override
    public Justification getJustificationById(Integer id) {
        return justificationRepo.findById(id).get();
    }

    @Override
    public Justification addJustification(Justification justification) {
        return justificationRepo.save(justification);
    }

    @Override
    public Justification updateJustification(Justification justification) {
        return justificationRepo.save(justification);
    }

    @Override
    public void deleteJustification(Integer id) {
        justificationRepo.deleteById(id);
    }

    @Override
    public Justification addJustificationWithAnomalie(Justification justification, int idAnomalie){
        Optional<Anomalie> anomalieObject = anomalieRepo.findById(idAnomalie);
        if(anomalieObject.isPresent()){
            justification.setAnomalie(anomalieObject.get());
            return justificationRepo.save(justification);
        }
        else
            throw new RuntimeException("No anomalie Present");
    }
}
