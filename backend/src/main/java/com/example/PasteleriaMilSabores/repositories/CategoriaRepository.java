package com.example.PasteleriaMilSabores.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.PasteleriaMilSabores.models.entities.Categoria;

public interface CategoriaRepository extends JpaRepository <Categoria, Integer> {
    
}
