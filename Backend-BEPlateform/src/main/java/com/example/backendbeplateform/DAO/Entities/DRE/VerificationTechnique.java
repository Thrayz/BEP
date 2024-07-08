package com.example.backendbeplateform.DAO.Entities.DRE;

import com.example.backendbeplateform.DAO.Entities.Anomalie;
import com.example.backendbeplateform.DAO.Entities.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;


@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class VerificationTechnique implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="idVerificationTechnique")
    private int idVerificationTechnique;

    private Boolean processIdentique;
    private Boolean materiauxIdentique;
    private Boolean maintenanceIdentique;
    private Boolean conclusion;
    private Boolean verificationNecessaire;

    private String commentaires;

    private String verficateur;

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

}
