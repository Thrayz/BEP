package com.example.backendbeplateform.Services.ServiceImplementation;

import com.example.backendbeplateform.DAO.Entities.Anomalie;
import com.example.backendbeplateform.DAO.Repositories.AnomalieRepository;
import com.example.backendbeplateform.Services.ServiceInterfaces.IServiceAnomalie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ServiceAnomalie implements IServiceAnomalie {


    @Autowired
    private AnomalieRepository anomalieRepo;

    @Override
    public List<Anomalie> getAll() {
        return anomalieRepo.findAll();
    }

    @Override
    public Anomalie getAnomalieById(Integer id) {
        return anomalieRepo.findById(id).get();
    }

    @Override
    public Anomalie addAnomalie(Anomalie anomalie) {
        return anomalieRepo.save(anomalie);
    }

    @Override
    public Anomalie updateAnomalie(Anomalie anomalie) {
        return anomalieRepo.save(anomalie);
    }

    @Override
    public void deleteAnomalie(Integer id) {
        anomalieRepo.deleteById(id);
    }

    @Override
    public Anomalie updateStatusAnomalie(int idAnomalie, Anomalie anomalie) {
        Optional<Anomalie> anomalieObject = anomalieRepo.findById(idAnomalie);
        if(anomalieObject.isPresent()){
            anomalieObject.get().setNonConformite(anomalie.getNonConformite());
            anomalieObject.get().setSecurisation(anomalie.getSecurisation());
            anomalieObject.get().setCommentaire(anomalie.getCommentaire());
            return anomalieRepo.save(anomalieObject.get());
        }
        else{
            throw new RuntimeException("anomalie not found by id");
        }

    }


    @Override
    public List<Anomalie> anomalieEnAttente(String service){
        String serviceLowerCase = service.toLowerCase();
            if(serviceLowerCase.equals("production")){
                System.out.println("in production");
                List<Anomalie> anomalies = anomalieRepo.findProductionAnomalies();
                return anomalies;
            }else if(serviceLowerCase.equals("qualiteproduit")){
                List<Anomalie> anomalies = anomalieRepo.findQualiteProduitAnomalies();
                return anomalies;
            }else if(serviceLowerCase.equals("methode")){
                List<Anomalie> anomalies = anomalieRepo.findMethodeAnomalies();
                return anomalies;
            }else if(serviceLowerCase.equals("nav")){
                List<Anomalie> anomalies = anomalieRepo.findNavAnomalies();
                return anomalies;
            }else if(serviceLowerCase.equals("qualiteprogramme")){
                List<Anomalie> anomalies = anomalieRepo.findQualiteProgrammeAnomalies();
                return anomalies;
            }else if(serviceLowerCase.equals("bureauetude")){
                List<Anomalie> anomalies = anomalieRepo.findBEAnomalies();
                return anomalies;
            }
            else {
                throw new RuntimeException("role not known");
            }
    }

    @Override
    public List<Anomalie> dreEnAttente(String service){
        String serviceLowerCase = service.toLowerCase();
        if(serviceLowerCase.equals("methode")){
            List<Anomalie> anomalies = anomalieRepo.findMethodeDre();
            return anomalies;
        }else if(serviceLowerCase.equals("qualiteproduit")){
            List<Anomalie> anomalies = anomalieRepo.findQualiteProduitDre();
            return anomalies;
        }else if(serviceLowerCase.equals("be")) {
            List<Anomalie> anomalies = anomalieRepo.findBeDre();
            return anomalies;
        }
        else {
            throw new RuntimeException("role not known");
        }
    }

}
