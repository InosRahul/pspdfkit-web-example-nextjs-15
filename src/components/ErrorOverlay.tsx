interface ErrorOverlayProps {
  message: string
}

const ErrorOverlay = ({ message }: ErrorOverlayProps) => (
  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-red-100 bg-opacity-75 p-4 font-bold text-red-500">
    <h2 className="text-2xl">Failed to load PSPDFKit</h2>
    <p className="max-w-6xl text-xs">{message}</p>
  </div>
)

export default ErrorOverlay
