import SearchFilter from '../components/search/SearchFilter';
import ResultDisplay from '../components/search/ResultDisplay';

function Search() {
  return (
    <section className="flex flex-col w-full place-self-center max-w-screen-xl h-full">
      <SearchFilter />
      <ResultDisplay />
    </section>
  );
}

export default Search;
