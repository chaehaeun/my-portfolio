import React from 'react'

type alignType = 'left' | 'center'

export interface ButtonProps {
  label: string
  align: alignType
  onClick: () => void
}

const BASE_BUTTON_CLASSES =
  'max-w-[190px] w-full py-2 text-title font-semibold text-white bg-dayPoint font-solano border-2 border-black shadow-wrap transition-colors hover:bg-dayPointHover dark:bg-nightPoint dark:border-white dark:shadow-wrapDark dark:hover:bg-nightPointHover dark:text-black block'

const Button: React.FC<ButtonProps> = ({ label, onClick, align = 'left' }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`${BASE_BUTTON_CLASSES} ${
        align === 'center' ? 'mx-auto' : align === 'left' ? null : null
      }}`}
    >
      {label}
    </button>
  )
}

export default Button
