package com.players.Players.services;

import com.players.Players.entities.League;
import com.players.Players.repositories.LeagueRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class LeagueService {
    private final LeagueRepository leagueRepository;

    public List<League> findAll() {
        return leagueRepository.findAll();
    }

    public League save(League league) {
        return leagueRepository.save(league);
    }

    public Optional<League> findById(Long leagueId) {
        return leagueRepository.findById(leagueId);
    }
}
