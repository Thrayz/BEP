package com.example.backendbeplateform.Services.ServiceImplementation;


import com.example.backendbeplateform.DAO.Entities.User;
import com.example.backendbeplateform.DAO.Repositories.UserRepository;
import com.example.backendbeplateform.Services.ServiceInterfaces.IServiceUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ServiceUser implements IServiceUser {

    @Autowired
    private UserRepository userRep;

    @Override
    public List<User> getAll() {
        return userRep.findAll();
    }

    @Override
    public User getUserById(Integer id) {
        return userRep.findById(id).get();
    }

    @Override
    public User addUser(User user) {
        return userRep.save(user);
    }

    @Override
    public User updateUser(User user) {
        return userRep.save(user);
    }

    @Override
    public void deleteUser(Integer id) {
        userRep.deleteById(id);
    }

    @Override
    public Optional<User> getUserByEmail(String email){
        return userRep.findUserByEmail(email);
    }

    @Override
    public boolean existsByEmail(String email) {
        Long userCount = userRep.countUsersByEmail(email);
        return userCount != null && userCount > 0;
    }

}
