import fs from "fs";

export const writeFileForAnime = (data) => {
  fs.writeFileSync(
    "README.md",

    `
<img src="svg/nai.svg" />

<p>
  <h2>Tools</h2>
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=git,bash,ubuntu,tensorflow,pytorch,docker,raspberrypi" />
  </a>

  <br />

  <h2>Programming Languages</h2>

  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=python,c,cpp" />
  </a>
</p>

<br />

<h2 align="center">There's always a good anime to watch every day 😀</h2>
<h3><i>Good Quote</i></h3>

<blockquote>
<i>
<q>${data.text}</q> - ${data.author}
</i>
</blockquote>

<br />

<h3><i>Random anime</i></h3>

<h4>
  <strong>🥭 <u>Title:</u></strong> ${data.title}
</h4>

<h4>🌿 <u>English Title:</u> ${data.englishTitle}</h4>

<img align="right" width="165" src=${data.imageSrc} />

<h4>🌱 Score: ${data.score}</h4>

<h4>🌲 Type: ${data.type}</h4>

<h4>🌴 Aired: ${data.startDate}</h4>

<h4>🌵 Genres: ${data.genres}</h4>

<h4>🥑 Episodes: ${data.episodeCount}</h4>

<h4>🍏 Rating: ${data.rating}</h4>

<br />

🍂 *More information: [${data.title}](${data.url})*
    `
  );
};
