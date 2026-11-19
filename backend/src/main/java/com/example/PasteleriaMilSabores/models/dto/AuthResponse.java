package com.example.PasteleriaMilSabores.models.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AuthResponse {
    private String token;
    private String tipo;
    private Long expiracion;
    private String email;
    private String nombre;
    private String rol;
}
