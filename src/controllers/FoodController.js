import FoodModel from "../models/FoodModel";

class FoodController{
    constructor() {
        this.foods = [];
    }

    addFood(newFoodData){
        const newFood = new FoodModel(newFoodData.name, newFoodData.quantity, newFoodData.protein, newFoodData.carbs, newFoodData.fats);
        this.foods.push(newFood);

        console.log('Alimento Adicionado', newFood);
    }
}

export default new FoodController();