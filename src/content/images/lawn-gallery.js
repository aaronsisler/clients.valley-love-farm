import { getCdnUrl } from "../utils/cdn-url";

const CDN_URL = getCdnUrl("/lawn");

const lawnGalleryImageContent = [
  {
    key: "lawn-1",
    src: `${CDN_URL}/lawn-gallery-1.jpg`,
    altText: "Lawn Gallery 1",
  },
  {
    key: "lawn-2",
    src: `${CDN_URL}/lawn-gallery-2.jpg`,
    altText: "Lawn Gallery 2",
  },
  {
    key: "lawn-3",
    src: `${CDN_URL}/lawn-gallery-3.jpg`,
    altText: "Lawn Gallery 3",
  },
  {
    key: "lawn-4",
    src: `${CDN_URL}/lawn-gallery-4.jpg`,
    altText: "Lawn Gallery 4",
  },
  {
    key: "lawn-5",
    src: `${CDN_URL}/lawn-gallery-5.jpg`,
    altText: "Lawn Gallery 5",
  },
  {
    key: "lawn-6",
    src: `${CDN_URL}/lawn-gallery-6.jpg`,
    altText: "Lawn Gallery 6",
  },
  {
    key: "lawn-7",
    src: `${CDN_URL}/lawn-gallery-7.jpg`,
    altText: "Lawn Gallery 7",
  },
  {
    key: "lawn-8",
    src: `${CDN_URL}/lawn-gallery-8.jpg`,
    altText: "Lawn Gallery 8",
  },
];

export { lawnGalleryImageContent };
