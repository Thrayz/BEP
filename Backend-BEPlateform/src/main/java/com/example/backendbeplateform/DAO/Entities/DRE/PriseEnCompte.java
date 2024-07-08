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
public class PriseEnCompte implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="idPriseEnCompte")
    private int idPriseEnCompte;

    private Boolean priseEncompte;

    private String commentaires;

    private String qualiteProduit;

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
