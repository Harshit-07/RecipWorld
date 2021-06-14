import React from 'react';
import '../css/Fav.css';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';

function Fav() {

      const labels = JSON.parse(localStorage.getItem("favs"));
      
      return(
            <>    
                  <div className="fav"><h2>Favorites (ﾉ◕ヮ◕)ﾉ*:･ ❤</h2></div>
                  <p>{labels.map(labels=><p className="labels"><FavoriteRoundedIcon className="mui_liked"/>{labels}</p>)}</p>     
            </>
      )
}

export default Fav;

