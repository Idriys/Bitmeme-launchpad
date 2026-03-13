import React, { useState } from "react";

const S = {
  app: { fontFamily: "system-ui, sans-serif", background: "#0A0A0A", color: "#fff", minHeight: "100vh" },
  nav: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 32px", background: "#111", borderBottom: "1px solid #222", position: "sticky", top: 0, zIndex: 100 },
  logo: { display: "flex", alignItems: "center", gap: 10, fontSize: 22, fontWeight: 900, color: "#F7931A" },
  btcCircle: { width: 36, height: 36, background: "#F7931A", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#000", fontWeight: 900, fontSize: 18 },
  navLinks: { display: "flex", gap: 24, listStyle: "none", margin: 0, padding: 0 },
  navLink: { color: "#999", textDecoration: "none", fontSize: 14, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 },
  btnOrange: { background: "#F7931A", color: "#000", border: "none", padding: "12px 28px", fontWeight: 800, fontSize: 14, cursor: "pointer", borderRadius: 4, textTransform: "uppercase", letterSpacing: 1 },
  btnOutline: { background: "transparent", color: "#fff", border: "1px solid #333", padding: "12px 28px", fontWeight: 600, fontSize: 14, cursor: "pointer", borderRadius: 4, textTransform: "uppercase", letterSpacing: 1 },
  ticker: { background: "#F7931A", padding: "8px 0", overflow: "hidden", whiteSpace: "nowrap" },
  tickerText: { display: "inline-block", animation: "ticker 25s linear infinite", color: "#000", fontWeight: 700, fontSize: 13, fontFamily: "monospace" },
  hero: { textAlign: "center", padding: "100px 32px 80px", background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(247,147,26,0.15) 0%, transparent 70%)" },
  heroTag: { display: "inline-block", background: "rgba(247,147,26,0.1)", border: "1px solid rgba(247,147,26,0.3)", color: "#F7931A", padding: "6px 16px", borderRadius: 100, fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 24 },
  h1: { fontSize: "clamp(48px, 10vw, 110px)", fontWeight: 900, lineHeight: 1, marginBottom: 24, background: "linear-gradient(135deg, #fff 0%, #F7931A 60%, #FFD700 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
  heroSub: { fontSize: 18, color: "#999", maxWidth: 520, margin: "0 auto 40px", lineHeight: 1.7 },
  heroBtns: { display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" },
  statsBar: { display: "flex", gap: 0, background: "#111", borderTop: "1px solid #222", borderBottom: "1px solid #222", flexWrap: "wrap" },
  stat: { flex: 1, minWidth: 140, padding: "28px 24px", textAlign: "center", borderRight: "1px solid #222" },
  statVal: { fontSize: 32, fontWeight: 900, color: "#F7931A" },
  statLbl: { fontSize: 11, color: "#666", textTransform: "uppercase", letterSpacing: 2, marginTop: 4 },
  section: { maxWidth: 1200, margin: "0 auto", padding: "80px 32px" },
  sectionTag: { fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 4, color: "#F7931A", marginBottom: 12 },
  h2: { fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 900, lineHeight: 1, marginBottom: 16 },
  sectionSub: { color: "#666", fontSize: 16, maxWidth: 480, lineHeight: 1.7, marginBottom: 48 },
  coinsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 },
  coinCard: { background: "#111", border: "1px solid #222", borderRadius: 8, padding: 24, cursor: "pointer", transition: "all 0.2s" },
  coinHead: { display: "flex", alignItems: "center", gap: 12, marginBottom: 16 },
  coinEmoji: { width: 52, height: 52, background: "#1A1A1A", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 },
  coinName: { fontWeight: 800, fontSize: 16 },
  coinTicker: { fontSize: 12, color: "#F7931A", fontWeight: 700, fontFamily: "monospace" },
  progressBg: { height: 6, background: "#1A1A1A", borderRadius: 100, marginTop: 8, overflow: "hidden" },
  progressFill: { height: "100%", background: "linear-gradient(90deg, #F7931A, #FFD700)", borderRadius: 100 },
  coinMeta: { display: "flex", justifyContent: "space-between", fontSize: 12, color: "#666", fontFamily: "monospace", marginTop: 12 },
  liveBadge: { display: "inline-flex", alignItems: "center", gap: 4, background: "rgba(0,255,136,0.1)", border: "1px solid #00FF88", color: "#00FF88", fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 100, textTransform: "uppercase", marginBottom: 12 },
  featGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 2, background: "#222" },
  featCard: { background: "#111", padding: 40 },
  featIcon: { fontSize: 36, marginBottom: 16 },
  featTitle: { fontSize: 18, fontWeight: 800, marginBottom: 8 },
  featDesc: { fontSize: 14, color: "#666", lineHeight: 1.7 },
  stepsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 0 },
  step: { padding: 40, borderRight: "1px solid #222" },
  stepNum: { fontSize: 64, fontWeight: 900, color: "rgba(247,147,26,0.1)", lineHeight: 1, marginBottom: 12 },
  stepTitle: { fontSize: 18, fontWeight: 800, marginBottom: 8 },
  stepDesc: { fontSize: 14, color: "#666", lineHeight: 1.7 },
  cta: { textAlign: "center", padding: "80px 32px", background: "#111", borderTop: "1px solid #222", borderBottom: "1px solid #222" },
  footer: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "32px", background: "#0A0A0A", borderTop: "1px solid #222", flexWrap: "wrap", gap: 16 },
  overlay: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 },
  modal: { background: "#111", border: "1px solid #333", padding: 48, width: "100%", maxWidth: 440, position: "relative", borderRadius: 8 },
  modalTitle: { fontSize: 32, fontWeight: 900, color: "#F7931A", marginBottom: 8 },
  modalSub: { color: "#666", fontSize: 14, marginBottom: 28 },
  formLabel: { display: "block", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#666", marginBottom: 6 },
  formInput: { width: "100%", background: "#1A1A1A", border: "1px solid #333", color: "#fff", padding: "12px 14px", fontSize: 15, borderRadius: 4, outline: "none", fontFamily: "inherit", marginBottom: 16 },
};

