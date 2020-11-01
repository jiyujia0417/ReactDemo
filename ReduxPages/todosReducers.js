// reducer-是一个纯函数（没有副作用，有相同的输入一定会有相同的输出） 
//第一个参数接收状态
let todo = [1, 2, 3, 4, 5];
//存放初始状态，以及我们对于状态要进行处理的逻辑。这里是更新装填的唯一的地方
//以后逻辑复杂之后，我们拆分reducer
//比如一个页面一个reducer，或者一个功能一个reducer
function todolist(state = todo, action) {
    if (action.type === 'ADD_TODO') {
        //返回值一定是一个不可变对象
        //引用类型，一定不能是一个地址，一定是一个新的地址能够检测到状态发生变化了
        return [...state, action.value]
    }
    if (action.type === 'DEL_TODO') {
        //删掉action.index即可
        let arr = [...state];
        arr.splice(action.index,1);
        return arr;
    }
    return state;
}
export default todolist;