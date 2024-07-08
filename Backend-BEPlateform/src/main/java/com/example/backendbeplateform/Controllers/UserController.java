package com.example.backendbeplateform.Controllers;

import com.example.backendbeplateform.DAO.Entities.Anomalie;
import com.example.backendbeplateform.DAO.Entities.User;
import com.example.backendbeplateform.Services.ServiceInterfaces.IServiceUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*" )
@RestController
public class UserController {



    @Autowired
    private IServiceUser serviceUser;

    @GetMapping("/user/get")
    public List<User> GetAll() {
        return serviceUser.getAll();
    }

    @GetMapping("/user/get/{id}")
    public User Get(@PathVariable Integer id) {
        return serviceUser.getUserById(id);
    }

    @PostMapping("/user/add")
    public User Post(@RequestBody User user) {
        return serviceUser.addUser(user);
    }

    @PutMapping("/user/update")
    public User Update(@RequestBody User user) {
        return serviceUser.updateUser(user);
    }

    @DeleteMapping("/user/delete/{id}")
    public void Delete(@PathVariable Integer id) {
        serviceUser.deleteUser(id);
    }


}
