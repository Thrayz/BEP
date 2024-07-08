package com.example.backendbeplateform.DAO.Entities.ValidationCompExtends;


import com.example.backendbeplateform.DAO.Entities.ValidationComp;
import lombok.*;

import javax.persistence.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
public class ValidationNav extends ValidationComp {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="idValidationNav")
    private int idValidationNav;

    private boolean derogationProduit;

    private String justification;

    private boolean occurenceReport;



}
