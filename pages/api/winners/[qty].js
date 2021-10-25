
import getPeople from '../../../lib/netlifyService';
import getRandoms from '../../../lib/randomService';

let peopleWhoWon = [];
const getParticipants = async function() {
  const people = await getPeople();
  const participants = toParticipants(people);
  return unique(participants);
};

const toParticipants = function(people) {
  return people.map((person) => {
    return {name: person.name, email: person.email}
  });
}

const unique = function(people) {
  return people.filter((person, index, self) =>
    index === self.findIndex((p) => (
      p.email === person.email
    ))
  )
};

export default async function winners(req, res) {
  const qty = (req.query.qty ? parseInt(req.query.qty, 10) : 1) * 2; // we double them, so we have fallbacks

  const participants = await getParticipants();
  const randoms = await getRandoms(qty, participants.length);
  console.log(randoms)
  peopleWhoWon = randoms.map((r,i) => {
    return {
      ...participants[r - 1],
      fallback: i >= (qty/2)
    }
  }); 
  res.status(200).json(peopleWhoWon);
}
