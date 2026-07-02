# Right Space Interiors & Furniture — Website Audit & Premium Redesign Strategy

**Prepared for:** Right Space Interiors & Furniture, Coimbatore
**Scope:** Full audit of rightspacefactory.com + luxury Wix Studio redesign strategy
**Positioning:** *Coimbatore's Premium Interior Design & Custom Furniture Brand*
**Companion deliverable:** Clickable 7-page HTML prototype in this folder (open `index.html`)

---

## 1. Complete Website Audit

### Brand Audit
The current site under-sells a business that designs *and* manufactures — a genuinely rare, ownable advantage that never appears above the fold. Positioning is generic ("innovative interior solutions") rather than category-defining. Visual identity is weak: the beautiful new olive/terracotta logo is not carried through as a system; the site reads as a default Wix template, not a ₹1cr+ brand. Typography is system-default sans with no editorial serif to signal luxury. Color psychology is unexploited — olive (grounded, natural, premium) and terracotta (warm, crafted, Indian) are a strong pairing but aren't deployed. Brand consistency is low (placeholder "© 2035", Wix demo social links pointing to wix.com/facebook.com/wix). Trust signals are thin: three unbranded testimonials, no project counts, no address prominence, no credentials.

**Verdict:** Low premium appeal, weak differentiation, template feel. Biggest missed asset: in-house manufacturing.

### UX Audit
Navigation is shallow — only Services / About / Contact; no Projects, Manufacturing, or Blog, so there is nowhere to build desire or authority. Information architecture is flat and repetitive (three near-identical "specialties/competencies/why us" blocks). User journey has no funnel: a visitor cannot browse work, understand the process, or self-qualify by budget. CTAs are inconsistent ("Explore", "Get in Touch", "Get Started") and none is a strong primary action. Lead generation is limited to a phone number and a generic contact page — no WhatsApp, no consultation form, no callback. Mobile is functional (Wix responsive) but not designed. Accessibility gaps: tiny thumbnail images, low text contrast in places, no descriptive alt text strategy.

### UI Audit
Layout relies on default Wix strips with cramped, low-resolution thumbnail images (many served at 50–130px wide) — the single most damaging flaw for an interiors brand whose product *is* the imagery. Visual hierarchy is flat; headings, body and CTAs lack scale contrast. White space is inconsistent. Button styles vary. Overall aesthetic is "clean but forgettable" — it does not feel designed by people who design spaces.

### SEO Audit
- **Meta title:** "Home | Right Space" — no keywords, no location. Should target *interior designers Coimbatore*.
- **Meta description:** generic/auto. No localised, benefit-led descriptions per page.
- **Heading hierarchy:** repeated H2/H3 blocks with thin, duplicated copy; no keyword-mapped structure.
- **Technical:** Wix-hosted (JS-rendered); canonical present; needs sitemap discipline, image alt text, and lazy-loaded full-res images.
- **Internal linking:** minimal — few pages to link between.
- **Local SEO:** major gap. No Google Business Profile embed, no NAP consistency, no location landing intent, no schema (LocalBusiness/Service/Review).
- **Content depth:** very thin (a few sentences per section). No blog, no service pages, no project pages — nothing for Google to rank.
- **Keyword opportunity:** wide open for "luxury/commercial/office interior designers Coimbatore", "modular kitchen Coimbatore", "furniture manufacturers Coimbatore", "turnkey interior contractors Coimbatore".

### Conversion Audit
No lead form, no WhatsApp click-to-chat, no sticky CTA, no exit/newsletter capture, no cost calculator. The only conversion path is calling a phone number. No portfolio to create desire, no process to build confidence, no trust stack (counts, awards, reviews, factory proof). Conversion barriers: nothing to qualify or reassure a high-intent buyer spending lakhs.

### Strengths
Real, attractive project photography exists (reused in the prototype); a strong new logo and color palette; a clear, credible service range; genuine differentiator in owned manufacturing; established local presence with real testimonials.

### Weaknesses
Template look, tiny images, thin content, no funnel, no portfolio/blog/manufacturing pages, weak SEO, placeholder demo content, minimal trust signals, single conversion path.

### Missed Opportunities
1. Never says "we manufacture our own furniture" as a headline advantage.
2. No portfolio — the #1 asset for this category.
3. No local SEO capture for high-intent Coimbatore searches.
4. No WhatsApp/consultation funnel for a WhatsApp-first market.
5. No content engine (blog) to build authority and organic traffic.

