import NetlifyAPI from 'netlify';

const getPeople = async function() {
  const client = new NetlifyAPI(process.env.NETLIFY_ACCESS_TOKEN);
  return client.listFormSubmissions({form_id: process.env.NETLIFY_FORM_ID});
};

export default getPeople;