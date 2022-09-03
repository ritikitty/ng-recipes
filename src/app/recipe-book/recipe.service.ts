import { Subject } from 'rxjs/internal/Subject';

import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Vegan Cheese Cake',
      'Dieser New York Cheesecake ist ein Veganer Käsekuchen.',
      'https://biancazapatka.com/wp-content/uploads/2019/06/cheesecake-recipe-vegan-strawberry-raspberry-sauce-720x1080.jpg',
      [new Ingredient('Zitrone', 3), new Ingredient('Seidentofu', 2)]
    ),
    new Recipe(
      'Veganer Avocado-Linsen-Salat',
      'This is simply a test.',
      'https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      [new Ingredient('Öl', 1), new Ingredient('Kräutersalz', 2)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
