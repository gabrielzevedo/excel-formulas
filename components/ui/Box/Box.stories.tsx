import { Meta, StoryObj } from '@storybook/react'

import { Button } from '../Button'
import { Box, BoxFooter, BoxHeader, BoxSeparator } from '.'

export default {
  title: 'Components/Box',
  component: Box
} as Meta

type Story = StoryObj<typeof Box>

const BoxActions = () => (
  <Button variant="link" icon="Eye">
    View
  </Button>
)

export const Default: Story = {
  args: {
    children: (
      <>
        <BoxHeader title="Title" />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <BoxSeparator />
        <BoxHeader
          title="Title example"
          subtitle="Subtitle example Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quae."
          actions={<BoxActions />}
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quae.
        </p>
        <BoxFooter>
          <Button variant="secondaryGray">Cancel</Button>
          <Button variant="primary">Confirm</Button>
        </BoxFooter>
      </>
    )
  }
}
