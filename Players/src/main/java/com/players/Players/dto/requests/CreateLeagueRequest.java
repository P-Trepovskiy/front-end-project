package com.players.Players.dto.requests;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotBlank;

public record CreateLeagueRequest(@JsonProperty("name") @NotBlank(message = "Username cannot be empty") String name) {
}
