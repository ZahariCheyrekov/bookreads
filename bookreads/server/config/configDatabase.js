import mongoose from 'mongoose';

export const configDatabase = (app, PORT) => {
    mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`)))
        .catch((error) => console.log(error));
}