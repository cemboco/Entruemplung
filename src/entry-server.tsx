export function render() {
  const html = renderToString(
    <MemoryRouter initialEntries={['/']}>
      <AppRoutes />
    </MemoryRouter>
  );
  return html;
}
