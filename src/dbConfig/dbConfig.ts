import mongoose from "mongoose";

const connect = () => {
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("connection has been established")
        })

        connection.on('error', (err) => {
            console.log("connection has been failed, please check the connection", err);
            process.exit();
        })

        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
    }
};

export default connect;
