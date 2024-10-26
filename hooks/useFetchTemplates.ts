import useSWR from 'swr';
import { TemplateInformations } from '../config/templates';
import { RevalidateCacheEnum } from '../constants/RevalidateCacheEnum';

async function fetchTemplates(url: string) {
  return (
    await (
      await fetch(url, {
        cache: 'no-cache',
      })
    ).json()
  ).data as TemplateInformations[];
}

export function useFetchTemplates() {
  const { data: templates } = useSWR('/api/templates', fetchTemplates, {
    refreshInterval: 2000,
  });

  return { templates };
}
