const express = require('express');
const app = express();
const tempRouter = express.Router();

app.use(express.json());
app.get('/:id', (req, res) => {
    res.status(200).json({ message: 'Congratulation Abdul Rehman for your first backend Server' })
    console.log(req.params.id)
})
tempRouter.post('/new', (req, res) => {
    res.json({ message: 'User created' })
    console.log(req.body)
})
app.use('/temp', tempRouter)


app.listen(3000, () => {
    console.log('listening on 3000')
})