// Kenyan phone normalisation: 0712… / 254712… / +254712… → 254712….
export function phoneKey(value: string): string {
  const digits = value.replace(/\D/g, "");
  if (digits.startsWith("0")) return `254${digits.slice(1)}`;
  return digits;
}
