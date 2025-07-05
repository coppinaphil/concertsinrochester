
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { fetchTicketmasterEvents } = require('../src/lib/fetchTicketmasterEvents.js');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

app.get('/events', async (req, res) => {
  const apiKey = process.env.TM_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'Missing Ticketmaster API key' });
  }

  try {
    const events = await fetchTicketmasterEvents(apiKey);
    res.json(events);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch events' });
  }
});

app.listen(PORT, () => {
  console.log(`🎧 Express API running at http://localhost:${PORT}`);
});
