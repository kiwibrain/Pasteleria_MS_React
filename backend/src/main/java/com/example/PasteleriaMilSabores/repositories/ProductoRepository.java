package com.example.PasteleriaMilSabores.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.PasteleriaMilSabores.models.entities.Producto;


 
public interface ProductoRepository extends JpaRepository <Producto, Integer> {

}
