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
public class userwithtoken {
           private User userloged ;
    private String token;

    public User getUserloged() {
        return userloged;
    }

    public void setUserloged(User userloged) {
        this.userloged = userloged;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public userwithtoken() {
    }

    public userwithtoken(User userloged, String token) {
        this.userloged = userloged;
        this.token = token;
    }
}

