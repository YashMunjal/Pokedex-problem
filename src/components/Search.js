import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import "./Cards.css";

function Search() {
  const [isLoading, setIsLoading] = useState("true");
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [pokes, setPokes] = useState([]);
  const [page, setPage] = useState(0);

  var pokemonList = [];
  const APILink = `https://pokeapi.co/api/v2/pokemon/?offset=${page}&limit=${20}`;

  useEffect(() => {
    getPokes();
  }, [query]);

  const getPokes = async () => {
    const response = await fetch(APILink);
    const data = await response.json();
    //setPokes(data.results);
    setIsLoading(false);
    setPokes([...data.results]);
    // console.log(pokes);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const updatePageNext = (e) => {
    setPage(page + 20);
    console.log(page);
    setIsLoading(true);
    getPokes();
  };
  const updatePagePrev = (e) => {
    if(page===0){
        return;
    }
    setPage(page - 20);
    console.log(page);
    setIsLoading(true);
    getPokes();
  };

  return (
    <div>
      <form className="search-form" onSubmit={getSearch}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
        <hr color="red" />
      </form>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="cards-list">
          {pokes.map((i) => (
            <Cards key={i.name} name={i.name} url={i.url} />
          ))}
        </div>
      )}

      <button onClick={updatePagePrev} className="pagination" style={{height:30+'px' , width:100+'px'}}>Previous</button>
      <button onClick={updatePageNext} className="pagination" style={{height:30+'px' , width:100+'px'}}>Next</button>
    </div>
  );
}
export default Search;
