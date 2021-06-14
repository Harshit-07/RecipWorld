import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../assets/RWlogo.png';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import step1 from '../assets/step1.png';
import step2 from '../assets/step2.png';
import step3 from '../assets/step3.png';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import {NavLink} from './Navbar/NavbarElements';

const useStyles = makeStyles((theme) => ({
    root: {
      marginTop :'0px',
      minHeight: '100vh',
      backgroundImage:`url('${process.env.PUBLIC_URL}/assets/bg5.jpg ')`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      overflowX:'Hidden',
      overflowY:'Hidden',
    },
    roots :{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      fontFamily: 'Nunito',
      height:'100vh',
    },
    appbarTitle: {
      flexGrow : "1",
    },
    colorText:{
      color:"#F4744F",
      textShadow: '0 0 0.05em black',
    },

    title:{
      marginTop:'-450px',
      fontFamily:'poppins',
      fontSize:'4rem',
      color:'White',
      fontWeight:'bolder',
      textShadow: '0 0 0.05em black',
    },

    logo: {
      width:'270px',
      height:'200px',
      position: 'relative',
      top: '50%',
      left: '50%',
      marginTop: '60px',
      marginLeft: '-100px',
      borderRadius:'90px',
      opacity:'0.95',
    },

    globe:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      marginTop:'-586px',
      fontSize:'1.8rem',
      color:'white',
      textShadow: '0 0 0.15em black',
    },

    des:{
      paddingLeft:'300px',
      paddingRight:'300px',
      marginTop:'-35px',
      color:'black',
      fontSize:'1.4rem',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      textShadow:'0 0 0.15em white',
    },

    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      // color: theme.palette.text.secondary,
      backgroundColor:'#E2DEDE',
      marginLeft:'60px',
      marginRight:'60px',
      marginTop:'25px',
      marginBottom:'100px',
      borderRadius:'15px',
      opacity:'0.9',
    },
    paper1:{
      padding: theme.spacing(1),
      textAlign: 'center',
      background:'transparent',
      marginRight:'400px',
      marginLeft:'400px',
      marginTop:'-30px',
      text:'bolder',
      fontSize:'1.5rem',
      boxShadow: '0 0 0 transparent',
    },
    h2s:{
      color:'#FA7E26',
    },
    h2ss:{
      color:'white',
      textShadow:'0 0 0.15em black',
    },
    papersearch:{
      background:'transparent',
      boxShadow:'0 0 0 transparent',
      position: 'relative',
      top: '10%',
      left: '42%',
      marginBottom:'30px',
    },
    
    searchbtn:{
      background: '#fc4a1a',      
      background: '-webkit-linear-gradient(to right, #fc4a1a, #f7b733)',
      background: 'linear-gradient(to right, #fc4a1a, #f7b733)',
      borderRadius:'20px',
      color:'#fff',
      fontFamily:'poppins',
      fontWeight:'bold',
    },
    p1:{
      color:'black',
      fontSize:'1.2rem',
      fontFamily:'poppins',
      textShadow:'0 0 0.15em white',
      marginTop:'-14px',
    }
    
  }));

export default function Home (){
    const classes = useStyles();
    return(
        <>
          <div className={classes.root}>
          <img src={logo} className={classes.logo} alt="loading"/>
            <div className={classes.roots}> 
              <h4 className={classes.title}>Welcome to 
                <span className={classes.colorText}> RecipeWorld!</span>
              </h4>
              <br />
            </div>
            <div className={classes.globe}>
              <h4>(Explore the Food around the Globe.)</h4>
            </div>
            <div className={classes.des}>
              <center><h4>"Whether you're looking for healthy recipes, or ideas on how to use leftovers from your fridge, we've numerous recipes to choose from, so you'll be able to find the perfect dish"</h4></center>
            </div>
            <div>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Paper className={classes.papersearch}>
                  <NavLink to="/recipe">
                    <Button variant="contained" className={classes.searchbtn} endIcon={<SearchIcon></SearchIcon>}>
                      Search Recipes
                    </Button>
                  </NavLink> 
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper1}>
                  <h2 className={classes.h2ss}>~ How it Works ~</h2>
                  <h3 className={classes.p1}>It only takes a few simple steps to find the recipe you're looking for.</h3>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                    <img src={step1} alt="loading"/>
                  <h2 className={classes.h2s}>Search by Recipe</h2>
                  <p>Already know what you're looking for? Just type the recipe name in search and choose a recipe.</p></Paper>
              </Grid> 
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                    <img src={step2} alt="loading"/> 
                  <h2 className={classes.h2s}>Search by ingredients</h2>
                  <p>Looking for recipe ideas? Just input ingredients in the Ingredients filter and see what comes up.</p>
                  </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                    <img src={step3} alt="loading"/>
                  <h2 className={classes.h2s}>Filter recipes</h2>
                  <p>Want to keep only certain recipes?We have both diet and health filters to help you find the perfect recipe for you</p>
                </Paper>
              </Grid>
            </Grid>
            </div>
          </div>   
        </>
    );  
} 