package com.players.Players.entities;

import com.players.Players.dto.requests.CreatePlayerRequest;
import com.players.Players.services.LeagueService;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Builder
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "players")
public class Player {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "league_id_seq")
    @SequenceGenerator(name = "league_id_seq", sequenceName = "league_id_seq", allocationSize = 1)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "age", nullable = false)
    private Integer age;

    @Column(name = "height", nullable = false)
    private Integer height;

    @Column(name = "position", nullable = false)
    private String position;

    @ManyToOne
    @JoinColumn(name = "league_id", referencedColumnName = "id")
    private League league;

    public Player(CreatePlayerRequest request, LeagueService leagueService) {
        this.name = request.name();
        this.age = request.age();
        this.height = request.height();
        this.position = request.position();
        this.league = leagueService.findById(request.leagueId()).orElseThrow();
    }
}
