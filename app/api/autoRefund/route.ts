import { supabase } from '@/lib/supabase'
import { predict } from '@/src/ml/predict'

export async function POST() {
  // جلب النزاعات المعلقة
  const { data: disputes } = await supabase
    .from('disputes')
    .select('*')
    .eq('status', 'pending')

  if (!disputes) return new Response(JSON.stringify({ ok: false }))

  for (const d of disputes) {
    // توقع الفوز باستخدام ML
    const winProb = await predict(null, d) // استخدم النموذج المدرب

    if (winProb < 0.5) {
      // إجراء استرداد تلقائي
      await supabase.from('disputes').update({ status: 'refunded' }).eq('id', d.id)
      // هنا يمكن ربط API دفع Gumroad لإرجاع الأموال
      console.log(`Refunded dispute ${d.id} due to low win probability`)
    }
  }

  return new Response(JSON.stringify({ ok: true }))
  }
