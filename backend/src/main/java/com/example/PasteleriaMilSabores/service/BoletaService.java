package com.example.PasteleriaMilSabores.service;

import java.util.List;
import org.springframework.stereotype.Service;
import com.example.PasteleriaMilSabores.models.entities.Boleta;
import com.example.PasteleriaMilSabores.repository.BoletaRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor 
public class BoletaService {
    
    private final BoletaRepository boletaRepo;

    public List<Boleta> obtenerBoletas(){
        return boletaRepo.findAll();
    }

    public Boleta obtenerBoletaPorId(int id){
        return boletaRepo.findById(id).orElse(null);
    }
}
