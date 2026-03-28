import * as tf from '@tensorflow/tfjs-node'

// بيانات التدريب: amount, charge_type, past_win_rate
// labels: 0=خسارة, 1=فوز
export async function trainModel(data: any[]) {
  const inputs = data.map(d => [d.amount, d.charge_type, d.past_win_rate])
  const labels = data.map(d => d.won ? 1 : 0)

  const xs = tf.tensor2d(inputs)
  const ys = tf.tensor2d(labels, [labels.length, 1])

  const model = tf.sequential()
  model.add(tf.layers.dense({ inputShape: [3], units: 5, activation: 'relu' }))
  model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }))

  model.compile({ optimizer: 'adam', loss: 'binaryCrossentropy', metrics: ['accuracy'] })

  await model.fit(xs, ys, { epochs: 50 })
  return model
}

// التنبؤ
export async function predict(model: any, dispute: any) {
  const input = tf.tensor2d([[dispute.amount, dispute.charge_type, dispute.past_win_rate]])
  const pred = model.predict(input) as tf.Tensor
  return (await pred.array())[0][0] // نسبة الفوز
}
