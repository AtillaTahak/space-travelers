const DRAGONS = 'DRAGONS';
const RESERVE_DRAGON = 'RESERVE_DRAGON';
const CANCEL_RESERVATION = 'CANCEL_RESERVATION';

const dragonsReducer = (state = [], action) => {
  switch (action.type) {
    case DRAGONS:
      return action.dragons;
    case RESERVE_DRAGON:
      const newState = state.map((dragon) => {
        if (dragon.id !== action.id) return dragon;
        return { ...dragon, reserved: true };
      });
      return newState;
    default:
      return state;
  }
};

const getDragons = async () => {
  const dragonsBag = [];

  const dragons = await fetch(
    'https://api.spacexdata.com/v3/dragons',
    {
      method: 'GET',
    },
  );

  const result = await dragons.json();

  console.log(result);

  Object.entries(result).forEach((dragon) => {
    const mDragon = dragon[1];
    dragonsBag.push({
      id: mDragon.id,
      name: mDragon.name,
      description: mDragon.description,
      image: mDragon.flickr_images[0],
      reserved: false,
    });
  });

  return {
    type: DRAGONS,
    dragons: dragonsBag,
  };
};

const reserveDragon = (id) => ({
  type: RESERVE_DRAGON,
  id,
});

const cancelReservation = (id) => ({
  type: CANCEL_RESERVATION,
  id,
});

export { getDragons, reserveDragon };
export default dragonsReducer;
