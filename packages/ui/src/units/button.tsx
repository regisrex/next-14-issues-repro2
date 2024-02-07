import { VariantProps, cva } from 'class-variance-authority'
import { FC, HTMLAttributes } from 'react'
import { cn } from '../utils/cn'

const buttonVariants = cva('ui-h-[50px] ui-text-[14px]  ui-px-6 ui-rounded-[6px] disabled:bg-gray-600', {
    variants: {
        variant: {
            primary:
                'ui-bg-brand-darkblue  ui-text-brand-white hover:ui-bg-brand-blackblue',
            secondary:
                'ui-bg-brand-darkblue-10  ui-text-brand-darkblue hover:ui-bg-brand-darkblue hover:ui-text-brand-white',
            tertiary:
                'ui-bg-transparent  ui-text-brand-darkblue  hover:ui-text-brand-white',
            ondark:
                'ui-bg-brand-white-10  ui-text-white hover:ui-bg-white hover:ui-text-brand-darkblue',
        },
    },
    defaultVariants: {
        variant: 'primary'
    }
})

interface ButtonProps
    extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    loading?: boolean
}


const Button: FC<ButtonProps> = ({ variant, className, children, loading, ...props }: ButtonProps) => {
    return (
        <button className={cn(buttonVariants({ variant, className }))} {...props} disabled={loading}>
            {loading ? 'Loading...' : children}
        </button>
    )
}


export { Button }

