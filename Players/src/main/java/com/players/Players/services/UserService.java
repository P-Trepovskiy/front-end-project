package com.players.Players.services;

import com.players.Players.entities.User;
import com.players.Players.exceptions.ClientException;
import com.players.Players.models.Role;
import com.players.Players.repositories.UsersRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UsersRepository repository;

    public User save(User user) {
        return repository.save(user);
    }

    public User create(User user) {
        if (repository.existsByEmail(user.getEmail())) {
            throw new ClientException("User with this email already exists");
        }

        return save(user);
    }

    public User getByUsername(String username) {
        return repository.findByUsername(username)
                .orElseThrow(() -> new ClientException("User not found"));

    }

    public UserDetailsService userDetailsService() {
        return this::getByUsername;
    }

    public User getCurrentUser() {
        // Получение имени пользователя из контекста Spring Security
        var username = SecurityContextHolder.getContext().getAuthentication().getName();
        return getByUsername(username);
    }

    @Deprecated
    public void getAdmin() {
        var user = getCurrentUser();
        user.setRole(Role.ROLE_ADMIN);
        save(user);
    }

    public void toggleAdmin(String email) {
        var user = repository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        user.setRole(user.getRole() == Role.ROLE_ADMIN ? Role.ROLE_USER : Role.ROLE_ADMIN);
        save(user);
    }
}
