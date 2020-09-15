function getDrinkByProfession(param) {
  switch (param.toLowerCase()) {
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

    case  "Rapper":
      return "Patron Tequila";

    default:
      return "Beer";
  }
}

const a = "STRING";

console.log(a.toLowerCase());
