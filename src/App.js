import React, { useState } from 'react';
import FoodForm from './components/FoodForm';
import FoodList from './components/FoodList';

const App = () => {
  const [foods, setFoods] = useState([]);

  const handleAddFood = (newFood) => {
    setFoods([...foods, newFood]);
  };

  return (
    <div>
      <h1>Contador de Calorias</h1>
      <FoodForm onAddFood={handleAddFood} />
      <FoodList foods={foods} />
    </div>
  );
};

export default App;
