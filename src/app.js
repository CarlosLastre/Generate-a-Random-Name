/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our", "we", "they", "it"];
  let adj = ["great", "big", "beautiful", "adorable", "gorgeous"];
  let noun = ["jogger", "racoon", "melissa", "institute", "governorship"];
  let domain = ["com", "us", "net", "gov", "li"];

  let rand_pronoun = Math.floor(Math.random() * pronoun.length);
  let rand_adj = Math.floor(Math.random() * adj.length);
  let rand_noun = Math.floor(Math.random() * noun.length);
  let rand_domain = Math.floor(Math.random() * domain.length);

  let frase =
    pronoun[rand_pronoun] +
    adj[rand_adj] +
    noun[rand_noun] +
    "." +
    domain[rand_domain];

  document.querySelector("#excuse").innerHTML =
    '<img src="https://www.lascondes.cl/files/8505" width= "400" />' +
    "<div class='card text-white bg-dark mb-5 mt-5'>" +
    frase +
    "</div>";
};
