import { Food } from "./app/shared/models/Foods";

export const sample_foods: Food[] = [
  {
    id: '1',
    name: 'Chicken Soupt',
    price: 9,
    cookTime: '40-50',
    favorite: false,
    origins: ['india', 'asia'],
    stars: 3.0,
    imageUrl: 'assets/food-1.jpg',
    tags: ['SlowFood', 'Soup']
  },
  {
    id: '2',
    name: 'Pizza Vegetables',
    price: 250,
    cookTime: '40-50',
    favorite: true,
    origins: ['italy', 'europe'],
    stars: 4.0,
    imageUrl: 'assets/food-2.jpg',
    tags: ['SlowFood', 'Pizza Vegetables']
  },
  {
    id: '3',
    name: 'Lavash',
    price: 4,
    cookTime: '40-50',
    favorite: false,
    origins: ['georgia', 'caucasus'],
    stars: 3.0,
    imageUrl: 'assets/food-3.jpg',
    tags: ['FastFood', 'Lavash']
  },
  {
    id: '4',
    name: 'Pizza Paperoni',
    price: 9,
    cookTime: '10-20',
    favorite: false,
    origins: ['russia', 'europe'],
    stars: 3.0,
    imageUrl: 'assets/food-4.jpg',
    tags: ['FastFood', 'Pizza Paperoni']
  },
  {
    id: '5',
    name: 'Cesar',
    price: 13,
    cookTime: '40-50',
    favorite: false,
    origins: ['italy', 'europe'],
    stars: 3.0,
    imageUrl: 'assets/food-5.jpg',
    tags: ['Salad', 'Cesar']
  },
  {
    id: '6',
    name: 'Olivie',
    price: 12,
    cookTime: '40-50',
    favorite: false,
    origins: ['italy', 'europe'],
    stars: 3.0,
    imageUrl: 'assets/food-6.jpg',
    tags: ['Salat', 'Olivie']
  }
]
