import { addParticipant } from '../../../lib/planetScaleService';

export default async function winners(req, res) {
  if (req.method === 'POST') {
    try {
      const body = req.body;
      const { name, email } = JSON.parse(body);
      const newParticipant = await addParticipant(name, email);
      return res.status(200).json({ name: newParticipant.name, email: newParticipant.email });
    } catch (err) {
      console.error(err);
      console.log(err.code)
      const errorMsg = err.code === 'P2002' ? 'email is already registered' : 'Something went wrong';
      return res.status(500).json({ msg: errorMsg });
    }
  } else {
    return res.status(405).json({ msg: 'Method not allowed' });
  }
  
}
