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

  //Conversions to Mercury, Venus, Mars, and Jupiter seconds
  toMercury(date){
    let inputtedDate = date;
    return Math.round(this.timeDifference(inputtedDate)/0.24);
  }
  toVenus(date){
    let inputtedDate = date;
    return Math.round(this.timeDifference(inputtedDate)/0.62);
  }
  toMars(date){
    let inputtedDate = date;
    return Math.round(this.timeDifference(inputtedDate)/1.88);
  }
  toJupiter(date){
    let inputtedDate = date;
    return Math.round(this.timeDifference(inputtedDate)/11.86);
  }

  //Conversions to Years and Months
  toYears(seconds){
    return Math.floor(seconds/31536000);
  }
  toMonths(seconds){
    return Math.floor((seconds%31536000)/2628000);
  }

  //Returns the life expectancy or how long they are over their life expectancy
  lifeExpectancy(){
    let baseLife = 77;
    if(this.gender === "female"){
      baseLife = baseLife + 7;
    }
    let healthYears = (this.health - 3)*2;
    let exerciseYears = (this.exercise - 3)*2;
    return baseLife + healthYears + exerciseYears;
  }
  compareLife(){
    if(this.lifeExpectancy()*31536000 >= this.timeDifference(Date.now())){
      return "Your life expectancy is " + this.lifeExpectancy() + " years.";
    }
    else
    {
      return "You've lived " + this.toYears(this.timeDifference(Date.now())-this.lifeExpectancy()*31536000) + " years and " + this.toMonths(this.timeDifference(Date.now())-this.lifeExpectancy()*31536000) + " months over your life expectancy of " + this.lifeExpectancy() + " years!";
    }
  }
}
