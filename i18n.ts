export const translations = {
  en: {
    dashboard: "Dashboard",
    dispute: "Dispute",
    reason: "Reason",
    amount: "Amount",
  },
  ar: {
    dashboard: "لوحة التحكم",
    dispute: "نزاع",
    reason: "السبب",
    amount: "المبلغ",
  }
}

export function t(lang: 'en'|'ar', key: string) {
  return translations[lang][key] || key
}
