package com.example.backendbeplateform.DAO.Repositories;

import com.example.backendbeplateform.DAO.Entities.Anomalie;
import com.example.backendbeplateform.DAO.Entities.AnomalieFiles;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AnomalieFilesRepository extends JpaRepository<AnomalieFiles, Integer> {

    List<AnomalieFiles> findAnomalieFilesByAnomalie(Anomalie anomalie);

}
