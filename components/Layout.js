import { MainWavesLarge, MainWavesSmall } from './Layout.styled.components';

export default function Layout({ children }) {
  return (
    <main className="main">
      <MainWavesLarge></MainWavesLarge>
      <MainWavesSmall variant="large"></MainWavesSmall>
      <div className="main-content">{children}</div>
    </main>
  );
}
