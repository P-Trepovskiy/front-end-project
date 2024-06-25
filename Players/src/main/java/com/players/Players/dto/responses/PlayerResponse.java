package com.players.Players.dto.responses;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.players.Players.entities.Player;
import com.players.Players.services.LeagueService;
import lombok.Builder;
import lombok.extern.jackson.Jacksonized;

@Jacksonized
@Builder
public record PlayerResponse(
        @JsonProperty("id") Long id,
        @JsonProperty("name") String name,
        @JsonProperty("age") Integer age,
        @JsonProperty("height") Integer height,
        @JsonProperty("position") String position,
        @JsonProperty("league") String league
) {
    public PlayerResponse(Player player) {
        this(player.getId(), player.getName(), player.getAge(), player.getHeight(), player.getPosition(), player.getLeague().getName());
    }
}
