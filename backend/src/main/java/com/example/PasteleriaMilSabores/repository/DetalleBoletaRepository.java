package com.example.PasteleriaMilSabores.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.PasteleriaMilSabores.models.entities.DetalleBoleta;

@Repository 
public interface DetalleBoletaRepository extends JpaRepository<DetalleBoleta,Long> {

}