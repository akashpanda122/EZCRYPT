import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'Explain technical concepts',
    message: `What is a "serverless function"?`
  },
  {
    heading: 'Summarize an article',
    message: 'Summarize the following article for a 2nd grader: \n'
  },
  {
    heading: 'Draft an email',
    message: `Draft an email to my boss about the following: \n`
  }
]

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">
          WELCOME TO EZCRYPT
        </h1>
        <p className="leading-normal text-muted-foreground">
          Explore a world of possibilities with us! Whether you're receiving crypto payments, 
          converting to local currency, or simply seeking advice, I've got you covered. 
          Whether it's a technical issue or just some guidance you need, I'm dedicated to 
          providing you with the support you deserve. Just type your query, and let's get started.
        </p>
      </div>
    </div>
  )
}