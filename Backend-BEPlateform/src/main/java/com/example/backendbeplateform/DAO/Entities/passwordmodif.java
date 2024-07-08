/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.backendbeplateform.DAO.Entities;

/**
 *
 * @author L256804
 */
public class passwordmodif {
    
    private String nom ; 
    private String ancienmdp ; 
    private String newmdp;

    public passwordmodif(String nom, String ancienmdp, String newmdp) {
        this.nom = nom;
        this.ancienmdp = ancienmdp;
        this.newmdp = newmdp;
    }

    public passwordmodif() {
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getAncienmdp() {
        return ancienmdp;
    }

    public void setAncienmdp(String ancienmdp) {
        this.ancienmdp = ancienmdp;
    }

    public String getNewmdp() {
        return newmdp;
    }

    public void setNewmdp(String newmdp) {
        this.newmdp = newmdp;
    }
    
    
    
}

