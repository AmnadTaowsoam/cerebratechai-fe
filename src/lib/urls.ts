import type { PackageId } from '@/types/packages';

export const pkgPath = (id: PackageId, locale: string = 'en') =>
  `/${locale}/packages/${id}`;

export const pkgCta = (
  id: PackageId,
  locale: string = 'en',
  override?: string
) => override ?? pkgPath(id, locale);
