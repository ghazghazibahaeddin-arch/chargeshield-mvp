export function rankEvidence(evidences: any[]) {
  return evidences.sort((a, b) => b.impact_score - a.impact_score)
}
