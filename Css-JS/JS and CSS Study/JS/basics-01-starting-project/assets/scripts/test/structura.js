// var obj = {
//     s1 : ["a","b","c"],
//     s2 : ["a","b"],
//     s3 : true,
//     s4 : ["a","b"]
// }

// var obj2 = {
//     s1 : ["id","class1","class2"],
//     s2 : ["class1","class2"],
//     s3 : ["id","class"],
// }

// var obj3 = {
//     s1 : {
//         id:"id",
//         class1:"class1",
//         class2:"class2"
//     },
// }
// var obj3 = {
//     s1 : {
//         id:"id",
//         class:["class1","class2"]

//     },
//  }

var SHAORMA = {
  s1: {
    id: ["DEVELOPERS", "SHOWCASE", "SOLUTIONS", "COMPANY"],
    OPT1: ["Install", "Tutorial", "Guide", "Documentation", "Forum", "Meetup"],
    OPT1: ["1", "2", "3"]
  }
};

var SARMALE = [
  {
    title: "developers",
    submenu: [
      {
        content: "ceva",
        url: "altceva"
      },
      {
        content: "ceva2",
        url: "altceva2"
      }
    ]
  },
  {
    title: "developers2",
    submenu: [
      {
        content: "ceva",
        url: "altceva"
      },
      {
        content: "ceva2",
        url: "altceva2"
      }
    ]
  }
];

const options = {
  DEVELOPERS: [
    "Install",
    "Tutorial",
    "Guide",
    "Documentation",
    "Forum",
    "Meetup"
  ],
  SHOWCASE: "SHOWCASE",
  SOLUTIONS: ["HOSTING", "PRICING", "PARTNERS", "DOCUMENTATION"],
  COMPANY: ["BLOG", "PRESS"]
};

// ======================ADDED KEYS TOWARDS VERTICAL MENU========
const elementToAppendAt = document.getElementById("content");
const arr = Object.keys(options);
const obj = options.DEVELOPERS;

function createList(array, obj) {
  const ul = document.createElement("ul");
  ul.setAttribute("id", "dropdown");
  console.log(ul);
  for (let i = 0; i < array.length; i++) {
    const button = document.createElement("button");
    button.setAttribute("class", "item " + i);
    button.appendChild(document.createTextNode(array[i]));
    ul.appendChild(button);
    //==============ADDED ELEMENTS FOR VERTICAL ROW========
    for (let j = 0; j < obj.length; j++) {
      const a = document.createElement("a");
      a.setAttribute("class", "link");
      a.appendChild(document.createTextNode(obj[j]));
      ul.firstChild.appendChild(a);
    }
    button.setAttribute("onclick", "hideMenu()");
    button.setAttribute("onmouseleave", "myFunc()");
  }
  elementToAppendAt.appendChild(ul);
}

function myFunc() {
  document.querySelector("a").classList.add("link");
}

function hideMenu() {
  document.querySelector("a").classList.remove("link");
}

createList(arr, obj);

/* <div id=<id> class=<class class2>><s1>
</div>
<div class=<class class2>><s2>
</div>
<s3 id=<id> class=<class>><s3></s3> 
*/
