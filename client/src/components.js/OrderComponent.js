import React, { useState } from "react";
import {
  TextField,
  Select,
  Grid,
  MenuItem,
  FormControl,
  FormControlLabel,
  InputLabel,
  Checkbox,
  Paper,
} from "@mui/material";
const OrderComponent = () => {
  const [size, setSize] = useState("Large");
  const [toppings, setToppings] = useState([]);
  const [specialNotes, setSpecialNotes] = useState("");
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const sizeOptions = ["Large", "Medium", "Small"];
  const toppingOptions = ["Pepperoni", "Sausage", "Mushrooms", "Bell Pepper"];

  const handleToppings = (topping) => {
    console.log(typeof toppings);
    if (toppings.indexOf(topping) !== -1) {
      console.log(`${topping} is already added`);
      setToppings(toppings.filter((topp) => topp !== topping));
    } else {
      setToppings([...toppings, topping]);
    }
    console.log(toppings);
  };

  const RenderToppings = () => {
    // return toppingOptions.map(topping=> <Grid item md={6}><FormControlLabel>{topping}</FormControlLabel>AHHH</Grid>)
    return toppingOptions.map((topping, index) => {
      return (
        <Grid key={topping + index} md={12} style={{ marginTop: 20 }}>
          <FormControlLabel
            control={
              <Checkbox
                id={topping}
                onChange={(e, val, label) => handleToppings(e.target.id)}
                checked={toppings.includes(topping)}
              />
            }
            label={topping}
          />
        </Grid>
      );
    });
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {" "}
          <h2>Pizza!</h2>
        </Grid>
        <Grid item xs={12} md={6} style={{ marginTop: 9, textAlign:'justify', height:'80vh' }}>
            <Paper style={{ padding: 20, height:'100%' }} elevation={3}>
              <FormControl>
                <InputLabel>Size</InputLabel>
                <Select
                  fullWidth
                  label={"Size"}
                  defaultValue={"Large"}
                  onChange={(e, value) => setSize(value.props.value)}
                >
                  {sizeOptions.map((sizeOp) => (
                    <MenuItem value={sizeOp}>{sizeOp}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <RenderToppings/>
            </Paper>
        </Grid>
        <Grid item xs={12} md={6} style={{ marginTop: 9, textAlign: "left", height:'80vh'}}>
          <Paper style={{ padding: 20, height:'100%' }} elevation={3} >
            Your order...
            <Grid item xs={12}>
              {size}
            </Grid>
            <Grid item xs={12}>
              {toppings.map((topping) => (
                <div>{topping}</div>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderComponent;
