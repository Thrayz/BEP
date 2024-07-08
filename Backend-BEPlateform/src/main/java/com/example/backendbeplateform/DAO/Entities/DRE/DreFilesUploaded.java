package com.example.backendbeplateform.DAO.Entities.DRE;


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
public class DreFilesUploaded implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="idDreFile")
    private int idDreFile;

    private String fileName;

    @JsonIgnore
    @ManyToOne
    private DemandeRetouche demandeRetouche;

}
