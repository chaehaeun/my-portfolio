import React from 'react'

type alignType = 'left' | 'center'

export interface ButtonProps {
  label: string
  align: alignType
  onClick?: () => void
  ariaLabel?: string
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  align = 'left',
  ariaLabel,
}) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      type="button"
      className={`max-w-[120px] my-5 md:max-w-[190px] w-full md:py-2 text-2xl md:text-title font-semibold text-white bg-dayPoint font-solano border-2 border-black shadow-wrap transition-colors hover:bg-dayPointHover dark:bg-nightPoint dark:border-white dark:shadow-wrapDark dark:hover:bg-nightPointHover dark:text-black block dark:focus:bg-nightPointHover focus:bg-dayPointHover ${
        align === 'center'
          ? 'mx-auto text-center'
          : align === 'left'
          ? null
          : null
      }}`}
    >
      {label}
    </button>
  )
}

export default Button
