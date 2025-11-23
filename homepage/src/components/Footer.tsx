export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <div style={{fontSize: 14}}>&copy; {new Date().getFullYear()} Waseda AI Study Group</div>
        <div style={{display: 'flex', gap: 12}}>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </div>
      </div>
    </footer>
  );
}
