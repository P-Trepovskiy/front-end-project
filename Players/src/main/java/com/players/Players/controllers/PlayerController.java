package com.players.Players.controllers;

import com.players.Players.dto.requests.CreatePlayerRequest;
import com.players.Players.dto.responses.PlayerResponse;
import com.players.Players.entities.Player;
import com.players.Players.exceptions.ClientException;
import com.players.Players.services.LeagueService;
import com.players.Players.services.PlayerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/player")
@RequiredArgsConstructor
public class PlayerController {
    private final PlayerService playerService;
    private final LeagueService leagueService;

    @PostMapping()
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> createPlayer(@RequestBody @Validated CreatePlayerRequest request) {
        playerService.save(new Player(request, leagueService));

        return ResponseEntity.ok("Player created successfully");
    }

    @GetMapping()
    public List<PlayerResponse> getPlayers(@RequestParam(value = "league_id", required = false) Long leagueId) {
        if (leagueId != null) {
            return playerService.findByLeagueId(leagueId).stream().map(PlayerResponse::new).toList();
        }
        return playerService.findAll().stream().map(PlayerResponse::new).toList();
    }

    @GetMapping("/{id}")
    public PlayerResponse getPlayer(@PathVariable Long id) {
        return new PlayerResponse(playerService.findById(id).orElseThrow(() -> new ClientException("Player not found")));
    }
}
