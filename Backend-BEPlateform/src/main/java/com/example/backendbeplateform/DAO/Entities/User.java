package com.example.backendbeplateform.DAO.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Entity

@NoArgsConstructor
@AllArgsConstructor
@ToString
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="idUser")
    private int idUser;

    private String nom;

    private String prenom;

    private String email;

    private String login;
    
    private String password;

    private String signature;

    ///// to delete //////
    private int phoneNumber;

    private String matricule;

    private String poste;

    private String uap;
    
    private boolean actif;

    @Enumerated(EnumType.STRING)
    private ServiceStatus serviceStatus;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<Anomalie> Anomalies;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "dateCreation" , updatable = false)
    private Date dateCreation;


    public User(String login,String nom, String prenom, String email, String password, ServiceStatus serviceStatus,String matricule,String poste,String uap , boolean actif) {
        this.nom = nom;
        this.login=login;
        this.prenom = prenom;
        this.email = email;
        this.password = password;
        this.serviceStatus = serviceStatus;
        this.matricule = matricule;
        this.poste = poste;
        this.uap = uap;
        this.actif=actif;
    }

    @PrePersist
    protected void onCreate() {
        dateCreation = new Date();
    }

    public boolean isActif() {
        return actif;
    }

    public void setActif(boolean actif) {
        this.actif = actif;
    }
    
    

    public int getIdUser() {
        return idUser;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    
    
    
    public void setIdUser(int idUser) {
        this.idUser = idUser;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getSignature() {
        return signature;
    }

    public void setSignature(String signature) {
        this.signature = signature;
    }

    public int getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(int phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getMatricule() {
        return matricule;
    }

    public void setMatricule(String matricule) {
        this.matricule = matricule;
    }

    public String getPoste() {
        return poste;
    }

    public void setPoste(String poste) {
        this.poste = poste;
    }

    public String getUap() {
        return uap;
    }

    public void setUap(String uap) {
        this.uap = uap;
    }

    public ServiceStatus getServiceStatus() {
        return serviceStatus;
    }

    public void setServiceStatus(ServiceStatus serviceStatus) {
        this.serviceStatus = serviceStatus;
    }

    public List<Anomalie> getAnomalies() {
        return Anomalies;
    }

    public void setAnomalies(List<Anomalie> Anomalies) {
        this.Anomalies = Anomalies;
    }

    public Date getDateCreation() {
        return dateCreation;
    }

    public void setDateCreation(Date dateCreation) {
        this.dateCreation = dateCreation;
    }


    
    
    
    
    
}
