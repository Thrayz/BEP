package com.example.backendbeplateform.DAO.Repositories;

import com.example.backendbeplateform.DAO.Entities.Anomalie;
import com.example.backendbeplateform.DAO.Entities.AnomalieFiles;
import com.example.backendbeplateform.DAO.Entities.DRE.DemandeRetouche;
import com.example.backendbeplateform.DAO.Entities.DRE.DreFilesUploaded;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DreFilesUploadRepository extends JpaRepository<DreFilesUploaded, Integer> {

    List<DreFilesUploaded> findDreFilesUploadedByDemandeRetouche(DemandeRetouche demandeRetouche);


}
