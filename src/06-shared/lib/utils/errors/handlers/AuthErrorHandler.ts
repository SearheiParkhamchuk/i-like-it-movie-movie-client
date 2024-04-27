import { type FieldErrors } from 'react-hook-form'

import { BaseErrorHandler } from './BaseErrorHandler.abstract'
import { ApiError } from '../ApiError'
import { ApiErrorCodes } from '../enums/ApiErrorCodes'

export class AuthErrorHandler extends BaseErrorHandler<ApiError<FieldErrors>> {
  canHandle(): boolean {
    return true
  }

  specificHandler(): ApiError<FieldErrors> {
    const message = 'Invalid login/password'
    return new ApiError({
      statusCode: 401,
      code: ApiErrorCodes.AUTH,
      message,
      details: { root: { server: { type: 'custom', message } } }
    })
  }
}
