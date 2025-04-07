import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Home from "./pages/Home"
import { decreaseByOne, increaseByAmount, increaseByOne } from './features/counterSlice';

function App() {
  const count = useSelector((state)=> state.counter?.value);
  const dispatch = useDispatch();
  console.log("count",count)
  return (
    <>
      <div className="bg-black text-white">
        <Home />

        {/* <div>
          <button onClick={()=> dispatch(decreaseByOne())} className='border'>Decrease by 1</button>
          <span>Current Count = {count}</span>
          <button onClick={()=> dispatch(increaseByOne())} className='border'>Increase by 1</button>

          <button onClick={()=> dispatch(increaseByAmount(10))}>10</button>
        </div> */}
      </div>
    </>
  )
}

export default App