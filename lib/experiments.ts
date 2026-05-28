export const experiments = [
  {
    id: "homepage-cta",
    name: "Homepage CTA Test",
    status: "Running",
    variants: [
      {
        id: "A",
        name: "Control",
        conversionRate: 4.2,
      },
      {
        id: "B",
        name: "New CTA",
        conversionRate: 5.8,
      },
    ],
  },
   {
    id: "banner-img",
    name: "Banner Image Test",
    status: "Paused",
    variants: [
      {
        id: "A",
        name: "Control",
        conversionRate: 5.8,
      },
      {
        id: "B",
        name: "New Image",
        conversionRate: 6.2,
      },
    ],
  },
  {
    id: "example-test",
    name: "Example Test",
    status: "Running",
    variants: [
      {
        id: "A",
        name: "Control",
        conversionRate: 3.3,
      },
      {
        id: "B",
        name: "New Variant",
        conversionRate: 2.6,
      },
    ],
  },
];