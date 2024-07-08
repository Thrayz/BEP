/* 
package com.example.backendbeplateform.Controllers;

import com.example.backendbeplateform.DAO.Entities.User;
import com.example.backendbeplateform.Services.ServiceInterfaces.IServiceUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;
import java.util.Random;

@CrossOrigin(origins = "*")
@RestController
public class AuthController {
    @Autowired
    private IServiceUser serviceUser;

    @PostMapping("/auth/login")
    public User login(@RequestBody User user) {
        Optional<User> userObject = serviceUser.getUserByEmail(user.getEmail());
        if (userObject.isPresent()) {
            if (userObject.get().getPassword().equals(user.getPassword())) {
                return userObject.get();
            } else {
                throw new RuntimeException("wrong password");
            }
        } else {
            throw new RuntimeException("wrong email");
        }
    }

    @PostMapping("/auth/signup")
    public User signup(@RequestBody User user) {
        Optional<User> userObject = serviceUser.getUserByEmail(user.getEmail());
        if (!userObject.isPresent()) {
            String randomPassword = generateRandomPassword(10); // Change 10 to the desired password length
            user.setPassword(randomPassword);
            return serviceUser.addUser(user);
        } else {
            throw new RuntimeException("email exists");
        }
    }

    private String generateRandomPassword(int length) {
        String allowedCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
        Random random = new Random();
        StringBuilder password = new StringBuilder();

        for (int i = 0; i < length; i++) {
            int randomIndex = random.nextInt(allowedCharacters.length());
            password.append(allowedCharacters.charAt(randomIndex));
        }

        return password.toString();
    }
}
*/