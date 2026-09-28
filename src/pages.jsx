import { Section } from './sections.jsx'

// This template's pages, in code. Each <Section> is an ordinary component
// call: change its props, replace it with your own JSX, add anything you
// like, delete what you do not want. Nothing reads a document to undo you.
// The look — fonts, colours, spacing, the header — is src/theme.css.

// The Google Fonts these pages and theme.css name. Add a key when you use a new one.
export const fonts = ["fraunces", "dm-sans"]

export function Home() {
  return <main>
    <Section section={{
        id: "hero",
        type: "hero",
        props: {
          title: "Piezas que merecen una pausa",
          subtitle: "Una selección hecha con intención. Mírala de cerca.",
          button_label: "Descubrir la colección",
          design: {
            variant: "overlay"
          }
        }
      }} />
    <Section section={{
        id: "manifesto",
        type: "rich_text",
        props: {
          eyebrow: "Nuestra mirada",
          title: "Elegir poco, elegir bien. Cada pieza tiene su momento.",
          body: "Reunimos una selección breve para regalar, para regalarte o para acompañar los rituales de cada día."
        }
      }} />
    <Section section={{
        id: "collection",
        type: "product_carousel",
        props: {
          title: "La colección",
          limit: 6,
          design: {
            columns: 3
          }
        }
      }} />
    <Section section={{
        id: "story",
        type: "rich_text",
        props: {
          eyebrow: "Detrás de cada pieza",
          title: "Elegidas una a una",
          body: "Buscamos formas, materiales y aromas que nos detienen. Cada pieza está aquí porque acompaña un momento: encender una vela, abrir un regalo, hacer una pausa.",
          button_label: "Ver la colección",
          image_side: "left"
        }
      }} />
    <Section section={{
        id: "explore",
        type: "product_grid",
        props: {
          title: "Explora la selección",
          chips: true,
          limit: 6,
          design: {
            columns: 3
          }
        }
      }} />
    <Section section={{
        id: "invitation",
        type: "cta",
        props: {
          title: "Tu próximo favorito te espera",
          body: "Recorre la colección con calma y quédate con lo que te llame la atención.",
          button_label: "Explorar la colección"
        }
      }} />
  </main>
}

export function Product() {
  return <main>
    <Section section={{
        id: "detail",
        type: "product_detail",
        props: {
          design: {
            variant: "split"
          }
        }
      }} />
    <Section section={{
        id: "suggested",
        type: "product_suggested",
        props: {
          title: "Otras piezas de la colección",
          limit: 3,
          design: {
            columns: 3
          }
        }
      }} />
  </main>
}
