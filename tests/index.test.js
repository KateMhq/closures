const {
  trainstation,
  dogHome,
  calculator,
  mergeSort,
  gibberish,
  total,
  increase,
  double
} = require("../src/index.js");

test("increase", function() {
  const arg = 10;
  const inner = increase();
  const result = inner(arg);

  const expected = 13;

  expect(result).toBe(expected);
});

test("double", function() {
  const inner = double();
  const result = inner();

  const expected = 2;
  expect(result).toEqual(expected);
});

test("total", function() {
  const arr = [1, 2, 3];
  const inner = total(2);
  const result = inner(arr);
  const expected = 8;
  expect(result).toEqual(expected);
});

test("gibberish - array", function() {
  const newStrings = ["today", "Wed", "Sunny"];
  const inner = gibberish();
  const result = inner(newStrings);
  expect(result).toEqual("hello today Wed Sunny.");
});

test("gibberish - string", function() {
  const newStrings = "how is it going";
  const inner = gibberish();
  const result = inner(newStrings);
  expect(result).toEqual("hello how is it going");
});

test("mergeSort", function() {
  const inner = mergeSort();
  inner(3);
  inner(4);
  inner(9);
  const result = inner(6);
  expect(result).toEqual(9);
});

test("calculator", function() {
  const inner = calculator();
  const result = inner(2, 3, "*");
  expect(result).toEqual(7);
});

test("dogHome", function(){
  const dogs = dogHome();
  const houseDog=dogs.houseDog({name:"lovely",breed:"husky",location:"london"});
  const getDogsByLocation=dogs.getDogsByLocation("london");
  expect(houseDog).toEqual({london:[{name:"lovely",breed:"husky",location:"london"}],florence:[]})
  expect(getDogsByLocation).toEqual([{name:"lovely",breed:"husky",location:"london"}])
})

test("trainstation - arrive and getPeople", function(){
  const objMethod = trainstation();
  const arrive = objMethod.arrive({name:"Jim",amount:20});
  expect(arrive).toEqual([{name:"Kate",amount:14},{name:"Tom",amount:17},{name:"Dan",amount:23},{name:"Jim",amount:20}])
  const getPeople = objMethod.getPeople();
  expect(getPeople).toEqual([{name:"Kate",amount:14},{name:"Tom",amount:17},{name:"Dan",amount:23},{name:"Jim",amount:20}])
})

test("trainstation - giveMoney", function(){
  const objMethod = trainstation();
  const getPeople = objMethod.getPeople();
  const randomPersonIndex = Math.floor(Math.random()*(getPeople.length));
  const randomMoney = Math.floor(Math.random()*20+1);
  const money = getPeople[randomPersonIndex].amount+randomMoney;
  const giveMoney = objMethod.giveMoney(randomMoney,randomPersonIndex);
  expect(giveMoney[randomPersonIndex].amount).toEqual(money)

})

test("trainstation-trainArrives", function(){
  const objMethod = trainstation();
  const trainArrives = objMethod.trainArrives();
  expect(trainArrives).toEqual({peopleArr:[{name:"Kate",amount:14},{name:"Tom",amount:17}],peopleLeft:[{name:"Dan",amount:23}]})
})
