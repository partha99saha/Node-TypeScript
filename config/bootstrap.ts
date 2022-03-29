import dotenv from 'dotenv';
import path from 'path';
import * as constant from './constant';
dotenv.config({path: path.join(__dirname, `./.env.${process.env.NODE_ENV}`)});
export const dbType : any = process.env.DB_TYPE;
export const dbHostName : string | undefined = process.env.DB_HOSTNAME;
export const dbport : string | undefined = process.env.DB_PORT;
export const dbUser : string | undefined = process.env.DB_USER;
export const dbPassword : string | undefined = process.env.DB_PASSWORD;
export const dbDatabase : string | undefined = process.env.DB_DATABASE;
export const port : string | undefined = process.env.PORT;
export const ormDBName : string | undefined = process.env.ORM_DB_NAME;
export const environment : string | undefined = process.env.NODE_ENV;
export const generalServerErrorMessage : string =
    constant.HTTP_ERROR_MESSAGE_GENERAL_SERVER_ERROR;
export const httpSuccessCode : number = constant.HTTP_SUCCESS_CODE_OK;
export const httpInternalServerErrorCode : number =
    constant.HTTP_ERROR_CODE_INTERNAL_SERVER_ERROR;
export const httpPageNotFoundMessage : string =
    constant.HTTP_ERROR_MESSAGE_PAGE_NOT_FOUND;
export const httpPageNotFoundCode : number =
    constant.HTTP_ERROR_CODE_PAGE_NOT_FOUND;
export const httpDataNotFound : string =
    constant.HTTP_ERROR_DATA_NOT_FOUND;
export const httpSuccessDataDelete : string =
    constant.HTTP_SUCCESS_MESSAGE_DATA_DELETE;
export const httpSuccessDataUpdate : string =
    constant.HTTP_SUCCESS_MESSAGE_DATA_UPDATE;
export const httpBadRequestCode : number = constant.HTTP_ERROR_CODE_BAD_REQUEST;
export const passwordHashKey:any=Number(process.env.PASSWORD_HASH_KEY);
export const pinHashKey:any = Number(process.env.PIN_HASH_KEY);
export const httpEmailAlreadyExsits : string =
    constant.HTTP_ERROR_EMAIL_ALREADY_EXSISTS;
export const userDataNotFound : string =
    constant.HTTP_ERROR_USER_NOT_FOUND;
export const incorrectPassword:string=constant.HTTP_ERROR_INCORRECT_PASSWORD;
export const userBlockAccount:string=constant.HTTP_ERROR_BLOCK_ACCOUNT;
export const userCreated:string = constant.HTTP_SUCCESS_MESSAGE_USER_CREATED;
export const passwordConfirmPasswordMismatchError:string =
    constant.HTTP_ERROR_PASSWORD_CONFIRM_PASSWORD_MISMATCH;
export const loginSuccess:string = constant.HTTP_SUCCESS_MESSAGE_USER_LOGIN;
export const httpAppCredentialsNotPresent:string =
    constant.HTTP_APP_CREDENTIALS_NOT_PRESENT;
export const httpInvalidAppCredential:string = constant.HTTP_INVALID_APP_KEY;
export const jwtSecretKey: string|undefined = process.env.JWT_SECRET_KEY;
export const missingAuthenticationToken: string =
    constant.HTTP_ERROR_MESSAGE_MISSING_AUTH_TOKEN;
export const unauthorizedClient : number =
    constant.HTTP_ERROR_CODE_UNAUTHORIZED_CLIENT;
export const unauthorizedClientMessage : string =
    constant.HTTP_ERROR_MESSAGE_UNAUTHORIZED_CLIENT;
export const forbidden: number = constant.HTTP_ERROR_CODE_FORBIDDEN;

