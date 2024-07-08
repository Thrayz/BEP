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
public class Justification extends DecisionProduit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="idJustification")
    private int idJustification;

    private String justification;


    private String limitation;
}
