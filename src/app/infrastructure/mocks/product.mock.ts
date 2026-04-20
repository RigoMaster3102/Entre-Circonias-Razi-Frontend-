  import { Producto } from '../../core/domain/models/product.model';

export const PRODUCTOS_MOCK: Producto[] = [
  {
    id: 1,
    titulo: 'Anillo de Compromiso Circonia',
    precio: 850.00,
    piezasDisponibles: 5,
    descripcion: 'Elegante anillo de plata con circonia central corte diamante.',
    talla: 7.5,
    estilo: 'Clásico',
    disponible: true,
    material: { id: 1, nombre: 'Plata 925' },
    sexo: { id: 2, nombre: 'Mujer' },
    collection: { id: 1, nombre: 'Bodas y Compromisos' },
    fotos: [
      { id: 1, url: 'https://m.media-amazon.com/images/I/61+yCe1+ePL._AC_SX679_.jpg' }
    ]
  },
  {
    id: 2,
    titulo: 'Esclava Tejido Cubano',
    precio: 1200.00,
    piezasDisponibles: 12,
    descripcion: 'Esclava gruesa de plata sólida, ideal para uso diario.',
    talla: 20,
    estilo: 'Urbano',
    disponible: true,
    material: { id: 2, nombre: 'Plata 950' },
    sexo: { id: 1, nombre: 'Hombre' },
    fotos: [
      { id: 2, url: 'https://m.media-amazon.com/images/I/51zzdiBKLDL._AC_SX679_.jpg' }
    ]
  },
  {
    id: 3,
    titulo: 'Collar con Dije de Corazón',
    precio: 650.00,
    piezasDisponibles: 8,
    descripcion: 'Delicada cadena de plata con un dije de corazón pulido.',
    talla: 45, // centímetros
    estilo: 'Romántico',
    disponible: true,
    material: { id: 1, nombre: 'Plata 925' },
    sexo: { id: 2, nombre: 'Mujer' },
    collection: { id: 2, nombre: 'Día de las Madres' },
    fotos: [
      { id: 3, url: 'https://m.media-amazon.com/images/I/41IXypaIH3L._AC_SX679_.jpg' }
    ]
  },
  {
    id: 4,
    titulo: 'Arracadas Lisas Medianas',
    precio: 450.00,
    piezasDisponibles: 15,
    descripcion: 'Arracadas clásicas tubulares de plata, ligeras y versátiles.',
    talla: 3, // centímetros de diámetro
    estilo: 'Minimalista',
    disponible: true,
    material: { id: 1, nombre: 'Plata 925' },
    sexo: { id: 2, nombre: 'Mujer' },
    fotos: [
      { id: 4, url: 'https://m.media-amazon.com/images/I/51emNCEw72L._AC_SY679_.jpg' }
    ]
  },
  {
    id: 5,
    titulo: 'Anillo Sello Ónice',
    precio: 1450.00,
    piezasDisponibles: 3,
    descripcion: 'Anillo tipo sello para hombre con piedra ónice negra incrustada.',
    talla: 10,
    estilo: 'Elegante',
    disponible: true,
    material: { id: 2, nombre: 'Plata 950' },
    sexo: { id: 1, nombre: 'Hombre' },
    collection: { id: 3, nombre: 'Caballero Exclusivo' },
    fotos: [
      { id: 5, url: 'https://m.media-amazon.com/images/I/61QtHECVQdL._AC_UL480_FMwebp_QL65_.jpg' }
    ]
  },
  {
    id: 6,
    titulo: 'Pulsera Tejido Singapur',
    precio: 380.00,
    piezasDisponibles: 20,
    descripcion: 'Pulsera delgada con tejido trenzado que refleja la luz maravillosamente.',
    talla: 18,
    estilo: 'Casual',
    disponible: true,
    material: { id: 1, nombre: 'Plata 925' },
    sexo: { id: 3, nombre: 'Unisex' },
    fotos: [
      { id: 6, url: 'https://m.media-amazon.com/images/I/71cBvlpN3qL._AC_SY500_.jpg' }
    ]
  },
  {
    id: 7,
    titulo: 'Broqueles de Perla Cultivada',
    precio: 520.00,
    piezasDisponibles: 10,
    descripcion: 'Broqueles con perla de río y poste de plata, ideales para niñas o uso diario.',
    talla: 0.5,
    estilo: 'Clásico',
    disponible: true,
    material: { id: 1, nombre: 'Plata 925' },
    sexo: { id: 2, nombre: 'Mujer' },
    collection: { id: 4, nombre: 'Básicos' },
    fotos: [
      { id: 7, url: 'https://m.media-amazon.com/images/I/41nHHIUBoAL._AC_UL480_FMwebp_QL65_.jpg' }
    ]
  },
  {
    id: 8,
    titulo: 'Dije de Cruz con Zirconias',
    precio: 780.00,
    piezasDisponibles: 6,
    descripcion: 'Dije en forma de cruz completamente engarzado con pequeñas zirconias brillantes.',
    talla: 4,
    estilo: 'Religioso',
    disponible: true,
    material: { id: 1, nombre: 'Plata 925' },
    sexo: { id: 3, nombre: 'Unisex' },
    fotos: [
      { id: 8, url: 'https://m.media-amazon.com/images/I/51T6nBs1+oL._AC_SX679_.jpg' }
    ]
  },
  {
    id: 9,
    titulo: 'Esclava para Bebé',
    precio: 590.00,
    piezasDisponibles: 4,
    descripcion: 'Pequeña esclava con placa lisa para grabar el nombre del bebé.',
    talla: 12,
    estilo: 'Infantil',
    disponible: true,
    material: { id: 1, nombre: 'Plata 925' },
    sexo: { id: 3, nombre: 'Unisex' },
    collection: { id: 5, nombre: 'Bautizo' },
    fotos: [
      { id: 9, url: 'https://m.media-amazon.com/images/I/415h3SuMXOL._AC_SX679_.jpg' }
    ]
  },
  {
    id: 10,
    titulo: 'Anillo Churumbela',
    precio: 920.00,
    piezasDisponibles: 7,
    descripcion: 'Medio anillo con zirconias en fila, perfecto para acompañar argollas de matrimonio.',
    talla: 6.5,
    estilo: 'Elegante',
    disponible: true,
    material: { id: 1, nombre: 'Plata 925' },
    sexo: { id: 2, nombre: 'Mujer' },
    collection: { id: 1, nombre: 'Bodas y Compromisos' },
    fotos: [
      { id: 10, url: 'https://m.media-amazon.com/images/I/719suzxUUkL._AC_SX679_.jpg' }
    ]
  },
  {
    id: 11,
    titulo: 'Cadena Tejido Cartier',
    precio: 1600.00,
    piezasDisponibles: 2,
    descripcion: 'Cadena pesada y resistente con el clásico eslabón intercalado estilo Cartier.',
    talla: 60,
    estilo: 'Urbano',
    disponible: true,
    material: { id: 2, nombre: 'Plata 950' },
    sexo: { id: 1, nombre: 'Hombre' },
    fotos: [
      { id: 11, url: 'https://m.media-amazon.com/images/I/51bwrlalafL._AC_UL480_FMwebp_QL65_.jpg' }
    ]
  },
  {
    id: 12,
    titulo: 'Gargantilla de Estrellas',
    precio: 710.00,
    piezasDisponibles: 9,
    descripcion: 'Gargantilla ajustada con pequeños dijes de estrellas colgantes.',
    talla: 40,
    estilo: 'Juvenil',
    disponible: true,
    material: { id: 1, nombre: 'Plata 925' },
    sexo: { id: 2, nombre: 'Mujer' },
    fotos: [
      { id: 12, url: 'https://m.media-amazon.com/images/I/51K1MBjlLVL._AC_UL480_FMwebp_QL65_.jpg' }
    ]
  }
];
