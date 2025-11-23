import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-[60vh]">
      <section className="hero">
        <div className="hero-content">
          <h1 style={{fontSize: '2.25rem', lineHeight: 1.05, margin: 0}}>
            早稲田 AI 研究会
          </h1>
          <p style={{marginTop: 12, color: 'var(--foreground)', opacity: 0.85, maxWidth: 680}}>
            早稲田大学のコミュニティで、機械学習・生成AI・研究発表などを行っています。イベント情報や資料をこちらで公開しています。
          </p>

          <div style={{display: 'flex', gap: 12, marginTop: 20}}>
            <a className="rounded-full" href="#events" style={{padding: '10px 18px', background: 'var(--foreground)', color: 'var(--background)', fontWeight: 600}}>イベントを見る</a>
            <a className="rounded-full" href="#join" style={{padding: '10px 18px', border: '1px solid rgba(0,0,0,0.08)'}}>参加する</a>
          </div>
        </div>

        <div className="hero-media">
          <Image src="/hero-waseda.png" alt="hero" width={420} height={260} />
        </div>
      </section>
    </div>
  );
}
