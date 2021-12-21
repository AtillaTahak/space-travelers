const MISSIONS = 'MISSIONS';

initialMissionsState =[{

}]

const rocketsReducer =(state=initialRocketState, action) =>{
    switch(action.type){
        case MISSIONS:
            return action.payload;
        default:
            return state;

    }
}