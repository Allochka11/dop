import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "./components/Button";
type GetRequestType = {
    body: string
    id: number
    title: string
    userId: number
}

const App =  () => {
    const [getRequest, setGetRequest] = useState<Array<GetRequestType>>([]);

    const getRequestHandler = () => {
        setGetRequest([]);

    }

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setGetRequest(json))
    },[])

    return (
    <div className="App">
      <Button nickName={'Clean Page'} callback={getRequestHandler}/>
        <ul>
        {getRequest.map(el=> {
            return (
                    <li >
                        <span>{el.id} - </span>
                        <span>{el.userId} - </span>
                        <span>{el.title}</span>
                    </li>


            )
        })}
        </ul>


    </div>
  );
}
export default App;
