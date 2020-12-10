/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;

  // TODO - sort by cost descending (most expensive goes first)
  if(trips){
    output = trips.sort((a , b) => { 
      b = Number(b.cost.replace(/[^0-9.-]+/g,''));
      a = Number(a.cost.replace(/[^0-9.-]+/g,''));

      return b - a;
    });
  } 
  
  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));

  }
  
  // TODO - filter by duration
  if(filters.duration){
    const durationMin = filters.duration.from;
    const durationMax = filters.duration.to;
    output = output.filter(trip => trip.days >= durationMin && trip.days <= durationMax);
  }

  // // TODO - filter by tags
  if(filters.tags){
    const tags = new RegExp(filters.tags, 'i');
    output = output.filter(trip => tags.test(trip.tags));  
  } 


  return output;
};

export const getTripById = ({trips}, tripId) => {
  const filtered = trips.filter(trip => new RegExp(tripId, 'i').test(trip.id));


  console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered[0] : {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) => {
  const filtered = trips.filter(trip => new RegExp(countryCode, 'g').test(trip.country.code));

  console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered.length ? filtered : [{error: true}];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
