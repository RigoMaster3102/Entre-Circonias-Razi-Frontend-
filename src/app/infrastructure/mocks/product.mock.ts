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
      { id: 1, url: 'https://via.placeholder.com/300/c0c0c0/ffffff?text=Anillo+Circonia' }
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
      { id: 2, url: 'https://via.placeholder.com/300/c0c0c0/ffffff?text=Esclava+Cubana' }
    ]
  }
];
