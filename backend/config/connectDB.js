const mongoose = require('mongoose')

exports.connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('MongoDB Connected')
    }catch(err){
        console.log('Error in MongoDB Connection : ',err)
        process.exit(1)
    }
}