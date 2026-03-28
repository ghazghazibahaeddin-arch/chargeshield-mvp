import React, { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import MerchantCard from '@/components/MerchantCard'

export default function DashboardPage() {
  const [merchants, setMerchants] = useState<any[]>([])

  useEffect(() => {
    const fetchMerchants = async () => {
      const { data } = await supabase.from('users').select('*')
      if (!data) return

      const merchantsWithScore = data.map(user => ({
        ...user,
        healthScore:
          100 -
          ((user.dispute_ratio || 0) * 50 +
            (user.refund_rate || 0) * 30 +
            (user.fraud_trend || 0) * 20),
        disputeRatio: user.dispute_ratio || 0,
        refundRate: user.refund_rate || 0,
        fraudTrend: user.fraud_trend || 0,
        autoRefundStatus: user.status || 'Pending',
        winProbability: user.win_probability || 0,
        preDisputeAlert: user.pre_dispute_alert || false,
      }))

      setMerchants(merchantsWithScore)
    }

    fetchMerchants()
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {merchants.map(merchant => (
          <MerchantCard key={merchant.id} merchant={merchant} />
        ))}
      </div>
    </div>
  )
    }
