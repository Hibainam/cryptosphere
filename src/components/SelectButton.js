import { makeStyles } from '@material-ui/core'
import React from 'react'

const SelectButton = ({children,selected,onClick}) => {

 const useStyles = makeStyles({
   selectbutton:{
     border:"1px solid #eb81e7",
     borderRadius:5,
     padding:10,
     paddingLeft:20,
     paddingRight:20,
     fontFamily:"Montserrat",
     cursor:"pointer",
     backgroundColor:selected ? "#eb81e7":"",
     color:selected ? "black" : "",
     fontWeight:selected ? 700 : 500,
     "&:hover":{
       backgroundColor:"#eb81e7",
       color:"black",
     },
     width:"22%"
   }

 }

 )

 const classes = useStyles();

  return (
    <span  className={classes.selectbutton}
    onClick={onClick}
    >{children}</span>
  )
}

export default SelectButton