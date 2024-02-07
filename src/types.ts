export type RecipeBrief = {
  label: string;
  image: string;
  calories: number;
  cuisineType: string[];
  dishType: string[];
  mealType: string[];
  totalTime: number;
};

export type RecipeFull = RecipeBrief & {
  healthLabels: string[];
  cautions: string[];
};

export type Hit = {
  recipe: RecipeBrief;
};

export type RecipeState = {
  recipes: RecipeBrief[];
  heroRecipes: RecipeBrief[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};
