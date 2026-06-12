import type { NextConfig } from "next";

const remoteImageHosts = [
  "www.hotelvillacimbrone.com",
  "wi-web-eiw.s3.eu-west-1.amazonaws.com",
  "www.giordanohotel.it",
  "hotelparsifal.it",
  "www.hotel2torri.com",
  "images.trvl-media.com",
  "cf.bstatic.com",
  "encrypted-tbn0.gstatic.com",
  "dynamic-media-cdn.tripadvisor.com",
  "images.unsplash.com",
  "img.lemde.fr",
  "media.tacdn.com",
  "whiteonricecouple.com",
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: remoteImageHosts.map((hostname) => ({
      protocol: "https" as const,
      hostname,
    })),
  },
};

export default nextConfig;
