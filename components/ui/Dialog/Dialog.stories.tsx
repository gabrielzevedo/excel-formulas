import { Meta, StoryObj } from '@storybook/react'

import { Button } from '../Button'
import { Input } from '../Input'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogIcon,
  DialogTitle,
  DialogTrigger
} from '.'

export default {
  title: 'Components/Dialog',
  component: Dialog
} as Meta

type Story = StoryObj<typeof Dialog>

export const Default: Story = {
  render: (args) => (
    <Dialog {...args} modal defaultOpen>
      <DialogTrigger asChild>
        <Button>Open</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogIcon icon="Trash01" variant="danger" className="mb-4" />
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondaryGray">Cancel</Button>
          </DialogClose>
          <Button variant="danger" type="submit">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export const Custom: Story = {
  render: (args) => (
    <Dialog {...args}>
      <DialogTrigger asChild>
        <Button variant="secondaryGray">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 grid gap-4">
          <Input label="Name" id="name" value="Gabriel Azevedo" />
          <Input label="Username" id="username" value="@gabrielzevedo" />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondaryGray">Cancel</Button>
          </DialogClose>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
