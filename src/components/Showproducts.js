import React,{useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container, Grid } from '@material-ui/core';
import axios from 'axios'
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin:"0 auto"
  },
  media: {
    height: 140,
  },
  grid: {
    flexGrow: 1,
  },
});

const Showproducts = () => {
  const classes=useStyles()
const [state, setstate] = useState([])


const getdata=async()=>{
 const res=await axios.get('http://127.0.0.1:8000/api/')
 const data=await res.data
 setstate(data)

}
useEffect(()=>{
  getdata()
  },[])
    return (
        <>
        <Container style={{marginTop:"3rem"}} >
          <Grid  container className={classes.grid} >
        
          { state.map((s)=>{
                  return(
            
             
                <Grid style={{marginBottom:"1rem"}} item xs={12} md={4} sm={6} >

                <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={s.image}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {s.name}
                    </Typography>
               <Typography variant="body1" color="initial">{s.price}</Typography>
               <Typography variant="body2" color="initial">{s.category}</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button component={Link} to={`/detail/${s.id}`} size="small" color="primary">
                    View 
                  </Button>
                  <Button component={Link} to={`/update/${s.id}`} size="small" color="primary">
                    Update
                  </Button>
                </CardActions>
              </Card>
      

              </Grid>
                          )
                        })}
              
          
      
          </Grid>
          </Container>


        </>
    )
}

export default Showproducts
