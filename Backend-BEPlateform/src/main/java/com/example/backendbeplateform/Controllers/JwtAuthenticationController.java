/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.

package com.example.backendbeplateform.Controllers;


import com.example.backendbeplateform.DAO.Entities.JwtRequest;
import com.example.backendbeplateform.DAO.Entities.User;
import com.example.backendbeplateform.DAO.Entities.userwithtoken;
import com.example.backendbeplateform.DAO.Repositories.UserRepository;
import com.example.backendbeplateform.Services.JwtUserDetailsService;
import com.example.backendbeplateform.security.jwt.JwtTokenUtil;
import java.util.ArrayList;
import java.util.Date;
import java.util.Hashtable;
import java.util.List;
import java.util.Optional;
import javax.naming.Context;
import javax.naming.NamingEnumeration;
import javax.naming.directory.Attributes;
import javax.naming.directory.SearchControls;
import javax.naming.directory.SearchResult;
import javax.naming.ldap.InitialLdapContext;
import javax.naming.ldap.LdapContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author L256804


@RestController
@CrossOrigin("*")
public class JwtAuthenticationController {

    @Autowired
    private UserRepository userdao;

    @Autowired
    private AuthenticationManager authenticationManagerBean;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private JwtUserDetailsService userDetailsService;

    @Autowired
    private UserRepository userDao;

    @Autowired
    private PasswordEncoder bcryptEncoder;

    @Autowired
    JwtTokenUtil jwttoken;
 
    UserController userContr;
    
