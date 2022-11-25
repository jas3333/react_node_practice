import express from 'express';
const app = express();

// import mongoose from 'mongoose';
// mongoose.connect('http://localhost/27017/recipes');

const PORT = 3000;

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

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});
