import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost'
  children: ReactNode
}

export default function Button({ variant = 'ghost', children, className = '', ...rest }: ButtonProps) {
  const variantClass = variant === 'primary' ? 'btn-primary' : 'btn-ghost'
  return (
    <button className={`btn ${variantClass} ${className}`.trim()} {...rest}>
      {children}
    </button>
  )
}