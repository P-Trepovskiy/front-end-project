package com.players.Players.services;

import com.players.Players.entities.Player;
import com.players.Players.repositories.PlayerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PlayerService {
    private final PlayerRepository playerRepository;

    public List<Player> findAll() {
        return playerRepository.findAll();
    }

    public Player save(Player player) {
        return playerRepository.save(player);
    }

    public Optional<Player> findById(Long id) {
        return playerRepository.findById(id);
    }

    public List<Player> findByLeagueId(Long leagueId) {
        return playerRepository.findByLeagueId(leagueId);
    }
}
