package com.example.backendbeplateform.DAO.Entities;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;


@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Article implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="idArticle")
    private int idArticle;

    private String codeArticle;

    private String designation;

    private String partNumber;

}
