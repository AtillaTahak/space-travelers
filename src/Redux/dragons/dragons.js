const DRAGONS = 'DRAGONS';

initialDragonsState =[{

}]

const rocketsReducer =(state=initialRocketState, action) =>{
    switch(action.type){
        case DRAGONS:
            return action.payload;
        default:
            return state;

    }
}
