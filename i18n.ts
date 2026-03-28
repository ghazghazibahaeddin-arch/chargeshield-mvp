// i18n.ts
export const translations = {
  en: {
    dashboard: "Dashboard",
    dispute: "Dispute",
    reason: "Reason",
    amount: "Amount",
    submit: "Submit",
    refund: "Refund",
    healthScore: "Health Score",
    disputeRatio: "Dispute Ratio",
    refundRate: "Refund Rate",
    fraudTrend: "Fraud Trend",
    autoRefundStatus: "Auto Refund Status",
    winProbability: "Win Probability",
  },
}

export function t(key: string) {
  return translations.en[key] || key
}
