import React from "react";
import "../css/Recipebox.css";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import { Tooltip } from "@material-ui/core";
import Zoom from "@material-ui/core/Zoom";

export default function RecipeBox({ recipe, setFav }) {
  const labels = recipe["recipe"]["label"];
  const calories = Math.trunc(recipe["recipe"]["calories"]);
  const protein = Math.trunc(
    recipe["recipe"]["totalNutrients"]["PROCNT"]["quantity"]
  );

  const favBtn = () => {
    let fav = recipe["recipe"]["label"];
    setFav((favs) => [...favs, fav]);
  };

  const onClickHandler = () => {
    return window.open(recipe["recipe"]["url"]);
  };

  return recipe ? (
    <div className="recipebox">
      <Tooltip
        className="tooltip_img"
        title="Click to visit"
        TransitionComponent={Zoom}
        arrow
        placement="bottom"
      >
        <img
          className="Recipebox_img"
          src={recipe["recipe"]["image"]}
          alt="loading"
          onClick={() => window.open(recipe["recipe"]["url"])}
        />
      </Tooltip>
      <Tooltip title="Add to Favorites" placement="right" arrow>
        <button className="mui_fav" onClick={favBtn}>
          <FavoriteRoundedIcon />
        </button>
      </Tooltip>
      <p className="Recipebox_label" onClick={onClickHandler}>
        {labels}
      </p>
      <h4 className="Recipebox_content">
        Calories: <span className="kcal">{calories}</span>kcal
      </h4>
      <h4 className="Recipebox_content">
        Protein: <span className="kcal">{protein}</span>grams
      </h4>
    </div>
  ) : (
    <p className="Recipebox_label">Content not available!</p>
  );
}
