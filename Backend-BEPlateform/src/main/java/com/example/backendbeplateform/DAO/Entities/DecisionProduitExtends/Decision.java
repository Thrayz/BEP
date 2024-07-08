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
public class Decision extends DecisionProduit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="idDecision")
    private int idDecision;

    private Boolean aucuneAction;

    private Boolean retoucheDonnees;

    private String refRetoucheDonnees;

    private Boolean retoucheDre;

    private String refRetoucheDre;

    private Boolean rebut;



}
