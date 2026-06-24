import { NextResponse } from "next/server";
import { getProducts } from "@/lib/shopify";
import { mapShopifyProduct, type Product } from "@/lib/products";
import type { ShopifyProduct } from "@/lib/shopify";

export const revalidate = 60; // refresh every 60 seconds

export async function GET() {
  try {
    const shopifyProducts = await getProducts(100);
    const products: Product[] = shopifyProducts.map((p: ShopifyProduct) =>
      mapShopifyProduct(p as unknown as Record<string, unknown>)
    );
    return NextResponse.json(products);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}
