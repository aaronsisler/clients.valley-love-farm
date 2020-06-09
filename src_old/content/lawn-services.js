const fromText = "from...";

const lawnServices = [
  {
    title: "Trim Shubbery",
    pricing: {
      from: fromText,
      price: "$60",
      units: "per hour"
    },
    details: ["Pruning shrubs to shape", "Placing scraps at roadside"]
  },
  {
    title: "Whole Nine Yards",
    pricing: {
      from: fromText,
      price: "$25",
      units: "per week"
    },
    details: [
      "Cutting grass",
      "Edging and weed eating​",
      "Blowing leaves to curb in Fall",
      "Reseeding",
      "Weed & Feed as needed",
      "Pick up yard debris"
    ]
  },
  {
    title: "Mulching",
    pricing: {
      from: fromText,
      price: "$80",
      units: "per yard of mulch"
    },
    details: ["Ordering", "Pickup and delivery", "Spreading"]
  },
  {
    title: "Aerate Lawn",
    pricing: {
      from: fromText,
      price: "$150",
      units: "per house"
    },
    details: ["Aeration of lawn"]
  }
];

export default lawnServices;
