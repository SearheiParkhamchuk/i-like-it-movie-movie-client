import { type FieldErrors } from 'react-hook-form'

import { BaseErrorHandler } from './BaseErrorHandler.abstract'
import { ApiError } from '../ApiError'
import { ApiErrorCodes } from '../enums/ApiErrorCodes'

export class UnhandledErrorHandler extends BaseErrorHandler<ApiError<FieldErrors>> {
  canHandle(): boolean {
    return true
  }

  specificHandler(): ApiError<FieldErrors> {
    return new ApiError({
      statusCode: 500,
      code: ApiErrorCodes.INTERNAL_SERVER_ERROR,
      message: 'Internal server error',
      details: { root: { server: { type: 'custom', message: 'Internal server error' } } }
    })
  }
}
