function getDrinkByProfession(param) {
  const paramTolowerCase = param.toLowerCase();
  const capitalizedParam = paramTolowerCase.chartAt(0).toUpperCase();
  switch (capitalizedParamLowerCase()) {
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

console.log(getDrinkByProfession("School Counselor"));
