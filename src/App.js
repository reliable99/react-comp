
import { useState } from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import AddItem from './AddItem';

function App() {
  const [items, setItems] = useState([
    {
        id: 1,
        checked: true,
        item: "One half pound bag of Cocoa Covered Almonds Unsalted"
    },
    {
        id: 2,
        checked: false,
        item: "Item 2"
    },
    {
        id: 3,
        checked: false,
        item: "Item 3"
    }
]);

const [newItem, setNewItem] = ('')

const handleCheck = (id) => {
  const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
  setItems(listItems);
  localStorage.setItem('shoppinglist', JSON.stringify(listItems));
}

const handleDelete = (id) => {
  const listItems = items.filter((item) => item.id !== id);
  setItems(listItems);
  localStorage.setItem('shoppinglist', JSON.stringify(listItems));
}

const handleSubmit = (e) => {
  console.log('submitted')
}
  
  return (
    <div className='App'>
      <Header title = "Groseries List"/>
      <AddItem
      newItem={newItem}
      setItem={setNewItem}
      handleSubmit={handleSubmit}
      />
      <Content
       items={items}
       handleCheck={handleCheck}
       handleDelete={handleDelete}/>
      <Footer length={items.length}/>
    </div>
  );
}




export default App;
