import React, { memo } from 'react'

export const ShowIncrement = memo(({ increment }) => {
  console.log('Me volvi a generar')
  return (
    <button
      className='btn btn-danger'
      onClick={() => { increment(2) }}
    >
      Incrementar
    </button>
  )
})
