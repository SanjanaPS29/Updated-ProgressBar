import React,{useReducer, useMemo} from 'react'


function reducer(state,action){

    switch(action.type){
        case 'inc': return state+1;
        break;

        case 'dec': return state-1;
        break;

        default:
            throw new Error();
    }
}


function Reducer() {

    const count=0;
const [state,dispatch]= useReducer(reducer,0);

const expCount = useMemo(()=>{

    return count**2;
},[count])

  return (
    <>
Count :{state}

<button onClick={() => dispatch({type:'dec'})}>-</button>
<button onClick={() => dispatch({type:'inc'})}>+</button>

    </>
  )
}

export default Reducer