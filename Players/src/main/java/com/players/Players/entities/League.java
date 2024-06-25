package com.players.Players.entities;

import com.players.Players.dto.requests.CreateLeagueRequest;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "league")
public class League {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "league_id_seq")
    @SequenceGenerator(name = "league_id_seq", sequenceName = "league_id_seq", allocationSize = 1)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @OneToMany(mappedBy = "league", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Player> players;

    public League(CreateLeagueRequest request) {
        this.name = request.name();
    }
}
