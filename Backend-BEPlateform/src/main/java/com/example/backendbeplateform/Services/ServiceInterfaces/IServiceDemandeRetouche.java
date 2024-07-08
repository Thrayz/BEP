package com.example.backendbeplateform.Services.ServiceInterfaces;

import com.example.backendbeplateform.DAO.Entities.DRE.DemandeRetouche;

import java.util.List;

public interface IServiceDemandeRetouche {
    List<DemandeRetouche> getAll();

    DemandeRetouche getDemandeRetoucheById(Integer id);

    DemandeRetouche addDemandeRetouche(DemandeRetouche demandeRetouche);

    DemandeRetouche updateDemandeRetouche(DemandeRetouche demandeRetouche);

    void deleteDemandeRetouche(Integer id);

    DemandeRetouche addDemandeRetoucheWithAnomalie(DemandeRetouche demandeRetouche, int idAnomalie);
}
