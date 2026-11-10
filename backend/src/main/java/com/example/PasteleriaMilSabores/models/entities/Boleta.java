package com.example.PasteleriaMilSabores.models.entities;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "boleta")
public class Boleta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idBoleta;

    @Column(nullable = false, unique = true, length = 20)
    private String codigoBoleta; // Almacena el código visible "BOL-01", "BOL-02", etc.

    @ManyToOne
    @JoinColumn(name = "id_usuario", nullable = false)
    private Usuario usuario; // Reemplaza al String "cliente" conectándolo con la entidad Usuario

    @Column(nullable = false)
    private LocalDateTime fechaHora; // Para almacenar la fecha y hora ("2026-03-25 14:33")

    @Column(nullable = false)
    private Integer total; // Se guarda como número entero sin formatear (ej: 45000)

    @Column(nullable = false)
    private String estado; // "Completado", "Pendiente", "Cancelado"

    @OneToMany(mappedBy = "boleta", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<DetalleBoleta> detalles = new ArrayList<>();
}