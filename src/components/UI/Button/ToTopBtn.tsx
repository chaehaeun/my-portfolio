import React from 'react'

interface ToTopBtnProps {
  scrollToTop: () => void
}

const ToTopBtn: React.FC<ToTopBtnProps> = ({ scrollToTop }) => {
  return (
    <button
      className="fixed z-50 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md bottom-3 right-3 dark:bg-slate-800 "
      type="button"
      aria-label="상단으로 이동하기"
      onClick={scrollToTop}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 "
      >
        <path
          className="text-dayPoint dark:text-nightPoint"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 15.75l7.5-7.5 7.5 7.5"
        />
      </svg>
    </button>
  )
}

export default ToTopBtn
