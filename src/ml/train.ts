import { trainModel } from './predict'
import { supabase } from '@/lib/supabase'

export async function trainFromData() {
  const { data: disputes } = await supabase.from('disputes').select('*')

  if (!disputes) return

  const model = await trainModel(disputes)
  console.log("ML model trained on real disputes")
  return model
}
