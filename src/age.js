export class Age {
  constructor(birthday, gender, health, exercise){
    this.birthday = birthday;
    this.gender = gender;
    this.health = health;
    this.exercise = exercise;
  }
  //Makes sure birthday is in the past
  isValidBirthday(){
    return (this.birthday - Date.now() < 0);
  }

  //Returns the difference of a birthday and a date in seconds
  timeDifference(date){
    return (date - this.birthday)/1000;
  }

  //Conversions to Mercury, Venus, Mars, and Jupiter years
  toMercury(date){
    let inputtedDate = date;
    return this.timeDifference(inputtedDate)/0.24;
  }
  toVenus(date){
    let inputtedDate = date;
    return this.timeDifference(inputtedDate)/0.62;
  }
  toMars(date){
    let inputtedDate = date;
    return this.timeDifference(inputtedDate)/1.88;
  }
  toJupiter(date){
    let inputtedDate = date;
    return this.timeDifference(inputtedDate)/11.86;
  }
}
