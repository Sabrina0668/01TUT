import Header  from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [items,setItems] =useState([
    {
      id:1,
      checked:true,
      item:" One half pound bag of Cocoa"
    },
    {
      id:2,
      checked:false,
      item:"item 2"
    },
    {
      id:3,
      checked :false,
      item: "item 3"
    }
  ]) ;

  const handleCheck = (id) => { 
    const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
    setItems(listItems);
    localStorage.setItem('shoppinglist',JSON.stringify(listItems));
   }
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id );
    setItems(listItems);
    localStorage.setItem('shoppinglist',JSON.stringify(listItems));
  }

  return (
    <div className="App">
      <Header title="Groceries  "/>
      <Content 
      items={items} 
      handlecheck={handleCheck} 
      handleDelete={handleDelete}/>
      <Footer />
      
    </div>
  );
}

export default App;
