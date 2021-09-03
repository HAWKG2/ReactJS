import React, {useState, useEffect, useReducer} from 'react'
import { act } from 'react-dom/test-utils'
import useGet from './useGet'

const url = 'https://mymoney-87a8c-default-rtdb.firebaseio.com/movimentacoes/2021-09.json'
const url2 = 'http://httpbin.org/ip'

function App() {
  const data = useGet(url)
  const data2 = useGet(url2)
  
  return (
    <div>
      <h1>MyMoney</h1>
      {JSON.stringify(data)}
      {data.loading && <p>Loading...</p>}
      <pre>{JSON.stringify(data2)}</pre>
    </div>
  );
  }
export default App;
