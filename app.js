"use strict";


async function multipleCalls() {
    const number1 = axios({
        method: 'get',
        url: 'http://numbersapi.com/11?json'
      });
    const number2 = axios({
        method: 'get',
        url: 'http://numbersapi.com/12?json'
      });
    const numberRandom = axios({
        method: 'get',
        url: 'http://numbersapi.com/random/trivia?json'
      });

    let response = await Promise.all([number1, number2, numberRandom]);

    console.log("response=", response);
    return response;
}