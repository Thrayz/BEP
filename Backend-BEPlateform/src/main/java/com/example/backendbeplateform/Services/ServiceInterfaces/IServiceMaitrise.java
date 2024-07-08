package com.example.backendbeplateform.Services.ServiceInterfaces;

import com.example.backendbeplateform.DAO.Entities.DecisionProduitExtends.Maitrise;

public interface IServiceMaitrise {
    Maitrise addMaitriseWithAnomalie(Maitrise maitrise, int idAnomalie);
}
