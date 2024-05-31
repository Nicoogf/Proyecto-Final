import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/proyecto-final")
        console.log("Conexion a MongoDB exitosa")
    } catch (error) {
        console.log( error )
    }
} ;