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

const elementToAppendTo = document.getElementById("content");
let strTitle = "";
let strOpt = "";
const ul = document.createElement("ul");
ul.setAttribute("class", "items");

for (let i = 0; i < MENU.length; i++) {
  const li = document.createElement("li");
  li.setAttribute("class", "item");
  li.appendChild(document.createTextNode(MENU[i].title));
  ul.appendChild(li);

  /
}
