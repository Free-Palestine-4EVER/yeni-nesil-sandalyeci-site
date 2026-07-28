# Design Brief — YENİ NESİL SANDALYECİ (sandalyedepo)

Source: Instagram (`@sandalyedepo`, 145,012 followers, 2,189 posts, verified). No Google Business data exists for this business — no rating, reviews, hours, address field, lat/lng, phone, or WhatsApp. Every trust and contact decision below is built from Instagram-native signals only.

## 1. Archetype

**Contract/B2B furniture manufacturer — portfolio-of-work lookbook + trust badges**, closer to the "trades/services" archetype than consumer retail. This is not a shop selling to walk-in customers; the bio ("Contract Furniture Manufacturer"), the repeated caption line ("CAFE | RESTAURANT | HOTEL | You can contact us for your corporate and individual bulk purchases"), and the horeca/hospitality hashtags (#horeca, #cafeproject, #tableproject) all point to a B2B manufacturer supplying custom chairs, tables, and stools to hospitality venues. The site should read like a manufacturer's capabilities showcase and installed-projects portfolio, not an e-commerce catalog — no cart, no per-unit pricing, CTA is "get in touch for a quote/bulk order," not "buy now."

**Layout geometry devices:**
- **Bento mosaic gallery** for the 12 real Instagram photos — mixed cell sizes (some 2x2 hero cells for the video posts, some 1x1) rather than a uniform grid, since the photo count (12) and mixed image/video mix support genuine visual variety.
- **Sticky-stacking offering deck** for the product categories (chairs / tables / stools / custom bar seating) — each category panel pins and crossfades/slides as the user scrolls, giving the manufacturing range a sense of depth instead of a flat list.

## 2. Palette

| Token | Hex | Role |
|---|---|---|
| Background | `#F6F1E9` | warm off-white, raw linen/oak tone |
| Surface | `#EAE0CF` | light warved-wood beige, card/panel backgrounds |
| Text | `#2A2320` | near-black espresso-charcoal |
| Accent | `#B5652E` | warm burnt-copper/amber — wood stain + steel-weld warmth |
| Accent-2 | `#1C1B19` | deep gunmetal/steel-black, for contrast blocks and dark sections |

Reasoning: the product is wood-and-steel horeca furniture (chairs, stools, custom bar pieces like "LEO") — warm timber tones grounded by an industrial charcoal/steel counterpoint feels true to the category without defaulting to generic retail brights.

Contrast check: Text `#2A2320` on Background `#F6F1E9` → ~13.9:1 (AA/AAA pass). Accent `#B5652E` on Background `#F6F1E9` → ~3.9:1 — sufficient for large text/UI elements (AA large-text pass) but not small body copy; use Accent for headlines, buttons, and icons, and keep small body text in `#2A2320`. Body text pair: **`#2A2320` on `#F6F1E9`**.

## 3. Type pair

- **Display (Latin):** Archivo (bold, geometric, has real industrial weight)
- **Body (Latin):** Inter
- **Arabic:** IBM Plex Sans Arabic — chosen because its technical, engineered letterforms echo the manufacturing/contract-industry register (over something softer like Almarai or Readex Pro, which would undersell the industrial B2B tone), and it pairs cleanly in weight/x-height with Archivo + Inter.

Hero typographic decision: oversized bold Archivo display word ("SANDALYECİ" or "CONTRACT FURNITURE") set tight, beside a thin-weight Inter companion phrase ("for cafés, restaurants & hotels"); a small, wide-tracked uppercase eyebrow label ("İSTANBUL · ÜMRANİYE · SINCE-YOUR-FIRST-ORDER — CONTRACT MANUFACTURER") sits above both, echoing the bio's own factory/showroom framing.

## 4. Offering / services content — MANDATORY

**GENUINE OFFERINGS — SOURCED FROM FACTS.JSON (post captions), tagged `[REAL]`:**
- Chairs (sandalye) — for cafés, restaurants, hotels `[REAL]`
- Tables (masa) — project/bulk supply `[REAL]`
- Stainless Steel Stools — "minimal design, maximum durability" `[REAL]`
- Custom Bar Chairs — e.g. the "LEO" model, hand-crafted custom design `[REAL]`
- Corporate & Individual Bulk/Contract Orders for cafés, restaurants, hotels `[REAL]`

These five are directly evidenced by repeated captions across the feed and can be shown as named categories. To round the offering section out to a fuller range (fewer than the ~4-8 target of clearly-differentiated product types), add:

**GENERIC — CATEGORY-TYPICAL, NOT VERIFIED PER-BUSINESS FACTS, NO PRICES, tagged `[GENERIC]`:**
- Booth & Banquette Seating `[GENERIC]`
- Lounge & Hookah-Area Furniture `[GENERIC]`
- Custom Upholstery & Fabric Selection `[GENERIC]`
- Outdoor/Terrace Furniture `[GENERIC]`

Real items first, generic ones filling the deck out to a believable range of a full-service contract manufacturer.

## 5. Trust / why-choose-us

No `rating`/`reviewCount`/`reviews` exist (Instagram-sourced). Stat block copy:
- **145,000+** followers on Instagram (real, animated count-up from `followers: 145012`)
- **2,189+** projects and posts shared (real, animated count-up from `postCount`)
- **Verified** Instagram business account badge (real, from `isVerified: true`)

Paired with 2-3 generic, category-appropriate craft-pride lines (no unverifiable specific claims like years-in-business, since none is given):
- Custom manufacturing — every piece built to the venue's own brief, not off-the-shelf
- Trusted by cafés, restaurants, and hotels across İstanbul for corporate and bulk orders
- In-house design and production from raw material to finished, delivered piece

## 6. Signature moment(s)

**Primary:** A **scroll-scrubbed marquee / bento mosaic** of the 12 real Instagram feed photos — as the user scrolls, images shift scale, crossfade, and reflow between mosaic cells (video posts get a subtle looping play-state cue). Justified by photo depth: 12 real images/videos with captions and permalinks is the single richest data asset in facts.json, and there's no rating/review data to build a counter-and-ring moment around instead.

**Supporting motion beats:**
1. **Animated count-up stat ticker** for the trust section (145,000+ followers / 2,189+ posts) — numbers roll up from 0 on scroll-into-view, giving the only real numeric social proof this business has some weight.
2. **Sticky-stacking offering deck** (from section 1) with a magnetic/tilt hover on each product category card — reinforces the manufacturing range visually as the user scrolls past chairs → tables → stools → custom seating.

## 7. Section list

1. **Hero** — from `name`, `bio` (positioning line), `category`. Eyebrow label uses the factory/showroom location text embedded in `bio`.
2. **About/story** — mined directly from `bio` ("Contract Furniture Manufacturer... FABRİKA&SHOWROOM: Şerifali Mahallesi, Turgut Özal Bulvarı, 199/5, Ümraniye, İstanbul"). No separate founding-date or years-in-business claim exists, so the about copy stays grounded in what the bio actually says: what they make, who they make it for, where the factory/showroom is.
3. **Offering / product range** — from section 4 above (`postCaptions`-sourced real items + generic fill).
4. **Featured craftsmanship spotlight** — the "LEO" custom bar chair post (`posts[3]`, caption: "LEO Power in every detail... Cesur çizgiler, el işçiliği ve özgün karakter") gets a dedicated full-bleed spotlight moment — it's the one post with a named, described custom product, distinct from the generic horeca-bulk-order captions repeated elsewhere.
5. **Trust / why-choose-us** — stat block from `followers`/`postCount`/`isVerified` + craft-pride lines (section 5 above).
6. **Instagram feed gallery** — bento mosaic of all 12 `posts[].image` entries, captions as hover/tap overlays, permalinks as click-throughs, prominent "Follow on Instagram" CTA to `instagram` (https://www.instagram.com/sandalyedepo/). Mandatory per Instagram-source override.
7. **Contact** — CTA-led, not address-led: "Message us on Instagram" (→ `instagram`) as primary CTA, "Visit our site" (→ `website`, deposan.net) as secondary. **No phone, WhatsApp, or email exists in facts.json — omit call/WhatsApp buttons entirely rather than showing dead or placeholder CTAs.**
8. **Footer** — business name, the factory/showroom address as a plain text line (sourced verbatim from `bio`, since the structured `address` field is null and no `mapsUrl`/`lat`/`lng` exist — this is text-only, not a map or directions link), Instagram + website links. **No hours table** (no `hoursRaw` data, and none should be invented).

**Omitted/adapted per missing data:** no star-rating block, no review quote carousel, no hours table, no pinned coordinate map (no `lat`/`lng`), no directions/maps-search link (no `mapsUrl` and no structured `address` field to build one from — the bio's address text is display-only, in the footer). No phone/WhatsApp CTA anywhere on the site.

## 8. Tone of voice

English copy should read like a confident, no-fluff B2B trade voice — direct, capability-forward, aimed at café/restaurant/hotel owners and project managers, not consumers ("built for your venue, not off a shelf" register). Arabic copy should carry the same register in natural Amman/Gulf-facing B2B Arabic — warm but businesslike, the voice of someone who'd actually call a hospitality-sector supplier, not a stiff literal translation. Since `nameAr`/`categoryAr`/`addressAr` are all null, use a natural Arabic transliteration of the real name ("يني نسل صندلجي" as a phonetic rendering, kept alongside the Latin/Turkish original since it's a proper noun) and standard Arabic trade terminology for the category ("تصنيع أثاث تعاقدي للمقاهي والمطاعم والفنادق" — contract furniture manufacturing for cafés, restaurants, and hotels).

Example headline:
- **Arabic:** "أثاث مصمم لمشروعك، لا من على الرف" (roughly: "Furniture designed for your project, not off the shelf")
- **English equivalent (natural, not literal):** "Built for your venue. Not off the shelf."
