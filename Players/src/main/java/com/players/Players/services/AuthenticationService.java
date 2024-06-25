package com.players.Players.services;

import com.players.Players.dto.requests.SignInRequest;
import com.players.Players.dto.requests.SignUpRequest;
import com.players.Players.dto.responses.JwtAuthenticationResponse;
import com.players.Players.entities.User;
import com.players.Players.models.Role;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserService userService;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    public JwtAuthenticationResponse signUp(SignUpRequest request) {
        var user = User.builder()
                .username(request.email())
                .email(request.email())
                .password(passwordEncoder.encode(request.password()))
                .role(Role.ROLE_USER)
                .build();

        userService.create(user);

        var jwt = jwtService.generateToken(user);
        return new JwtAuthenticationResponse(jwt);
    }

    public JwtAuthenticationResponse signIn(SignInRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                request.email(),
                request.password()
        ));

        var user = userService
                .userDetailsService()
                .loadUserByUsername(request.email());

        var jwt = jwtService.generateToken(user);
        return new JwtAuthenticationResponse(jwt);
    }
}
