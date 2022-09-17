import React from 'react'
import {Stack} from '@mui/material'

 import {categories} from '../utils/constants'

const Sidebar = ({selectedCategory, setselectedCategory}) => (
    <Stack
    direction="row"
    sx={{ overflowY: "auto", height:{ sx: "auto", md:'95%'}, flexDirection: { md: 'column'}}}>
        {categories.map((category) =>(
            <button key={category.name} className='category-btn' onClick={() => setselectedCategory(category.name)}
            style={{ backgroundColor: category.name === selectedCategory && '#FC1503', color: 'white'}}>
                <span style={{color: category.name === selectedCategory ? 'white' : 'red', marginRight: '15px'}}>{category.icons}</span>
                <span>{category.name}</span>
            </button>
        ))}
    </Stack>
)

export default Sidebar