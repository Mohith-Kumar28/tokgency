# Graph Report - tokgency  (2026-10-13)

## Corpus Check
- 232 files · ~501,930 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 827 nodes · 1949 edges · 37 communities (33 shown, 4 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 33 edges (avg confidence: 0.52)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- agency.tsx
- routeTree.gen.ts
- site.ts
- dependencies
- devDependencies
- resources.$slug.tsx
- warmed-tiktok-accounts.tsx
- cn
- biome.json
- seo
- compilerOptions
- by-the-numbers.tsx
- reveal.tsx
- section-heading.tsx
- router.tsx
- hero-phone.tsx
- components.json
- two-ways-in.tsx
- roster.tsx
- landing-template.tsx
- video-marquee.tsx
- seo.ts
- formats-wall.tsx
- Tokgency marketing site
- index.tsx
- tiktok-shop-agency-fashion.tsx
- creator-reel.ts
- stat-flora.tsx
- how-it-works.tsx
- tiktok-shop-marketing-agency.tsx
- hero-showcase.tsx
- way-art.tsx
- tiktok-shop-agency-home.tsx
- utils.ts
- creators.tsx
- tiktok-shop-agency-supplements.tsx
- vite.config.ts

## God Nodes (most connected - your core abstractions)
1. `cn()` - 103 edges
2. `Reveal()` - 50 edges
3. `Accent()` - 48 edges
4. `SectionHeading()` - 31 edges
5. `FileRoutesByPath` - 25 edges
6. `ButtonLink()` - 21 edges
7. `siteConfig` - 21 edges
8. `SmartLink()` - 20 edges
9. `headerActions` - 19 edges
10. `compilerOptions` - 18 edges

## Surprising Connections (you probably didn't know these)
- `StatCard()` --calls--> `cn()`  [EXTRACTED]
  src/components/sections/home/by-the-numbers.tsx → src/lib/utils.ts
- `QuoteCard()` --calls--> `cn()`  [EXTRACTED]
  src/components/sections/home/by-the-numbers.tsx → src/lib/utils.ts
- `FloatingCard()` --calls--> `cn()`  [EXTRACTED]
  src/components/sections/home/hero-showcase.tsx → src/lib/utils.ts
- `InvestorLogo()` --calls--> `cn()`  [EXTRACTED]
  src/components/sections/home/investor-marquee.tsx → src/lib/utils.ts
- `StageRow()` --calls--> `cn()`  [EXTRACTED]
  src/components/sections/how-it-works/order-status-mock.tsx → src/lib/utils.ts

## Import Cycles
- None detected.

## Communities (37 total, 4 thin omitted)

### Community 0 - "agency.tsx"
Cohesion: 0.11
Nodes (17): Eligibility(), Fit(), HowItRuns(), Operations(), Qualification(), Eyebrow(), TickList(), TickListProps (+9 more)

### Community 1 - "routeTree.gen.ts"
Cohesion: 0.06
Nodes (40): Route, Route, Route, Route, Route, Route, Route, Route (+32 more)

### Community 2 - "site.ts"
Cohesion: 0.08
Nodes (35): Logo(), MobileMenu(), NotFound(), PlatformMenu(), PlatformMenuProps, SiteFooter(), SiteHeader(), useBodyScrollLock() (+27 more)

### Community 3 - "dependencies"
Cohesion: 0.06
Nodes (33): class-variance-authority, clsx, @fontsource/instrument-serif, @fontsource-variable/caveat, @fontsource-variable/geist, @fontsource-variable/geist-mono, lucide-react, motion (+25 more)

### Community 4 - "devDependencies"
Cohesion: 0.06
Nodes (33): @biomejs/biome, devDependencies, @biomejs/biome, @tanstack/router-cli, @types/node, @types/react, @types/react-dom, typescript (+25 more)

### Community 5 - "resources.$slug.tsx"
Cohesion: 0.09
Nodes (30): PageShell(), ArticleBody(), isPlainLeftClick(), ArticleCover(), ArticleHeader(), ArticleToc(), useActiveHeading(), KeepReading() (+22 more)

### Community 6 - "warmed-tiktok-accounts.tsx"
Cohesion: 0.06
Nodes (30): LogoMark(), BRIEF_FIELDS, Step, STEPS, WorkspaceMock(), FounderStory(), Hero(), HowBuilt() (+22 more)

### Community 7 - "cn"
Cohesion: 0.07
Nodes (51): RevealItem(), RevealStagger(), AD_SETS, AdsMock(), BACKLOG_WIDTHS, DEVICES, FORMATS, ScalingMock() (+43 more)

### Community 8 - "biome.json"
Cohesion: 0.06
Nodes (30): source, assist, actions, css, parser, files, ignoreUnknown, includes (+22 more)

### Community 9 - "seo"
Cohesion: 0.13
Nodes (12): landingHead(), LandingTemplate(), tiktokAffiliateManagement, tiktokCreatorDatabase, tiktokShopAgencyBeauty, tiktokShopAgencyFood, LandingPage, seo() (+4 more)

### Community 10 - "compilerOptions"
Cohesion: 0.08
Nodes (25): DOM, DOM.Iterable, ES2022, **/*.ts, **/*.tsx, vite/client, compilerOptions, allowImportingTsExtensions (+17 more)

### Community 11 - "by-the-numbers.tsx"
Cohesion: 0.14
Nodes (14): ByTheNumbers(), QuoteCard(), QuoteCardProps, StatCard(), StatCardProps, DemoCall(), Hero(), Circled() (+6 more)

### Community 12 - "reveal.tsx"
Cohesion: 0.23
Nodes (10): EASE_OUT_EXPO, noTravel, Reveal(), RevealProps, RevealStaggerProps, Action, ClosingCtaProps, ContrastButtonLink() (+2 more)

### Community 13 - "section-heading.tsx"
Cohesion: 0.14
Nodes (15): Hero(), Column(), Problem(), Tone, TONES, WayArtwork(), WaysToSell(), Accent() (+7 more)

### Community 14 - "router.tsx"
Cohesion: 0.33
Nodes (5): getRouter(), Register, @tanstack/react-router, Register, routeTree

### Community 15 - "hero-phone.tsx"
Cohesion: 0.18
Nodes (9): ACTION_ICONS, BACKDROPS, Clip, clips, feed, HeroPhone(), AutoplayVideo(), AutoplayVideoProps (+1 more)

### Community 16 - "components.json"
Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, iconLibrary, rsc (+9 more)

### Community 17 - "two-ways-in.tsx"
Cohesion: 0.16
Nodes (11): BRIEF_LINES, CREATOR_SLOTS, MANAGED_STEPS, ManagedMock(), PortalMock(), WORKSPACE_NAV, Action, RouteCardProps (+3 more)

### Community 18 - "roster.tsx"
Cohesion: 0.23
Nodes (6): FilterPanel(), Roster(), FilterGroup, filterGroups, sourcingCategories, SourcingCategory

### Community 19 - "landing-template.tsx"
Cohesion: 0.18
Nodes (9): LandingCards(), LandingHero(), LandingHeroProps, LandingIncluded(), LandingIntro(), LandingRelated(), HeroGlow(), LandingCard (+1 more)

### Community 20 - "video-marquee.tsx"
Cohesion: 0.24
Nodes (10): PosterTile(), PosterTileProps, loopTiles(), Row(), RowProps, Tile(), tileTint(), VideoMarqueeProps (+2 more)

### Community 21 - "seo.ts"
Cohesion: 0.12
Nodes (22): LegalLayout(), LegalLayoutProps, OtherPolicies(), PolicyIndexList(), bodies, bySlug, getPolicy(), loadPolicyHtml() (+14 more)

### Community 22 - "formats-wall.tsx"
Cohesion: 0.22
Nodes (7): FormatsWall(), rows, CreatorStrip(), VideoMarquee(), creatorRows, toRows(), wallTiles

### Community 23 - "Tokgency marketing site"
Cohesion: 0.25
Nodes (7): Adding content, Commands, Deploying, Design tokens, Layout, SEO, Tokgency marketing site

### Community 24 - "index.tsx"
Cohesion: 0.20
Nodes (9): AgencyBand(), HomeFaq(), GrowthLoop(), Investor, InvestorLogo(), InvestorMarquee(), INVESTORS, loop (+1 more)

### Community 26 - "creator-reel.ts"
Cohesion: 0.25
Nodes (7): D2C_PER_ROW, d2cReel, d2cTiles, interleave(), ReelItem, techReel, toTile()

### Community 27 - "stat-flora.tsx"
Cohesion: 0.14
Nodes (14): Bloom, Blossom(), BLOSSOM_STEMS, BlossomFlora(), BLOSSOMS, BUDS, DAISIES, Daisy() (+6 more)

### Community 28 - "how-it-works.tsx"
Cohesion: 0.06
Nodes (39): CampaignLoop(), HowItWorksFaq(), Guardrails(), OrderStatusMock(), StageRow(), StageRowProps, State, STATUS (+31 more)

### Community 30 - "hero-showcase.tsx"
Cohesion: 0.22
Nodes (8): useSettledReducedMotion(), CARDS, FloatingCard(), FloatingCardProps, HeroShowcase(), Offset, ShowcaseCard, SPRING

### Community 31 - "way-art.tsx"
Cohesion: 0.20
Nodes (8): LIBRARY_HEIGHTS, LIBRARY_PEAK, LibraryArt(), LIVE_HEIGHTS, LiveArt(), SEEDED, SeedingArt(), WayArt

### Community 33 - "utils.ts"
Cohesion: 0.13
Nodes (18): HowItRuns(), BriefMock(), JobMockup(), SEARCH_RESULTS, JobRow(), JobRowProps, WhatWeHandle(), MockFrame() (+10 more)

### Community 35 - "creators.tsx"
Cohesion: 0.14
Nodes (14): BenefitCardProps, Benefits(), CreatorsFaq(), JoiningSteps(), StepRowProps, RateCard(), appUrl(), Benefit (+6 more)

### Community 43 - "vite.config.ts"
Cohesion: 0.20
Nodes (7): articles, Changefreq, CORE_PAGES, LANDING_PAGES, pages, policies, Tier

## Knowledge Gaps
- **255 isolated node(s):** `$schema`, `enabled`, `clientKind`, `useIgnoreFile`, `ignoreUnknown` (+250 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn` to `agency.tsx`, `utils.ts`, `site.ts`, `resources.$slug.tsx`, `warmed-tiktok-accounts.tsx`, `by-the-numbers.tsx`, `reveal.tsx`, `section-heading.tsx`, `hero-phone.tsx`, `two-ways-in.tsx`, `landing-template.tsx`, `video-marquee.tsx`, `index.tsx`, `how-it-works.tsx`, `hero-showcase.tsx`, `way-art.tsx`?**
  _High betweenness centrality (0.135) - this node is a cross-community bridge._
- **Why does `Reveal()` connect `reveal.tsx` to `agency.tsx`, `utils.ts`, `site.ts`, `creators.tsx`, `resources.$slug.tsx`, `warmed-tiktok-accounts.tsx`, `cn`, `by-the-numbers.tsx`, `section-heading.tsx`, `two-ways-in.tsx`, `roster.tsx`, `landing-template.tsx`, `seo.ts`, `formats-wall.tsx`, `index.tsx`, `how-it-works.tsx`?**
  _High betweenness centrality (0.035) - this node is a cross-community bridge._
- **Why does `Accent()` connect `section-heading.tsx` to `agency.tsx`, `utils.ts`, `site.ts`, `creators.tsx`, `resources.$slug.tsx`, `warmed-tiktok-accounts.tsx`, `cn`, `by-the-numbers.tsx`, `reveal.tsx`, `two-ways-in.tsx`, `landing-template.tsx`, `formats-wall.tsx`, `index.tsx`, `how-it-works.tsx`?**
  _High betweenness centrality (0.030) - this node is a cross-community bridge._
- **What connects `$schema`, `enabled`, `clientKind` to the rest of the system?**
  _255 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `agency.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.10541310541310542 - nodes in this community are weakly interconnected._
- **Should `routeTree.gen.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.059800664451827246 - nodes in this community are weakly interconnected._
- **Should `site.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.08215488215488216 - nodes in this community are weakly interconnected._