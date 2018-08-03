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
  it('will return the age in seconds for Mercury', function() {
    let birthday = new Date('1995-04-19');
    let futureDate = new Date('1995-05-02');
    let newAge = new Age(birthday, "female", 5,5);
    expect(newAge.toMercury(futureDate)).toEqual(4680000);
  });
  it('will return the age in seconds for Venus', function() {
    let birthday = new Date('1995-04-19');
    let futureDate = new Date('1995-05-02');
    let newAge = new Age(birthday, "female", 5,5);
    expect(newAge.toVenus(futureDate)).toEqual(1811613);
  });
  it('will return the age in seconds for Mars', function() {
    let birthday = new Date('1995-04-19');
    let futureDate = new Date('1995-05-02');
    let newAge = new Age(birthday, "female", 5,5);
    expect(newAge.toMars(futureDate)).toEqual(597447);
  });
  it('will return the age in seconds for Jupiter', function() {
    let birthday = new Date('1995-04-19');
    let futureDate = new Date('1995-05-02');
    let newAge = new Age(birthday, "female", 5,5);
    expect(newAge.toJupiter(futureDate)).toEqual(94705);
  });

});
