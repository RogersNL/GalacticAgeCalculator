import { Age } from '../src/age';

describe('Age', function() {

  it('will check for valid birthday', function() {
    let birthday = new Date('1993-03-23');
    let newAge = new Age(birthday, "male", 4,3);
    expect(newAge.isValidBirthday()).toEqual(true);
  });
  it('will return the difference in seconds between birthday and a date', function() {
    let birthday = new Date('1993-03-23');
    let futureDate = new Date('1993-03-27')
    let newAge = new Age(birthday, "male", 4,3);
    expect(newAge.timeDifference(futureDate)).toEqual(345600);
  });
});
