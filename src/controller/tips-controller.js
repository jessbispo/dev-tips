// CRUD com nodejs: https://www.youtube.com/watch?v=hgFQgtsYG30

import dicas from "../database/db.js";
//app.use(express.json());

 const controller = (app) => {

////criando dicas

app.post('/create', (req, res) => {
    const body = req.body;
    dicas.push(body)
   return res.json(body)
   
});

    app.get('/tips', (req, res) => {
        const randomTip = dicas[Math.floor(Math.random() * dicas.lenght)]
        res.json({
            "dica": randomTip
        })
   
})

}
console.log(dicas))

export default controller
