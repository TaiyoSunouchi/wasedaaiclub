import Image from "next/image";

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-container" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <Image src="/wasedaai-logo.png" alt="Waseda AI" width={36} height={36} />
          <div style={{fontWeight: 700}}>Waseda AI</div>
        </div>
        <nav>
          <a href="#about" style={{marginRight: 16}}>About</a>
          <a href="#events" style={{marginRight: 16}}>Events</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
