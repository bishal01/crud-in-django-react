import axios from 'axios'
import React ,{useEffect,useState} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Button from '@material-ui/core/Button';


const Detail = () => {
    const {id}=useParams()
    const [state, setstate] = useState()
    const history=useHistory()
    const getdata=async()=>{
        const res=await axios.get(`http://127.0.0.1:8000/api/${id}/`)
        const data=res.data
        setstate(data)

    }
    useEffect(()=>{
    getdata()
    },[id])

    const deletedata=async()=>{
        await axios.delete(`http://127.0.0.1:8000/api/${id}/`)
        history.push('/')
        
    }
    return (
        <div style={{height:"30vh",objectFit:"center",width:"100vh"}} >
            {
                state? 
                <div>
                <img style={{width:"100%"}} src={state.image} alt="" />
                <Button variant="outlined" color="secondary " onClick={deletedata} >
                                    Delete
                                    </Button>
                  </div>
                
                
                :("sorry no data")
            }
        
        </div>
    )
}

export default Detail
