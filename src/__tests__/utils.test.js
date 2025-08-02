// src/__tests__/utils.test.js
import { currentAgeForBirthYear } from "../utils";

describe("currentAgeForBirthYear", () => {
  it("returns the age of a person based on the year of birth", () => {
    // Arrange
    const currentYear = new Date().getFullYear();
    const birthYear = 1984;
    const expected = currentYear - birthYear;

    // Act
    const result = currentAgeForBirthYear(birthYear);

    // Assert
    expect(result).toBe(expected);
  });
});
