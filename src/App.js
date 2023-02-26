import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import './Scss/main.scss';

// Componets
import Header from './Components/page/Header/Header';
import EditPage from './Components/page/Edit/EditPage';

function App() {
    const [isEdit, setEdit] = useState(false);
    const loading = useSelector((state)=>state.user.loading);
    const error = useSelector((state)=>state.user.error);
    return (
        <div className="App">
            {isEdit ? 
                <EditPage setEdit={setEdit} />
             : 
                <Header setEdit={setEdit} />
            }
            {loading && <p className='loading'> Loading ... </p>}
            {!isEdit && error && (
                <p className='error'> Error when fetching data from sever !!!!</p>
            )}
        </div>
    );
}

export default App;
