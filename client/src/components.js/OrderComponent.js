import React, { useState } from "react";
import {
  TextField,
  Select,
  Grid,
  MenuItem,
  FormControl,
  FormControlLabel,
  InputLabel,
  Checkbox

} from "@mui/material";
const OrderComponent = () => {
  const [size, setSize] = useState("Large");
  const [toppings, setToppings] = useState([]);
  const [specialNotes, setSpecialNotes] = useState("");
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const sizeOptions = ["Large", "Medium", "Small"];
  const toppingOptions = ["Pepperoni", "Sausage", "Mushrooms", "Bell Pepper"];

  const handleToppings = (topping)=>{
    console.log(typeof(toppings))
    if(toppings.indexOf(topping) !== -1){
      console.log(`${topping} is already added`)
      setToppings(toppings.filter(topp=> topp !== topping))
    } 
    else{
      
      setToppings([...toppings, topping])
    } 
    console.log(toppings)

  }

  const renderToppings = ()=>{
    // return toppingOptions.map(topping=> <Grid item md={6}><FormControlLabel>{topping}</FormControlLabel>AHHH</Grid>)
    return(
      toppingOptions.map((topping, index)=>{
        return (
          <Grid key={topping+index} md={12} style={{ marginTop: 20 }}>
            <FormControlLabel control={<Checkbox id={topping} onChange={(e,val,label)=>handleToppings(e.target.id)} checked={toppings.includes(topping)}/>} label={topping} />
          </Grid>
        );
      })
    )
  }

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          {" "}
          <h2>Pizza!</h2>
        </Grid>
        <Grid item xs={12} md={6} >
          <Grid item xs={12} style={{ marginTop: 9,textAlign:'left'}}>
            <FormControl>
              <InputLabel>Size</InputLabel>
              <Select
                fullWidth
                label={"Size"}
                defaultValue={"Large"}
                onChange={(e, value) => setSize(value)}
              >
                {sizeOptions.map((sizeOp) => (
                  <MenuItem value={sizeOp}>{sizeOp}</MenuItem>
                ))}
              </Select>
            </FormControl>
            {renderToppings()}
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          Your order...
          <Grid item xs={12}>{size}</Grid>
          <Grid item xs={12}>{toppings.map(topping=><div>{topping}</div>)}</Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderComponent;
