package com.example.backendbeplateform.Services.ServiceImplementation;

import com.example.backendbeplateform.DAO.Entities.Anomalie;
import com.example.backendbeplateform.DAO.Entities.DecisionProduitExtends.Decision;
import com.example.backendbeplateform.DAO.Repositories.AnomalieRepository;
import com.example.backendbeplateform.DAO.Repositories.DecisionRepository;
import com.example.backendbeplateform.Services.ServiceInterfaces.IServiceDecision;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ServiceDecision implements IServiceDecision {

    @Autowired
    private DecisionRepository decisionRepo;

    @Autowired
    private AnomalieRepository anomalieRepo;

    @Override
    public List<Decision> getAll() {
        return decisionRepo.findAll();
    }

    @Override
    public Decision getDecisionById(Integer id) {
        return decisionRepo.findById(id).get();
    }

    @Override
    public Decision addDecision(Decision decision) {
        System.out.println("decision : "+decision);
        return decisionRepo.save(decision);
    }

    @Override
    public Decision updateDecision(Decision decision) {
        return decisionRepo.save(decision);
    }

    @Override
    public void deleteDecision(Integer id) {

        try{
            decisionRepo.deleteById(id);
        }catch(Exception e){
            throw new RuntimeException(e);
        }

    }

    @Override
    public Decision addDecisionWithAnomalie(Decision decision,int idAnomalie){
        Optional<Anomalie> anomalieObject = anomalieRepo.findById(idAnomalie);
        if(anomalieObject.isPresent()){
            Optional<Decision> decisionObject = decisionRepo.findDecisionByAnomalie(anomalieObject.get());
            if(!decisionObject.isPresent())
            {
                decision.setAnomalie(anomalieObject.get());
                return decisionRepo.save(decision);
            }
            else {
                throw new RuntimeException("decision already present !!");
            }
        }
        else
            throw new RuntimeException("No anomalie Present");
    }
}
