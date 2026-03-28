export function analyze(dispute: any) {
  const reasons: string[] = []

  if (dispute.shipping_delay) reasons.push("Shipping delay")
  if (dispute.misleading_description) reasons.push("Misleading product description")
  if (dispute.refund_policy_issue) reasons.push("Refund policy confusion")
  if (dispute.customer_support_delay) reasons.push("Customer support delay")

  return reasons.join(", ") || "Unknown cause"
}
