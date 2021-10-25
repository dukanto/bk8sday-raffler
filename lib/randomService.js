import random from "random";

const _getRandoms = async function(qty, max) {
  return Array.apply(null, Array(qty)).map(e => {
    return random.int(1, max);
  });
}

const _countUnique = function(set) {
  return new Set(set).size;
}

const getRandoms = async function(qty, max) {
  let randoms = await _getRandoms(qty, max);
  let i = 0;
  while (randoms.lenght < _countUnique(randoms) || i < 10) {
    randoms = await _getRandoms(qty, max);
    i++; //escape clause :D
  }
  return randoms;
}

export default getRandoms;