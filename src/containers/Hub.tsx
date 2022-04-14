import React from 'react'
import {Group} from '@mantine/core'

type Props = {
    children?: React.ReactNode
}

export default function ({children}: Props) {
  return (
    <Group direction="row">
        {children}
    </Group>
  )
}