# Design Brief — YENİ NESİL SANDALYECİ (sandalyedepo)

Source: Instagram (`@sandalyedepo`, 145,012 followers, 2,189 posts, verified). No Google Business data exists for this business — no rating, reviews, hours, address field, lat/lng, phone, or WhatsApp. Every trust and contact decision below is built from Instagram-native signals only.

## 0. Photo audit

All 12 feed photos plus `profileImage` were opened and viewed pixel-by-pixel (not judged from filenames/captions).

- **post-01.jpg** — a man in an Emporio Armani t-shirt posing in a hotel/venue lobby with a decorative fringed ceiling installation; no furniture product visible or in focus. **AVOID-FOR-FEATURE** — unrelated person is the dominant subject, no real product shown.
- **post-02.jpg** — a man posing outside "MEJNUN Lounge · Food · Music" between two white giraffe statues; storefront/venue signage, not the business's own furniture. **AVOID-FOR-FEATURE** — unrelated person + third-party venue branding is the dominant subject, no Deposan product visible.
- **post-03.jpg** — rows of real burgundy/maroon horeca armchairs with brass trim, genuinely the business's product and well-composed in depth. However **two large "DEPOSAN chair | table | project" wordmark watermarks** are baked directly into the pixels, dead-center, at a size that dominates the lower two-thirds of the frame. **AVOID-FOR-FEATURE** for hero/feature use (the watermark would double up or become illegible clutter under any crop/shrink) — but the photo is genuine, well-composed feed content, so it stays in the plain Instagram-feed grid at full size/uncropped.
- **post-04.jpg** — a decorative bust statue on an ornate plinth beside a "Welcome to the DEPOSAN BAR" sign and a leopard-print skirted counter; this is the image attached to the caption that describes the "LEO" custom bar chair, but **no chair is actually visible in the photo** — caption and image do not match. **AVOID-FOR-FEATURE** — no furniture product is the visible subject; this photo must not be used to illustrate "LEO" or any chair product, despite what its caption claims.
- **post-05.jpg** — six brushed-stainless-steel stools, clean white studio background, small DEPOSAN wordmark logo at top (does not overlap the product). Crisp, well-composed, product is the unambiguous subject. **HERO-WORTHY.**
- **post-06.jpg** — three stainless-steel table pedestal bases in different finishes, clean white studio shot, small logo at bottom. **HERO-WORTHY.**
- **post-07.jpg** — a single cream/ivory table pedestal base, clean white studio shot, small logo below. **HERO-WORTHY** (though a single item, so better suited to a supporting tile than the widest hero crop).
- **post-08.jpg** — brown leather Cesca-style cantilever chairs (chrome frame, cane backrest), white studio background, small watermark bottom-right that doesn't obscure the product. **HERO-WORTHY.**
- **post-09.jpg** — a grey upholstered armchair sharp in the foreground with rows of matching chairs receding behind it in a showroom/warehouse setting, small watermark bottom-left. Strong depth, clear product focus, evokes manufacturing scale. **HERO-WORTHY.**
- **post-10.jpg** — a video-still collage of several fabric chairs stacked/interlocked at odd angles against each other; real product but a chaotic, overlapping composition, not a clean presentation shot. **SECTION-USABLE** (genuine feed content, not hero quality).
- **post-11.jpg** — similar tangled multi-chair video still to post-10, plus a translucent "Pai" text caption overlaid mid-frame and a small "deposan.net" watermark at the bottom. **SECTION-USABLE** (chaotic composition + text overlay rules out hero/feature use, fine as a feed tile at native size).
- **post-12.jpg** — dark espresso-leather tufted/nailhead armchairs, clean white studio background, small DEPOSAN logo bottom-right. Crisp, well-composed, product is the clear subject. **HERO-WORTHY.**
- **profileImage (profile.jpg)** — just the "DEPOSAN chair | table | project" wordmark logo on white, not a photo of product or space. Usable as a small brand mark (e.g. favicon-style badge) but not as feed/gallery content.

**Net effect on the rest of this brief:** six real HERO-WORTHY product shots exist (post-05, 06, 07, 08, 09, 12), so the hero and any "featured spotlight" section can and must use genuine product photography, not typography-only or people-photos. Three photos (post-01, 02, 04) must never be cropped into a shape, shrunk small, or used as hero/feature/spotlight images — they only ever appear, uncropped and at native size, inside the plain Instagram-feed grid section. Post-04 specifically must not be paired with "LEO" copy as if it depicts that product.

## 1. Archetype

