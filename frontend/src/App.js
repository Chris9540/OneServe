import React, {useEffect, useState} from 'react';
import './App.css';
import Layout from "./Layout";
import InputForm from "./components/InputForm";
import {Services} from "./Services";
import List from "./components/List";

function App() {
    const [list, setList] = useState([]);
    useEffect(()=>{
        updateList();
    }, []);

    const updateList = () =>{
        Services.list().then(res=>{
            if (res.status === 200 && res.data) {
                setList(res.data);
            }
        })
    }

  return (
    <div className="App">
      <Layout>
        <InputForm updateList={updateList}/>
        <List list={list}/>
      </Layout>
    </div>
  );
}

export default App;
