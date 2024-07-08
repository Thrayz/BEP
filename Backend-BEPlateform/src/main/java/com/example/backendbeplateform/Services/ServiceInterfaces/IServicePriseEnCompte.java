package com.example.backendbeplateform.Services.ServiceInterfaces;

import com.example.backendbeplateform.DAO.Entities.DRE.PriseEnCompte;

import java.util.List;

public interface IServicePriseEnCompte {
    List<PriseEnCompte> getAll();

    PriseEnCompte getPriseEnCompteById(Integer id);

    PriseEnCompte addPriseEnCompte(PriseEnCompte priseEnCompte);

    PriseEnCompte updatePriseEnCompte(PriseEnCompte priseEnCompte);

    void deletePriseEnCompte(Integer id);

    PriseEnCompte addPriseEnCompteWithAnomalie(PriseEnCompte priseEnCompte, int idAnomalie);
}
