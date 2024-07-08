package com.example.backendbeplateform.Services.ServiceInterfaces;

import com.example.backendbeplateform.DAO.Entities.DecisionProduitExtends.Decision;

import java.util.List;

public interface IServiceDecision {
    List<Decision> getAll();

    Decision getDecisionById(Integer id);

    Decision addDecision(Decision decision);

    Decision updateDecision(Decision decision);

    void deleteDecision(Integer id);

    Decision addDecisionWithAnomalie(Decision decision, int idAnomalie);
}
