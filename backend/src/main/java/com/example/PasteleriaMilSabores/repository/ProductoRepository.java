package com.example.PasteleriaMilSabores.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.PasteleriaMilSabores.models.entities.Producto;


@Repository 
public interface ProductoRepository extends JpaRepository <Producto, Integer> {

}
