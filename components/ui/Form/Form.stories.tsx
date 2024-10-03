import { zodResolver } from '@hookform/resolvers/zod'
import { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../Button'
import { Input } from '../Input'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '.'

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.'
  })
})

const FormExample = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: ''
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    alert(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Ex @gabrielzevedo" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default {
  title: 'Components/Form',
  component: FormExample
} as Meta

type Story = StoryObj<typeof Form>

export const Default: Story = {}
