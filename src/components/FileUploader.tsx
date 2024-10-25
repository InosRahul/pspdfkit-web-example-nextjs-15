'use client'

import React, { useEffect, useState } from 'react'
import { useArrayBuffer } from '@/lib/hooks/useArrayBuffer'

interface FileUploaderProps {
  setArrayBuffer: React.Dispatch<React.SetStateAction<ArrayBuffer | null>>
}

const FileUploader: React.FC<FileUploaderProps> = ({ setArrayBuffer }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const { arrayBuffer, error, loading } = useArrayBuffer(selectedFile)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files && files.length > 0) {
      setSelectedFile(files[0])
    } else {
      setSelectedFile(null)
    }
  }

  useEffect(() => {
    if (arrayBuffer) {
      setArrayBuffer(arrayBuffer)
    }
  }, [arrayBuffer, setArrayBuffer])

  return (
    <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-6 transition-colors duration-200">
      <label className="flex w-full cursor-pointer flex-col items-center rounded-lg border border-blue-600 bg-white px-4 py-6 uppercase tracking-wide text-blue-600 shadow-lg transition-colors duration-300 hover:bg-blue-600 hover:text-white">
        <svg className="mb-2 h-8 w-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M16.707 9.293a1 1 0 00-1.414 0L11 13.586V3a1 1 0 10-2 0v10.586L4.707 9.293a1 1 0 00-1.414 1.414l6 6a1 1 0 001.414 0l6-6a1 1 0 000-1.414z" />
        </svg>
        <span className="mt-2 text-base leading-normal">Select a file</span>
        <input type="file" className="hidden" onChange={handleFileChange} />
      </label>
      {loading && <p className="mt-3 text-gray-500">Loading...</p>}
      {error && <p className="mt-3 text-red-500">Error: {error.message}</p>}
    </div>
  )
}

export default FileUploader
