export interface CartLine {
  productId: string;
  qty: number;
}

// Minimal cart store (dev stub). Replace with DB-backed lines keyed to
// session/user; the controller already gates callers by session.
const lines: CartLine[] = [];

export function getCartLines(): CartLine[] {
  return lines;
}

export function addCartLine(line: CartLine): void {
  lines.push(line);
}
