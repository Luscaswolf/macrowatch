import React, { useState } from 'react';

const FoodForm = ({ onAddFood }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [carbs, setCarbs] = useState('');
  const [fats, setFats] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = {
      name,
      quantity: parseInt(quantity),
      calories: parseInt(calories),
      protein: parseInt(protein),
      carbs: parseInt(carbs),
      fats: parseInt(fats)
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
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome do alimento" />
      <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Quantidade" />
      <input type="number" value={calories} onChange={(e) => setCalories(e.target.value)} placeholder="Calorias" />
      <input type="number" value={protein} onChange={(e) => setProtein(e.target.value)} placeholder="Proteínas" />
      <input type="number" value={carbs} onChange={(e) => setCarbs(e.target.value)} placeholder="Carboidratos" />
      <input type="number" value={fats} onChange={(e) => setFats(e.target.value)} placeholder="Gorduras" />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default FoodForm;