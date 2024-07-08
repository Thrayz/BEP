package com.example.backendbeplateform.Controllers;

import com.example.backendbeplateform.DAO.Entities.Anomalie;
import com.example.backendbeplateform.DAO.Entities.AnomalieFiles;
import com.example.backendbeplateform.DAO.Entities.DRE.DemandeRetouche;
import com.example.backendbeplateform.DAO.Entities.DRE.DreFilesUploaded;
import com.example.backendbeplateform.DAO.Entities.User;
import com.example.backendbeplateform.DAO.Repositories.AnomalieRepository;
import com.example.backendbeplateform.DAO.Repositories.DemandeRetoucheRepository;
import com.example.backendbeplateform.DAO.Repositories.DreFilesUploadRepository;
import com.example.backendbeplateform.DAO.Repositories.UserRepository;
import com.example.backendbeplateform.Services.ServiceInterfaces.IServiceAnomalieFiles;
import com.example.backendbeplateform.Services.ServiceInterfaces.IServiceDreFilesUpload;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.FileUrlResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;


@CrossOrigin(origins = "*" )
@RestController
public class FileUploadsController {
    @Value("${image.upload.directory}")
    private String imageUploadDirectory;

    @Value("${file.upload.directory}")
    private String fileUploadDirectory;

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private DemandeRetoucheRepository demandeRetoucheRepo;

    @Autowired
    private AnomalieRepository anomalieRepo;

    @Autowired
    private IServiceDreFilesUpload serviceDreFilesUpload;

    @Autowired
    private IServiceAnomalieFiles serviceAnomalieFiles;


    @PostMapping("/file/images/upload")
    public String uploadSignature(@RequestBody User user) {
        String imageName;
        Optional<User> userObject = userRepo.findById(user.getIdUser());
        System.out.println("user : "+user);
        if(userObject.isPresent()){
            if(userObject.get().getSignature() == null)
            {
                String base64Data = user.getSignature().split(",")[1];
                byte[] imageBytes = javax.xml.bind.DatatypeConverter.parseBase64Binary(base64Data);
                System.out.println("image : "+imageUploadDirectory);
                Date currentDate = new Date();
                SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmmss");
                String formattedDate = dateFormat.format(currentDate);

                imageName = "signature-" + user.getNom() + "-" + user.getPrenom() + "-" + formattedDate + ".png";

                try {
                    Path filePath = Paths.get(imageUploadDirectory, imageName);
                    Files.write(filePath, imageBytes);
                    userObject.get().setSignature(imageName);
                    userRepo.save(userObject.get());
                    return imageName;
                } catch (IOException e) {
                    return "Error uploading image.";
                }
            }
            else
            {
                return "Signature exists";
            }

        }
        else {
            throw new RuntimeException("userId not found");
        }

    }

