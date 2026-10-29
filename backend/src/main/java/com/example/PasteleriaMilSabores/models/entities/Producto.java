package com.example.PasteleriaMilSabores.models.entities;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import lombok.Data;

@Entity
@Data 
@Table(name = "producto")
public class Producto {
    
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idProducto;

    @Column(nullable = false)
    private String codigoProducto;

    @ManyToOne 
    @JoinColumn(name = "id_categoria", nullable = false)
    private Categoria categoria;

    @Column(nullable = false)
    private String nombreProducto;

    @Column(nullable = false)
    private int precioProducto;

    @Column(nullable = false)
    private String descripcionProducto;

    @ElementCollection
    @CollectionTable(name = "producto_ingredientes", joinColumns = @JoinColumn(name = "id_producto"))
    @Column(name = "ingrediente")
    private List<String> ingredientesProductos = new ArrayList<>();

    @Column(nullable = false)
    private String tiempoPreparacion;

    @Column(nullable = false)
    private String dificultad;

    @Column(nullable = false)
    private Boolean destacado;

    @Transient
    public String getPrecioFormateadoProducto() {
        return "$" + String.format("%,d", precioProducto);
    }
}