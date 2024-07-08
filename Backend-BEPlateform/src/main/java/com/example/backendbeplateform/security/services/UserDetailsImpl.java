package com.example.backendbeplateform.security.services;

import com.example.backendbeplateform.DAO.Entities.ServiceStatus;
import com.example.backendbeplateform.DAO.Entities.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;


import java.util.Collection;
import java.util.Objects;

@ToString
@NoArgsConstructor
public class UserDetailsImpl implements UserDetails {
    private static final long serialVersionUID = 1L;

    @JsonProperty("idUser")
    private int idUser;

    private String nom;

    private String prenom;

    private String email;

    @JsonIgnore
    private String password;

    private String signature;

    ///// to delete //////
    private int phoneNumber;

    private String matricule;

    private String poste;

    private String uap;

    private ServiceStatus serviceStatus;

    private Collection<? extends GrantedAuthority> authorities;

    public UserDetailsImpl(int id, String email, String nom,String prenom,String signature,String matricule,String poste,String uap,ServiceStatus serviceStatus,String password) {
        this.idUser = id;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.serviceStatus = serviceStatus;
        this.signature = signature;
        this.matricule = matricule;
        this.poste = poste;
        this.uap = uap;
        this.password = password;
    }

    public static UserDetailsImpl build(User user) {


        return new UserDetailsImpl(
                user.getIdUser(),
                user.getEmail(),
                user.getNom(),
                user.getPrenom(),
                user.getSignature(),
                user.getMatricule(),
                user.getPoste(),
                user.getUap(),
                user.getServiceStatus(),
                user.getPassword());
    }


    public int getidUser() {
        return idUser;
    }

    public String getEmail() {
        return email;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return null;
    }


    public String getNom() {
        return nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public String getMatricule() {
        return matricule;
    }

    public String getSignature() {
        return signature;
    }

    public String getPoste() {
        return poste;
    }

    public String getUap() {
        return uap;
    }

    public ServiceStatus getServiceStatus() {
        return serviceStatus;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        UserDetailsImpl user = (UserDetailsImpl) o;
        return Objects.equals(idUser, user.idUser);
    }
}