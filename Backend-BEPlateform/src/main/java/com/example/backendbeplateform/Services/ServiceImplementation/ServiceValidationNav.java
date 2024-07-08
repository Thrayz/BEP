package com.example.backendbeplateform.Services.ServiceImplementation;

import com.example.backendbeplateform.DAO.Entities.Anomalie;
import com.example.backendbeplateform.DAO.Entities.ValidationCompExtends.ValidationNav;
import com.example.backendbeplateform.DAO.Repositories.AnomalieRepository;
import com.example.backendbeplateform.DAO.Repositories.ValidationNavRepository;
import com.example.backendbeplateform.Services.ServiceInterfaces.IServiceValidationNav;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ServiceValidationNav implements IServiceValidationNav {

    @Autowired
    private ValidationNavRepository ValidationNavRepo;

    @Autowired
    private AnomalieRepository anomalieRepo;

    @Override
    public List<ValidationNav> getAll() {
        return ValidationNavRepo.findAll();
    }

    @Override
    public ValidationNav getValidationNavById(Integer id) {
        return ValidationNavRepo.findById(id).get();
    }

    @Override
    public ValidationNav addValidationNav(ValidationNav validationNav) {
        System.out.println("validationNav : "+validationNav);
        return ValidationNavRepo.save(validationNav);
    }

    @Override
    public ValidationNav updateValidationNav(ValidationNav validationNav) {
        return ValidationNavRepo.save(validationNav);
    }

    @Override
    public void deleteValidationNav(Integer id) {
        ValidationNavRepo.deleteById(id);
    }

    @Override
    public ValidationNav addValidationNavWithAnomalie(ValidationNav validationNav,int idAnomalie){
        Optional<Anomalie> anomalieObject = anomalieRepo.findById(idAnomalie);
        if(anomalieObject.isPresent()){
            validationNav.setAnomalie(anomalieObject.get());
            return ValidationNavRepo.save(validationNav);
        }
        else
            throw new RuntimeException("No anomalie Present");
    }

}
