import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => {
            console.log('Database Connected');
        });

        const uri = process.env.MONGODB_URI;

        if (!uri) {
            throw new Error('MONGODB_URI is missing');
        }

        const connectionUri = new URL(uri);
        connectionUri.pathname = '/prescripto';

        await mongoose.connect(connectionUri.toString());

    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        throw error;
    }
};

export default connectDB;