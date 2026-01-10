export type PackageId =
  | 'kickstart'
  | 'poc_lab'
  | 'pilot_launch'
  | 'production_scale'
  | 'assurance'
  | 'care_plan';

export type CarePlanTier = {
  name: string;
  nameTh?: string;
  priceTHB: number;
  hours: number;
  sla: string;
  bonus?: string;
  bonusTh?: string;
};

export type PackageConfig = {
  id: PackageId;
  title: string;
  titleTh?: string;
  priceFromTHB?: number;
  priceUnit?: 'one_time' | 'per_env' | 'per_rollout' | 'monthly';
  timeline?: string;            // e.g. "2–4" (weeks)
  highlight?: string;           // badge e.g. "Most Popular"
  highlightTh?: string;
  bullets?: string[];           // short selling points (for Pricing cards)
  bulletsTh?: string[];
  inScope?: string[];
  inScopeTh?: string[];
  outOfScope?: string[];
  outOfScopeTh?: string[];
  deliverables?: string[];
  deliverablesTh?: string[];
  addons?: string[];
  addonsTh?: string[];
  tiers?: CarePlanTier[];       // for care_plan
  crossCutting?: boolean;       // Assurance sprint
  postLaunch?: boolean;         // Care plan
  recommendAssurance?: boolean; // Show "Recommended: Assurance" badge
  ctaLabel?: string;
  ctaLabelTh?: string;
  ctaHref?: string;             // override
};
