import { Seller } from "deco-sites/casaevideo/types/vtexRestApi.ts";

export function getDefaultVtexSeller(sellers?: Seller[]) {
  if (!sellers || sellers.length === 0) return;

  const defaultSeller = sellers.find((seller) => seller.sellerDefault);

  if (defaultSeller) {
    return defaultSeller;
  }

  return sellers[0];
}
