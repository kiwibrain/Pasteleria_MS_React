package com.example.PasteleriaMilSabores.controller;

import com.example.PasteleriaMilSabores.models.entities.Categoria;
import com.example.PasteleriaMilSabores.service.CategoriaService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/categorias")
@CrossOrigin(origins = "*") 
@RequiredArgsConstructor
public class CategoriaController {

    
    private final CategoriaService categoriaService;

    // GET: /api/categorias
    @GetMapping
    public ResponseEntity<List<Categoria>> listarCategorias() {
        List<Categoria> categorias = categoriaService.obtenerTodas();
        return new ResponseEntity<>(categorias, HttpStatus.OK);
    }

    // GET: /api/categorias/{id}
    @GetMapping("/{id}")
    public ResponseEntity<Categoria> obtenerCategoria(@PathVariable int id) {
        Optional<Categoria> categoria = categoriaService.obtenerPorId(id);
        return categoria.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                        .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // POST: /api/categorias
    @PostMapping
    public ResponseEntity<Categoria> crearCategoria(@RequestBody Categoria categoria) {
        Categoria nuevaCategoria = categoriaService.guardar(categoria);
        return new ResponseEntity<>(nuevaCategoria, HttpStatus.CREATED);
    }

    // PUT: /api/categorias/{id}
    @PutMapping("/{id}")
    public ResponseEntity<Categoria> actualizarCategoria(@PathVariable int id, @RequestBody Categoria categoria) {
        Categoria categoriaActualizada = categoriaService.actualizar(id, categoria);
        if (categoriaActualizada != null) {
            return new ResponseEntity<>(categoriaActualizada, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    // DELETE: /api/categorias/{id}
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarCategoria(@PathVariable int id) {
        boolean eliminada = categoriaService.eliminar(id);
        if (eliminada) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}