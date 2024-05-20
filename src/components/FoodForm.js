import React, { useState } from 'react';
import axios from 'axios';

const FoodForm = ({ onAddFood }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [carbs, setCarbs] = useState('');
  const [fats, setFats] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const fetchFoodData = async (foodName) => {
    const appId = ''; // Substitua pelo seu App ID
    const appKey = ''; // Substitua pela sua App Key
    setLoading(true);
    setError('');
    try {
      console.log(`Buscando dados para o alimento: ${foodName}`);
      const response = await axios.get(`https://api.edamam.com/api/food-database/v2/parser?ingr=${foodName}&app_id=${appId}&app_key=${appKey}`);
      console.log('Resposta da API:', response.data);

      if (response.data.hints.length > 0) {
        setSuggestions(response.data.hints);
      } else {
        setSuggestions([]);
        setError('Nenhuma informação nutricional encontrada.');
      }
    } catch (error) {
      console.error('Erro ao buscar dados do alimento:', error.response ? error.response.data : error.message);
      setError('Erro ao buscar dados do alimento.');
    }
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const quantityFloat = parseFloat(quantity);

    if (isNaN(quantityFloat) || quantityFloat <= 0) {
      alert('A quantidade deve ser um número maior que zero.');
      return;
    }

    const formattedName = name.trim().charAt(0).toUpperCase() + name.trim().slice(1).toLowerCase();

    const newFood = {
      name: formattedName,
      quantity: quantityFloat,
      calories: parseFloat(calories),
      protein: parseFloat(protein),
      carbs: parseFloat(carbs),
      fats: parseFloat(fats)
    };
    onAddFood(newFood);

    // Limpar os campos do formulário após adicionar um novo alimento
    setName('');
    setQuantity('');
    setCalories('');
    setProtein('');
    setCarbs('');
    setFats('');
    setSuggestions([]);
  };

  const handleNameChange = (e) => {
    const foodName = e.target.value;
    setName(foodName);
    if (foodName) {
      fetchFoodData(foodName);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    const food = suggestion.food;
    setName(food.label);
    setCalories(food.nutrients.ENERC_KCAL || 0);
    setProtein(food.nutrients.PROCNT || 0);
    setCarbs(food.nutrients.CHOCDF || 0);
    setFats(food.nutrients.FAT || 0);
    setSuggestions([]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={handleNameChange} 
        placeholder="Nome do alimento" 
        required 
      />
      {loading && <p>Carregando dados nutricionais...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {suggestions.length > 0 && (
        <ul style={{ border: '1px solid #ccc', maxHeight: '150px', overflowY: 'scroll', padding: '0', margin: '0' }}>
          {suggestions.map((suggestion, index) => (
            <li 
              key={index} 
              onClick={() => handleSuggestionClick(suggestion)} 
              style={{ cursor: 'pointer', padding: '10px', listStyleType: 'none' }}
            >
              {suggestion.food.label}
            </li>
          ))}
        </ul>
      )}
      <input 
        type="number" 
        step="0.01" 
        value={quantity} 
        onChange={(e) => setQuantity(e.target.value)} 
        placeholder="Quantidade" 
        required 
      />
      <input 
        type="number" 
        step="0.01" 
        value={calories} 
        onChange={(e) => setCalories(e.target.value)} 
        placeholder="Calorias" 
        required 
      />
      <input 
        type="number" 
        step="0.01" 
        value={protein} 
        onChange={(e) => setProtein(e.target.value)} 
        placeholder="Proteínas" 
        required 
      />
      <input 
        type="number" 
        step="0.01" 
        value={carbs} 
        onChange={(e) => setCarbs(e.target.value)} 
        placeholder="Carboidratos" 
        required 
      />
      <input 
        type="number" 
        step="0.01" 
        value={fats} 
        onChange={(e) => setFats(e.target.value)} 
        placeholder="Gorduras" 
        required 
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default FoodForm;
