import { cva, VariantProps } from 'class-variance-authority'
import { FC, HTMLAttributes } from 'react'
import { cn } from '../utils/cn'

const textVariants = cva('w-fit', {
  variants: {
    variant: {
      title:
        'ui-text-[54px] ui-font-black ui-text-brand-blackblue  ui-font-poppins',
      title_2:
        'ui-text-[34px] ui-font-semibold ui-text-brand-blackblue ui-font-poppins',
      subtitle:
        'ui-text-[16px] ui-font-regular ui-text-brand-lightblack ui-font-lexend',
      paragraph:
        'ui-text-sm ui-font-regular ui-text-brand-lightblack  leading-loose ui-font-lexend',
      suptitle:
        'ui-text-[16px] ui-font-regular ui-text-brand-darkblue ui-font-poppins ui-tracking-[4px] ui-uppercase',
      heading3:
        'ui-text-[18px] ui-font-semibold ui-text-brand-blackblue ui-font-lexend',
      heading4:
        'ui-text-[16px] ui-font-semibold ui-text-brand-blackblue ui-font-lexend',
      label:
        'ui-text-sm ui-font-regular ui-text-brand-lightblack ui-font-lexend',
      extraSubtitle:
        'ui-text-[14px] ui-font-medium ui-text-brand-blackblue ui-font-lexend',
    },
  },
  defaultVariants: {
    variant: 'paragraph',
  },
})

interface TextProps
  extends HTMLAttributes<HTMLHeadingElement>,
  VariantProps<typeof textVariants> { }

const Text: FC<TextProps> = ({ className, variant, children, ...props }) => {
  return (
    <h1 className={cn(textVariants({ variant, className }))} {...props}>
      {children}
    </h1>
  )
}
export { Text, textVariants }

