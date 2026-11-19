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
        
        // Aseguramos valores por defecto para nuevos registros desde el frontend
        request.setRol("CLIENTE");
        if (request.getEstado() == null || request.getEstado().isBlank()) {
            request.setEstado("ACTIVO");
        }
        
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
        
        // Generamos el token pasando el email
        String token = jwtService.generarToken(usuario.getEmail());
        
        return new AuthResponse(
            token, 
            "Bearer", 
            jwtService.getExpiracionSegundos(),
            usuario.getEmail(),
            usuario.getNombre(),
            usuario.getRol()
        );
    }
}