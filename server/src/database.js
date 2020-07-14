import mongoose from 'mongoose'

export const connectDB = () => {
  mongoose.connect('mongodb+srv://intro:intro@cluster0-g5ixf.mongodb.net/intro?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })

  const db = mongoose.connection

  db.on('error', console.error.bind(console, 'connection error:'))

  db.once('open', function () {
    console.log('DB is connected')
  })
}
