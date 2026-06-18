export type ImageMeta = {
  width: number;
  height: number;
};

export const IMAGE_META: Record<string, ImageMeta> = {
  '/images/bibek-headshot-20260618.png': { width: 400, height: 400 },
  '/images/blog/agent-failure-modes/hero-banner.png': { width: 1536, height: 1024 },
  '/images/blog/agentic-orchestration-banner.png': { width: 2500, height: 1000 },
  '/images/blog/ai-governance-guardrails/hero-banner.jpg': { width: 1536, height: 1024 },
  '/images/blog/hardest-pm-skill/hero-banner.png': { width: 1536, height: 1024 },
  '/images/blog/not-everything-i-build-has-to-be-useful/hero-banner.png': { width: 2048, height: 819 },
  '/images/blog/openclaw-reaction/hero-banner.png': { width: 1536, height: 864 },
  '/images/blog/pm-decade-agentic-ai/hero-banner.png': { width: 1536, height: 1024 },
  '/images/blog/smaller-loop/hero-banner.png': { width: 1983, height: 793 },
  '/images/blog/two-brothers-one-van/start.jpg': { width: 1200, height: 1600 },
  '/images/blog/what-to-leave-unautomated/hero-banner.png': { width: 1983, height: 793 },
  '/images/blog/zero-cost-fleet-banner.png': { width: 1200, height: 480 },
  '/images/blog/zero-cost-fleet/hero-banner.png': { width: 1200, height: 480 },
};

export function getImageMeta(src?: string): ImageMeta | undefined {
  if (!src) return undefined;
  return IMAGE_META[src];
}

export function getImageSrcset(src?: string): string | undefined {
  const meta = getImageMeta(src);
  if (!src || !meta) return undefined;
  return `${src} ${meta.width}w`;
}
