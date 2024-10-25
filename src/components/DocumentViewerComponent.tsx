'use client'

import usePSPDFKit from '@/lib/hooks/usePSPDFKit'
import ErrorOverlay from '@/components/ErrorOverlay'

export default function DocumentViewerComponent({ document }: { document: string | ArrayBuffer }) {
  const { containerRef, loading, error } = usePSPDFKit({ document })

  return (
    <div className="relative h-screen w-full">
      {/* Error component */}
      {!loading && error && <ErrorOverlay message={error} />}

      {/* PSPDFKit container */}
      <div ref={containerRef} className="h-full w-full" />
    </div>
  )
}
