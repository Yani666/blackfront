import React from 'react';
import './App.css';
import RootNavigation from './app/navigation/RootNavigation';
import AppCtx from './app/hooks/context'

function App() {
  return (
   
    <div>
    <AppCtx>
    
   <RootNavigation/>
  
   </AppCtx>
   </div>
         

  );
}
export default App;
