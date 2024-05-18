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

    getTotalCalories() {
        return this.quantity * this.calories;
      }

      getTotalProtein(){
        return this.quantity * this.protein;
      }
      getTotalCarbs(){
        return this.quantity * this.carbs
      }
      getTotalFats(){
        return this.quantity * this.fats
      }
    }





export default FoodModel;