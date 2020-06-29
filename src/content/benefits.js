import getCdnUrl from "../utils/cdn-url";

const CDN_URL = getCdnUrl("/landing");

const benefits = [
  {
    image: {
      altText: "Widget 1",
      src: `${CDN_URL}/landing-container__benefit-1.png`
    },
    text:
      "Free range animals not only benefits the environment, it benefits you too!",
    title: "Sustainable"
  },
  {
    image: {
      altText: "Widget 2",
      src: `${CDN_URL}/landing-container__benefit-2.png`
    },
    text: "No added antibiotics, chemicals, or hormones means a healthier you.",
    title: "Healthy"
  },
  {
    image: {
      altText: "Widget 3",
      src: `${CDN_URL}/landing-container__benefit-3.png`
    },
    text: "Ally with a local farmer and get the best foods they have to offer.",
    title: "Community"
  },
  {
    image: {
      altText: "Widget 4",
      src: `${CDN_URL}/landing-container__benefit-4.png`
    },
    text:
      "Pasture farming reduces the damages done compared to industrial farming.",
    title: "Responsible"
  }
];

export default benefits;
