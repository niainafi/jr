import { cn } from '@/lib/cn';
import React from 'react'

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export default function Container({className, children,...props}: ContainerProps) {
  return (
    <div className={cn('w-full px-6  sm:max-w-xl md:max-w-3xl lg:max-w-6xl  2xl:max-w-8xl mx-auto mt-24',className)} {...props}>{children}</div>
  )
}
