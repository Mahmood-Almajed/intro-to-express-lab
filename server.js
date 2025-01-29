const express = require('express');


const app =express();
const port =3001;


const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];



app.get('/greetings/:username',(req , res)=>{

    res.send(`Hello There ${req.params.username}`);


})


app.get('/roll/:number',(req,res)=>{
let number =req.params.number;
if(isNaN(number)){

    res.send("You must specify a number");
}
else {
    res.send(`You rolled a ${req.params.number}`);
}

})




app.get('/collectibles/:index' ,(req,res)=>{

  
      let index= req.params.index;

      if(index <= collectibles.length)
      {
        res.send(`"So, you want the ${collectibles[index].name} for ${collectibles[index].price} , it can be yours!`);
      }
      else{
        res.send("This item is not yet in stock. Check back soon!");
      }
      


      })
    


      app.get('/shoes' ,(req,res)=>{

        const minPrice=req.query.minPrice;
        const maxPrice=req.query.maxPrice;
        const shoeType= req.query.type ;
        let list =[];
        let msg="";
        if(minPrice){
          shoes.filter((shoe)=>{
            if(shoe.price>=minPrice){
              list.push(shoe);
            
            }
         
          })

          list.map((item,index)=>{
            msg+=`shoe ${index}    name:  ${item.name} , price:   ${item.price} ,type : ${item.type} <br>`;
            
          })
          res.send(msg);
        }
      
        if(maxPrice){
          shoes.filter((shoe)=>{
            if(shoe.price<=maxPrice){
              list.push(shoe);
              
            }
         
          })
           list.map((item,index)=>{
            msg+=`shoe ${index}    name:  ${item.name} , price:   ${item.price} ,type : ${item.type} <br>`;            
          })
          res.send(msg);
        }

        if(shoeType){
          shoes.filter((shoe)=>{
            if(shoe.type===shoeType){
              list.push(shoe);
              
            }
         
          })
          list.map((item,index)=>{
            msg+=`shoe ${index}    name:  ${item.name} , price:   ${item.price} ,type : ${item.type} <br>`;            
          })
          res.send(msg); 
          

         




        }
        else{
          res.send(`specify in url maxPrice or minPrice or price or type`);
        }
   


      })
        





      






app.listen(port ,()=>{


console.log(`listenting to the ${port}`)




})