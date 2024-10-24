'use server';
import fetchTemplates from '../../actions/fetchTemplates';

export default async function TemplateOptions() {
  const templates = await fetchTemplates();
  return (
    <>
      {templates.map(({ name, value }) => (
        <option key={name} value={value}>
          {name}
        </option>
      ))}
    </>
  );
}
