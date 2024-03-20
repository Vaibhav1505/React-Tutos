function RandomComp() {
  let randomNumber = Math.round(Math.random() * 10000);

  return <h3>Random Number is : {randomNumber}</h3>

}

export default RandomComp;