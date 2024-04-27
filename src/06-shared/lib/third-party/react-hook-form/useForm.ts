import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback } from 'react'
import { type FieldError, type FieldErrors, type FieldPath, type FieldValues, type UseFormProps, useForm as useReactHookForm } from 'react-hook-form'
import { type Schema } from 'zod'

type Props<F extends FieldValues> = Omit<UseFormProps<F>, 'resolver'> & { validationSchema?: Schema<any, any> }

export function useForm<F extends FieldValues = FieldValues>({ validationSchema, ...props }: Props<F>) {
  const form = useReactHookForm<F>({
    mode: 'onSubmit',
    resolver: validationSchema ? zodResolver(validationSchema) : undefined,
    shouldUseNativeValidation: false,
    ...props
  })

  const setErrors = useCallback((errors: FieldErrors<F>) => {
    Object.entries(errors).forEach(([key, value]) => {
      if (!value) return
      form.setError(key as FieldPath<F> | `root.${string}` | 'root', value as FieldError)
    })
  }, [form])

  return [form, { setErrors }] as const
}
