import { getHighRateAnime } from "./actions/getHighRateAnime.js";
import { writeFileForAnime } from "./actions/writeFileForAnime.js";
import { writeFileForQuote } from "./actions/writeFileForQuote.js";
import { getQuote } from "./actions/getQuote.js";


const run = async () => {
  const {
    text, author
  } = await getQuote();

  if (!text || !author) return;

  // console.log({
  //   title,
  //   englishTitle,
  //   score,
  //   episodeCount,
  //   rating,
  //   url,
  //   type,
  //   startDate,
  //   genres,
  //   imageSrc
  // });

  // const formattedScore = `${score}/10`;

  // writeFileForAnime({
  //   // title,
  //   // englishTitle,
  //   // score: formattedScore,
  //   // episodeCount,
  //   // rating,
  //   // url,
  //   // type,
  //   // startDate,
  //   // genres,
  //   // imageSrc
  // });

  writeFileForQuote({text, author});
};


run();
