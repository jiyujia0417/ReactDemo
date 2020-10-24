let todo = [1,2,3,4,5];

function todolist (state = todo,action){
    if(action.type === 'ADD_TODO'){
        console.log(action);
        return [...state,action.value]
    }
    return state;
}
export default todolist;