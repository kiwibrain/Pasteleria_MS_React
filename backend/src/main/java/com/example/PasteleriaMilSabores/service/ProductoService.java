package com.example.PasteleriaMilSabores.service;

import java.util.List;
import org.springframework.stereotype.Service;
import com.example.PasteleriaMilSabores.models.entities.Producto;
import com.example.PasteleriaMilSabores.repositories.ProductoRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductoService {

    private final ProductoRepository productoRepo;

    public List<Producto> obtenerProductos() {
        return productoRepo.findAll();
    }

    public Producto obtenerProductoPorId(int id) {
        return productoRepo.findById(id).orElse(null);
    }
    
}