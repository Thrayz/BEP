package com.example.backendbeplateform.DAO.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@MappedSuperclass
public class ValidationComp {

    private Boolean validationNecessaire;

    private String nom;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "date" , updatable = false)
    private Date date;

    private String signature;

    @JsonIgnore
    @OneToOne
    private Anomalie anomalie;

    @ManyToOne
    private User user;

    @PrePersist
    protected void onCreate() {
        date = new Date();
    }

}
