package com.example.backendbeplateform.DAO.Entities;

import com.example.backendbeplateform.DAO.Entities.DRE.DemandeRetouche;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;


@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class AnomalieFiles implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="idAnomalieFile")
    private int idAnomalieFile;

    private String fileName;

    @JsonIgnore
    @ManyToOne
    private Anomalie anomalie;
}
