package com.example.backendbeplateform.Services.ServiceInterfaces;

import com.example.backendbeplateform.DAO.Entities.DRE.VerificationTechnique;

import java.util.List;

public interface IServiceVerificationTechnique {
    List<VerificationTechnique> getAll();

    VerificationTechnique getVerificationTechniqueById(Integer id);

    VerificationTechnique addVerificationTechnique(VerificationTechnique vertificationTechnique);

    VerificationTechnique updateVerificationTechnique(VerificationTechnique vertificationTechnique);

    void deleteVerificationTechnique(Integer id);

    VerificationTechnique addVerificationTechniqueWithAnomalie(VerificationTechnique verificationTechnique, int idAnomalie);
}
