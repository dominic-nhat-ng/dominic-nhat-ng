import { getHighRateAnime } from "./actions/getHighRateAnime.js";
import { writeFileForAnime } from "./actions/writeFileForAnime.js";
import { writeFileForQuote } from "./actions/writeFileForQuote.js";
import { getQuote } from "./actions/getQuote.js";


const run = async () => {
  const {
    text, author
  } = await getQuote();

  const {
    title,
    englishTitle,
    score,
    episodeCount,
    rating,
    url,
    type,
    startDate,
    genres,
    imageSrc
  } = await getHighRateAnime();

  // if (!text || !author) return;

  console.log({
    title,
    englishTitle,
    score,
    episodeCount,
    rating,
    url,
    type,
    startDate,
    genres,
    imageSrc,
    text,
    author
  });

  const formattedScore = `${score}/10`;

  writeFileForAnime({
    title,
    englishTitle,
    score: formattedScore,
    episodeCount,
    rating,
    url,
    type,
    startDate,
    genres,
    imageSrc,
    text, author
  });

  // writeFileForQuote({text, author});
};


run();
