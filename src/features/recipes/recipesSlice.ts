import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchHeroRecipes, fetchRecipes } from './recipesAPI';
import { RecipeState, Hit } from '../../types';

const initialState: RecipeState = {
  recipes: [],
  heroRecipes: [],
  status: 'idle',
  error: null
};

export const fetchRecipesAsync = createAsyncThunk(
  'recipes/fetchRecipes',
  async (query: string) => {
    const response = await fetchRecipes(query);
    const recipes = response.hits.map((hit: Hit) => hit.recipe);
    return recipes;
  }
);

export const fetchHeroRecipesAsync = createAsyncThunk(
  'recipes/fetchHeroRecipes',
  async () => {
    const response = await fetchHeroRecipes();
    const recipes = response.hits;
    return recipes;
  }
);

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRecipesAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.recipes = action.payload;
      })
      .addCase(fetchRecipesAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      })
      .addCase(fetchHeroRecipesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchHeroRecipesAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.heroRecipes = action.payload;
      })
      .addCase(fetchHeroRecipesAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  }
});

export default recipesSlice.reducer;
