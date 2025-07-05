// api/events.js - Vercel serverless function
const { fetchTicketmasterEvents } = require('../src/lib/fetchTicketmasterEvents');

// Cache data globally (persists across function calls)
let cachedEvents = null;
let lastFetch = 0;
const CACHE_DURATION = 8 * 60 * 60 * 1000; // 8 hours

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const now = Date.now();
    const cacheExpired = (now - lastFetch) > CACHE_DURATION;
    const forceRefresh = req.query.refresh === 'true';

    // Return cached data if still valid
    if (cachedEvents && !cacheExpired && !forceRefresh) {
      console.log(`Serving ${cachedEvents.length} cached events`);
      return res.status(200).json(cachedEvents);
    }

    // Fetch fresh data
    console.log('Fetching fresh concert data...');
    const apiKey = process.env.TM_API_KEY;
    
    if (!apiKey) {
      throw new Error('Missing Ticketmaster API key');
    }

    const events = await fetchTicketmasterEvents(apiKey);
    
    // Update cache
    cachedEvents = events;
    lastFetch = now;
    
    console.log(`Successfully fetched ${events.length} events`);
    
    // Add cache headers
    const maxAge = CACHE_DURATION / 1000;
    res.setHeader('Cache-Control', `public, max-age=${maxAge}`);
    
    return res.status(200).json(events);
    
  } catch (error) {
    console.error('API Error:', error.message);
    
    // Return cached data if available, even if expired
    if (cachedEvents) {
      console.log('Serving stale cached data due to error');
      return res.status(200).json(cachedEvents);
    }
    
    return res.status(500).json({ 
      error: 'Failed to fetch events',
      message: error.message 
    });
  }
}
