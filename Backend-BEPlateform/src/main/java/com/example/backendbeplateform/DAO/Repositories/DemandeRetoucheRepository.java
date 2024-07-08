package com.example.backendbeplateform.DAO.Repositories;

import com.example.backendbeplateform.DAO.Entities.Anomalie;
import com.example.backendbeplateform.DAO.Entities.DRE.DemandeRetouche;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DemandeRetoucheRepository extends JpaRepository<DemandeRetouche, Integer> {

}
