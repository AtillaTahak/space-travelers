const MISSIONS = 'MISSIONS';

const initialMissionsState = [{

}];

const missionsReducer = (state = initialMissionsState, action) => {
  switch (action.type) {
    case MISSIONS:
      return action.payload;
    default:
      return state;
  }
};

export default missionsReducer;
