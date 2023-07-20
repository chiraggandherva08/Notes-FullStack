const express = require("express");
const app = express();
const PORT = 8000;
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/notes', { 
        useNewUrlParser: true,
        useUnifiedTopology: true 
    }
)
.then(() => {
    console.log('Connected to db...')
})
.catch((err) => {
    console.log(err)
})

const notesSchema = mongoose.Schema({
    title: { type: String, required: true, unique: false },
    content: { type: String, unique: false }
});

const notesModel = mongoose.model("chirag", notesSchema);

app.get("/", async (req, res) => {
    const data = await notesModel.find({});
    console.log(data);
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Listening to server via port ${PORT}`)
});
