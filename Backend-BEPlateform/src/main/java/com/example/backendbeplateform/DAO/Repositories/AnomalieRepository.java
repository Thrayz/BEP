package com.example.backendbeplateform.DAO.Repositories;

import com.example.backendbeplateform.DAO.Entities.Anomalie;
import com.example.backendbeplateform.DAO.Entities.ServiceStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AnomalieRepository extends JpaRepository<Anomalie, Integer> {


    ///////////////// Production //////////////////
    //@Query("select a from Anomalie a where a.nonConformite !=false")

    @Query("SELECT a FROM Anomalie a LEFT JOIN a.decision d WHERE a.nonConformite = true AND d.idDecision IS NULL")
    List<Anomalie> findProductionAnomalies();

    //////////////////////////////////////////////

    ///////////////// BE //////////////////

    @Query("SELECT a FROM Anomalie a " +
            "LEFT JOIN a.decision d " +
            "LEFT JOIN a.justification j " +
            "LEFT JOIN a.verificationTechnique v " +
            "WHERE a.nonConformite = true AND " +
            "((d.idDecision IS NOT NULL AND " +
            "((j IS NULL OR j = '') AND " +
            "((d.retoucheDre IS NULL OR d.retoucheDre = false) OR " +
            "(d.retoucheDre = true AND v.idVerificationTechnique IS NOT NULL)) AND " +
            "((d.retoucheDonnees IS NULL OR d.retoucheDonnees = false) OR " +
            "(d.retoucheDonnees = true AND d.refRetoucheDonnees LIKE '1225%')))))")
    List<Anomalie> findBEAnomalies();

    @Query("SELECT a FROM Anomalie a " +
            "LEFT JOIN a.decision d " +
            "LEFT JOIN a.demandeRetouche dr " +
            "LEFT JOIN a.verificationTechnique v " +
            "WHERE (dr IS NOT NULL AND v IS NULL AND d.retoucheDre = true)")
    List<Anomalie> findBeDre();

    //////////////////////////////////////////////


    ///////////////// Nav //////////////////

    @Query("SELECT a FROM Anomalie a " +
            "LEFT JOIN a.decision d " +
            "LEFT JOIN a.justification j " +
            "LEFT JOIN a.verificationTechnique vt " +
            "LEFT JOIN a.validationNav vn " +
            "WHERE a.nonConformite = true AND " +
            "((d IS NOT NULL AND (d.aucuneAction = true OR (d.retoucheDre = true AND vt.conclusion = true)) AND j IS NOT NULL) AND vn IS NULL)")
    List<Anomalie> findNavAnomalies();

    //////////////////////////////////////////////


    ///////////////// Methode //////////////////

    @Query("SELECT a FROM Anomalie a " +
            "LEFT JOIN a.decision d " +
            "LEFT JOIN a.justification j " +
            "WHERE a.nonConformite = true AND " +
            "(j IS NULL AND " +
            "(d IS NOT NULL AND " +
            "(d.retoucheDonnees = true AND d.refRetoucheDonnees LIKE '1045%')))")
    List<Anomalie> findMethodeAnomalies();

    @Query("SELECT a FROM Anomalie a " +
            "LEFT JOIN a.decision d " +
            "LEFT JOIN a.justification j " +
            "LEFT JOIN a.demandeRetouche dr " +
            "WHERE j IS NULL AND dr IS NULL AND d.retoucheDre = true")
    List<Anomalie> findMethodeDre();

    //////////////////////////////////////////////


    ///////////////// Qualite Produit //////////////////

    @Query("SELECT a FROM Anomalie a " +
            "LEFT JOIN a.decision d " +
            "LEFT JOIN a.maitrise m " +
            "LEFT JOIN a.justification j " +
            "LEFT JOIN a.validationNav v " +
            "LEFT JOIN a.verificationTechnique vt " +
            "WHERE " +
            "(a.nonConformite IS NULL) OR " +
            "(m IS NULL AND d.aucuneAction = true AND j IS NOT NULL AND v.derogationProduit = false) OR " +
            "(m IS NULL AND d.retoucheDonnees = true AND j IS NOT NULL) OR " +
            "(m IS NULL AND d.retoucheDre = true AND j IS NOT NULL AND v IS NOT NULL AND vt.conclusion = true) OR " +
            "(m IS NULL AND d.retoucheDre = true AND j IS NOT NULL AND vt.conclusion = false) OR " +
            "(m IS NULL AND d.rebut = true AND j IS NOT NULL)")
    List<Anomalie> findQualiteProduitAnomalies();

    @Query("SELECT a FROM Anomalie a " +
            "LEFT JOIN a.decision d " +
            "LEFT JOIN a.demandeRetouche dr " +
            "LEFT JOIN a.verificationTechnique v " +
            "LEFT JOIN a.priseEnCompte p " +
            "WHERE (dr IS NOT NULL AND v IS NOT NULL AND p IS NULL AND d.retoucheDre = true)")
    List<Anomalie> findQualiteProduitDre();

    /////////////////////////////////////////////


    ///////////////// Qualite Programme //////////////////


    @Query("SELECT a FROM Anomalie a " +
            "LEFT JOIN a.decision d " +
            "LEFT JOIN a.maitrise m " +
            "LEFT JOIN a.justification j " +
            "LEFT JOIN a.validationNav v " +
            "LEFT JOIN a.verificationTechnique vt " +
            "WHERE a.nonConformite IS NULL OR " +
            "(m IS NULL AND (d.aucuneAction = true AND v.derogationProduit = true) OR (vt.conclusion = false AND d.retoucheDre = true))")
    List<Anomalie> findQualiteProgrammeAnomalies();

    //////////////////////////////////////////////



    @Query("select a from Anomalie a where a.nonConformite !=false")
    List<Anomalie> findAnomaliesQualiteProd();




}
