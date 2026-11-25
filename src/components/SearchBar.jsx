export default function SearchBar() {
  return (
    <form className="search-bar" role="search" onSubmit={(event) => event.preventDefault()}>
      <span className="search-symbol" aria-hidden="true">⌕</span>
      <input aria-label="Search for a city" placeholder="Search for a city..." />
      <kbd>⌘ K</kbd>
    </form>
  );
}
