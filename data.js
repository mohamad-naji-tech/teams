const express = require('express')
const app = express()

var cors = require('cors')

 
app.use(cors())
 


const PORT = process.env.PORT || 3030;



app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
var teams=[{
    id:1,
    name:"mohamad naji mohamad",
    adress:"aydamoun akkar",
    position:"team leader",
    salary:"1500$"
},{
id:2,
name:"khoder alchami",
adress:"sayda",
position:"waiter",
salary:"1000$"
},{  id:3,
    name:"youssef kasba",
    adress:"koura",
    position:"manager",
    salary:"2000$"
},{
    id:4,
    name:"moustafa oumeis ",
    adress:"karoon",
    position:"opperation manager",
    salary:"5000$"

}]

app.get('/', function (req, res) {
    res.send(teams)
  })