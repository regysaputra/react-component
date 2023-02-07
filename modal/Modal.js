import React from 'react'
import { createPortal } from 'react-dom'

const OVERLAY_STYLES = 'fixed inset-0 z-50 bg-black/50'
const MODAL_POS_STYLES = 'flex justify-center items-center h-full w-full'

export default function Modal ({ isOpen, close }) {
  if (!isOpen) return null

  return createPortal(
    <>
      <div
        className={OVERLAY_STYLES}
      >
        <div className={MODAL_POS_STYLES}>
          {/* Modal content */}
          <div className="relative w-1/4 bg-white rounded-lg shadow dark:bg-gray-700">
            Modal
          </div>
        </div>
      </div>
    </>,
    document.getElementById('portal')
  )
}
