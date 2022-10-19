
import { getParticipants } from '../../../lib/planetScaleService';
import getRandoms from '../../../lib/randomService';

export default async function winners(req, res) {

  if (req.method === 'GET') {
    try {
      const qty = 2; // we double them, so we have fallbacks
      const participants = await getParticipants();
      console.log(`Will draw ${qty} from ${participants.length} participants`);
      const randoms = await getRandoms(qty, participants.length);
      const peopleWhoWon = randoms.map((r,i) => {
        return {
          ...participants[r - 1],
          fallback: i >= (qty/2)
        }
      }); 
      return res.status(200).json({ peopleWhoWon });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: 'Something went wrong' });
    }
  } else {
    return res.status(405).json({ msg: 'Method not allowed' });
  }

}
