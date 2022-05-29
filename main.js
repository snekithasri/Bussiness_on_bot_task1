const client = require('./connection.js')
const express = require('express');
const app = express();

let port_no = process.env.PORT || 3000;

app.listen(port_no, ()=>{
    console.log("Sever is now listening at port 3300");
})

client.connect();



app.get('/api/branch', (req, res)=>{
    let query = res.body;
    client.query(`select * from bank_branches where branch ILike '${req.query.q}%' order by ifsc LIMIT ${req.query.limit} OFFSET ${req.query.offset};`, (err, result)=>{
        if(!err){
            res.send({"branches":result.rows});
        }
    });
    client.end;
})


app.get('/api/search', (req, res)=>{
    let query = res.body;
    client.query(`select * from bank_branches where branch ILike '${req.query.q}%' or city ILike '${req.query.q}%' or ifsc ILike '${req.query.q}%' or district ILike '${req.query.q}%' or state ILike '${req.query.q}%'  order by ifsc LIMIT ${req.query.limit} OFFSET ${req.query.offset};`, (err, result)=>{
        if(!err){
            res.send({"branches":result.rows});
        }
    });
    client.end;
})

app.post('/branches', (req, res)=> {
    const user = req.body;
    console.log(user)
    let insertQuery = `insert into branches(ifsc,bank_id,branch,address,city,district,state,bank_name) 
                       values('${user.ifsc}', ${user.bank_id}, '${user.branch}', '${user.address}','${user.city}','${user.district}','${user.state}','${user.bank_name}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

app.put('/branches/:bank_id', (req, res)=> {
    let user = req.body;
    let updateQuery = `update branches
                       set ifsc = '${user.ifsc}',
                       branch = '${user.branch}',
                       address = '${user.address}',
                       city = '${user.city}',
                       district = '${user.district}',
                       state = '${user.state}',
                       bank_name = '${user.bank_name}'
                       where id = ${user.bank_id}`

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})


app.delete('/branches/:bank_id', (req, res)=> {
    let insertQuery = `delete from branches where bank_id=${req.params.bank_id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})
