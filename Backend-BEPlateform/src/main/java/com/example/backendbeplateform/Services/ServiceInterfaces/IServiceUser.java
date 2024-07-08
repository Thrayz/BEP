package com.example.backendbeplateform.Services.ServiceInterfaces;

import com.example.backendbeplateform.DAO.Entities.User;

import java.util.List;
import java.util.Optional;

public interface IServiceUser {
    List<User> getAll();

    User getUserById(Integer id);

    User addUser(User user);

    User updateUser(User user);

    void deleteUser(Integer id);

    Optional<User> getUserByEmail(String email);

    boolean existsByEmail(String email);
}
