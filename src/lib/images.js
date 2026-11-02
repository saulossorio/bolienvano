// Finds an image in src/assets by folder and file name, so content files can
// refer to images by name. A missing image stops the build with a clear message.
const files = import.meta.glob('../assets/**/*.{jpg,jpeg,png,webp,avif,svg}', { eager: true, import: 'default' });

export function image(folder, name) {
  const found = files[`../assets/${folder}/${name}`];
  if (!found) throw new Error(`Image not found: src/assets/${folder}/${name}`);
  return found;
}

// The three images of an artwork, in page order
export function artworkImages(slug) {
  return ['mockup', 'zoom1', 'zoom2'].map((kind) => ({
    kind,
    src: image('artworks', `${slug}_${kind}.jpg`),
  }));
}
