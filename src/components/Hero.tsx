import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { Image } from '@nextui-org/react';

function Hero() {
  const recipes = useSelector((state: RootState) => state.recipes.heroRecipes);
  return (
    <article className="w-full bg-red-500">
      {recipes.map((recipe, index) => (
        <div key={index}>
              <Image
                  removeWrapper
                  src={recipe.image}
                  alt={recipe.label}
              />
        </div>
      ))}
    </article>
  );
}

export default Hero;
