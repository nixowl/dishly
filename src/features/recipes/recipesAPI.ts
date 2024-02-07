export async function fetchRecipes(query: string) {
  console.log('fetching recipes...');
  const baseUrl = 'https://api.edamam.com/api/recipes/v2';
  const params = new URLSearchParams({
    type: 'public',
    q: query,
    app_id: import.meta.env.VITE_APP_ID as string,
    app_key: import.meta.env.VITE_APP_KEY as string
  });
  const response = await fetch(`${baseUrl}?${params}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (!response.ok) {
    throw new Error('Failed to fetch recipes');
  }
  const data = await response.json();
  return data;
}

export async function fetchHeroRecipes() {
  console.log('fetching recipes for hero section');

  // Finding current month and setting appropriate "season" as query
  const date = new Date().getMonth();

  let season = '';
  switch (true) {
    case date >= 2 && date <= 4: // March to May
      season = 'spring';
      break;
    case date >= 5 && date <= 7: // June to August
      season = 'summer';
      break;
    case date >= 8 && date <= 10: // September to November
      season = 'fall';
      break;
    case date === 10: // Thanksgiving
      season = 'thanksgiving';
      break;
    case date === 11: // Christmas
      season = 'christmas';
      break;
    case date === 11 || date === 0 || date === 1: // December to February
      season = 'winter';
      break;
  }

  const baseUrl = 'https://api.edamam.com/api/recipes/v2';
  const params = new URLSearchParams({
    type: 'public',
    q: season,
    app_id: import.meta.env.VITE_APP_ID as string,
    app_key: import.meta.env.VITE_APP_KEY as string,
    imageSize: 'large'
  });

  const response = await fetch(`${baseUrl}?${params}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (!response.ok) {
    throw new Error('Failed to fetch recipes for hero section');
  }
  const data = await response.json();
  return data;
}
