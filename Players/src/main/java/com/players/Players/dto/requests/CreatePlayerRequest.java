package com.players.Players.dto.requests;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.extern.jackson.Jacksonized;

@Jacksonized
@Builder
public record CreatePlayerRequest(
        @JsonProperty("name")
        @NotBlank(message = "Username cannot be empty")
        String name,

        @JsonProperty("age")
        @NotNull(message = "Age cannot be empty")
        Integer age,

        @JsonProperty("height")
        @NotNull(message = "Height cannot be empty")
        Integer height,

        @JsonProperty("position")
        @NotBlank(message = "Position cannot be empty")
        String position,

        @JsonProperty("league_id")
        @NotNull(message = "League ID cannot be empty")
        Long leagueId
) {
}
