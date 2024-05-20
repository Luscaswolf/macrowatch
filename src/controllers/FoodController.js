// src/controllers/FoodController.js

import FoodModel from '../models/FoodModel';

class FoodController {
  constructor() {
    this.foods = []; // Array para armazenar os alimentos consumidos
  }

  addFood(newFoodData) {
    if (isNaN(newFoodData.quantity) || newFoodData.quantity <= 0) {
      console.error('A quantidade deve ser um número maior que zero.');
      return;
    }
    const newFood = new FoodModel(newFoodData.name, newFoodData.quantity, newFoodData.calories, newFoodData.protein, newFoodData.carbs, newFoodData.fats);
    this.foods.push(newFood);
    console.log('Alimento adicionado:', newFood);
  }

  removeFood(index) {
    this.foods.splice(index, 1);
    console.log('Alimento removido:', index);
  }

  updateFood(index, updatedFoodData) {
    if (isNaN(updatedFoodData.quantity) || updatedFoodData.quantity <= 0) {
      console.error('A quantidade deve ser um número maior que zero.');
      return;
    }
    this.foods[index] = new FoodModel(updatedFoodData.name, updatedFoodData.quantity, updatedFoodData.calories, updatedFoodData.protein, updatedFoodData.carbs, updatedFoodData.fats);
    console.log('Alimento atualizado:', index);
  }
}

export default new FoodController();
