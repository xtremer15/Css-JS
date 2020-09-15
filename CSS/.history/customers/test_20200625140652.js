function getDrinkByProfession(param) {
  const param
    switch (param) {
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

function first_char_to_uppercase(argument) {
  return argument.replace(/\w+/g, function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
}

console.log(getDrinkByProfession("School Counselor"));
