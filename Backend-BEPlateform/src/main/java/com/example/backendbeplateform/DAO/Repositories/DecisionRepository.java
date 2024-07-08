package com.example.backendbeplateform.DAO.Repositories;

import com.example.backendbeplateform.DAO.Entities.Anomalie;
import com.example.backendbeplateform.DAO.Entities.DecisionProduitExtends.Decision;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DecisionRepository extends JpaRepository<Decision, Integer> {

    public Optional<Decision> findDecisionByAnomalie(Anomalie anomalie);
}
