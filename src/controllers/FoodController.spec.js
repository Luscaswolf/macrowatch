import FoodController from './FoodController';
import FoodModel from '../models/FoodModel';

test('Adiciona e lista alimentos corretamente', () => {
    const controller = new FoodController();
    const food = new FoodModel('Maçã', 1, 95);
    controller.addFood(food);
    expect(controller.listFoods()).toContainEqual(food);
});