ROOT="$(cd "$(dirname "$0")/.." >/dev/null 2>&1 && pwd)"

echo "Removing old PSPDFKit Web assets directory..."
rm -rf "$ROOT/public/pspdfkit"

echo "Recreating PSPDFKit Web assets directory..."
mkdir -p "$ROOT/public/pspdfkit"

echo "Copying the new PSPDFKit Web assets..."
cp -R "$ROOT/node_modules/pspdfkit/dist/"* "$ROOT/public/pspdfkit"
