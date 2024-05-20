// src/components/FoodForm.js

import React, { useState } from 'react';

const FoodForm = ({ onAddFood }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [carbs, setCarbs] = useState('');
  const [fats, setFats] = useState('');

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const quantityFloat = parseFloat(quantity);
    const caloriesFloat = parseFloat(calories);
    const proteinFloat = parseFloat(protein);
    const carbsFloat = parseFloat(carbs);
    const fatsFloat = parseFloat(fats);

    if (isNaN(quantityFloat) || quantityFloat <= 0) {
      alert('A quantidade deve ser um número maior que zero.');
      return;
    }

    const formattedName = capitalizeFirstLetter(String(name));

    const newFood = {
      name: formattedName,
      quantity: quantityFloat,
      calories: caloriesFloat,
      protein: proteinFloat,
      carbs: carbsFloat,
      fats: fatsFloat
    };
    onAddFood(newFood);

    // Limpar os campos do formulário após adicionar um novo alimento
    setName('');
    setQuantity('');
    setCalories('');
    setProtein('');
    setCarbs('');
    setFats('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome do alimento" required />
      <input type="number" step="0.01" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Quantidade" required />
      <input type="number" step="0.01" value={calories} onChange={(e) => setCalories(e.target.value)} placeholder="Calorias" required />
      <input type="number" step="0.01" value={protein} onChange={(e) => setProtein(e.target.value)} placeholder="Proteínas" required />
      <input type="number" step="0.01" value={carbs} onChange={(e) => setCarbs(e.target.value)} placeholder="Carboidratos" required />
      <input type="number" step="0.01" value={fats} onChange={(e) => setFats(e.target.value)} placeholder="Gorduras" required />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default FoodForm;
