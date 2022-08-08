// CRUD com nodejs: https://www.youtube.com/watch?v=hgFQgtsYG30

import dicas from "../database/db.js";

 const controller = (app) => {

////criando dicas

app.post('/create', (req, res) => {
    const body = req.body;
    dicas.push(body)
   return res.json(body)
   
});

//retornando as dicas
    app.get('/tips', (req, res) => {
        const randomTip = dicas[Math.floor(Math.random() * dicas.lenght)]
        res.json({
            "dica": randomTip
        })
   
})

}
export default controller
