package com.players.Players.dto.requests;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.extern.jackson.Jacksonized;

@Jacksonized
@Builder
public record SignUpRequest (
        @Email(message = "Mail must be like user@example.com")
        @JsonProperty("email")
        String email,

        @Size(min = 8, max = 255, message = "Password length must be from 8 to 255 characters")
        @NotBlank(message = "Password cannot be empty")
        @JsonProperty("password")
        String password
) {
}