const COINS = [
  { emoji: "🐕", name: "DogeBTC", ticker: "DBTC", pct: 67, target: "2.1 BTC", holders: 1243 },
  { emoji: "🚀", name: "MoonSatoshi", ticker: "MOON", pct: 89, target: "5.0 BTC", holders: 3891 },
  { emoji: "🦍", name: "ApeBitcoin", ticker: "APEBTC", pct: 34, target: "1.5 BTC", holders: 567 },
  { emoji: "💎", name: "DiamondHands", ticker: "DMND", pct: 92, target: "3.3 BTC", holders: 2104 },
  { emoji: "🐸", name: "PepeSatoshi", ticker: "PSAT", pct: 55, target: "2.8 BTC", holders: 988 },
  { emoji: "⚡", name: "LightningMeme", ticker: "LMEM", pct: 78, target: "4.0 BTC", holders: 1567 },
  { emoji: "🦊", name: "FoxBTC", ticker: "FBTC", pct: 21, target: "1.0 BTC", holders: 312 },
  { emoji: "🌙", name: "CryptoLuna", ticker: "CLNA", pct: 44, target: "2.5 BTC", holders: 743 },
];

const FEATURES = [
  { icon: "⚡", title: "Bitcoin L1 Native", desc: "Smart contracts deployed directly on Bitcoin. No wrapped tokens, no bridges, no compromise." },
  { icon: "🛡️", title: "Audited Contracts", desc: "Every contract template is audited. Your meme coin launches on bulletproof code." },
  { icon: "🚀", title: "< 5 Min Launch", desc: "From idea to live launchpad in under 5 minutes. Fastest meme coin deployment on Bitcoin." },
  { icon: "📈", title: "Bonding Curves", desc: "Automatic price discovery. Price goes up as more people ape in." },
  { icon: "💎", title: "Fair Launch", desc: "No pre-mines, no insider allocations. Everyone gets in at the same price." },
  { icon: "🔥", title: "Meme Culture First", desc: "Built for the culture. Upload memes, set vibes, let the community decide." },
];

