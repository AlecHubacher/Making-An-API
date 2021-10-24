import './Search.css';
const SearchBar = () => (
    <div className="search123">
    <label htmlFor="header-search">
        <span className="visually-hidden">Search blog posts</span>
    </label>
    <input
        type="text"
        id="header-search"
        placeholder="Enter API endpoint"
        name="s"
    />
        <button type="submit">Search</button>
    </div>
);

export default SearchBar;