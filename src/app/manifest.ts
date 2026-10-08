import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Astranova Digital Services",
    short_name: "Astranova",
    description: "One company. Multiple possibilities.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbfaf7",
    theme_color: "#fbfaf7",
    icons: [
      { src: "/astranova-app-icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/astranova-app-icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
