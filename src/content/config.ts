import { defineCollection, z } from 'astro:content';

/**
 * Kitaplar — Her kitap için temel bilgiler.
 * Bölümler, kitapSlug alanı ile ilişkilendirilir.
 */
const kitaplar = defineCollection({
  type: 'content',
  schema: z.object({
    baslik: z.string(),
    yazar: z.string().default('Hasan Dinçer'),
    yayinTarihi: z.date().optional(),
    yayinevi: z.string().optional(),
    kapakGorsel: z.string().optional(),
    isbn: z.string().optional(),
    ozet: z.string().optional(),
    tur: z.string().optional(),
    satinAlmaLinkleri: z.array(z.object({
      platform: z.string(),
      url: z.string().url(),
    })).optional(),
    spitin: z.boolean().default(false),
    sira: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

/**
 * Bölümler — Her bölüm bir kitaba ait.
 * Alt klasör yapısı: bolumler/<kitapSlug>/bolum-01.md
 */
const bolumler = defineCollection({
  type: 'content',
  schema: z.object({
    baslik: z.string(),
    kitapSlug: z.string(),
    bolumNo: z.number(),
    ozet: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

/**
 * Etkinlikler — Okuma günleri, imza günleri, söyleşiler vb.
 */
const etkinlikler = defineCollection({
  type: 'content',
  schema: z.object({
    baslik: z.string(),
    tarih: z.date(),
    konum: z.string().optional(),
    aciklama: z.string().optional(),
    gorsel: z.string().optional(),
    link: z.string().url().optional(),
    tur: z.enum(['imza-gunu', 'soylesi', 'okuma', 'festival', 'diger']).default('diger'),
    draft: z.boolean().default(false),
  }),
});

/**
 * Hakkında — Yazar biyografisi, basın kiti, iletişim gibi sayfalar.
 */
const hakkinda = defineCollection({
  type: 'content',
  schema: z.object({
    baslik: z.string(),
    sira: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  kitaplar,
  bolumler,
  etkinlikler,
  hakkinda,
};
