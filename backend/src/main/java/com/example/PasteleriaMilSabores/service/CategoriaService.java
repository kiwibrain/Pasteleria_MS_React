package com.example.PasteleriaMilSabores.service;

import com.example.PasteleriaMilSabores.models.entities.Categoria;
import com.example.PasteleriaMilSabores.repository.CategoriaRepository;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;



@Service
public class CategoriaService {

    private final CategoriaRepository categoriaRepository;

    public CategoriaService(CategoriaRepository categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }

    // Obtener todas las categorías
    public List<Categoria> obtenerTodas() {
        return (List<Categoria>) categoriaRepository.findAll();
    }

    // Obtener una categoría por ID
    public Optional<Categoria> obtenerPorId(int id) {
        return categoriaRepository.findById(id);
    }

    // Crear una nueva categoría
    public Categoria guardar(Categoria categoria) {
        return categoriaRepository.save(categoria);
    }

    // Actualizar una categoría existente
    public Categoria actualizar(int id, Categoria categoriaDetalles) {
        Optional<Categoria> categoriaExistente = categoriaRepository.findById(id);
        
        if (categoriaExistente.isPresent()) {
            Categoria categoria = categoriaExistente.get();
            categoria.setNombre_categoria(categoriaDetalles.getNombre_categoria());
            
            return categoriaRepository.save(categoria);
        }
        return null;
    }

    // Eliminar una categoría
    public boolean eliminar(int id) {
        if (categoriaRepository.existsById(id)) {
            categoriaRepository.deleteById(id);
            return true;
        }
        return false;
    }
}