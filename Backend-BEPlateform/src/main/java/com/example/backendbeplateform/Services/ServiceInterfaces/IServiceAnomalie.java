package com.example.backendbeplateform.Services.ServiceInterfaces;

import com.example.backendbeplateform.DAO.Entities.Anomalie;

import java.util.List;

public interface IServiceAnomalie {
    List<Anomalie> getAll();

    Anomalie getAnomalieById(Integer id);

    Anomalie addAnomalie(Anomalie anomalie);

    Anomalie updateAnomalie(Anomalie anomalie);

    void deleteAnomalie(Integer id);

    Anomalie updateStatusAnomalie(int idAnomalie, Anomalie anomalie);

    List<Anomalie> anomalieEnAttente(String service);

    List<Anomalie> dreEnAttente(String service);
}
