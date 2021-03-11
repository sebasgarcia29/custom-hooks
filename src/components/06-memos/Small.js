import React, { memo } from 'react'

export const Small = memo(({ value }) => {
  console.log('Entra')
  return (
    <small>{value} </small>
  )
}
)
