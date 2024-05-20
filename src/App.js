// src/App.js

import React, { useState, useEffect } from 'react';
import FoodForm from './components/FoodForm';
import FoodList from './components/FoodList';
import FoodController from './controllers/FoodController';

const App = () => {
  const [foods, setFoods] = useState(() => {
    const savedFoods = localStorage.getItem('foods');
    return savedFoods ? JSON.parse(savedFoods) : FoodController.foods;
  });

  useEffect(() => {
    localStorage.setItem('foods', JSON.stringify(foods));
  }, [foods]);

  const handleAddFood = (newFood) => {
    FoodController.addFood(newFood);
    setFoods([...FoodController.foods]);
  };

  const handleRemoveFood = (index) => {
    FoodController.removeFood(index);
    setFoods([...FoodController.foods]);
  };

  const handleUpdateFood = (index, updatedFood) => {
    FoodController.updateFood(index, updatedFood);
    setFoods([...FoodController.foods]);
  };

  return (
    <div>
      <h1>Contador de Calorias</h1>
      <FoodForm onAddFood={handleAddFood} />
      <FoodList foods={foods} onRemoveFood={handleRemoveFood} onUpdateFood={handleUpdateFood} />
    </div>
  );
};

export default App;
