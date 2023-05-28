import React from 'react'

interface ToTopBtnProps {
  scrollToTop: () => void
}

const ToTopBtn: React.FC<ToTopBtnProps> = ({ scrollToTop }) => {
  return (
    <div className="top-0 pointer-events-none md:-translate-x-1/2 md:fixed md:left-1/2 md:max-w-7xl md:w-full md:h-full">
      <button
        className="fixed z-50 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md pointer-events-auto bottom-4 right-4 dark:bg-slate-800 "
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
    </div>
  )
}

export default ToTopBtn
