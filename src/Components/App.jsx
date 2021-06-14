import React, { useState } from 'react';
import '../css/App.css';
import Axios from "axios";
import Recipebox from './Recipebox';
import '../css/Logo.css';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';

function App(){

  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [dietlabel,setDietlabel] = useState("balanced");
  const[favs,setFav] = useState([]);

  const YOUR_APP_ID =  `57952171`;
  const YOUR_APP_KEY = "00f7a6e81c282250db743f14453b203b";
  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&diet=${dietlabel}`;
  
  async function getRecipes() {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  }

  const empty = () =>{
    setquery("");
  }

  const display = ()=> {
    localStorage.setItem('favs',JSON.stringify(favs));
    console.log(favs);
  }
  display();

  return (
    <div className="App">
      <div className="million"><h2>Search through 2.3 million recipes!</h2></div>
      <form className="app_searchForm" onSubmit={onSubmit}>
        <input type="text" 
          placeholder="Search a Recipe"
          autoComplete="off"
          className="app_input"
          value={query}
          onChange={(event) => setquery(event.target.value)}>
        </input>
        <Tooltip title="DietLabels" TransitionComponent={Fade} TransitionProps={{ timeout: 400 }}>
        <select className="app_healthlabel">
            <option onClick={()=> setDietlabel("balanced")}>Balanced</option>
            <option onClick={()=> setDietlabel("high-protein")}>High-protein</option>
            <option onClick={()=> setDietlabel("high-fiber")}>High-free</option>
            <option onClick={()=> setDietlabel("low-fat")}>Low-fat</option>
            <option onClick={()=> setDietlabel("low-carb")}>Low-carbs</option>
            <option onClick={()=> setDietlabel("low-sodium")}>Low-sodium</option>
        </select>
        </Tooltip>
        <Tooltip title="Search" TransitionComponent={Fade} TransitionProps={{ timeout: 400 }}>
         <IconButton aria-label="search" 
          className="app_submit"
          type="submit"
          value="Search"
          >
            <SearchIcon />
         </IconButton>
        </Tooltip>
        <Tooltip title="Empty input" TransitionComponent={Fade} TransitionProps={{ timeout: 400 }}>
         <IconButton aria-label="delete">
          <DeleteIcon 
            className="app_delete"
             onClick={empty} 
            />
         </IconButton>
        </Tooltip> 
      </form>
      <div className="app_recipe">
        {   recipes.map((recipe) => {
          return (
            <Recipebox setFav={setFav} favs={favs} recipe={recipe} />
          )
        })}
      </div>
    </div>
  );
}

export default App;

