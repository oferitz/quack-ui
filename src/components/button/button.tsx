import { cva, VariantProps } from 'class-variance-authority'
import { component$, PropsOf, Slot } from '@builder.io/qwik'
import { cn } from '~/lib/utils'

const buttonVariants = cva('button', {
  defaultVariants: { variant: 'solid', size: 'md' },
  variants: {
    variant: {
      solid: 'button--variant_solid',
      outline: 'button--variant_outline',
      ghost: 'button--variant_ghost',
      link: 'button--variant_link',
      subtle: 'button--variant_subtle'
    },
    size: {
      xs: 'button--size_xs',
      sm: 'button--size_sm',
      md: 'button--size_md',
      lg: 'button--size_lg',
      xl: 'button--size_xl',
      '2xl': 'button--size_2xl'
    }
  }
})

type ButtonVariantProps = VariantProps<typeof buttonVariants>
export type ButtonProps = ButtonVariantProps & PropsOf<'button'>

export const Button = component$<ButtonProps>((props) => {
  const { variant, size, class: cls, ...rest } = props
  return (
    <button class={cn(buttonVariants({ variant, size, class: cls }))} {...rest}>
      <Slot />
    </button>
  )
})
