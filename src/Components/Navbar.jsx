import React from 'react'
import { Stack } from '@mui/material'
import {Link} from 'react-router-dom'
import Searchbar from './Searchbar'

const Navbar = () => (
  
    <Stack direction="row" alignItems="center" p={2} sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between'}}>
      <Link to="/" style={{display: 'flex', alignItems: 'center'}}>
        <img src="https://www.freeiconspng.com/thumbs/youtube-logo-png/hd-youtube-logo-png-transparent-background-20.png" width={50} height={50} alt="logo"/>
      </Link>
      <Searchbar />
    </Stack>
)

export default Navbar