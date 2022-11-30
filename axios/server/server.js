import express from 'express';
import mongoose from 'mongoose';
const app = express();
app.use(express.urlencoded());
app.use(express.json());

const PORT = 4000;
mongoose.connect('mongodb://localhost:27017/tasks');

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

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
});
const Task = mongoose.model('Task', taskSchema);

app.get('/data', async (request, response) => {
    Task.find({}, (error, task) => {
        if (error) {
            console.log(error);
        } else {
            response.send([...task]);
            console.log('Sending: ', task);
        }
    });
});

// app.post('/delete', async (request, response) => {
//     const { id } = request.body;
//     console.log(id);
// });

app.post('/task', async (request, response) => {
    const { task } = request.body;
    const newTask = new Task({
        title: task,
    });
    console.log('Adding task to DB', newTask);
    newTask.save();
});

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});