    String tok;

    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public ResponseEntity<userwithtoken> createAuthenticationTokennew(@RequestBody JwtRequest authenticationRequest) throws Exception {

        try {
            User u = userdao.findByLogin(authenticationRequest.getUsername());

            if (u == null) {
                System.out.println("utilisateur n'existe pas");
                return new ResponseEntity(HttpStatus.NO_CONTENT);
            } else {
                if (u.isActif() == true) {
                    User newu = new User();
                    newu = authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());
                    
                    
                    if (newu == null) {
                        System.out.println("found but invalid cred");
                        return new ResponseEntity(HttpStatus.NOT_FOUND);

                    } else {

                        final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
                        final String token = jwtTokenUtil.generateToken(newu);
                        this.tok = token;
                        User userloged = new User();
                        userloged = userdao.findByLogin(userDetails.getUsername());
                        userwithtoken ut = new userwithtoken(userloged, token);
                        System.out.println(ut.getToken());
                        //add new connexion
                        Date d = new Date();
            
                        return new ResponseEntity(ut, HttpStatus.OK);
                    }
                } else {
                    return new ResponseEntity(HttpStatus.NOT_FOUND);
                }

            }

        } catch (Exception e) {
            System.out.println(e.getMessage());
            return new ResponseEntity(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    /*
    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public ResponseEntity<userwithtoken> createAuthenticationToken(@RequestPart("auth") JwtRequest authenticationRequest, @RequestPart("user") utilisateur userloged) throws Exception {

        try {
            
            utilisateur newu = new utilisateur();
            newu = authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());

            
                //final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());

               
                final String token = jwtTokenUtil.generateToken(newu);
                System.out.println(token);
            

                if (userloged.isIsAD() == false) {
                    userloged.setMotDepasse("");
                    userloged.setLogin(newu.getLogin());
                    userloged.setNom(newu.getNom());
                    userloged.setPrenom(newu.getPrenom());
                    userloged.setMail(newu.getMail());
                    userloged.setIsAD(true);
                    
                    System.out.println("user updated");
                    System.out.println(userloged.getMail());
                    System.out.println(userloged.getNom());
                    System.out.println(userloged.getPrenom());
                    System.out.println(userloged.getLogin());

                    userloged = userDao.save(userloged);
                }

                
                userwithtoken ut = new userwithtoken(userloged, token);
                
                return new ResponseEntity(ut, HttpStatus.OK);

            

        } catch (Exception e) {
            return new ResponseEntity(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }
     */ 



    /*
    @RequestMapping(value = "/editmdp", method = RequestMethod.POST)
    public ResponseEntity<?> editUser(@RequestBody passwordmodif user) throws Exception {
        utilisateur u = userdao.findByLogin(user.getNom());
        try {
            System.out.println("ancien mdp" + user.getAncienmdp());
            System.out.println("new mdp" + u.getMotDepasse());
            if (bcryptEncoder.matches(user.getAncienmdp(), u.getMotDepasse())) {
                u.setMotDepasse(bcryptEncoder.encode(user.getNewmdp()));
                userDao.save(u);

                return new ResponseEntity(u, HttpStatus.OK);
            } else {

                return new ResponseEntity(HttpStatus.CONFLICT);
            }

        } catch (Exception e) {
            System.out.println("error " + e);
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
   

    @RequestMapping(value = "/allusers", method = RequestMethod.GET)
    public ResponseEntity<List<User>> alluser() {
        try {
            List<User> lu = userdao.findAll();
            List<User> luu = new ArrayList<User>();
            for (int i = 0; i < lu.size(); i++) {

                if (lu.get(i).isActif()) {
                    luu.add(lu.get(i));
                }
            }
            return new ResponseEntity(lu, HttpStatus.OK);

        } catch (Exception e) {
            System.out.println(e);
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }


    @RequestMapping(value = "/usersdesactivate/{id}", method = RequestMethod.DELETE)
    public ResponseEntity deleteuser(@PathVariable Integer id) {
        try {
            Optional<User> du = userDao.findById(id);
            userDao.delete(du.get());
            return new ResponseEntity(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }


    @GetMapping("/searchusername/{username}")
    private ResponseEntity<List<User>> alldae(@PathVariable String username) {
        List<User> lu = new ArrayList<>();
        String table = "";
        try {

            String value = username;
            System.out.println("username =" + username);
            System.out.println("value" + value);
            // Contient les informations pour initialiser le context
            Hashtable infos = new Hashtable();

            String domainName = "corp.zodiac.lan";
            String ad_url = "ldap://corp.zodiac.lan/";
            String userName = "BKPADMIN";
            String password = "Z0di@cit";
            infos.put(Context.SECURITY_AUTHENTICATION, "simple");
            infos.put(Context.SECURITY_PRINCIPAL, userName + "@" + domainName);
            infos.put(Context.SECURITY_CREDENTIALS, password);
            infos.put(Context.REFERRAL, "follow");

            infos.put(Context.INITIAL_CONTEXT_FACTORY, "com.sun.jndi.ldap.LdapCtxFactory");
            infos.put(Context.PROVIDER_URL, ad_url);

            LdapContext ctx = null;

            ctx = new InitialLdapContext(infos, null);
            System.out.println("LDAP Connection: COMPLETE");
            SearchControls cons = new SearchControls();
            cons.setSearchScope(SearchControls.SUBTREE_SCOPE);
            String[] attrIDs = {"sAMAccountName", "sn", "givenname", "mail", "password"};
            cons.setReturningAttributes(attrIDs);
            NamingEnumeration<SearchResult> answer = ctx.search("DC=corp,DC=zodiac,DC=lan", "(&(objectCategory=person)(|(cn=" + value + "*)(cn=*" + value + ")(cn=*" + value + "*)))", cons);
            // NamingEnumeration<SearchResult> answer = ctx.search("DC=corp,DC=zodiac,DC=lan", "(&(objectCategory=person)(memberOf=CN=SOPHY_USERS,OU=POPULATION,OU=GROUPS,OU=DHARI,OU=SAO,DC=corp,DC=zodiac,DC=lan))", cons);
            int i = 0;
            while (answer.hasMore()) {
                Attributes attrs = answer.next().getAttributes();
                i++;
                String mail = "";
                if (attrs.get("mail") == null) {
                    mail = "";
                } else {
                    mail = attrs.get("mail").get() + "";
                }

                User u = new User();

                u.setPrenom((String) attrs.get("givenname").get());
                u.setNom((String) attrs.get("sn").get());
                u.setEmail(mail);
                u.setLogin((String) attrs.get("sAMAccountName").get());
                lu.add(u);

                table = table + "{'Firstname':'" + attrs.get("givenname").get() + "', 'Lastname' :'" + attrs.get("sn").get()
                        + "', 'mail':'" + mail + "', 'Acountname' : '" + attrs.get("sAMAccountName").get() + "' },";

                //System.out.println(table);
            }
            if (table.length() > 0) {
                table = table.substring(0, table.length() - 1);
            }

            table = "{[" + table + "]}";

            return new ResponseEntity(lu, HttpStatus.OK);
        } catch (Exception e) {
            System.out.println("error" + e.getMessage());
            System.out.println(table);
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    private User authenticate(String username, String password) throws Exception {

        //authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        String table = "";
        User u = new User();

        try {

            
            String value = username;
            // Contient les informations pour initialiser le context
            Hashtable infos = new Hashtable();

            String domainName = "corp.zodiac.lan";
            String ad_url = "ldap://corp.zodiac.lan/";
            String userName = username;
            //  userName ="houssemeddine.mbarek";
            // password = "<Houssy>14753430";
            infos.put(Context.SECURITY_AUTHENTICATION, "simple");
            infos.put(Context.SECURITY_PRINCIPAL, userName + "@" + domainName);
            infos.put(Context.SECURITY_CREDENTIALS, password);
            infos.put(Context.REFERRAL, "follow");

            infos.put(Context.INITIAL_CONTEXT_FACTORY, "com.sun.jndi.ldap.LdapCtxFactory");
            infos.put(Context.PROVIDER_URL, ad_url);

            LdapContext ctx = null;

            ctx = new InitialLdapContext(infos, null);
            System.out.println("LDAP Connection: COMPLETE");
            SearchControls cons = new SearchControls();
            cons.setSearchScope(SearchControls.SUBTREE_SCOPE);
            String[] attrIDs = {"sAMAccountName", "sn", "givenname", "mail", "password", "id"};
            cons.setReturningAttributes(attrIDs);
            NamingEnumeration<SearchResult> answer = ctx.search("DC=corp,DC=zodiac,DC=lan", "sAMAccountName=" + userName, cons); //NamingEnumeration<SearchResult> answer = ctx.search("DC=corp,DC=zodiac,DC=lan", "(&(objectCategory=person)(memberOf=CN=SOPHY_USERS,OU=POPULATION,OU=GROUPS,OU=DHARI,OU=SAO,DC=corp,DC=zodiac,DC=lan))", cons);

            int i = 0;
            while (answer.hasMore()) {
                Attributes attrs = answer.next().getAttributes();
                i++;
                String mail = "";
                if (attrs.get("mail") == null) {
                    mail = "";
                } else {
                    mail = attrs.get("mail").get() + "";
                }
                //System.out.println(attrs.get("password") + "pass");
                table = table + "{Firstname:" + attrs.get("givenname").get() + ", Lastname :" + attrs.get("sn").get()
                        + ", mail:" + mail + "Acountname : " + attrs.get("sAMAccountName").get() + "},";
                System.out.println(table);

                //set new data
                u.setLogin(attrs.get("sAMAccountName").get().toString());
                u.setEmail(attrs.get("mail").get().toString());
                u.setNom(attrs.get("sn").get().toString());
                u.setPrenom(attrs.get("givenname").get().toString());
                System.out.println(u.getLogin() + " " + u.getEmail() + " " + u.getNom() + " " + u.getPrenom());
            }
            table = table.substring(0, table.length() - 1);
            table = "[" + table + "]";
            //System.out.println(" u = "+u.getNom());
            return u;

        } catch (Exception e) {
            System.out.println("error : " + e.getMessage());
            // System.out.println(table);
            return null;
        }

    }

    /*   
            @GetMapping("/tokenverif")
    public boolean getTokenVerif() {

        
        return this.jwttoken.isTokenExpired("eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJMMjU2ODA0IiwiZXhwIjoxNjYzOTM4OTk3LCJpYXQiOjE2NjM5MjA5OTd9.lw8YQaxFXxJjW4nbISm5KA_cAu82Ld0v8W33El0NtHDzaT-_-tKZd3aMgjLc_Xoz2PzyJL1nUJqrfhClXm3gsw");
        
        
    }  
    
    
     
}

*/