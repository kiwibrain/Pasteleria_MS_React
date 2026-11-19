package com.example.PasteleriaMilSabores.controller;

import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.PasteleriaMilSabores.models.entities.DetalleBoleta;
import com.example.PasteleriaMilSabores.service.DetalleBoletaService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController 
@RequestMapping("/api/detalle_boleta")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class DetalleBoletaController {
    private final DetalleBoletaService detalleBoletaService;

    @GetMapping("")
    public List<DetalleBoleta> obtenerTodosDetalleBoletas(){
        return detalleBoletaService.obtenerDetalleBoletas();
    }

    @GetMapping("/id")
    public DetalleBoleta obtenerDetalleBoletaPorId(@PathVariable long id){
        return detalleBoletaService.obtenerDetalleBoletaPorId(id);
    }
}