const STEPS = [
  { n: "01", title: "Connect Wallet", desc: "Connect your Bitcoin wallet. We support all major BTC wallets." },
  { n: "02", title: "Name Your Meme", desc: "Give your coin a name, ticker and upload your dankest meme image." },
  { n: "03", title: "Set Parameters", desc: "Define supply, pricing curve, and fundraising target. All on-chain." },
  { n: "04", title: "To The Moon 🚀", desc: "Deploy your smart contract on Bitcoin L1 and watch the apes pile in." },
];

const TICKER = "₿ DBTC +12.4%  •  ₿ MOON +89.2%  •  ₿ DMND +44.7%  •  🔥 HOT: MoonSatoshi  •  ⚡ BTC BLOCK #889,234  •  🚀 150+ ACTIVE LAUNCHES  •  ₿ PSAT +7.8%  •  ₿ LMEM +21.3%  •  ";

export default function App() {
  const [modal, setModal] = useState(null);
  const [form, setForm] = useState({ name: "", ticker: "", target: "" });

  return (
    <div style={S.app}>
      <style>{`
        @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        a:hover { color: #F7931A !important; }
        .coin-card:hover { border-color: #F7931A !important; transform: translateY(-4px); box-shadow: 0 20px 40px rgba(0,0,0,0.4); }
      `}</style>

      <nav style={S.nav}>
        <div style={S.logo}>
          <div style={S.btcCircle}>₿</div>
          BITMEME
        </div>
        <ul style={S.navLinks}>
          <li><a href="#coins" style={S.navLink}>Launchpads</a></li>
          <li><a href="#how" style={S.navLink}>How It Works</a></li>
          <li><a href="#features" style={S.navLink}>Features</a></li>
        </ul>
        <button style={S.btnOrange} onClick={() => setModal("launch")}>🚀 Launch Now</button>
      </nav>

      <div style={S.ticker}>
        <span style={S.tickerText}>{TICKER.repeat(4)}</span>
      </div>

      <div style={S.hero}>
        <div style={S.heroTag}>● Live on Bitcoin L1</div>
        <div style={S.h1}>LAUNCH YOUR<br />MEME COIN<br />TO THE MOON</div>
        <p style={S.heroSub}>
          The simplest <strong style={{ color: "#F7931A" }}>Bitcoin-native</strong> launchpad.
          Create, deploy and trade meme coins directly on <strong style={{ color: "#F7931A" }}>Bitcoin L1</strong> smart contracts.
        </p>
        <div style={S.heroBtns}>
          <button style={S.btnOrange} onClick={() => setModal("launch")}>🚀 Launch a Meme Coin</button>
          <button style={S.btnOutline} onClick={() => document.getElementById("coins").scrollIntoView({ behavior: "smooth" })}>Explore Launchpads →</button>
        </div>
      </div>

      <div style={S.statsBar}>
        {[["150+", "Active Launches"], ["2,847 ₿", "Total Raised"], ["48,291", "Total Holders"], ["< 5 MIN", "Launch Time"], ["100%", "On-Chain"]].map(([v, l], i) => (
          <div key={i} style={S.stat}>
            <div style={S.statVal}>{v}</div>
            <div style={S.statLbl}>{l}</div>
          </div>
        ))}
      </div>

      <div id="coins" style={S.section}>
        <div style={S.sectionTag}>🔥 Live Now</div>
        <div style={S.h2}>ACTIVE LAUNCHES</div>
        <p style={S.sectionSub}>Real meme coins launching on Bitcoin L1. Ape in before they moon.</p>
        <div style={S.coinsGrid}>
          {COINS.map((c, i) => (
            <div key={i} className="coin-card" style={S.coinCard} onClick={() => setModal("buy")}>
              <div style={S.liveBadge}>● Live</div>
              <div style={S.coinHead}>
                <div style={S.coinEmoji}>{c.emoji}</div>
                <div>
                  <div style={S.coinName}>{c.name}</div>
                  <div style={S.coinTicker}>${c.ticker}</div>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#666", marginBottom: 6 }}>
                <span>Progress</span>
                <span style={{ color: "#F7931A", fontWeight: 700 }}>{c.pct}%</span>
              </div>
              <div style={S.progressBg}>
                <div style={{ ...S.progressFill, width: c.pct + "%" }} />
              </div>
              <div style={S.coinMeta}>
                <span>Target: {c.target}</span>
                <span>{c.holders.toLocaleString()} holders</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="how" style={{ background: "#111", borderTop: "1px solid #222", borderBottom: "1px solid #222" }}>
        <div style={S.section}>
          <div style={S.sectionTag}>Simple AF</div>
          <div style={S.h2}>HOW IT WORKS</div>
          <p style={S.sectionSub}>From zero to moon in 4 simple steps.</p>
          <div style={S.stepsGrid}>
            {STEPS.map((s, i) => (
              <div key={i} style={{ ...S.step, borderRight: i < 3 ? "1px solid #222" : "none" }}>
                <div style={S.stepNum}>{s.n}</div>
                <div style={S.stepTitle}>{s.title}</div>
                <div style={S.stepDesc}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="features" style={S.section}>
        <div style={S.sectionTag}>Why Bitmeme</div>
        <div style={S.h2}>BUILT DIFFERENT</div>
        <p style={S.sectionSub}>Not another EVM clone. Pure Bitcoin L1 smart contracts.</p>
        <div style={S.featGrid}>
          {FEATURES.map((f, i) => (
            <div key={i} style={S.featCard}>
              <div style={S.featIcon}>{f.icon}</div>
              <div style={S.featTitle}>{f.title}</div>
              <div style={S.featDesc}>{f.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={S.cta}>
        <div style={{ fontSize: "clamp(36px,6vw,72px)", fontWeight: 900, marginBottom: 16 }}>READY TO MOON? 🚀</div>
        <p style={{ color: "#666", marginBottom: 32, fontSize: 16 }}>Join 48,291 degens already launching on Bitcoin L1</p>
        <button style={{ ...S.btnOrange, fontSize: 18, padding: "20px 60px" }} onClick={() => setModal("launch")}>
          Launch Your Meme Coin Now ₿
        </button>
      </div>

      <footer style={S.footer}>
        <div style={S.logo}>
          <div style={{ ...S.btcCircle, width: 28, height: 28, fontSize: 14 }}>₿</div>
          BITMEME
        </div>
        <span style={{ color: "#444", fontSize: 13, fontFamily: "monospace" }}>© 2025 Bitmeme. Built on Bitcoin L1.</span>
        <div style={{ display: "flex", gap: 20 }}>
          {["Docs", "Twitter", "Discord", "GitHub"].map(l => (
            <a key={l} href="#" style={{ color: "#444", fontSize: 13, textDecoration: "none" }}>{l}</a>
          ))}
        </div>
      </footer>

      {modal && (
        <div style={S.overlay} onClick={() => setModal(null)}>
          <div style={S.modal} onClick={e => e.stopPropagation()}>
            <button onClick={() => setModal(null)} style={{ position: "absolute", top: 16, right: 16, background: "none", border: "none", color: "#666", fontSize: 22, cursor: "pointer" }}>✕</button>
            {modal === "launch" ? (
              <>
                <div style={S.modalTitle}>🚀 LAUNCH YOUR COIN</div>
                <div style={S.modalSub}>Deploy your meme coin on Bitcoin L1 in minutes</div>
                {[["Coin Name", "name", "e.g. DogeBTC", "text"], ["Ticker Symbol", "ticker", "e.g. DBTC", "text"], ["Target (BTC)", "target", "e.g. 2.1", "number"]].map(([label, key, ph, type]) => (
                  <div key={key}>
                    <label style={S.formLabel}>{label}</label>
                    <input style={S.formInput} placeholder={ph} type={type} value={form[key]} onChange={e => setForm({ ...form, [key]: e.target.value })} />
                  </div>
                ))}
                <button style={{ ...S.btnOrange, width: "100%", marginTop: 8 }}>Connect Wallet & Deploy ₿</button>
              </>
            ) : (
              <>
                <div style={S.modalTitle}>🌙 APE IN</div>
                <div style={S.modalSub}>Buy tokens before this coin moons</div>
                <label style={S.formLabel}>Amount (BTC)</label>
                <input style={S.formInput} placeholder="0.001" type="number" />
                <button style={{ ...S.btnOrange, width: "100%", marginTop: 8 }}>Buy Now 🚀</button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
    }
