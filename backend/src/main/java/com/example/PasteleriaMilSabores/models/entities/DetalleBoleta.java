package com.example.PasteleriaMilSabores.models.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "detalle_boleta")
public class DetalleBoleta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idDetalle;

    @ManyToOne
    @JoinColumn(name = "id_boleta", nullable = false)
    @JsonIgnore // Evita bucles infinitos al serializar a JSON
    private Boleta boleta;

    @ManyToOne
    @JoinColumn(name = "id_producto", nullable = false)
    private Producto producto; 

    @Column(nullable = false)
    private Integer cantidad;

    @Column(nullable = false)
    private Integer precioUnitario; 

    @Column(nullable = false)
    private Integer subtotal; 
}
