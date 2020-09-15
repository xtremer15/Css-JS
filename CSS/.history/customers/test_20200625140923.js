function getDrinkByProfession(param) {
  const paramToLowerCase = param.toLowerCase();
  const paramCapitalized = first_char_to_uppercase(paramToLowerCase);
  switch (paramCapitalized) {
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
  return argument.replace(/\w+/g, (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
}

console.log(getDrinkByProfession("schOOl CoUselor"));
