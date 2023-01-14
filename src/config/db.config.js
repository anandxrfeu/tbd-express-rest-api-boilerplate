import mongoose from 'mongoose'


/**
 * [MONGOOSE] DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7. 
 *  Use `mongoose.set('strictQuery', false);` if you want to prepare for this change. 
 *  Or use `mongoose.set('strictQuery', true);` to suppress this warning.
 */
mongoose.set('strictQuery', false);

async function dbConnect() {

    try {
     const connection = await mongoose.connect(process.env.MONGODB_URI, {
       useNewUrlParser: true,
       useUnifiedTopology: true,
     });
     console.log("Connected to Database: ", connection.connection.name);
   } catch (err) {
     console.error("Database connection error: ", err);
   }
 }

export default dbConnect