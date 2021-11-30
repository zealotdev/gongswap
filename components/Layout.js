export default function Layout({ children }) {
  return (
    <main className="main">
      <div className="main-wave"></div>
      <div className="main-content">{children}</div>
    </main>
  );
}
