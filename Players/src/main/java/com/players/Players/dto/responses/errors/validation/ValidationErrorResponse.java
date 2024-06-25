package com.players.Players.dto.responses.errors.validation;

import com.players.Players.models.Violation;

import java.util.List;

public record ValidationErrorResponse(List<Violation> validationErrors) { }

