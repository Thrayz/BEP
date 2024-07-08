package com.example.backendbeplateform.DAO.Repositories;

import com.example.backendbeplateform.DAO.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {

    public Optional<User> findUserByEmail(String email);

    Optional<User> findByEmail(String email);

    @Query("SELECT COUNT(u) FROM User u WHERE u.email = :email")
    Long countUsersByEmail(String email);
    
 User findByLogin(String login);

}
