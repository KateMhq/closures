// Create a function which stores a number. Return an inner function which accepts a number as an argument, adds it to the number in parent scope and returns the new total

function increase() {
  let number = 3;

  function inner(newNumber) {
    number = newNumber + number;
    return number;
  }

  return inner;
}

function double() {
  let number = 1;

  function inner() {
    number = number * 2;
    return number;
  }

  return inner;
}

function total(start) {
  let total = start;
  function inner(arr) {
    total = total + arr.reduce((acc, item) => acc + item);
    return total;
  }
  return inner;
}

function gibberish() {
  let string = "hello";
  function inner(newStrings) {
    if (typeof newStrings == "string") {
      string = string.concat(" ", newStrings);
      return string;
    } else {
      const newJoinedString = newStrings.join(" ");
      string = string.concat(" ", newJoinedString, ".");
      return string;
    }
  }

  return inner;
}

function mergeSort() {
  let arr = [];
  function inner(number) {
    arr = arr.concat(number);

    sortedArr = arr.sort((a, b) => b - a);
    return sortedArr[0];
  }
  return inner;
}

function calculator() {
  let total = 1;
  function inner(a, b, operator) {
    if (operator == "+") {
      return (total = total + (a + b));
    } else if (operator == "-") {
      return (total += a - b);
    } else if (operator == "*") {
      return (total += a * b);
    } else if (operator == "/") {
      return (total += a / b);
    }
  }
  return inner;
}

function dogHome(){
  let data={"london":[],"florence":[]}
  const dogs={
    houseDog: function(dogObj){
      Object.keys(data).forEach(loc => {
        if(dogObj.location == loc) {
          data[loc]=data[loc].concat(dogObj);

        } })
        return data

    },
    getDogsByLocation: function(location) {
      if( Object.keys(data).find((element)=>element==location) ) {
        return data[location];
      }
    }
  }
  return dogs;
}

function trainstation(){
  let peopleArr=[{name:"Kate",amount:14},{name:"Tom",amount:17},{name:"Dan",amount:23}];
  const objMethod={
    arrive: function(newPersonObj){
      return peopleArr = peopleArr.concat(newPersonObj)
    },
    getPeople: function(){
      return peopleArr;
    },
    giveMoney: function(randomMoney,randomPersonIndex){

      peopleArr[randomPersonIndex].amount+=randomMoney;
      return peopleArr;
    },
    trainArrives: function(){
      peopleLeft = peopleArr.filter(person => person.amount>=20);
      peopleArr = peopleArr.filter(person => person.amount < 20);
      return {peopleArr:peopleArr, peopleLeft:peopleLeft}
    }
  }
  return objMethod;
}

function shop(){
  let storage={};
  let revenue;

  const objMethod={
    addStock: function(){

    }
  }
  return objMethod;

}

module.exports = {trainstation, dogHome, calculator, increase, double, total, gibberish, mergeSort };
