package com.example.backendbeplateform.Services.ServiceInterfaces;

import com.example.backendbeplateform.DAO.Entities.DecisionProduitExtends.Justification;

import java.util.List;

public interface IServiceJustification {
    List<Justification> getAll();

    Justification getJustificationById(Integer id);

    Justification addJustification(Justification justification);

    Justification updateJustification(Justification justification);

    void deleteJustification(Integer id);

    Justification addJustificationWithAnomalie(Justification justification, int idAnomalie);
}
