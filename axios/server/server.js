import express from 'express';
const app = express();
app.use(express.urlencoded());
app.use(express.json());

// import mongoose from 'mongoose';
// mongoose.connect('http://localhost/27017/recipes');

const PORT = 4000;

// const recipeSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     ingredients: {
//         type: [],
//         required: true,
//     },
//     directions: [],
// });
//
// const Recipe = mongoose.model('Recipe', recipeSchema);

app.post('/data', async (request, response) => {
    const { name, email } = request.body;

    console.log(name, email);
});

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});
