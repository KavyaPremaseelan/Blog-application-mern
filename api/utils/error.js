import { error } from "console"

export const errorHandler = (statusCode, message)=>
{
    const err = new Error()
    error.statusCode = statusCode
    error.message = message
    return error
}