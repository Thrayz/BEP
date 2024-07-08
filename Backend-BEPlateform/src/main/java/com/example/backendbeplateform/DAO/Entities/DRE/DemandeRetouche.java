package com.example.backendbeplateform.DAO.Entities.DRE;

import com.example.backendbeplateform.DAO.Entities.Anomalie;
import com.example.backendbeplateform.DAO.Entities.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;


@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class DemandeRetouche implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="idDemandeRetouche")
    private int idDemandeRetouche;

    private String NCAssocier;

    private String resumerSolution;

    private int CDS ;

    private int montantDerives;

    private int coutEstimer;

    private String demandeur;

    @Temporal(TemporalType.TIMESTAMP)
    private Date date;

    private String signature;

    @PrePersist
    protected void onCreate() {
        date = new Date();
    }

    @JsonIgnore
    @OneToOne
    private Anomalie anomalie;

    @ManyToOne
    private User user;

    @OneToMany(mappedBy = "demandeRetouche",cascade = CascadeType.ALL)
    private List<DreFilesUploaded> dreFiles;
}
