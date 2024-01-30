document.addEventListener("keypress", function (event) {
  makesound(event.key);
});

function makesound(key) {
  switch (key) {
    case "a":
      let ton1 = new Audio("tunes/a.wav");
      ton1.play();
      break;
    case "d":
      let ton2 = new Audio("tunes/d.wav");
      ton2.play();
      break;
    case "e":
      let ton3 = new Audio("tunes/e.wav");
      ton3.play();
      break;
    case "f":
      let ton4 = new Audio("tunes/f.wav");
      ton4.play();
      break;
    case "g":
      let ton5 = new Audio("tunes/g.wav");
      ton5.play();
      break;
    case "h":
      let ton6 = new Audio("tunes/h.wav");
      ton6.play();
      break;
    case "j":
      let ton7 = new Audio("tunes/j.wav");
      ton7.play();
      break;
    case "k":
      let ton8 = new Audio("tunes/k.wav");
      ton8.play();
      break;
    case "l":
      let ton9 = new Audio("tunes/l.wav");
      ton9.play();
      break;
    case "o":
      let ton10 = new Audio("tunes/o.wav");
      ton10.play();
      break;
    case "p":
      let ton11 = new Audio("tunes/p.wav");
      ton1.play();
      break;
    case "s":
      let ton12 = new Audio("tunes/s.wav");
      ton12.play();
      break;
    case "t":
      let ton13 = new Audio("tunes/t.wav");
      ton13.play();
      break;
    case "u":
      let ton14 = new Audio("tunes/u.wav");
      ton14.play();
      break;
    case "w":
      let ton15 = new Audio("tunes/w.wav");
      ton15.play();
      break;
    case "y":
      let ton16 = new Audio("tunes/y.wav");
      ton16.play();
      break;
    case ";":
      let ton17 = new Audio("tunes/;.wav");
      ton17.play();
      break;
  }
}
