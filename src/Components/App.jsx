import React, { useState } from "react";
import "../css/App.css";
import Axios from "axios";
import RecipeBox from "./Recipebox";
import "../css/Logo.css";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Tooltip from "@material-ui/core/Tooltip";
import Fade from "@material-ui/core/Fade";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [dietLabel, setDietLabel] = useState("balanced");
  const [fav, setFav] = useState([]);

  const YOUR_APP_ID = `57952171`;
  const YOUR_APP_KEY = "00f7a6e81c282250db743f14453b203b";
  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&diet=${dietLabel}`;

  async function getRecipes() {
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  const empty = () => {
    setQuery("");
  };

  const display = () => {
    localStorage.setItem("fav", JSON.stringify(fav));
  };
  display();

  return (
    <div className="App">
      <div className="million">
        <h2>Search through 2.3 million recipes!</h2>
      </div>
      <form className="app_searchForm" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search a Recipe"
          autoComplete="off"
          className="app_input"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        ></input>
        <Tooltip
          title="DietLabels"
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 400 }}
        >
          <select
            className="app_healthlabel"
            onChange={(e) => setDietLabel(e.target.value)}
          >
            <option value="balanced">Balanced</option>
            <option value="high-protein">High-protein</option>
            <option value="high-fiber">High-fiber</option>
            <option value="low-fat">Low-fat</option>
            <option value="low-carb">Low-carb</option>
            <option value="low-sodium">Low-sodium</option>
          </select>
        </Tooltip>
        <Tooltip
          title="Search"
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 400 }}
        >
          <IconButton
            aria-label="search"
            className="app_submit"
            type="submit"
            value="Search"
          >
            <SearchIcon />
          </IconButton>
        </Tooltip>
        <Tooltip
          title="Empty input"
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 400 }}
        >
          <IconButton aria-label="delete">
            <DeleteIcon className="app_delete" onClick={empty} />
          </IconButton>
        </Tooltip>
      </form>
      <div className="app_recipe">
        {recipes.map((recipe) => {
          return <RecipeBox setFav={setFav} recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default App;
