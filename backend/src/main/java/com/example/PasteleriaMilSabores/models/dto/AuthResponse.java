package com.example.PasteleriaMilSabores.models.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AuthResponse {
    private String token;
    private String tipo;
    // segundos que dura el token
    private long expiraEn;
}
