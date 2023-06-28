import {
  menu,
  menuItem,
  item1,
  item2,
  item3,
  menuButton,
} from "./js/helperFunctions.js";

const url = "https://api.noroff.dev/api/v1/jokes/";
const jokeContainer = document.querySelector(".jokes");
const filterBy = document.querySelector("#filterBy");
// const loader = document.querySelector(".loader");
const loaderContainer = document.querySelector(".loaderContainer");

const fetchJokes = async () => {
  try {
    const data = await fetch(url);
    const response = await data.json();

    const jokes = response;

    let generalJokesCount = 0;
    let programmingJokesCount = 0;

    setTimeout(() => {
      for (let i = 0; i < jokes.length; i++) {
        const joke = jokes[i];
        loaderContainer.innerHTML = "";

        if (joke.type !== "general" && joke.type !== "programming") continue;
        if (joke.setup.length === 40) break;

        if (joke.type === "general" && generalJokesCount < 15) {
          jokeContainer.innerHTML += `
        <div class="cards">
        <a href="jokes.html?id=${joke.id}">
        <p class="type"><b>Type: </b>${joke.type}</p>
        <p class="setup">${joke.setup}</p>
        </a>
        </div>
        `;
          generalJokesCount++;
        } else if (joke.type === "programming" && programmingJokesCount < 15) {
          jokeContainer.innerHTML += `
        <div class="cards">
        <a href="jokes.html?id=${joke.id}">
        <p class="type"><b>Type: </b>${joke.type}</p>
        <p class="setup">${joke.setup}</p>
        </a>
        </div>
        `;
          programmingJokesCount++;
        }
      }
    }, 800);

    filterBy.addEventListener("change", () => {
      jokeContainer.innerHTML = "";
      let generalJokesCount = 0;
      let programmingJokesCount = 0;

      if (filterBy.value === "general") {
        for (let i = 0; i < jokes.length; i++) {
          const joke = jokes[i];

          if (joke.type === "general" && generalJokesCount < 15) {
            jokeContainer.innerHTML += `
          <div class="cards">
             <a href="jokes.html?id=${joke.id}">
                 <p class="type"><b>Type: </b>${joke.type}</p>
                <p class="setup">${joke.setup}</p>
              </a>
          </div>
         `;
            generalJokesCount++;
          }
        }
      } else if (filterBy.value === "programming") {
        for (let i = 0; i < jokes.length; i++) {
          const joke = jokes[i];

          if (joke.type === "programming" && programmingJokesCount < 15) {
            jokeContainer.innerHTML += `
          <div class="cards">
             <a href="jokes.html?id=${joke.id}">
                 <p class="type"><b>Type: </b>${joke.type}</p>
                <p class="setup">${joke.setup}</p>
              </a>
          </div>
         `;
            programmingJokesCount++;
          }
        }
      }
    });
  } catch (e) {
    jokeContainer.innerHTML = 
  "Failed to fetch jokes from Noroff Jokes API" + "" + e;
  }
};

fetchJokes();
