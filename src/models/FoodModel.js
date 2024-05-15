class FoodModel{
    constructor (name, quantity, calories, protein, carbs, fats, water){
        this.name = name;
        this.quantity = quantity;
        this.calories = calories;
        this.protein = protein;
        this.carbs = carbs;
        this.fats = fats;
        this.water = water;
    }

    getTotalCalores(){
        return this.calories * this.quantity
    }
}

export default FoodModel;