### Competitor Analysis
| Brand | What they do well | What Right Space can beat them on |
|---|---|---|
| **Livspace (Premium)** | Polished funnel, cost calculator, huge portfolio, strong trust stack | Personal, boutique, *owned factory* vs. vendor network; bespoke not catalogue |
| **DesignCafe** | Slick UX, 3D visualisation, transparent pricing messaging | Local Coimbatore trust, in-person studio+factory tours, true custom furniture |
| **Bonito Designs** | Turnkey story, "design to execution" narrative | Deeper manufacturing proof, regional specialism, faster local delivery |
| **Studio Lotus / boutique studios** | Editorial, architectural authority, award credibility | Accessibility + manufacturing muscle + turnkey convenience |
| **Local Coimbatore designers** | Local relationships, word of mouth | Vastly stronger brand, portfolio, SEO and lead system |

**Strategic takeaway:** Right Space should own the intersection the big players can't authentically claim locally — *"designed by architects, built in our own Coimbatore factory."*

### Top Recommendations (priority order)
1. Rebuild IA into 7 pages: Home, About, Services, Projects, Manufacturing, Journal, Contact.
2. Lead with manufacturing + Coimbatore luxury positioning above the fold.
3. Replace tiny images with full-resolution, editorial photography; add real project case studies.
4. Install a full conversion system: WhatsApp float, sticky CTA, consultation form, newsletter/exit capture, cost estimator.
5. Implement local + on-page SEO with schema and location-targeted content.
6. Apply a true design system (olive/terracotta/beige + serif/sans) so nothing looks like a Wix template.

---

## 2. Sitemap
```
Home
├── About (story, founder, vision/mission, timeline, team, awards, stats)
├── Services (overview) → Residential · Commercial · Office · Educational ·
│        Modular Kitchens · Living · Bedrooms · Wardrobes · Custom Furniture · Interior Architecture
├── Projects (filterable: Residential / Commercial / Office / Educational / Furniture) → Case study template
├── Manufacturing (factory, workshop, machinery, materials, production, QC, video)
├── Journal / Blog (Trends · Luxury Homes · Modular Kitchens · Office · Furniture · Architecture)
└── Contact (form, map, WhatsApp, phone, email, hours, appointment)
Global: sticky header · WhatsApp float · sticky CTA · footer · newsletter · exit-intent popup
```

## 3. Information Architecture
Three-tier depth. Tier 1 = primary nav (7 items). Tier 2 = Services and Projects landing hubs with filtered children. Tier 3 = individual service and case-study detail pages. Every page ends in the same conversion block (consultation CTA). Footer repeats key links + NAP for local SEO and crawlability.

## 4. User Journey Flow
**Awareness** (Google "interior designers Coimbatore" / Instagram) → **Home** (positioning + manufacturing hook) → **Projects** (desire) → **Services / Manufacturing** (confidence: process + owned factory) → **About** (trust) → **Contact** (consultation form / WhatsApp) → **Nurture** (newsletter, follow-up within 1 working day) → **Consultation booked**. WhatsApp float and sticky CTA provide a shortcut to conversion from any stage.

## 5. Homepage Wireframe (top → bottom)
Sticky transparent header → full-bleed hero (headline + 2 CTAs + WhatsApp) → animated stat bar (500+/15+/100+/50+) → services grid (6) → featured projects (alternating large image + meta: location/area/timeline) → 6-step process → why-us grid → before/after slider → testimonial carousel → Instagram strip → final CTA band → footer. Floating WhatsApp + mobile sticky CTA persistent.

## 6. Complete Page Wireframes (summary)
- **About:** page hero → story split → founder message → vision/mission/values → milestone timeline → stat bar → awards/certifications → CTA.
- **Services:** hero → 9-card service grid → benefits split (tick list) → process → FAQ accordion → CTA.
- **Projects:** hero → filter chips → masonry grid → anatomy of a case study (before/after slider + brief/materials/challenge/solution + testimonial) → CTA.
- **Manufacturing:** hero → workshop split → capability grid (machinery/production/materials/QC/finishing/team) → video block → stat bar → factory-tour CTA.
- **Journal:** hero → category chips → post grid → newsletter capture → footer.
- **Contact:** hero → 2-col (consultation form with budget/type qualifiers | direct contact + hours + map) → footer.

## 7. UX Strategy
Reduce choices, increase confidence. One primary action per page ("Book Free Consultation"). Progressive disclosure via filters and accordions. Self-qualification via budget/project-type fields. WhatsApp-first for the Indian market. Consistent, predictable layout language so users always know where the next step is.

## 8. UI Strategy
Editorial luxury: generous white space, oversized serif headlines, restrained terracotta accents on an olive/beige base, full-bleed photography, subtle motion (reveal on scroll, image zoom on hover, count-up stats, drag before/after). Every component is bespoke — no Wix stock strips — so the site reads as designed by an interiors studio.

