import React, { useState } from 'react';
import './App.css';
import HeaderComponent from './components/header.component';
import InputComponent from './components/input.component';
import ListComponent from './components/list.component';

export interface ListItem
{
  id: number;
  value: string;
}

const App: React.FC = () => {

  const [listItems, setListItems] = useState<ListItem[]>([
    {
      id: 0,
      value: 'Cook Dinner'
    }
  ]);
  
  const [currentId, setCurrentId] = useState(1);

  const addListItem = (todo: string) =>
  {
    const newTodoItem: ListItem =
    {
      id: currentId,
      value: todo
    };

    setCurrentId(currentId + 1);
    setListItems([...listItems, newTodoItem]);

  }

  const removeListItem = (id: number) => 
  {
    // Filtering FOR items whose id do not match the id provided for deletion
    const newList = listItems.filter((i) => i.id !== id);
    setListItems(newList);
  }

  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <InputComponent
        addListItem ={(todo: string) => addListItem(todo)}
      ></InputComponent>
      <ListComponent
        removeListItem={removeListItem}
        listItems={listItems}
      ></ListComponent>
    </div>
  );
}

export default App;
