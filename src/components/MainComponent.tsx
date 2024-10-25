'use client'

import { useState } from 'react'
import FileUploader from '@/components/FileUploader'
import DocumentViewerComponent from '@/components/DocumentViewerComponent'

export function MainComponent() {
  const [arrayBuffer, setArrayBuffer] = useState<ArrayBuffer | null>(null)

  return (
    <div className="flex h-screen w-full flex-col gap-4 p-4">
      <FileUploader setArrayBuffer={setArrayBuffer} />
      <DocumentViewerComponent document={arrayBuffer ?? 'document.pdf'} />
    </div>
  )
}
