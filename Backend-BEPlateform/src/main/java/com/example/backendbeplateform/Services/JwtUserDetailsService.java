/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.backendbeplateform.Services;


import com.example.backendbeplateform.DAO.Entities.User;
import com.example.backendbeplateform.DAO.Repositories.UserRepository;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

/**
 *
 * @author L256804
 */
@Service
public class JwtUserDetailsService implements UserDetailsService{
    
   
 @Autowired
	private UserRepository userDao;

	//@Autowired
	//private PasswordEncoder bcryptEncoder;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		          User user = userDao.findByLogin(username);
                          
		if (user == null) {
                   
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
		return new org.springframework.security.core.userdetails.User(user.getLogin(), "",
				new ArrayList<>());
	}
	
	public User save(User user) {
            
		User newUser = new User();
		newUser.setLogin(user.getLogin());
		//newUser.setMotDepasse(bcryptEncoder.encode(user.getMotDepasse()));
                
                newUser.setEmail(user.getEmail());
              
                newUser.setActif(true);
                
                // set nom / prenom / isAD /
                        
                        return userDao.save(newUser);
	}  
    
}
