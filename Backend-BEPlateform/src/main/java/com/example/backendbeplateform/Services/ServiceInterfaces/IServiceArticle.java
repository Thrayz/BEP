package com.example.backendbeplateform.Services.ServiceInterfaces;

import com.example.backendbeplateform.DAO.Entities.Article;

import java.util.List;

public interface IServiceArticle {
    List<Article> getAll();

    Article getArticleById(Integer id);

    Article addArticle(Article article);

    Article updateArticle(Article article);

    void deleteArticle(Integer id);
}
