import FoodModel from "./FoodModel";

test('Calcula corretamente as calorias', () =>{
    const food = new FoodModel('Maçã', 2, 50, 13, 22, 40);
    expect(food.getTotalCalories()).toBe(100);
    expect(food.getTotalProtein()).toBe(26);
    expect(food.getTotalCarbs()).toBe(44);
    expect(food.getTotalFats()).toBe(80)
})