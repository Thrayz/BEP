package com.example.backendbeplateform.payload.response;


import com.example.backendbeplateform.DAO.Entities.ServiceStatus;

public class JwtResponse {
    private String token;
    private String type = "Bearer";
    private int idUser;
    private String nom;

    private String prenom;

    private String email;

    private ServiceStatus serviceStatus;

    // private List<String> roles;

    public JwtResponse(String accessToken, String email) {
        this.token = accessToken;
        this.email = email;

    }

    public String getAccessToken() {
        return token;
    }

    public void setAccessToken(String accessToken) {
        this.token = accessToken;
    }

    public String getTokenType() {
        return type;
    }

    public void setTokenType(String tokenType) {
        this.type = tokenType;
    }

    public int getIdUser() {
        return idUser;
    }

    public void setIdUser(int id) {
        this.idUser = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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

    public ServiceStatus getServiceStatus() {
        return serviceStatus;
    }

    public void setServiceStatus(ServiceStatus serviceStatus) {
        this.serviceStatus = serviceStatus;
    }


}