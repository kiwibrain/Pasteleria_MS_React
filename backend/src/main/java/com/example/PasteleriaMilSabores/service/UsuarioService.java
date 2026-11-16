package com.example.PasteleriaMilSabores.service;

import com.example.PasteleriaMilSabores.models.entities.Usuario;
import com.example.PasteleriaMilSabores.repository.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UsuarioService {

    private final UsuarioRepository usuarioRepository;

    
    public List<Usuario> obtenerTodos() {
        return (List<Usuario>) usuarioRepository.findAll();
    }

    
    public Optional<Usuario> obtenerPorId(Long id) {
        return usuarioRepository.findById(id);
    }

    // Registrar nuevo usuario
    public Usuario registrar(Usuario usuario) {
        // Validación Si el email ya existe, no creamos otro
        if (usuarioRepository.existsByEmail(usuario.getEmail())) {
            throw new IllegalArgumentException("El correo ya está registrado");
        }
        return usuarioRepository.save(usuario);
    }

    // Método para validar el LOGIN desde React
    public Usuario autenticar(String email, String password) {
        Optional<Usuario> usuarioOpt = usuarioRepository.findByEmail(email);
        
        // Si el usuario existe y las contraseñas coinciden, devolvemos el usuario
        if (usuarioOpt.isPresent() && usuarioOpt.get().getPassword().equals(password)) {
            return usuarioOpt.get();
        }
        return null;
    }

    
    public Usuario actualizar(Long id, Usuario detalles) {
        return usuarioRepository.findById(id).map(usuario -> {
            usuario.setNombre(detalles.getNombre());
            usuario.setApellido(detalles.getApellido());
            usuario.setEdad(detalles.getEdad());
            usuario.setEstado(detalles.getEstado());
            usuario.setRol(detalles.getRol());
            return usuarioRepository.save(usuario);
        }).orElse(null);
    }

    
    public boolean eliminar(Long id) {
        if (usuarioRepository.existsById(id)) {
            usuarioRepository.deleteById(id);
            return true;
        }
        return false;
    }
}