## 9. Conversion Strategy
- **Primary CTA everywhere:** Book Free Consultation.
- **WhatsApp float** (wa.me deep link) — persistent.
- **Sticky mobile CTA bar.**
- **Consultation form** with name, phone/WhatsApp, project type, budget, message (qualifies leads).
- **Newsletter capture** on Journal; **exit-intent popup** offering a free design guide (lead magnet).
- **Cost calculator** (Wix custom element) for self-serve budgeting.
- **Trust stack** on every page: stats, testimonials, awards, Google Reviews widget, factory proof.
- **Response promise:** "within one working day" to reduce hesitation.

## 10. SEO Strategy
Target keyword → page mapping:
- *Interior designers Coimbatore / Luxury interior designers Coimbatore* → **Home**
- *Commercial / Office interior designers Coimbatore* → **Services (+ future dedicated pages)**
- *Modular kitchen Coimbatore* → **Services / future modular-kitchen page**
- *Furniture manufacturers Coimbatore* → **Manufacturing**
- *Turnkey interior contractors Coimbatore* → **Services / Home**
- *Interior architecture Coimbatore* → **Services**
Actions: keyword-rich meta titles/descriptions per page; single H1 + logical H2/H3; descriptive alt text on all images; full-res but compressed images; LocalBusiness + Service + Review + BreadcrumbList schema (JSON-LD); Google Business Profile + consistent NAP; blog engine targeting long-tail informational queries; internal links from Journal → Services → Projects → Contact; XML sitemap + clean canonical.

## 11. Content Strategy
Voice: warm, confident, architectural — never salesy. Pillars: (1) *We design AND build* (manufacturing proof), (2) *Transparent & on-time* (process), (3) *Coimbatore's premium studio* (local authority). Journal cadence: 2 posts/month across the six categories, each ending in a consultation CTA. Every service and project page follows a consistent content skeleton (hero → value → proof → process → FAQ → CTA).

## 12. Page-by-Page Content Structure
Delivered in full inside the HTML prototype (real headlines, section copy, meta titles/descriptions per page). Home hero: *"Designing Spaces That Inspire Beautiful Living."* Sub: *"Luxury interior design, modular solutions and custom furniture — crafted in-house for modern living across South India."* Reuse across pages: consultation CTA block, stat bar, footer NAP.

## 13. Mobile Optimization Strategy
Mobile-first breakpoints (built into the prototype CSS). Off-canvas full-screen nav; sticky WhatsApp + bottom CTA bar; single-column stacking of grids; tap targets ≥ 44px; compressed responsive images; reduced hero height; carousels and accordions to condense content. Test on 360–414px widths.

## 14. Wix Studio Development Plan
1. **Set up** Wix Studio site; upload logo (header, favicon, share image); define global breakpoints.
2. **Design tokens:** add brand colors and Google Fonts (Cormorant Garamond + Jost) as site theme.
3. **Global header/footer:** sticky transparent → solid-on-scroll header; footer with NAP + links.
4. **Build 7 pages** using Studio's grid/stack layout (not templates); map each section from the prototype.
5. **CMS collections:** Projects, Services, Blog, Testimonials — so content is manageable without a developer.
6. **Interactions:** scroll reveal, hover zoom, sticky CTA (Studio animations); embed custom code (`<script>`/Velo) for count-up stats, before/after slider, cost calculator.
7. **Lead capture:** Wix Forms → CRM/Inbox + email automation; WhatsApp chat button; Wix pop-ups for newsletter/exit-intent.
8. **SEO:** per-page meta, alt text, JSON-LD via Wix SEO settings/custom code; connect Google Business Profile & Reviews widget; submit sitemap.
9. **QA:** cross-device, speed (compress media, lazy-load), accessibility, form testing.
10. **Launch:** 301 redirects from old URLs, connect domain, install Analytics + Meta Pixel.

## 15. Design System
- **Grid:** 12-col, max-width 1240px, 28px gutters.
- **Spacing scale:** 110px section padding (desktop) / 64px (mobile); 8px base unit.
- **Elevation:** soft, long shadows only (`0 40px 90px -40px`), never harsh.
- **Motion:** cubic-bezier(.22,.61,.36,1), 400–900ms, reveal-on-scroll, hover image scale 1.05–1.08.
- **Imagery:** full-bleed, warm, naturally-lit, editorial; 16:9 heroes, 4:3 cards.

