"use strict";

//jQuery objects
const $body = $("body");
/**
 * make a call to the numbers API and return a response object
 */
async function singleCall() {
  const favorite = await axios({
    method: "get",
    url: "http://numbersapi.com/11?json",
  });

  return favorite;
}

/**
 * make a call to the numbers API and return a response object
 */
async function multipleNums() {
  const multiples = await axios({
    method: "get",
    url: "http://numbersapi.com/1,2,3?json",
  });

  return multiples;
}

/**
 * make 4 calls to the numbers API and return an array of response objects
 */
async function multipleCalls() {
  const number1 = axios({
    method: "get",
    url: "http://numbersapi.com/11?json",
  });

  const number2 = axios({
    method: "get",
    url: "http://numbersapi.com/11?json",
  });

  const numberRandom = axios({
    method: "get",
    url: "http://numbersapi.com/11?json",
  });

  const numberRandom2 = axios({
    method: "get",
    url: "http://numbersapi.com/11?json",
  });


//throws errors if ANY fails -> use try/catch here
  try {
    let response = await Promise.all([
    number1,
    number2,
    numberRandom,
    numberRandom2,
    ]);

    console.log("response=", response);
    return response;
  }

  catch(err) {
    throw new Error("Could not be fulfilled.")
  }
}

/**
 * append the data contained with an array of response objects to the DOM
 */
async function renderFacts() {
  const facts = await multipleCalls();
  const multiple = await multipleNums();

  const $facts = $("<ul>").append(
    facts.map((result) => $("<li>").text(result.data.text))
  );

  const $ul = $("<ul>");

  for (let key in multiple.data) {
    const $li = $("<li>");
    $li.text(multiple.data[key]);
    $ul.append($li);
  }

  $body.append($facts);
  $body.append($ul);
}

renderFacts();

