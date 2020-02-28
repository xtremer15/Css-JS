const MENU = [
  {
    title: "Developers",
    options: [
      {
        url: "http://teapa.com",
        opt: ["1", "2", "3"]
      },
      {
        url: "pamantul.e.plat.co.uk",
        opt: ["4", "5", "6"]
      }
    ]
  },
  {
    title: "Showcase",
    options: [
      {
        url: "bmw.ul.areSemnalizare.uk",
        opt: ["a", "b", "c"]
      },
      {
        url: "bmw.ul.NuareSemnalizare.uk",
        opt: ["d", "e", "f"]
      }
    ]
  },
  {
    title: "Da Click Aici!",
    options: [
      {
        url: "Trebe Bani pt asa ceva boss!",
        opt: ["Nu", "sunt", "bani"]
      },
      {
        url: "tupac.e.alive.onion",
        opt: ["$", "Boss", "$"]
      }
    ]
  },
  {
    title: "Cauta-ma Sarakie!",
    options: [
      {
        url: "Telefonul Sarakiei!",
        opt: ["0", "a", "c"]
      },
      {
        url: "mail.pt.sarakie.gold",
        opt: ["1a", "2b", "3c"]
      }
    ]
  }
];

//Empty variables
const elemToAppend = document.querySelector('#content');
console.log(elemToAppend);
let strTitle = "";
let strOption = "";

// Ul creation
const ul = document.createElement("ul");
ul.setAttribute("class", "items");
console.log(ul);
 
for (let i = 0; i < MENU.length; i++) {
  const li = document.createElement("li");
  li.setAttribute("class", "item");
  strTitle = MENU[i].title;
  console.log(strTitle);
  li.appendChild(document.createTextNode(strTitle));
  ul.appendChild(li);
  for (let j = 0; j < MENU[i].options.length; j++) {
      const a = document.createElement("a");
      a.setAttribute("class","link")
  }
}

elemToAppend.appendChild(ul);
