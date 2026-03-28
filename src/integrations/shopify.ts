export async function getOrders(shopUrl: string, token: string) {
  const res = await fetch(`https://${shopUrl}/admin/api/2023-07/orders.json`, {
    headers: { 'X-Shopify-Access-Token': token }
  })
  return res.json()
}
