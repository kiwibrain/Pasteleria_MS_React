package com.example.PasteleriaMilSabores.service;

import java.util.List;
import org.springframework.stereotype.Service;
import com.example.PasteleriaMilSabores.models.entities.DetalleBoleta;
import com.example.PasteleriaMilSabores.repository.DetalleBoletaRepository;

import lombok.RequiredArgsConstructor;

@Service 
@RequiredArgsConstructor 
public class DetalleBoletaService {
    private final DetalleBoletaRepository detalleBoletaRepo;

    public List<DetalleBoleta> obtenerDetalleBoletas(){
        return detalleBoletaRepo.findAll();
    }

    public DetalleBoleta obtenerDetalleBoletaPorId(long id){
        return detalleBoletaRepo.findById(id).orElse(null);
    }
}