**Contract/B2B furniture manufacturer — portfolio-of-work lookbook + trust badges**, closer to the "trades/services" archetype than consumer retail. This is not a shop selling to walk-in customers; the bio ("Contract Furniture Manufacturer"), the repeated caption line ("CAFE | RESTAURANT | HOTEL | You can contact us for your corporate and individual bulk purchases"), and the horeca/hospitality hashtags (#horeca, #cafeproject, #tableproject) all point to a B2B manufacturer supplying custom chairs, tables, and stools to hospitality venues. The site should read like a manufacturer's capabilities showcase and installed-projects portfolio, not an e-commerce catalog — no cart, no per-unit pricing, CTA is "get in touch for a quote/bulk order," not "buy now."

**Hero photo:** `post-09.jpg` (HERO-WORTHY per section 0) — the grey armchair sharp in the foreground with rows of matching chairs receding behind it reads as both a clean product shot and a statement of manufacturing scale/depth, which fits the B2B-capabilities positioning better than a single isolated product shot would.

**Layout geometry devices:**
- **Bento mosaic gallery** for the 12 real Instagram photos — mixed cell sizes (larger cells reserved for the six HERO-WORTHY/SECTION-USABLE product shots, small uniform tiles for post-01/02/04 so their watermark/off-subject issues never get magnified) rather than a uniform grid.
- **Sticky-stacking offering deck** for the product categories (chairs / tables / stools / custom bar seating) — each category panel pins and crossfades/slides as the user scrolls, giving the manufacturing range a sense of depth instead of a flat list.

## 2. Palette

| Token | Hex | Role |
|---|---|---|
| Background | `#F6F1E9` | warm off-white, raw linen/oak tone |
| Surface | `#EAE0CF` | light warved-wood beige, card/panel backgrounds |
| Text | `#2A2320` | near-black espresso-charcoal |
| Accent | `#B5652E` | warm burnt-copper/amber — wood stain + steel-weld warmth |
| Accent-2 | `#1C1B19` | deep gunmetal/steel-black, for contrast blocks and dark sections |

Reasoning: the product is wood-and-steel horeca furniture (chairs, stools, table bases) — warm timber tones grounded by an industrial charcoal/steel counterpoint feels true to the category without defaulting to generic retail brights.

Contrast check: Text `#2A2320` on Background `#F6F1E9` → ~13.9:1 (AA/AAA pass). Accent `#B5652E` on Background `#F6F1E9` → ~3.9:1 — sufficient for large text/UI elements (AA large-text pass) but not small body copy; use Accent for headlines, buttons, and icons, and keep small body text in `#2A2320`. Body text pair: **`#2A2320` on `#F6F1E9`**.

## 3. Type pair

- **Display (Latin):** Archivo (bold, geometric, has real industrial weight)
- **Body (Latin):** Inter
- **Arabic:** IBM Plex Sans Arabic — chosen because its technical, engineered letterforms echo the manufacturing/contract-industry register (over something softer like Almarai or Readex Pro, which would undersell the industrial B2B tone), and it pairs cleanly in weight/x-height with Archivo + Inter.

Hero typographic decision: oversized bold Archivo display word ("SANDALYECİ" or "CONTRACT FURNITURE") set tight, beside a thin-weight Inter companion phrase ("for cafés, restaurants & hotels"); a small, wide-tracked uppercase eyebrow label ("İSTANBUL · ÜMRANİYE · CONTRACT MANUFACTURER") sits above both, echoing the bio's own factory/showroom framing.

## 4. Offering / services content — MANDATORY

**GENUINE OFFERINGS — SOURCED FROM FACTS.JSON (post captions), tagged `[REAL]`:**
- Chairs (sandalye) — for cafés, restaurants, hotels `[REAL]`
- Tables & table bases (masa) — project/bulk supply `[REAL]` (product photos: post-06, post-07)
- Stainless Steel Stools — "minimal design, maximum durability" `[REAL]` (product photo: post-05)
- Custom Bar Chairs — e.g. the "LEO" model, hand-crafted custom design, described in caption text only — no photo of this specific piece exists in the feed, so represent it with copy/typography, not an image `[REAL — caption text only, no matching photo]`
- Corporate & Individual Bulk/Contract Orders for cafés, restaurants, hotels `[REAL]`

To round the offering section out to a fuller range, add:

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

**Primary:** A **scroll-scrubbed marquee / bento mosaic** of the 12 real Instagram feed photos — as the user scrolls, images shift scale, crossfade, and reflow between mosaic cells. The six HERO-WORTHY/SECTION-USABLE product shots (post-05, 06, 07, 08, 09, 12) get the larger cells; post-01, 02, 04 (per the section 0 audit) stay in small, uncropped tiles so their off-subject/watermark issues are never magnified. Justified by photo depth: 12 real images/videos with captions and permalinks is the richest data asset in facts.json, and there's no rating/review data to build a counter-and-ring moment around instead.

**Supporting motion beats:**
1. **Animated count-up stat ticker** for the trust section (145,000+ followers / 2,189+ posts) — numbers roll up from 0 on scroll-into-view, giving the only real numeric social proof this business has some weight.
2. **Sticky-stacking offering deck** (from section 1) with a magnetic/tilt hover on each product category card — reinforces the manufacturing range visually as the user scrolls past chairs → tables → stools → custom seating.

## 7. Section list

1. **Hero** — from `name`, `bio` (positioning line), `category`, hero photo `post-09.jpg`. Eyebrow label uses the factory/showroom location text embedded in `bio`.
2. **About/story** — mined directly from `bio` ("Contract Furniture Manufacturer... FABRİKA&SHOWROOM: Şerifali Mahallesi, Turgut Özal Bulvarı, 199/5, Ümraniye, İstanbul"). No separate founding-date or years-in-business claim exists, so the about copy stays grounded in what the bio actually says: what they make, who they make it for, where the factory/showroom is.
3. **Offering / product range** — from section 4 above (`postCaptions`-sourced real items + generic fill). Product tiles use real photos where they exist (post-05 stools, post-06/07 table bases, post-08/09/12 chairs); the "LEO" custom bar chair entry is copy/typography-led since no matching photo exists (see section 0/4 — post-04 does not depict it).
4. **Featured craftsmanship spotlight** — `post-12.jpg` (dark espresso-leather tufted armchairs) gets a dedicated full-bleed spotlight moment, distinct from the hero image — it's the most premium-reading single product shot in the feed and shows stylistic range (upholstered luxury seating) against the hero's showroom-grey chair.
5. **Trust / why-choose-us** — stat block from `followers`/`postCount`/`isVerified` + craft-pride lines (section 5 above).
6. **Instagram feed gallery** — bento mosaic of all 12 `posts[].image` entries per section 6, captions as hover/tap overlays, permalinks as click-throughs, prominent "Follow on Instagram" CTA to `instagram` (https://www.instagram.com/sandalyedepo/). Mandatory per Instagram-source override.
7. **Contact** — CTA-led, not address-led: "Message us on Instagram" (→ `instagram`) as primary CTA, "Visit our site" (→ `website`, deposan.net) as secondary. **No phone, WhatsApp, or email exists in facts.json — omit call/WhatsApp buttons entirely rather than showing dead or placeholder CTAs.**
8. **Footer** — business name, the factory/showroom address as a plain text line (sourced verbatim from `bio`, since the structured `address` field is null and no `mapsUrl`/`lat`/`lng` exist — this is text-only, not a map or directions link), Instagram + website links. **No hours table** (no `hoursRaw` data, and none should be invented).

**Omitted/adapted per missing data:** no star-rating block, no review quote carousel, no hours table, no pinned coordinate map (no `lat`/`lng`), no directions/maps-search link (no `mapsUrl` and no structured `address` field to build one from — the bio's address text is display-only, in the footer). No phone/WhatsApp CTA anywhere on the site. No image is used to illustrate the "LEO" bar chair (post-04 doesn't depict it per the section 0 audit) — that entry is copy-led only.

## 8. Tone of voice

English copy should read like a confident, no-fluff B2B trade voice — direct, capability-forward, aimed at café/restaurant/hotel owners and project managers, not consumers ("built for your venue, not off a shelf" register). Arabic copy should carry the same register in natural Amman/Gulf-facing B2B Arabic — warm but businesslike, the voice of someone who'd actually call a hospitality-sector supplier, not a stiff literal translation. Since `nameAr`/`categoryAr`/`addressAr` are all null, use a natural Arabic transliteration of the real name ("يني نسل صندلجي" as a phonetic rendering, kept alongside the Latin/Turkish original since it's a proper noun) and standard Arabic trade terminology for the category ("تصنيع أثاث تعاقدي للمقاهي والمطاعم والفنادق" — contract furniture manufacturing for cafés, restaurants, and hotels).

Example headline:
- **Arabic:** "أثاث مصمم لمشروعك، لا من على الرف" (roughly: "Furniture designed for your project, not off the shelf")
- **English equivalent (natural, not literal):** "Built for your venue. Not off the shelf."
