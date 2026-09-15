// Gallery entries. Each one pairs a file in public/ with a caption in the
// catalogues (`gallery.items.<id>.*`). `fit` is passed through to CSS:
// 'cover' crops photos to a uniform tile, 'contain' shows an image whole
// (used for the book cover, which must not be cropped).
export const gallery = [
  {
    id: 'forestPath',
    file: 'page_front_forest1.jpg',
    fit: 'cover',
  },
  {
    id: 'oldGrowth',
    file: 'page_front_forest2.jpeg',
    fit: 'cover',
  },
  {
    id: 'ravineStream',
    file: 'page_front_forest3.jpeg',
    fit: 'cover',
  },
  {
    id: 'book',
    file: 'book.jpg',
    fit: 'contain',
  },
]
