import { useEffect, useState } from 'react';
import type { Product } from '../data/products';

export type CartLine = Product & { quantity: number };

const storageKey = 'bloome-cart';

function readStoredCart(): CartLine[] {
  try {
    const storedCart = window.localStorage.getItem(storageKey);
    if (!storedCart) return [];
    const parsedCart: unknown = JSON.parse(storedCart);
    return Array.isArray(parsedCart) ? parsedCart as CartLine[] : [];
  } catch {
    return [];
  }
}

export function useCart() {
  const [cart, setCart] = useState<CartLine[]>(readStoredCart);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => setCart((current) => {
    const existing = current.find((line) => line.name === product.name);
    return existing
      ? current.map((line) => line.name === product.name ? { ...line, quantity: line.quantity + 1 } : line)
      : [...current, { ...product, quantity: 1 }];
  });

  const updateQuantity = (name: string, quantity: number) => setCart((current) => (
    quantity < 1
      ? current.filter((line) => line.name !== name)
      : current.map((line) => line.name === name ? { ...line, quantity } : line)
  ));

  return { cart, addToCart, updateQuantity };
}
