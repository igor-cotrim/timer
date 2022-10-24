import * as zod from 'zod'

import { newCycleFormValidationSchema } from '../validation'

export type NewCycleFormDataModel = zod.infer<
  typeof newCycleFormValidationSchema
>
