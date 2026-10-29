package com.example.PasteleriaMilSabores.controller;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.PasteleriaMilSabores.models.entities.Producto;
import com.example.PasteleriaMilSabores.service.ProductoService;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/producto")
@RequiredArgsConstructor
public class ProductoController {

    private final ProductoService productoService;

    @GetMapping("")
    public List<Producto> obtenerTodosLosProductos() {
        return productoService.obtenerProductos();
    }

    @GetMapping("/{id}")
    public Producto obtenerProductoPorId(@PathVariable int id) {
        return productoService.obtenerProductoPorId(id);
    }
}