import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

export function render(url: string) {
  const html = renderToString(
    <MemoryRouter initialEntries={[url]} initialIndex={0}>
      <AppRoutes />
    </MemoryRouter>
  );
  return html;
}
