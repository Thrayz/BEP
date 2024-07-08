package com.example.backendbeplateform.DAO.Entities.DecisionProduitExtends;


import com.example.backendbeplateform.DAO.Entities.DecisionProduit;
import lombok.*;

import javax.persistence.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
public class Maitrise extends DecisionProduit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="idMaitrise")
    private int idMaitrise;

    private Boolean fencTransmettre;

    private String atelier;

    private Boolean inspectionRecord;

    private Boolean planSurveillance;

    private Boolean resolutionProbleme;

    private Boolean aucunSuivi;

    private Boolean derogationProduit;

    private String reccurenceFenc;
}
