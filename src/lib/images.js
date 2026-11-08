import { getImage } from 'astro:assets';

// Finds an image in src/assets by folder and file name, so content files can
// refer to images by name. A missing image stops the build with a clear message.
const files = import.meta.glob('../assets/**/*.{jpg,jpeg,png,webp,avif,svg}', { eager: true, import: 'default' });

export function image(folder, name) {
  const found = files[`../assets/${folder}/${name}`];
  if (!found) throw new Error(`Image not found: src/assets/${folder}/${name}`);
  return found;
}

// The three images of an artwork, in page order
// Watercolors are photographed as the whole sheet, margin included (the size on the
// label is the sheet's). They are shown as paper on the wall: white, with --sheet-shadow.
export const isSheet = (artwork) => artwork.medium === 'watercolor';

export function artworkImages(slug) {
  return ['mockup', 'zoom1', 'zoom2'].map((kind) => ({
    kind,
    src: image('artworks', `${slug}_${kind}.jpg`),
  }));
}

// Address of the largest version of an image, for the full-screen viewer.
// Uses the original size (up to 2400px), so sharper originals give sharper zoom.
export async function largeUrl(src) {
  const img = await getImage({ src, width: Math.min(src.width, 2400), format: 'webp', quality: 90 });
  return img.src;
}

// Full address of the 1200px JPG used for social previews and structured data
export async function shareUrl(src, site) {
  return new URL((await getImage({ src, width: 1200, format: 'jpg' })).src, site).href;
}
