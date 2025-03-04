import { cn } from '@/lib/cn';
import React from 'react'

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export default function Container({className, children,...props}: ContainerProps) {
  return (
    <div className={cn('py-6 px-10',className)} {...props}>{children}</div>
  )
}
