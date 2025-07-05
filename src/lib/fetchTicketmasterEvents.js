
export async function fetchTicketmasterEvents(apiKey) {
  const cities = ['Rochester', 'Darien Center'];
  const venueKeyword = 'Constellation Brands-Marvin Sands Performing Arts Center: CMAC';
  const allEvents = [];

  for (const city of cities) {
    const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&city=${encodeURIComponent(city)}&countryCode=US&classificationName=music`;

    const res = await fetch(url);
    if (!res.ok) continue;

    const json = await res.json();
    const events = json._embedded?.events || [];

    allEvents.push(
      ...events.map((event) => ({
        id: event.id,
        name: event.name,
        date: event.dates?.start?.dateTime,
        venue: event._embedded?.venues?.[0]?.name,
        url: event.url,
      }))
    );
  }

  const cmacUrl = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&keyword=CMAC&countryCode=US&classificationName=music`;
  const cmacRes = await fetch(cmacUrl);
  if (cmacRes.ok) {
    const cmacJson = await cmacRes.json();
    const cmacEvents = cmacJson._embedded?.events || [];

    allEvents.push(
      ...cmacEvents
        .filter(event => event._embedded?.venues?.[0]?.name === venueKeyword)
        .map((event) => ({
          id: event.id,
          name: event.name,
          date: event.dates?.start?.dateTime,
          venue: event._embedded?.venues?.[0]?.name,
          url: event.url,
        }))
    );
  }

  return allEvents;
}
