package com.example.PasteleriaMilSabores.service;

import com.example.PasteleriaMilSabores.models.dto.AuthResponse;
import com.example.PasteleriaMilSabores.models.dto.LoginRequest;
import com.example.PasteleriaMilSabores.models.entities.Usuario;
import com.example.PasteleriaMilSabores.repository.UsuarioRepository;
import com.example.PasteleriaMilSabores.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder; 
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    // Devuelve false si el correo ya existe
    public boolean registrar(Usuario request) {
        if (usuarioRepository.existsByEmail(request.getEmail())) {
            return false;
        }
        
        // Encriptamos la contraseña antes de guardarla en la base de datos
        request.setPassword(passwordEncoder.encode(request.getPassword()));
        
        // El rol "CLIENTE" y estado "ACTIVO" ya deberían estar por defecto o venir en el request
        usuarioRepository.save(request);
        return true;
    }

    // Devuelve null si las credenciales no son válidas
    public AuthResponse login(LoginRequest request) {
        Usuario usuario = usuarioRepository.findByEmail(request.getEmail()).orElse(null);
        
        // Verificamos si el usuario existe y si la contraseña encriptada coincide
        if (usuario == null || !passwordEncoder.matches(request.getPassword(), usuario.getPassword())) {
            return null;
        }
        
        // Generamos el token pasando el email (o podrías pasar el rol también si lo configuras)
        String token = jwtService.generarToken(usuario.getEmail());
        
        return new AuthResponse(token, "Bearer", jwtService.getExpiracionSegundos());
    }
}
