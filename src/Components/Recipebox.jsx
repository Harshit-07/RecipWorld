import React from 'react'
import "../css/Recipebox.css";
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import { Tooltip } from '@material-ui/core';
import Zoom from '@material-ui/core/Zoom';

export default function RecipeTile({ recipe, setFav}) {


  let rounds = recipe["recipe"]["calories"];
  let r1= Math.trunc(rounds);
  
  const favBtn = () =>{
    let fav = recipe["recipe"]["label"];
    console.log(fav);
    setFav(favs => [...favs, fav]);
  }
 
  return (
    recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
      <div className="recipebox">
        <Tooltip className="tooltip_img" title="Click to visit" TransitionComponent={Zoom} arrow placement="bottom"><img className="Recipebox_img" src={recipe["recipe"]["image"]} alt="loading" onClick={() => window.open(recipe["recipe"]["url"])}/></Tooltip>
        <Tooltip title="Add to Favorites" placement="right" arrow><button className="mui_fav" onClick={favBtn}><FavoriteRoundedIcon /></button></Tooltip>
        <p className="Recipebox_label" onClick={() => window.open(recipe["recipe"]["url"])}>{recipe["recipe"]["label"]}</p>
        <h4 className="Recipebox_content">Calories -<span className="kcal">{r1}</span> kcal</h4>
      </div>
      
    )
  );
}


