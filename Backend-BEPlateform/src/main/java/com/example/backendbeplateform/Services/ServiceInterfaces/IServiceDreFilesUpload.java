package com.example.backendbeplateform.Services.ServiceInterfaces;

import com.example.backendbeplateform.DAO.Entities.DRE.DreFilesUploaded;

import java.util.List;

public interface IServiceDreFilesUpload {
    List<DreFilesUploaded> getAll();


    DreFilesUploaded getDreFilesUploadsById(Integer id);

    DreFilesUploaded updateDreFilesUploads(DreFilesUploaded dreFilesUploaded);

    void deleteDreFilesUploads(Integer id);

    DreFilesUploaded addDreFilesUploads(DreFilesUploaded dreFilesUploaded);


    List<DreFilesUploaded> getDreFilesUploadedByDemandeRetouche(Integer id);
}
