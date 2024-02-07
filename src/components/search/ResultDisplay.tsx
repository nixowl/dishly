import ResultCard from './ResultCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

function ResultDisplay() {
  const recipes = useSelector((state: RootState) => state.recipes.recipes);
  return (
    <div className="gap-2 grid grid-cols-1 justify-items-center place-self-center sm:grid-cols-2 md:grid-cols-3 p-6">
      {recipes.map((recipe, index) => (
        <ResultCard key={index} recipe={recipe} />
      ))}
    </div>
  );
}

export default ResultDisplay;
