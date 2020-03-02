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
const elemToAppend = document.querySelector("#content");
// console.log(elemToAppend);
let strTitle = "";
let strOption = "";
const empty = [];
// Ul creation
const ul = document.createElement("ul");
ul.setAttribute("class", "items");
// console.log(ul);

for (let i = 0; i < MENU.length; i++) {
  if (MENU.length < 0) {
    // console.log(empty);
  }
  const li = document.createElement("button");
  li.setAttribute("class", "item");
  strTitle = MENU[i].title;
  // console.log(strTitle);
  li.appendChild(document.createTextNode(strTitle));
  li.setAttribute("onclick", "myFunction()");
  li.setAttribute("onmouseleave", "hide()");
  ul.appendChild(li);
  for (let j = 0; j < MENU[i].options.length; j++) {
    strOption = MENU[i].options[j].opt;
    for (let k = 0; k < strOption.length; k++) {
      const a = document.createElement("a");
      a.setAttribute("class", "link");
      a.setAttribute("href", "https://www.google.ro/");
      a.target = "_blank";
      a.appendChild(document.createTextNode(strOption[k]));
      li.appendChild(a);
      console.log(strOption[k]);
    }
  }
}

function myFunction() {
  const a = document.querySelectorAll("a");
  a.classList.add("show");
}

function hide() {
  const ele = document.querySelector("a");
  ele.classList.remove("show");
}

elemToAppend.appendChild(ul);
