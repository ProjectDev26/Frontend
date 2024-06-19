import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-food-selection',
  templateUrl: './food-selection.component.html',
  standalone: true,
  imports: [
    NgClass
  ],
  styleUrl: './food-selection.component.css'
})
export class FoodSelectionComponent {
  selectedFoods: { [key: string]: string[] } = {
    protein: [],
    carb: [],
    fat: [],
    dairy: [],
    fruit: []
  };
  proteinOptions: string[] = ['Chicken', 'Meat', 'Fish', 'Tuna', 'Egg', 'Turkey', 'Pork'];
  carbOptions: string[] = ['Rice', 'Potato', 'Sweet potato', 'Yucca', 'Beans', 'Peas', 'Quinoa', 'Pasta', 'Corn', 'Oats', 'Bread', 'Cereal'];
  fatOptions: string[] = ['Avocado', 'Peanut', 'Almond', 'Nuts', 'Olives', 'Chocolate', 'Chia'];
  dairyOptions: string[] = ['Milk', 'Yogurt', 'White Cheese', 'Cheese', 'Almond milk', 'Coconut milk', 'Soy milk'];
  fruitOptions: string[] = ['Banana', 'Strawberry', 'Apple', 'Blueberry', 'Pineapple', 'Papaya', 'Mandarine', 'Orange', 'Kiwi', 'Mango', 'Watermelon', 'Pear', 'Peach', 'Grapes', 'Melon', 'Passion fruit'];

  constructor(private router: Router) {}

  toggleFood(type: string, food: string): void {
    const index = this.selectedFoods[type].indexOf(food);
    if (index === -1) {
      this.selectedFoods[type].push(food);
    } else {
      this.selectedFoods[type].splice(index, 1);
    }
  }

  isSelected(type: string, food: string): boolean {
    return this.selectedFoods[type].indexOf(food) !== -1;
  }

  selectAll(type: string): void {
    const options = this.getOptionsByType(type);

    const allSelected = options.every(food => this.isSelected(type, food));
    if (!allSelected) {
      this.selectedFoods[type] = [...options];
    } else {
      this.selectedFoods[type] = [];
    }
  }

  getOptionsByType(type: string): string[] {
    switch (type) {
      case 'protein':
        return this.proteinOptions;
      case 'carb':
        return this.carbOptions;
      case 'fat':
        return this.fatOptions;
      case 'dairy':
        return this.dairyOptions;
      case 'fruit':
        return this.fruitOptions;
      default:
        return [];
    }
  }

  navigateToListNutritionist(): void {
    this.router.navigate(['list-nutritionists']).then();
  }

}
