import { getCdnUrl } from "../utils/cdn-url";

const CDN_URL = getCdnUrl("/landing-gallery");

const landingGalleryImageContent = [
  {
    key: "landingGallery1",
    src: `${CDN_URL}/landing-gallery-1.jpg`,
    altText: "Landing Gallery 1",
  },
  {
    key: "landingGallery2",
    src: `${CDN_URL}/landing-gallery-2.jpg`,
    altText: "Landing Gallery 2",
  },
  {
    key: "landingGallery3",
    src: `${CDN_URL}/landing-gallery-3.jpg`,
    altText: "Landing Gallery 3",
  },
  {
    key: "landingGallery4",
    src: `${CDN_URL}/landing-gallery-4.jpg`,
    altText: "Landing Gallery 4",
  },
  {
    key: "landingGallery5",
    src: `${CDN_URL}/landing-gallery-5.jpg`,
    altText: "Landing Gallery 5",
  },
  {
    key: "landingGallery6",
    src: `${CDN_URL}/landing-gallery-6.jpg`,
    altText: "Landing Gallery 6",
  },
  {
    key: "landingGallery7",
    src: `${CDN_URL}/landing-gallery-7.jpg`,
    altText: "Landing Gallery 7",
  },
  {
    key: "landingGallery8",
    src: `${CDN_URL}/landing-gallery-8.jpg`,
    altText: "Landing Gallery 8",
  },
  {
    key: "landingGallery9",
    src: `${CDN_URL}/landing-gallery-9.jpg`,
    altText: "Landing Gallery 9",
  },
  {
    key: "landingGallery10",
    src: `${CDN_URL}/landing-gallery-10.jpg`,
    altText: "Landing Gallery 10",
  },
  {
    key: "landingGallery11",
    src: `${CDN_URL}/landing-gallery-11.jpg`,
    altText: "Landing Gallery 11",
  },
];

export { landingGalleryImageContent };
