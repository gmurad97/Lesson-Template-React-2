import "./Search.css";

const Search = () => {
    return (
        <div className="search">
            <div className="search__input-block">
                <input className="search__input" type="text" placeholder="Search form" />
            </div>
            <div className="search__button-block">
                <a href="/#" className="search__button-link">
                    <button className="search__button" type="button">Search</button>
                </a>
            </div>
        </div>
    );
}

export default Search;