import { cn } from '@/lib/cn';
import React from 'react'

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export default function Container({className, children,...props}: ContainerProps) {
  return (
    <div className={cn('w-full md:max-w-xl lg:max-w-5xl  2xl:max-w-8xl mx-auto my-24',className)} {...props}>{children}</div>
  )
}
