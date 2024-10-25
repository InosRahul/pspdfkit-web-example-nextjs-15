import PSPDFKit from 'pspdfkit'
export {}

declare global {
  interface Window {
    PSPDFKit: typeof PSPDFKit // Replace `any` with the actual type if known
  }
}
