function getDrinkByProfession(param) {
     
    const captialize = words => words.split(' ').map( w =>  w.substring(0,1).toUpperCase()+ w.substring(1)).join(' ')

  switch (capitalizedParam) {
    case "Jabroni":
      return "Patron Tequila";
    case "School Counselor":
      return "Anything with Alcohol";
    case "Programmer":
      return "Hipster Craft Beer";
    case "Bike Gang Member":
      return "Moonshine";
    case "Politician":
      return "Your tax dollars";
    case "Rapper":
      return "Cristal";
    default:
      return "Beer";
  }
}

console.log(getDrinkByProfession("Jabroni"));
