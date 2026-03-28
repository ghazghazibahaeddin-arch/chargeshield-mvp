export function analyze(dispute: any) {
  if (dispute.reason === "fraudulent") {
    return "Possible stolen card usage"
  }

  if (dispute.reason === "product_not_received") {
    return "Shipping issue"
  }

  return "Unknown"
}
