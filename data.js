const express = require('express')
var cors = require('cors')
const app = express()
 app.use(cors())
 


const PORT = process.env.PORT || 3030;



app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
var teams=[{
    id:1,
    name:"mohamad ",
    adress:" akkar",
    position:"team leader",
    salary:"1500$"
},{
id:2,
name:"khoder ",
adress:"sayda",
position:"waiter",
salary:"1000$"
},{  id:3,
    name:"youssef ",
    adress:"koura",
    position:"manager",
    salary:"2000$"
},{
    id:4,
    name:"moustafa  ",
    adress:"beirut",
    position:"opperation manager",
    salary:"5000$"

}]

app.get('/', function (req, res) {
    res.send(teams)
  })