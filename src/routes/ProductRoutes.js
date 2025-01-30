import React from "react";
import { Route } from "react-router-dom";
import ProductSection from "../components/ProductSection";

const productDetails = {
  bushhogs: {
    title: "Bushhogs",
    imageSrc: "/photos/bushhog.jpg",
    altText: "Bushhog",
    description: "Our solidly-built bushhogs have undergone harsh testing to ensure their durability even in rough pastures.",
    features: ["Available in two sizes: 8 foot and 6.5 foot"],
    additionalNote: "(1 year warranty on frame damages.)",
  },
  drillers: {
    title: "Drilling Machines",
    imageSrc: "/photos/driller.jpeg",
    altText: "Drilling Machine",
    description: "Designed to tow behind your vehicle, making it simple and easy to transport. Capable of drilling a 10-inch diameter hole up to 320 feet deep.",
    features: [
      "Briggs & Stratton 27 HP Gas Motor",
      "12 GPM at 3260 RPM Hydraulic Pump",
      "12-foot Hydraulic Lift",
      "Road Legal Lights / Reflectors",
    ],
    additionalNote: "(Drill stem pipes and drill bit sold separately.)",
  },
  semis: {
    title: "Semi Trailers",
    imageSrc: "/photos/semi.jpeg",
    altText: "Semi Trailer",
    description: "Designed, fabricated, and assembled from scratch, our semi trailer is perfect for hauling any type of produce or material.",
    features: [
      "Bed Length - 32'",
      'Axles - 102" Width',
      "Front axle equipped with lift kit",
      "Sturdy Scissor Frame Dump",
      "Air Bag Suspension",
      'Cylinder - 9"',
      "30,000 lb Rated Axles",
      "40 Yard Capacity",
      '24.5" Rims',
      'Grade 50 1/4" Steel Bed',
      "Road Legal Lights / Reflectors",
      "Tarp Kit Included"
    ],
    additionalNote: "(Trailer wall extensions available.)",
    extraImages: [
      { src: "/photos/semi.jpeg", alt: "Semi Trailer Extended" },
      { src: "/photos/semi2.jpeg", alt: "Semi Trailer Hauling Stone" },
      { src: "/photos/semi3.png", alt: "Semi Trailer" }
    ],
  },
};

export const productRoutes = Object.keys(productDetails).map((key) => (
  <Route
    key={key}
    path={`/products/${key}`}
    element={<ProductSection {...productDetails[key]} />}
  />
));