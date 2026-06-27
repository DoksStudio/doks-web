import { createStorefrontApiClient } from "@shopify/storefront-api-client";

export const shopifyClient = createStorefrontApiClient({
  storeDomain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!,
  apiVersion: "2024-04",
  publicAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN!,
});

export interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  priceRange: {
    minVariantPrice: { amount: string; currencyCode: string };
  };
  images: { edges: { node: { url: string; altText: string | null } }[] };
  variants: { edges: { node: { id: string; title: string; availableForSale: boolean } }[] };
  collections: { edges: { node: { handle: string; title: string } }[] };
  tags: string[];
}

const PRODUCTS_QUERY = `
  query getProducts($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          title
          handle
          description
          priceRange {
            minVariantPrice { amount currencyCode }
          }
          images(first: 3) {
            edges { node { url altText } }
          }
          variants(first: 10) {
            edges { node { id title availableForSale } }
          }
          collections(first: 10) {
            edges { node { handle title } }
          }
          tags
        }
      }
    }
  }
`;

export async function getProducts(first = 50): Promise<ShopifyProduct[]> {
  const { data, errors } = await shopifyClient.request(PRODUCTS_QUERY, {
    variables: { first },
  });

  if (errors) {
    console.error("Shopify error:", errors);
    return [];
  }

  return data?.products?.edges?.map((e: { node: ShopifyProduct }) => e.node) ?? [];
}

export async function getProductByHandle(handle: string): Promise<ShopifyProduct | null> {
  const query = `
    query getProduct($handle: String!) {
      productByHandle(handle: $handle) {
        id title handle description
        priceRange { minVariantPrice { amount currencyCode } }
        images(first: 5) { edges { node { url altText } } }
        variants(first: 20) { edges { node { id title availableForSale } } }
        collections(first: 5) { edges { node { handle title } } }
        tags
      }
    }
  `;

  const { data, errors } = await shopifyClient.request(query, {
    variables: { handle },
  });

  if (errors) {
    console.error("Shopify error:", errors);
    return null;
  }

  return data?.productByHandle ?? null;
}

export async function createCheckout(
  lines: { variantId: string; quantity: number }[]
): Promise<string | null> {
  const mutation = `
    mutation cartCreate($input: CartInput!) {
      cartCreate(input: $input) {
        cart { checkoutUrl }
        userErrors { field message }
      }
    }
  `;

  const { data, errors } = await shopifyClient.request(mutation, {
    variables: {
      input: {
        lines: lines.map((l) => ({
          merchandiseId: l.variantId,
          quantity: l.quantity,
        })),
      },
    },
  });

  if (errors) {
    console.error("Shopify cart error:", errors);
    return null;
  }

  return data?.cartCreate?.cart?.checkoutUrl ?? null;
}
