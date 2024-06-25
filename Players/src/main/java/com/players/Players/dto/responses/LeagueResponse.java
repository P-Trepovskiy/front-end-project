package com.players.Players.dto.responses;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.players.Players.entities.League;
import lombok.Builder;
import lombok.extern.jackson.Jacksonized;

@Jacksonized
@Builder
public record LeagueResponse (
    @JsonProperty("id")
    Long id,

    @JsonProperty("name")
    String name
) {

    public LeagueResponse(League league) {
        this(league.getId(), league.getName());
    }
}
