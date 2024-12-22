import { storeSkills } from './storeSkills'; 
import * as getStoredSkills from './getStoredSkills'; 

jest.mock('./getStoredSkills', () => ({
  getStoredSkills: jest.fn(),
}));

describe('storeSkills Function', () => {
  beforeEach(() => {
    localStorage.clear(); 
  });

  it('stores skills when no existing skills are stored', () => {
    getStoredSkills.getStoredSkills.mockReturnValue(null); 

    const skills = [{ id: 1, name: 'JavaScript' }, { id: 2, name: 'React' }];
    storeSkills(skills);

    const storedSkills = JSON.parse(localStorage.getItem('skills'));
    expect(storedSkills).toEqual(skills);
  });

  it('merges skills when existing skills are stored', () => {
    const existingSkills = [{ id: 1, name: 'HTML' }, { id: 2, name: 'CSS' }];
    getStoredSkills.getStoredSkills.mockReturnValue(existingSkills);

    const newSkills = [{ id: 3, name: 'JavaScript' }, { id: 4, name: 'React' }];
    const expectedMergedSkills = [...newSkills, ...existingSkills];
    storeSkills(newSkills);

    const storedSkills = JSON.parse(localStorage.getItem('skills'));
    expect(storedSkills).toEqual(expectedMergedSkills);
  });

});
