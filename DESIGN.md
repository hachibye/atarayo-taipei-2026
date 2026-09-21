# Atarayo Taipei fan guide design

## Design read

Mobile-first concert information and music preview for Taiwan fans. The visual language is a quiet Taipei night after rain: wistful, cinematic and practical enough to use in a dark venue.

- `DESIGN_VARIANCE: 7`
- `MOTION_INTENSITY: 4`
- `VISUAL_DENSITY: 4`

This is a preserve-style redesign of the inherited concert guide. It is a static website without install prompts or offline caching; artist-specific content and visual identity are replaced.

## Visual system

- Deep charcoal blue is the page foundation.
- Desaturated teal supports the rainy-night atmosphere.
- Soft coral is the single accent for active or time-sensitive states.
- Cream text avoids pure white glare in a dark venue.
- Controls use an 8px radius; floating song navigation keeps the inherited pill treatment.
- The generated rainy Taipei image is an original placeholder, not an official tour poster.

## Content rules

- Never present a predicted list as the confirmed Taipei setlist.
- Link event facts back to the official tour page or KKTIX.
- Do not copy complete song lyrics without permission or a compatible licence.
- Keep the original Korean project and Taiwan adaptation visible in the footer and README.
- Event-day operational details always defer to the promoter and venue.

## Accessibility and performance

- Respect device color preference and reduced-motion preference.
- Keep interactive targets at least 40px high.
- Reserve image dimensions to avoid layout shift.
- Keep the first view lightweight and lazy-load secondary imagery.
- Remind visitors to save ticket, seat-map and transit screenshots before arrival.
