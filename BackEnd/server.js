//..............
//importingData
//..............
//cors(fetchingData)
const cors = require('cors');
//express
const express = require('express');
const app = express();
//env
require('dotenv').config();
//express-async-errors instead of try-catch
require('express-async-errors');
//ConnectDB
const connectDB = require('./db/connect.js');
//morgan
const morgan = require('morgan');
//routes
const authRouter = require('./routes/Auth.js');
const userRouter = require('./routes/User.js');
const productRouter = require('./routes/Product.js');

//middleware
const notFoundMiddleware = require('./middleware/not-found.js');
const errorHandlerMiddleware = require('./middleware/error-handler.js');
//authenticateUser
const authenticateUser = require('./middleware/auth-JWT.js');
//cookie-parser
const cookieParser = require('cookie-parser');
//fileUpload
const fileUpload = require('express-fileupload');


//.........
//AppData
//.........
//morgan..infoTheWarningMessageOnConsole
if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
}
//cors-fetchingDataFromBack-endToFront-end
app.use(cors());
//usingData.jsonInPostman
app.use(express.json());
//cookieParser(toGetTokenFor"1d")
app.use(cookieParser(process.env.JWT_SECRET));
//fileUpload-toSetImageIfNotAttachedInPostMan
app.use(express.static('./public'));
app.use(fileUpload());
//GeneralRoute
app.get('/', (req, res) => {
    res.json({
        msg: "Welcome"
    });
});
app.get('/api/v1', (req, res) => {
    // console.log(req.signedCookies);
    res.json({
        msg: 'comfySloth'
    });
});

app.get('/api/v1', (req, res) => {
    // throw new Error('error')
    res.json({
        msg: "api"
    });
});
//routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/product', productRouter);
//middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();