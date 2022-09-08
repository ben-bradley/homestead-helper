import cuid from "cuid";

export const PileType = (pile) => ({
  id: pile.id || cuid(),
  name: pile.name || "Unnamed Pile"
});

export const TempType = (temp) => ({
  id: temp.id || cuid(),
  pileId: temp.pileId,
  date: (typeof temp.date === "string") ? new Date(temp.date) : temp.date,
  scale: temp.scale,
  value: temp.value
});
