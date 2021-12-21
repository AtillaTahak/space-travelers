const ROCKETS = 'ROCKETS';
initialRocketState =[{

}]

const rocketsReducer =(state=initialRocketState, action) =>{
    switch(action.type){
        case ROCKETS:
            return action.payload;
        default:
            return state;

    }
}