import { Age } from '../src/age';

describe('Age', function() {

  it('will check for valid birthday', function() {
    let birthday = new Date('1993-03-23');
    let newAge = new Age(birthday, "male", 4, 3);
    expect(newAge.isValidBirthday()).toEqual(true);
  });
  it('will return the difference in seconds between birthday and a date', function() {
    let birthday = new Date('1993-03-23');
    let futureDate = new Date('1993-03-27')
    let newAge = new Age(birthday, "male", 4, 3);
    expect(newAge.timeDifference(futureDate)).toEqual(345600);
  });
  it('will return the age in seconds for Mercury', function() {
    let birthday = new Date('1995-04-19');
    let futureDate = new Date('1995-05-02');
    let newAge = new Age(birthday, "female", 5, 5);
    expect(newAge.toMercury(futureDate)).toEqual(4680000);
  });
  it('will return the age in seconds for Venus', function() {
    let birthday = new Date('1995-04-19');
    let futureDate = new Date('1995-05-02');
    let newAge = new Age(birthday, "female", 5, 5);
    expect(newAge.toVenus(futureDate)).toEqual(1811613);
  });
  it('will return the age in seconds for Mars', function() {
    let birthday = new Date('1995-04-19');
    let futureDate = new Date('1995-05-02');
    let newAge = new Age(birthday, "female", 5, 5);
    expect(newAge.toMars(futureDate)).toEqual(597447);
  });
  it('will return the age in seconds for Jupiter', function() {
    let birthday = new Date('1995-04-19');
    let futureDate = new Date('1995-05-02');
    let newAge = new Age(birthday, "female", 5, 5);
    expect(newAge.toJupiter(futureDate)).toEqual(94705);
  });
  it('will return the number of years in the timespan', function() {
    let birthday = new Date('1993-03-23');
    let futureDate = new Date('2018-08-03');
    let newAge = new Age(birthday, "male", 4, 3);
    expect(newAge.toYears(newAge.timeDifference(futureDate))).toEqual(25);
  });
  it('will return the remaining number of months in the timespan after removing years', function() {
    let birthday = new Date('1993-03-23');
    let futureDate = new Date('2018-08-03');
    let newAge = new Age(birthday, "male", 4, 3);
    expect(newAge.toMonths(newAge.timeDifference(futureDate))).toEqual(4);
  });
  it('will return the life expectancy of a person', function() {
    let birthday = new Date('1993-03-23');
    let newAge = new Age(birthday, "male", 4, 3);
    expect(newAge.lifeExpectancy()).toEqual(79);
  })
  it('will return the life expectancy of a person and output a message', function() {
    let birthday = new Date('1993-03-23');
    let newAge = new Age(birthday, "male", 4, 3);
    expect(newAge.compareLife()).toEqual('Your life expectancy is 79 years.');
  })
  it('will return the life expectancy of a person and output a message', function() {
    let birthday = new Date('1893-03-23');
    let newAge = new Age(birthday, "male", 4, 3);
    expect(newAge.compareLife()).toEqual("You've lived 46 years and 5 months over your life expectancy of 79 years!");
  })
});
