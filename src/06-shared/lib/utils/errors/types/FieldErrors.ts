import { type ErrorOption, type FieldPath, type FieldValues } from 'react-hook-form'

export type FieldErrors<F extends FieldValues> = Record<FieldPath<F> | `root.${string}` | 'root', ErrorOption>
