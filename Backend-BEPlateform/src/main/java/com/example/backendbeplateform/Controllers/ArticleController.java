package com.example.backendbeplateform.Controllers;

import com.example.backendbeplateform.DAO.Entities.Article;
import com.example.backendbeplateform.Services.ServiceInterfaces.IServiceArticle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*" )
@RestController
public class ArticleController {

    @Autowired
    private IServiceArticle serviceArticle;

    @GetMapping("/article/get")
    public List<Article> GetAll() {
        return serviceArticle.getAll();
    }

    @GetMapping("/article/get/{id}")
    public Article Get(@PathVariable Integer id) {
        return serviceArticle.getArticleById(id);
    }

    @PostMapping("/article/add")
    public Article Post(@RequestBody Article article) {
        return serviceArticle.addArticle(article);
    }

    @PutMapping("/article/update")
    public Article Update(@RequestBody Article article) {
        return serviceArticle.updateArticle(article);
    }

    @DeleteMapping("/article/delete/{id}")
    public void Delete(@PathVariable Integer id) {
        serviceArticle.deleteArticle(id);
    }
}
