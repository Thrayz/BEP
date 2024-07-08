package com.example.backendbeplateform.Services.ServiceInterfaces;

import com.example.backendbeplateform.DAO.Entities.ValidationCompExtends.ValidationNav;

import java.util.List;

public interface IServiceValidationNav {
    List<ValidationNav> getAll();

    ValidationNav getValidationNavById(Integer id);

    ValidationNav addValidationNav(ValidationNav validationNav);

    ValidationNav updateValidationNav(ValidationNav validationNav);

    void deleteValidationNav(Integer id);

    ValidationNav addValidationNavWithAnomalie(ValidationNav validationNav, int idAnomalie);
}
