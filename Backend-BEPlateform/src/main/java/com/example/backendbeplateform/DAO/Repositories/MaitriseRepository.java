package com.example.backendbeplateform.DAO.Repositories;

import com.example.backendbeplateform.DAO.Entities.Anomalie;
import com.example.backendbeplateform.DAO.Entities.DecisionProduitExtends.Maitrise;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MaitriseRepository extends JpaRepository<Maitrise, Integer> {

}
