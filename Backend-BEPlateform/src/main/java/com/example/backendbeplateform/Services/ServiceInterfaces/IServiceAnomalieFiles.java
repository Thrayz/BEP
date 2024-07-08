package com.example.backendbeplateform.Services.ServiceInterfaces;

import com.example.backendbeplateform.DAO.Entities.AnomalieFiles;

import java.util.List;

public interface IServiceAnomalieFiles {
    List<AnomalieFiles> getAll();

    AnomalieFiles getAnomalieFilesById(Integer id);

    AnomalieFiles addAnomalieFiles(AnomalieFiles anomalieFiles);

    AnomalieFiles updateAnomalieFiles(AnomalieFiles anomalieFiles);

    void deleteAnomalieFiles(Integer id);

    List<AnomalieFiles> getAnomalieFileByAnomalie(Integer id);
}
