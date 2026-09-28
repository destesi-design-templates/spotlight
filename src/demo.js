// The sample shop this template shows where no shop is behind the page (its
// live demo, or your project before the workspace sets up a shop). It never
// reaches a live shop: there the page draws the shop's own catalog, banner and
// settings. Replace it with your own sample shop, or leave it: a live shop
// never loads these photos.
import hero from './demo/hero.webp'
import story from './demo/story.webp'
import p1 from './demo/p1.webp'
import p2 from './demo/p2.webp'
import p3 from './demo/p3.webp'
import p4 from './demo/p4.webp'
import p5 from './demo/p5.webp'
import p6 from './demo/p6.webp'

export const demo = {
  name: 'NOCHE BOTÁNICA',
  tagline: 'Aromas para la hora quieta',
  about: 'Perfumes, velas y objetos de aroma para encender al caer la tarde. Una tienda de demostración de la plantilla Spotlight.',
  announcement: 'Nueva colección de aromas',
  hero,
  story,
  detail: 'Notas cálidas de ámbar y resina sobre un fondo de madera suave. Un aroma que se revela despacio y acompaña la noche.',
  benefits: ['Aromas de autor', 'Piezas en pequeñas series', 'Atención personal'],
  categories: [
    { id: 'perfumes', name: 'Perfumes' },
    { id: 'velas', name: 'Velas' },
    { id: 'hogar', name: 'Hogar' },
    { id: 'regalos', name: 'Regalos' },
  ],
  products: [
    { id: '1', name: 'Eau de parfum Ámbar 50 ml', price_cents: 28900000, category_id: 'perfumes', badge: 'Nuevo', image: p1 },
    { id: '2', name: 'Vela Humo negro', price_cents: 11900000, category_id: 'velas', image: p2 },
    { id: '3', name: 'Difusor Bosque', price_cents: 14900000, category_id: 'hogar', image: p3 },
    { id: '4', name: 'Perfume Lavanda seca 30 ml', price_cents: 18900000, category_id: 'perfumes', badge: 'Nuevo', image: p4 },
    { id: '5', name: 'Portaincienso de piedra', price_cents: 7900000, category_id: 'hogar', image: p5 },
    { id: '6', name: 'Caja regalo Ritual', price_cents: 35900000, category_id: 'regalos', image: p6 },
  ],
}
