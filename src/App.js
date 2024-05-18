import React, { useState } from 'react';
import FoodForm from './components/FoodForm';
import FoodList from './components/FoodList';
import FoodController from './controllers/FoodController';

const App = () => {
  const [foods, setFoods] = useState(FoodController.foods);

  const handleAddFood = (newFood) => {
    FoodController.addFood(newFood);
    setFoods([...FoodController.foods]); // Atualizar o estado com a nova lista de alimentos
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