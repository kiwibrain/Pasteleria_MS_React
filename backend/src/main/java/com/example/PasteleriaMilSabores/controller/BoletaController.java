package com.example.PasteleriaMilSabores.controller;

import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.PasteleriaMilSabores.service.BoletaService;
import com.example.PasteleriaMilSabores.models.entities.Boleta;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController 
@RequestMapping("/api/boleta")
@RequiredArgsConstructor 
@CrossOrigin(origins = "*")
public class BoletaController {
    private final BoletaService boletaService;

    @GetMapping("")
    public List<Boleta> obtenerTodasLasBoletas() {
        return boletaService.obtenerBoletas();
    }

    @GetMapping("/{id}")
    public Boleta obtenerBoletaPorId(@PathVariable int id) {
        return boletaService.obtenerBoletaPorId(id);
    }
    
    
}
