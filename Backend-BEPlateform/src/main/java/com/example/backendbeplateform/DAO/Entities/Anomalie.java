package com.example.backendbeplateform.DAO.Entities;

import com.example.backendbeplateform.DAO.Entities.DRE.DemandeRetouche;
import com.example.backendbeplateform.DAO.Entities.DRE.DreFilesUploaded;
import com.example.backendbeplateform.DAO.Entities.DRE.PriseEnCompte;
import com.example.backendbeplateform.DAO.Entities.DRE.VerificationTechnique;
import com.example.backendbeplateform.DAO.Entities.DecisionProduitExtends.Decision;
import com.example.backendbeplateform.DAO.Entities.DecisionProduitExtends.Justification;
import com.example.backendbeplateform.DAO.Entities.DecisionProduitExtends.Maitrise;
import com.example.backendbeplateform.DAO.Entities.ValidationCompExtends.ValidationNav;
import com.fasterxml.jackson.annotation.JsonFormat;
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
public class Anomalie  implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="idAnomalie")
    private int idAnomalie;

    private String codeArticle;

    private String partNumber;
    private String designation;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date dateDetection;
    private String lieuDetection;
    private String quiDetecter;
    private String sn;
    private int of;
    private int quantite;
    private String typeEcart;
    private String standard;
    private String zone;
    private String typeDetection;
    /////////Status/////////
    private Boolean nonConformite;
    private Boolean securisation;
    private String commentaire;

    private String uap;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "dateCreation" , updatable = false)
    private Date dateCreation;

    @PrePersist
    protected void onCreate() {
        dateCreation = new Date();
    }

    @ManyToOne
    private User user;

    @OneToOne(mappedBy = "anomalie",cascade = CascadeType.ALL)
    private Decision decision;

    @OneToOne(mappedBy = "anomalie",cascade = CascadeType.ALL)
    private Justification justification;

    @OneToOne(mappedBy = "anomalie",cascade = CascadeType.ALL)
    private Maitrise maitrise;

    @OneToOne(mappedBy = "anomalie",cascade = CascadeType.ALL)
    private ValidationNav validationNav;

    @OneToOne(mappedBy = "anomalie",cascade = CascadeType.ALL)
    private DemandeRetouche demandeRetouche;

    @OneToOne(mappedBy = "anomalie",cascade = CascadeType.ALL)
    private VerificationTechnique verificationTechnique;

    @OneToOne(mappedBy = "anomalie",cascade = CascadeType.ALL)
    private PriseEnCompte priseEnCompte;

    @OneToMany(mappedBy = "anomalie",cascade = CascadeType.ALL)
    private List<AnomalieFiles> anomalieFiles;

}
