import { Input, Button } from '@nextui-org/react';
import { Search } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { fetchRecipesAsync } from '../../features/recipes/recipesSlice';
import { useState } from 'react';

function SearchFilter() {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = (query: string) => {
    console.log(query);
    dispatch(fetchRecipesAsync(query));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e);
    e.preventDefault();
    handleSearch(query);
  };

  return (
    <form
      className="flex flex-row gap-3 w-full items-center place-self-center md:place-self-start p-6"
      onSubmit={handleSubmit}
    >
      <Input
        labelPlacement="inside"
        className="max-w-lg p-2"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        label="Search"
      ></Input>
      <Button isIconOnly type="submit">
        <Search />
      </Button>
    </form>
  );
}

export default SearchFilter;