    @GetMapping("/file/images/download")
    public ResponseEntity<Resource> downloadImage() {
        try {
            Resource imageResource = new FileUrlResource(imageUploadDirectory + "/image.png");
            return ResponseEntity.ok()
                    .contentType(MediaType.IMAGE_PNG)
                    .body(imageResource);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("oauth/file/images/serve/{imageName}")
    public ResponseEntity<Resource> serveImage(@PathVariable String imageName) {
        Path imagePath = Paths.get(imageUploadDirectory).resolve(imageName);
        Resource imageResource;

        try {
            imageResource = new UrlResource(imagePath.toUri());
            if (imageResource.exists() || imageResource.isReadable()) {
                return ResponseEntity.ok()
                        .contentType(MediaType.IMAGE_PNG) // Adjust the content type if needed
                        .body(imageResource);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (MalformedURLException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping("/file/files/upload/{idDemandeRetouche}")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file,@PathVariable("idDemandeRetouche") int idDemandeRetouche) {
        Optional<DemandeRetouche> demandeRetoucheObject = demandeRetoucheRepo.findById(idDemandeRetouche);
        DreFilesUploaded dreFilesUploaded = new DreFilesUploaded();
        if(demandeRetoucheObject.isPresent())
        {
            try {
                // Save the file to the specified path
                Date currentDate = new Date();
                SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmmssSSS");
                String formattedDate = dateFormat.format(currentDate);

                // Construct the full file path
                String fileName = formattedDate + file.getOriginalFilename() ;
                String filePathString = fileUploadDirectory + File.separator + fileName;
                Path filePath = Paths.get(filePathString);

                Files.copy(file.getInputStream(), filePath);
                dreFilesUploaded.setFileName(fileName);
                dreFilesUploaded.setDemandeRetouche(demandeRetoucheObject.get());

                serviceDreFilesUpload.addDreFilesUploads(dreFilesUploaded);
                return ResponseEntity.ok("File uploaded successfully.");
            } catch (IOException e) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to upload file.");
            }
        }
        else {
            throw new RuntimeException("demandeRetouche not found !!");
        }

    }

    @PostMapping("/file/anomalieFile/upload/{idAnomalie}")
    public ResponseEntity<String> uploadAnomalieFile(@RequestParam("file") MultipartFile file,@PathVariable("idAnomalie") int idAnomalie) {
        Optional<Anomalie> anomalieObject = anomalieRepo.findById(idAnomalie);
        AnomalieFiles anomalieFileUpload = new AnomalieFiles();
        if(anomalieObject.isPresent())
        {
            try {
                // Save the file to the specified path
                Date currentDate = new Date();
                SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmmssSSS");
                String formattedDate = dateFormat.format(currentDate);

                // Construct the full file path
                String fileName = formattedDate + file.getOriginalFilename() ;
                String filePathString = fileUploadDirectory + File.separator + fileName;
                Path filePath = Paths.get(filePathString);

                Files.copy(file.getInputStream(), filePath);
                anomalieFileUpload.setFileName(fileName);
                anomalieFileUpload.setAnomalie(anomalieObject.get());

                serviceAnomalieFiles.addAnomalieFiles(anomalieFileUpload);
                return ResponseEntity.ok("File uploaded successfully.");
            } catch (IOException e) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to upload file.");
            }
        }
        else {
            throw new RuntimeException("demandeRetouche not found !!");
        }

    }


    @GetMapping("/file/anomalieFiles/download/{fileName}")
    public ResponseEntity<Resource> downloadFile(@PathVariable String fileName, HttpServletRequest request) {
        // Load file as Resource
        Resource resourceResult;

        try {
            Path filePath = Paths.get(fileUploadDirectory).resolve(fileName);
            Resource resource = new UrlResource(filePath.toUri());

            if (resource.exists() && resource.isReadable()) {
                resourceResult = resource;
            } else {
                throw new RuntimeException("File not found or not readable: " + fileName);
            }
        } catch (MalformedURLException e) {
            throw new RuntimeException("File not found: " + fileName, e);
        }

        // Try to determine file's content type
        String contentType = null;
        try {
            contentType = request.getServletContext().getMimeType(resourceResult.getFile().getAbsolutePath());
        } catch (IOException ex) {
            // Handle or log exception
        }

        // If the content type is not determined, set it to default
        if (contentType == null) {
            contentType = "application/octet-stream";
        }

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(contentType))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resourceResult.getFilename() + "\"")
                .body(resourceResult);
    }

    @GetMapping("/file/dreFiles/download/{fileName}")
    public ResponseEntity<Resource> downloadDreFile(@PathVariable String fileName, HttpServletRequest request) {
        // Load file as Resource
        Resource resourceResult;

        try {
            Path filePath = Paths.get(fileUploadDirectory).resolve(fileName);
            Resource resource = new UrlResource(filePath.toUri());

            if (resource.exists() && resource.isReadable()) {
                resourceResult = resource;
            } else {
                throw new RuntimeException("File not found or not readable: " + fileName);
            }
        } catch (MalformedURLException e) {
            throw new RuntimeException("File not found: " + fileName, e);
        }

        // Try to determine file's content type
        String contentType = null;
        try {
            contentType = request.getServletContext().getMimeType(resourceResult.getFile().getAbsolutePath());
        } catch (IOException ex) {
            // Handle or log exception
        }

        // If the content type is not determined, set it to default
        if (contentType == null) {
            contentType = "application/octet-stream";
        }

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(contentType))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resourceResult.getFilename() + "\"")
                .body(resourceResult);
    }

}
