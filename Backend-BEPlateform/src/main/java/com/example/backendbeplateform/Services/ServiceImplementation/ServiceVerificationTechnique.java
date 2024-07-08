package com.example.backendbeplateform.Services.ServiceImplementation;

import com.example.backendbeplateform.DAO.Entities.Anomalie;
import com.example.backendbeplateform.DAO.Entities.DRE.VerificationTechnique;
import com.example.backendbeplateform.DAO.Repositories.AnomalieRepository;
import com.example.backendbeplateform.DAO.Repositories.VerificationTechniqueRepository;
import com.example.backendbeplateform.Services.ServiceInterfaces.IServiceVerificationTechnique;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ServiceVerificationTechnique implements IServiceVerificationTechnique {


    @Autowired
    private VerificationTechniqueRepository vertificationTechniqueRepo;

    @Autowired
    private AnomalieRepository anomalieRepo;

    @Override
    public List<VerificationTechnique> getAll() {
        return vertificationTechniqueRepo.findAll();
    }

    @Override
    public VerificationTechnique getVerificationTechniqueById(Integer id) {
        return vertificationTechniqueRepo.findById(id).get();
    }

    @Override
    public VerificationTechnique addVerificationTechnique(VerificationTechnique vertificationTechnique) {
        return vertificationTechniqueRepo.save(vertificationTechnique);
    }

    @Override
    public VerificationTechnique updateVerificationTechnique(VerificationTechnique vertificationTechnique) {
        return vertificationTechniqueRepo.save(vertificationTechnique);
    }

    @Override
    public void deleteVerificationTechnique(Integer id) {
        vertificationTechniqueRepo.deleteById(id);
    }

    @Override
    public VerificationTechnique addVerificationTechniqueWithAnomalie(VerificationTechnique verificationTechnique, int idAnomalie){
        Optional<Anomalie> anomalieObject = anomalieRepo.findById(idAnomalie);
        if(anomalieObject.isPresent()){
            verificationTechnique.setAnomalie(anomalieObject.get());
            return vertificationTechniqueRepo.save(verificationTechnique);
        }
        else
            throw new RuntimeException("No anomalie Present");
    }
}
