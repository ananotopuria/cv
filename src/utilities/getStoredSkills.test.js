import { getStoredSkills } from './getStoredSkills';

describe('getStoredSkills Function', () => {
  beforeEach(() => {
    localStorage.clear(); 
  });

  it('returns null when no skills are stored', () => {
    const storedSkills = getStoredSkills();
    expect(storedSkills).toBeNull();
  });

  it('returns stored skills when they are present', () => {
    const skills = [{ id: 1, name: 'JavaScript' }, { id: 2, name: 'React' }];
    localStorage.setItem('skills', JSON.stringify(skills));

    const storedSkills = getStoredSkills();
    expect(storedSkills).toEqual(skills);
  });
});
