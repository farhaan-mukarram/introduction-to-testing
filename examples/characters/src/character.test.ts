import { describe, it, expect } from 'vitest';
import { Character } from './character.js';

let character;

const firstName = 'John';
const lastName = 'Doe';
const role = 'Developer';

describe('Character', () => {
  beforeEach(() => {
    character = new Character(firstName, lastName, role);
  });

  it('should create a character with a first name, last name, and role', () => {
    expect(character).toMatchObject({
      firstName,
      lastName,
      role,
    });
  });

  it('should allow you to increase the level', () => {
    const initialLevel = character.level;

    character.levelUp();

    expect(character.level).toBeGreaterThan(initialLevel);
  });

  it('should update the last modified date when leveling up', () => {
    const oldModifiedDate = character.lastModified;

    character.levelUp();

    const newModifiedDate = character.lastModified;

    expect(newModifiedDate).not.toBe(oldModifiedDate);
  });
});
