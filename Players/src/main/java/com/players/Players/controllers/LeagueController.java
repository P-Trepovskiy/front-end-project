package com.players.Players.controllers;

import com.players.Players.dto.requests.CreateLeagueRequest;
import com.players.Players.dto.responses.LeagueResponse;
import com.players.Players.entities.League;
import com.players.Players.services.LeagueService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/league")
@RequiredArgsConstructor
public class LeagueController {
    private final LeagueService leagueService;

    @PostMapping()
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> createLeague(@RequestBody @Validated CreateLeagueRequest request) {
        leagueService.save(new League(request));

        return ResponseEntity.ok("League created successfully");
    }

    @GetMapping()
    public List<LeagueResponse> getLeagues() {
        System.out.println("getLeagues");
        return leagueService.findAll().stream().map(LeagueResponse::new).toList();
    }
}
