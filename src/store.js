import { createStore, createEvent, createEffect } from 'effector';

export const addItem = createEvent();
export const clearItems = createEvent();

export const fetchItems = createEffect(async () => {
  const response = await fetch('https://eefec5537e209d2a.mokky.dev/team');
  if (!response.ok) {
    throw new Error('ошибка');
  }
  return response.json(); 
});

export const $itemsStore = createStore([])
  .on(addItem, (state, item) => [...state, item])
  .on(fetchItems.doneData, (state, items) => {
    return [...state, ...items.map(item => item.item)]; 
  })
  .on(clearItems, () => []); 


