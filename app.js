"use strict";

//jQuery objects
const $body = $("body");

/**
 * make 4 calls to the numbers API and return an array of response objects
 */
async function multipleCalls() {
  const number1 = axios({
    method: "get",
    url: "http://numbersapi.com/14?json",
  });

  const number2 = axios({
    method: "get",
    url: "http://numbersapi.com/11?json",
  });

  const numberRandom = axios({
    method: "get",
    url: "http://numbersapi.com/random/trivia?json",
  });

  const numberRandom2 = axios({
    method: "get",
    url: "http://numbersapi.com/random/trivia?json",
  });
//throws errors if ANY fails -> use try/catch here
  let response = await Promise.all([
    number1,
    number2,
    numberRandom,
    numberRandom2,
  ]);

  console.log("response=", response);
  return response;
}

/**
 * append the data contained with an array of response objects to the DOM
 */
async function renderFacts() {
  const facts = await multipleCalls();

  const $facts = $("<ul>").append(
    facts.map((result) => $("<li>").text(result.data.text))
  );

  $body.append($facts)
}

renderFacts()

