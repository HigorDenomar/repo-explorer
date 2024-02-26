import { expect, it } from 'vitest'

import { formatDate } from './utils'

it('should be able to format data', () => {
  expect(formatDate('2024-02-14')).toBe('14 fev 2024')
})

it('should be not able to format an invalid date', () => {
  expect(formatDate('2024-01-14T')).toBe('Invalid Date')
})
