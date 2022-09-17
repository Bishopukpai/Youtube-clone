import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, Button } from '@mui/material'
const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const Navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if(searchTerm) {
      Navigate(`/search/${searchTerm}`)

      searchTerm('')
    }
  }
  return (
    <Paper component="form"
    onSubmit={handleSubmit} 
    sx={{ borderRadius: "none", border: '1px solid #e3e3e3', pl: 2, mr:{sm: 5}}}>
      <input className='search-bar' placeholder='Search...'
      value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}} sx={{width: 2}}/>
      <Button type="submit" variant="contained" sx={{ml: 2}}>Search</Button>
    </Paper>
  )
}

export default Searchbar