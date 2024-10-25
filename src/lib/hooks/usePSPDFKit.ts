import { RefObject, useCallback, useEffect, useRef, useState } from 'react'
import { Instance } from 'pspdfkit'

interface UsePSPDFKitOptions {
  document: string | ArrayBuffer
}

interface UsePSPDFKitReturn {
  containerRef: RefObject<HTMLDivElement>
  instance: Instance | null
  loading: boolean
  error: string | null
}

const usePSPDFKit = ({ document }: UsePSPDFKitOptions): UsePSPDFKitReturn => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const [instance, setInstance] = useState<Instance | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const loadPSPDFKit = useCallback(async (container: HTMLDivElement | null, doc: string | ArrayBuffer) => {
    if (container && typeof window !== 'undefined' && window.PSPDFKit) {
      const PSPDFKit = window.PSPDFKit

      if (PSPDFKit) {
        PSPDFKit.unload(container)
      }

      try {
        return await PSPDFKit.load({
          container,
          baseUrl: `${window.location.protocol}//${window.location.host}/pspdfkit/`,
          document: doc,
        })
      } catch (error) {
        console.error('Error loading PSPDFKit:', error)
        throw error
      }
    }

    return undefined
  }, [])

  useEffect(() => {
    setLoading(true)
    setError(null)
    const container = containerRef.current
    if (document && container) {
      loadPSPDFKit(container, document)
        .then((instance) => {
          if (instance) {
            setInstance(instance)
            console.log('PSPDFKit was initialized successfully.')
          }
        })
        .catch((error) => {
          setError((error as Error).message)
        })
        .finally(() => {
          setLoading(false)
        })

      // Clean up the PSPDFKit instance on unmount
      return () => {
        if (container && typeof window !== 'undefined' && window.PSPDFKit) {
          window.PSPDFKit.unload(container)
        }
      }
    }
  }, [document, loadPSPDFKit])

  return { containerRef, loading, error, instance }
}

export default usePSPDFKit
