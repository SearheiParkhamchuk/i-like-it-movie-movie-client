import { type FieldErrors } from 'react-hook-form'
import { ZodError } from 'zod'

import { BaseErrorHandler } from './BaseErrorHandler.abstract'
import { ApiError } from '../ApiError'
import { ApiErrorCodes } from '../enums/ApiErrorCodes'

export class ValidationErrorHandler extends BaseErrorHandler<ApiError<FieldErrors>> {
  canHandle(error: unknown): boolean {
    return error instanceof ZodError
  }

  specificHandler(error: ZodError): ApiError<FieldErrors> {
    const details = error.errors.reduce<FieldErrors>((acc, e) => {
      const path = e.path.join('.')
      if (acc[path]) return acc
      else acc[path] = { message: e.message, type: 'custom' }
      return acc
    }, {})

    return new ApiError({
      statusCode: 400,
      code: ApiErrorCodes.VALIDATION,
      message: 'Validation error',
      details
    })
  }
}
