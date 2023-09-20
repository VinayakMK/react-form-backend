const app = require("./app")
const databaseConnection = require("./config/databaseConnection");

databaseConnection();

const userRoutes = require("./routes/userRoutes");

app.use('/api/v1', userRoutes);

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`);
})
