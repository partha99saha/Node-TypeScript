import {Application} from '../src/BaseApplication/Application';
import {ErrorHandlerMiddleware} from '../src/middleware/ErrorHandlerMiddleware';
import {PageNotFoundMiddleware} from '../src/middleware/PageNotFoundMiddleware';
import bodyParser from 'body-parser';
import useragent from 'express-useragent';
import cookieParser from 'cookie-parser';
import cors from 'cors';

export const app : Application = new Application();

app.middleware(cors());
app.middleware(useragent.express());
app.middleware(cookieParser());
app.middlewares([bodyParser.urlencoded({extended: false}), bodyParser.json()]);
app.middleware(new PageNotFoundMiddleware().pageNotFound);
app.middleware(new ErrorHandlerMiddleware().errorHandler);
