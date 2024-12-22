import { validate } from './validate';

describe('Validation Function', () => {
  it('returns an error for an empty name', () => {
    const values = { name: '', range: '50' };
    const errors = validate(values);
    expect(errors.name).toBe('Skill name is a required field');
  });

  it('returns an error for an empty range', () => {
    const values = { name: 'Skill Name', range: '' };
    const errors = validate(values);
    expect(errors.range).toBe('Skill range is a required field');
  });

  it('returns an error for range less than 10', () => {
    const values = { name: 'Skill Name', range: '5' };
    const errors = validate(values);
    expect(errors.range).toBe('Skill range must be greater than or equal to 10');
  });

  it('returns an error for range greater than 100', () => {
    const values = { name: 'Skill Name', range: '150' };
    const errors = validate(values);
    expect(errors.range).toBe('Skill range must be less than or equal to 100');
  });

  it('returns an error for a non-number range', () => {
    const values = { name: 'Skill Name', range: 'abc' };
    const errors = validate(values);
    expect(errors.range).toBe('Skill range must be a \'number\' type');
  });

  it('returns no errors for valid input', () => {
    const values = { name: 'Skill Name', range: '50' };
    const errors = validate(values);
    expect(Object.keys(errors)).toHaveLength(0);
  });
});
