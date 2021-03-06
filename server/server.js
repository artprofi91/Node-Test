const express = require('express');
var app = express();

app.get('/', (req,res)=>{
    res.status(404).send({
        error: 'Page not found.',
        name:'Todo App v1.0'
    });
});

app.get('/users', (req,res)=>{
    res.send([{
        name: 'Daneil',
        age: 22
    },
    {
        name: 'Art',
        age: 25
    },
    {
        name: 'Tutuk',
        age: 23
    }]);
});

app.listen(3000);

module.exports.app = app;