export class detalleResult {
    meals: buscarDetalle[] = [];
}

export class buscarDetalle {
    idMeal : string = ''; //codigo
    strMeal: string = ""; //titulo
    strDrinkAlternative: string = ""; // debida alternativa
    strCategory: string = ""; //categoria
    strArea: string = ""; // pais
    strInstructions: string = ""; //instrucciones
    strMealThumb: string = ""; //imagen
}