await supabase.from('disputes').insert({
  user_id: "TEMP_USER_ID", // سنغيره لاحقًا
  charge_id: dispute.charge,
  amount: dispute.amount / 100,
  status: 'pending',
  reason: dispute.reason,
})
