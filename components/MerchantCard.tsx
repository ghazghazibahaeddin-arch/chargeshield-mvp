// components/MerchantCard.tsx
import React from 'react'

interface MerchantCardProps {
  merchant: {
    name: string
    healthScore: number
    disputeRatio: number
    refundRate: number
    fraudTrend: number
    autoRefundStatus: string
    winProbability: number
  }
}

const MerchantCard: React.FC<MerchantCardProps> = ({ merchant }) => {
  return (
    <div className="bg-blue-900 p-4 rounded-xl shadow-lg text-white">
      <h2 className="font-bold text-lg">{merchant.name}</h2>
      <p>Health Score: {merchant.healthScore}</p>
      <p>Dispute Ratio: {merchant.disputeRatio}</p>
      <p>Refund Rate: {merchant.refundRate}</p>
      <p>Fraud Trend: {merchant.fraudTrend}</p>
      <p>Auto Refund Status: {merchant.autoRefundStatus}</p>
      <p>Win Probability: {merchant.winProbability}</p>
    </div>
  )
}

export default MerchantCard
