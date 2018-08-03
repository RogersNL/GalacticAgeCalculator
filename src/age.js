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
}
