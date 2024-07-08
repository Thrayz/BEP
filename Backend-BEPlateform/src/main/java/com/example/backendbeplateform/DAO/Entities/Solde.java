package com.example.backendbeplateform.DAO.Entities;

import lombok.*;

import javax.persistence.MappedSuperclass;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.util.Date;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@MappedSuperclass
public class Solde {

    private String nom;

    @Temporal(TemporalType.TIMESTAMP)
    private Date date;

    private String signature;
}
