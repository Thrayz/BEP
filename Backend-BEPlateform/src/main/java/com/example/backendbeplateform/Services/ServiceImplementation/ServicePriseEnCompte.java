package com.example.backendbeplateform.Services.ServiceImplementation;


import com.example.backendbeplateform.DAO.Entities.Anomalie;
import com.example.backendbeplateform.DAO.Entities.DRE.PriseEnCompte;
import com.example.backendbeplateform.DAO.Repositories.AnomalieRepository;
import com.example.backendbeplateform.DAO.Repositories.PriseEnCompteRepository;
import com.example.backendbeplateform.Services.ServiceInterfaces.IServicePriseEnCompte;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ServicePriseEnCompte implements IServicePriseEnCompte {


    @Autowired
    private PriseEnCompteRepository priseEnCompteRepo;

    @Autowired
    private AnomalieRepository anomalieRepo;

    @Override
    public List<PriseEnCompte> getAll() {
        return priseEnCompteRepo.findAll();
    }

    @Override
    public PriseEnCompte getPriseEnCompteById(Integer id) {
        return priseEnCompteRepo.findById(id).get();
    }

    @Override
    public PriseEnCompte addPriseEnCompte(PriseEnCompte priseEnCompte) {
        return priseEnCompteRepo.save(priseEnCompte);
    }

    @Override
    public PriseEnCompte updatePriseEnCompte(PriseEnCompte priseEnCompte) {
        return priseEnCompteRepo.save(priseEnCompte);
    }

    @Override
    public void deletePriseEnCompte(Integer id) {
        priseEnCompteRepo.deleteById(id);
    }

    @Override
    public PriseEnCompte addPriseEnCompteWithAnomalie(PriseEnCompte priseEnCompte, int idAnomalie){
        Optional<Anomalie> anomalieObject = anomalieRepo.findById(idAnomalie);
        if(anomalieObject.isPresent()){
            priseEnCompte.setAnomalie(anomalieObject.get());
            return priseEnCompteRepo.save(priseEnCompte);
        }
        else
            throw new RuntimeException("No anomalie Present");
    }
}
