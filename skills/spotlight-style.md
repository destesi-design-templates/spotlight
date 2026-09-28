# Skill: Spotlight style

Read when: changing the look of, or adding a section to, a shop started from the Spotlight template.

Spotlight: a dark gallery. Every product is an object under a single light: deep green-black rooms, Fraunces for display (its italic for the quiet lines), DM Sans for reading, thin brass rules.

- The look is `src/theme.css`: change a token there first (colours, fonts, radius, spacing), then a single rule. This template's tokens: `--shop-bg: #0d1310`, `--shop-ink: #ece6da`, `--shop-font-body: 'DM Sans', sans-serif`, `--shop-font-display: 'Fraunces', serif`, `--shop-radius-button: 0`, `--shop-radius-card: 0`.
- `--shop-accent` is the merchant's brand colour on a live shop. Never build a large panel or a background on it; big tinted surfaces use this file's own colours.
- A new section takes the look from the tokens. Style it with a `section[data-section-type="<type>"]` rule in `src/theme.css`, in the voice of the rules already there.
- Copy stays generic for the vertical (Small curated collections) and promises nothing the merchant may not keep: no delivery times, return windows, warranties, discounts, scarcity or ratings.
