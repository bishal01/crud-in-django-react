import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container
,Grid ,Button} from '@material-ui/core';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        
        width: '25ch',
      },
      grid: {
          flexGrow: 1,
          padding:"2rem"
        },
    },
  }));

const Update = () => {
    const classes=useStyles()
    const [image,setimage ] = useState(null)
    const [name,setname ] = useState('')
    const [price,setprice ] = useState('')
    const [desc,setdesc ] = useState('')
    const [category,setcategory ] = useState('')
    const history=useHistory()
    const {id}=useParams()

    const getdata=async()=>{
        const res=await axios.get(`http://127.0.0.1:8000/api/${id}/`)
        const data=res.data
        console.log(data)
        setimage(data.image)
        setname(data.name)
        setprice(data.price)
        setdesc(data.description)
        setcategory(data.category)

    }
    useEffect(()=>{
        getdata()
            },[id])
    const updatedata=async()=>{
        let formfield=new FormData()
        formfield.append('name',name)
        formfield.append('price',price)
        formfield.append('description',desc)
        formfield.append('category',category)

        if (image!==null){
            formfield.append('image',image)
        }
        await axios({
            method:'PUT',
            url:`http://127.0.0.1:8000/api/${id}/`,
            data:formfield
        }).then(response=>{
            console.log(response.data)
            history.push('/')
        }).catch((err) => console.log(err));

    }






    return (
        <>
        < div style={{height:"100vh" ,width:"60vh", margin:"0 auto", display:"flex",alignItems:"center"}}>


        <Container>

        <Grid component={Paper}  className={classes.grid} container >

            <Grid item style={{padding:"1rem",display:"flex",justifyContent:"center"}} md={12} sm={12} xs={12}   >
            <div style={{width:"20vh",objectFit:"cover"}} >
             <img style={{width:"100%"}} src={image} alt="" />

                </div>

            </Grid>

        <Grid item style={{padding:"1rem",display:"flex",justifyContent:"center"}}  md={12} sm={12} xs={12}>
                    <Button
        variant="contained"
        component="label"
        >

        <input
        input="image"
        src={image}
        onChange={(e)=>setimage(e.target.files[0])}
            type="file"
        
        />
        </Button>

        </Grid>

        <Grid item style={{padding:"1rem",display:"flex",justifyContent:"center"}} md={12} sm={12} xs={12}>

        <TextField
        type="text"
        name="name" 
        value={name}
        onChange={(e)=>setname(e.target.value)}
        id="standard-basic"
            label="Enter YOur Name" />
            
        </Grid  >
        <Grid style={{padding:"1rem",display:"flex",justifyContent:"center"}}  md={12} sm={12} xs={12}>

        <TextField

        type="text"
        name="price" 
        value={price}
        onChange={(e)=>setprice(e.target.value)}
        id="standard-basic"
        label="Enter Your Price" />

        </Grid>
        <Grid item style={{padding:"1rem",display:"flex",justifyContent:"center"}}  md={12} sm={12} xs={12}>


        <TextField
        multiline
        type="text"
        name="desc" 
        value={desc}
        onChange={(e)=>setdesc(e.target.value)}
        id="standard-basic"
        label="Description" />

        </Grid>
        <Grid style={{padding:"1rem",display:"flex",justifyContent:"center"}}  md={12} sm={12} xs={12}>

        <TextField
        type="text"
        name="category" 
        value={category}
        onChange={(e)=>setcategory(e.target.value)}
        id="standard-basic"
        label="Category" />

        </Grid>

        <Grid item style={{padding:"1rem",display:"flex",justifyContent:"center"}} xs={12} sm={12} md={12}  >
        <Button variant="contained" color="primary"  onClick={updatedata} >
                        Submit
                        </Button>

        </Grid>

        </Grid>

            </Container>

        </div>
       
        </>
    )
}

export default Update
