import React from 'react';

const FoodList = ({ foods }) => {
  const totalCalories = foods.reduce((acc, food) => acc + food.calories * food.quantity, 0);
  const totalProtein = foods.reduce((acc, food) => acc + food.protein * food.quantity, 0);
  const totalCarbs = foods.reduce((acc, food) => acc + food.carbs * food.quantity, 0);
  const totalFats = foods.reduce((acc, food) => acc + food.fats * food.quantity, 0);

  return (
    <div>
      <h2>Lista de Alimentos</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index}>
            {food.name} - Quantidade: {food.quantity}, Calorias: {food.calories * food.quantity}, 
            Proteínas: {food.protein * food.quantity}, Carboidratos: {food.carbs * food.quantity}, 
            Gorduras: {food.fats * food.quantity}
          </li>
        ))}
      </ul>
      <h3>Totais</h3>
      <p>Calorias: {totalCalories}</p>
      <p>Proteínas: {totalProtein}g</p>
      <p>Carboidratos: {totalCarbs}g</p>
      <p>Gorduras: {totalFats}g</p>
    </div>
  );
};

export default FoodList;
