const myUrl = window.location.search.substring(1);
const urlParams = new URLSearchParams(myUrl);
const postId = urlParams.get("id");
const jokeContainer = document.querySelector(".jokeDetails");

const url =
  "https://api.noroff.dev/api/v1/jokes" + (postId ? `/${postId}` : "");

const showJokes = async () => {
  try {
    const data = await fetch(url);
    const response = await data.json();
    const jokes = response;

    jokeContainer.innerHTML = `
    <p class="type">${jokes.type}</p>
    <p class="setup">${jokes.setup}</p>
    <p class="punchline is-hidden">
        ${jokes.punchline} 
      </p> <button class="revealBtn">Reveal Punch Line</button>`;
  } catch (e) {
    console.log(e);
  }
  const punchline = document.querySelector(".punchline");
  const revealBtn = document.querySelector(".revealBtn");

  revealBtn.addEventListener("click", () => {
    punchline.classList.remove("is-hidden");
    punchline.style.transition = "03.s ease-out";
  });
};

showJokes();
