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

    // TODO: El argumento solo es aceptable como "Long", diferente a como esta el Service copiado. Observar posibles problemas
    public DetalleBoleta obtenerDetalleBoletaPorId(long id){
        return detalleBoletaRepo.findById(id).orElse(null);
    }
}