## 16. Color System
| Token | Hex | Use |
|---|---|---|
| Primary — Dark Olive | `#2F3528` | Headlines, dark sections, header-on-scroll text |
| Secondary — Terracotta | `#C46B3C` | CTAs, accents, eyebrows, hover states |
| Terracotta Dark | `#A9552B` | CTA hover |
| Neutral — Warm Beige | `#F7F4EF` | Page background |
| White | `#FFFFFF` | Cards, contrast sections |
| Dark | `#1A1A1A` | Body text, footer |
Ratio guide: ~60% beige/white, ~30% olive, ~10% terracotta. Maintain WCAG AA contrast for text.

## 17. Typography System
- **Display / Headings:** Cormorant Garamond (serif) — editorial luxury. H1 clamp(2.7rem→5.4rem), H2 clamp(2rem→3.4rem).
- **Body / UI:** Jost (geometric sans) — clean, modern.
- **Eyebrow labels:** Jost, uppercase, 0.32em letter-spacing, terracotta.
- Line-height 1.7 body / 1.08 headings. This serif+sans pairing is the fastest signal that the site is *not* a stock template.

## 18. Component Library
Header (transparent + scrolled + solid variants), mobile off-canvas nav, hero, animated stat bar, service card, alternating featured-project block, process stepper, why-us grid, before/after slider, testimonial carousel, Instagram strip, CTA band, footer, WhatsApp float, sticky mobile CTA, filter chips + masonry portfolio, FAQ accordion, blog card, contact form with qualifiers, newsletter form, map embed. All built and reusable in the prototype CSS (`assets/style.css`) and JS (`assets/main.js`).

---

## 19. AI Image Prompts (for missing / upgraded imagery)
Global style suffix to append to every prompt:
> *"ultra-realistic architectural interior photography, editorial magazine style, warm natural daylight, shallow depth of field, olive-green, terracotta and warm-beige palette, premium minimal Indian luxury interior, 35mm, high detail, no text, no watermark."*

**Residential**
1. Living room — "spacious warm-minimal living room, oak veneer wall, brushed-brass accents, linen sofa, large windows" + suffix.
2. Bedroom — "serene master bedroom, fluted wood headboard wall, layered warm lighting, muted terracotta throw" + suffix.
3. Dining — "elegant dining room, solid oak table, statement pendant light, textured beige wall" + suffix.
4. Modular kitchen — "premium modular kitchen, matte olive cabinetry, quartz island, brass hardware" + suffix.
5. Wardrobe — "full-height walk-in wardrobe, backlit oak shelving, mirror finish" + suffix.
6. Home office — "warm home office, custom oak desk, bookshelf wall, plants, daylight" + suffix.

**Commercial**
7. Corporate office — "modern corporate office, biophilic breakout zone, acoustic wood ceiling, terracotta accents" + suffix.
8. Retail — "boutique retail interior, warm display joinery, feature lighting" + suffix.
9. Educational — "contemporary campus learning commons, warm wood, collaborative seating, daylight" + suffix.
10. Reception — "luxury reception area, olive feature wall, backlit brass logo panel, stone desk" + suffix.

**Furniture**
11. TV unit — "floating media wall unit, oak and matte-olive finish, integrated lighting" + suffix.
12. Storage — "bespoke storage cabinetry, fluted doors, brass handles" + suffix.
13. Custom furniture — "handcrafted solid-oak lounge chair, studio lighting, neutral backdrop" + suffix.

**Manufacturing**
14. Factory — "clean modern furniture factory floor, organised, warm daylight through skylights" + suffix.
15. Workshop — "carpenter hands finishing oak joinery, close-up, sawdust, warm light" + suffix.
16. Machinery — "CNC router cutting a wood panel, precision, industrial but clean" + suffix.
17. QC — "quality control inspector checking a finished cabinet with a checklist" + suffix.
18. Team — "team of craftsmen in a bright workshop, candid, aprons" + suffix.

**Lifestyle**
19. Client meeting — "interior designer and clients reviewing material samples at a table, warm office" + suffix.
20. Material selection — "flat-lay of wood veneers, stone, brass and fabric swatches on beige surface" + suffix.
21. Site visit — "designer with tablet on a residential construction site, daylight" + suffix.

> Note: the prototype currently **reuses the client's 8 existing site photos at full resolution** wherever possible; replace the placeholder slots above with generated or professionally shot images before launch.

## 20. Final Deliverables Checklist
Audit ✓ · Competitor analysis ✓ · Sitemap ✓ · IA ✓ · User journey ✓ · Homepage wireframe ✓ · All page wireframes ✓ · UX strategy ✓ · UI strategy ✓ · Conversion strategy ✓ · SEO strategy ✓ · Content strategy ✓ · AI image prompts ✓ · Mobile strategy ✓ · Wix Studio plan ✓ · Page-by-page content (in prototype) ✓ · Design system ✓ · Typography system ✓ · Color system ✓ · Component library ✓
