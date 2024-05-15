import React, {useState} from "react";

const FoodForm = ({onAddFood}) => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [calories, setCalories] = useState('');
    const [protein, setProtein] = useState('');
    const [carbs, setCarbs] = useState('');
    const [fats, setFats] = useState('');

    const hanldeSubmit = (e) => {
        e.preventDefault();
        const newFood= {
            name,
            quantity: parseInt(quantity),
            calories: parseInt(calories),
            protein: parentInt(protein),
            carbs: parenInt(carbs),
            fats: parentInt(fats)
        };

        onAddFood(newFood);
         
        setName('');
        setQuantity('');
        setCalories('');
        setProtein('');
        setCarbs('');
        setFats('');
    };

    return(

        <form onSubmit={hanldeSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome do alimento"/>
            <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Quantidade do alimento"/>
            <input type="number" value={calories} onChange={(e) => setCalories(e.target.value)} placeholder="Quantidade de calorias"/>
            <input type="number" value={protein} onChange={(e) => setProtein(e.target.value)} placeholder="Quantidade de proteinas"/>
            <input type="number" value={carbs} onChange={(e) => setCarbs(e.target.value)} placeholder="Quantidade de carboidratos"/>
            <input type="number" value={fats} onChange={(e) => setfats(e.target.value)} placeholder="Quantidade de Fats"/>
            <button type="submit">Adicionar</button>

        </form>
    );


};

export default FoodForm;