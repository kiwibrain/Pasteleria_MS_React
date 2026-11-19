package com.example.PasteleriaMilSabores.security;

import com.example.PasteleriaMilSabores.models.entities.Usuario;
import com.example.PasteleriaMilSabores.repository.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@RequiredArgsConstructor
public class DataInitializer {

    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;

    @Bean
    CommandLineRunner initAdmin() {
        return args -> {
            String adminEmail = "admin@duoc.cl";
            
            if (!usuarioRepository.existsByEmail(adminEmail)) {
                Usuario admin = new Usuario();
                admin.setNombre("Administrador");
                admin.setApellido("Sistema");
                admin.setEdad(30);
                admin.setEmail(adminEmail);
                admin.setPassword(passwordEncoder.encode("admin1234"));
                admin.setEstado("ACTIVO");
                admin.setRol("ADMIN");
                
                usuarioRepository.save(admin);
            }
        };
    }
}