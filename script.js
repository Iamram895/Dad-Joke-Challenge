const jokeElem = document.getElementById("joke");
const btns = document.getElementById("btnjoke");

btns.addEventListener("click", getJokeData);

getJokeData();

async function getJokeData() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);
  const data =  await res.json();
  jokeElem.innerHTML = data.joke;
}

/// then method...

// getJokeData();

// function getJokeData() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };

//   fetch("https://icanhazdadjoke.com", config)
//     .then((res) => res.json())
//     .then((data) => {
//          jokeElem.innerHTML= data.joke
//     });
// }
