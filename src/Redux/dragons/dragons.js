const DRAGONS = 'DRAGONS';

const initialDragonsState = [{

}];

const dragonsReducer = (state = initialDragonsState, action) => {
  switch (action.type) {
    case DRAGONS:
      return action.payload;
    default:
      return state;
  }
};

export default dragonsReducer;
