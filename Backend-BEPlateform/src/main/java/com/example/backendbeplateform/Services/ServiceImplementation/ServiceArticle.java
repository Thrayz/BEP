package com.example.backendbeplateform.Services.ServiceImplementation;

import com.example.backendbeplateform.DAO.Entities.Article;
import com.example.backendbeplateform.DAO.Repositories.ArticleRepository;
import com.example.backendbeplateform.Services.ServiceInterfaces.IServiceArticle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServiceArticle implements IServiceArticle {

    @Autowired
    private ArticleRepository articleRepo;


    @Override
    public List<Article> getAll() {
        return articleRepo.findAll();
    }


    @Override
    public Article getArticleById(Integer id) {
        return articleRepo.findById(id).get();
    }

    @Override
    public Article addArticle(Article article) {
        /*if(articleRepo.findArticleByCodeArticle(article.getCodeArticle()).isPresent()){
            throw new RuntimeException("Code Article Exists");
        }else{
            return articleRepo.save(article);
        }*/
        return articleRepo.save(article);
    }

    @Override
    public Article updateArticle(Article article) {
        return articleRepo.save(article);
    }

    @Override
    public void deleteArticle(Integer id) {

        try{
            articleRepo.deleteById(id);
        }catch(Exception e){
            throw new RuntimeException(e);
        }

    }

}
