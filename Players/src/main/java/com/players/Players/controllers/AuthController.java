package com.players.Players.controllers;

import com.players.Players.dto.requests.SignInRequest;
import com.players.Players.dto.requests.SignUpRequest;
import com.players.Players.dto.responses.JwtAuthenticationResponse;
import com.players.Players.services.AuthenticationService;
import com.players.Players.services.JwtService;
import com.players.Players.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class AuthController {
    private final AuthenticationService authenticationService;
    private final UserService userService;
    private final JwtService jwtService;

    @PostMapping("/registration")
    public JwtAuthenticationResponse signUp(@RequestBody @Validated SignUpRequest request) {
        return authenticationService.signUp(request);
    }

    @PostMapping("/login")
    public JwtAuthenticationResponse signIn(@RequestBody @Validated SignInRequest request) {
        return authenticationService.signIn(request);
    }

    @GetMapping("/auth")
    public JwtAuthenticationResponse check() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        String jwt = jwtService.generateToken(userDetails);
        return new JwtAuthenticationResponse(jwt);
    }

    @PutMapping("/toggle_admin")
    public void toggleAdmin(@RequestParam String email) {
        userService.toggleAdmin(email);
    }
}