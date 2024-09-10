import {useUnit} from 'effector-react'; 
import { addItem, fetchItems, clearItems, $itemsStore } from './store';
import "./null.css";
import '/src/App.css';

const App = () => {
  const items = useUnit($itemsStore); 

  const handleAddItem = () => {
    const newItem = `Item ${items.length + 1}`;
    addItem(newItem);
  };

  const handleFetchItems = () => {
    fetchItems(); 
  };
  const handleClearItems = () => {
    clearItems(); 
  };
  return (
    <div className='content__container'>
      <div className='form__tig'>
        <h1>Список элементов</h1>
        <p>Простой способ добавления items</p>
        <button onClick={handleAddItem}>Добавить элемент</button>
        <button onClick={handleFetchItems}>Загрузить элементы</button>
        <button onClick={handleClearItems}>Удалить элементы</button> 
        {items.length > 0 && ( 
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div> 
    </div>
  );
};

export default App;



