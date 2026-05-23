const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const cropData = {
  Rice: {
    soil: "Clay Soil",
    pesticide: "Neem Oil",
    days: 120,
    price: "₹2200/quintal"
  },

  Wheat: {
    soil: "Loamy Soil",
    pesticide: "Chlorpyrifos",
    days: 140,
    price: "₹2400/quintal"
  },

  Cotton: {
    soil: "Black Soil",
    pesticide: "Imidacloprid",
    days: 180,
    price: "₹7000/quintal"
  }
};

app.post("/crop",(req,res)=>{

let crop=req.body.cropType;

if(cropData[crop]){
res.json(cropData[crop]);
}
else{
res.json({
message:"Crop not found"
});
}

});

app.listen(5000,()=>{
console.log("Server Running");
});
