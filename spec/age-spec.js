import { Age } from '../src/age';

describe('Age', function() {

  it('will check for valid birthday', function() {
    let birthday = new Date('1993-03-23');
    let newAge = new Age(birthday, "male", 4,3);
    expect(newAge.isValidBirthday()).toEqual(true);
  });
});
