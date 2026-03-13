import React, { useState, useEffect } from "react";

const S = {
  app: { fontFamily: "'Segoe UI', system-ui, sans-serif", background: "#080808", color: "#fff", minHeight: "100vh" },
  nav: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 40px", height: 70, background: "rgba(8,8,8,0.95)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(247,147,26,0.15)", position: "sticky", top: 0, zIndex: 100 },
  logo: { display: "flex", alignItems: "center", gap: 12, fontSize: 24, fontWeight: 900, color: "#fff", letterSpacing: 2, textTransform: "uppercase" },
  btcCircle: { width: 42, height: 42, background: "linear-gradient(135deg, #F7931A, #FFD700)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#000", fontWeight: 900, fontSize: 22, boxShadow: "0 0 20px rgba(247,147,26,0.6), 0 0 40px rgba(247,147,26,0.3)" },
  navLinks: { display: "flex", gap: 32, listStyle: "none", margin: 0, padding: 0 },
  navLink: { color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, transition: "color 0.2s" },
  btnOrange: { background: "linear-gradient(135deg, #F7931A, #E8820A)", color: "#000", border: "none", padding: "12px 28px", fontWeight: 900, fontSize: 13, cursor: "pointer", borderRadius: 6, textTransform: "uppercase", letterSpacing: 2, boxShadow: "0 4px 20px rgba(247,147,26,0.4)", transition: "all 0.2s" },
  btnOutline: { background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.15)", padding: "12px 28px", fontWeight: 700, fontSize: 13, cursor: "pointer", borderRadius: 6, textTransform: "uppercase", letterSpacing: 2, backdropFilter: "blur(10px)", transition: "all 0.2s" },
  ticker: { background: "linear-gradient(90deg, #F7931A, #FFD700, #F7931A)", padding: "10px 0", overflow: "hidden", whiteSpace: "nowrap", borderBottom: "1px solid rgba(247,147,26,0.2)" },
  tickerText: { display: "inline-block", animation: "ticker 30s linear infinite", color: "#000", fontWeight: 800, fontSize: 13, letterSpacing: 1 },
  hero: { textAlign: "center", padding: "120px 32px 100px", position: "relative", overflow: "hidden" },
  heroBg: { position: "absolute", inset: 0, background: "radial-gradient(ellipse 100% 70% at 50% 0%, rgba(247,147,26,0.18) 0%, transparent 65%), radial-gradient(ellipse 60% 40% at 80% 100%, rgba(247,147,26,0.06) 0%, transparent 60%)", pointerEvents: "none" },
  heroGrid: { position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(247,147,26,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(247,147,26,0.04) 1px, transparent 1px)", backgroundSize: "60px 60px", maskImage: "radial-gradient(ellipse at center, black 20%, transparent 75%)", pointerEvents: "none" },
  heroTag: { display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(247,147,26,0.08)", border: "1px solid rgba(247,147,26,0.25)", color: "#F7931A", padding: "8px 20px", borderRadius: 100, fontSize: 11, fontWeight: 800, letterSpacing: 3, textTransform: "uppercase", marginBottom: 32 },
  h1: { fontSize: "clamp(52px, 11vw, 120px)", fontWeight: 900, lineHeight: 0.95, marginBottom: 28, letterSpacing: -2 },
  h1White: { color: "#fff", display: "block" },
  h1Orange: { background: "linear-gradient(135deg, #F7931A 0%, #FFD700 50%, #F7931A 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", display: "block", filter: "drop-shadow(0 0 30px rgba(247,147,26,0.4))" },
  heroSub: { fontSize: 18, color: "rgba(255,255,255,0.5)", maxWidth: 540, margin: "0 auto 48px", lineHeight: 1.8, fontWeight: 400 },
  heroBtns: { display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 64 },
  heroBigBtn: { background: "linear-gradient(135deg, #F7931A, #E8820A)", color: "#000", border: "none", padding: "18px 48px", fontWeight: 900, fontSize: 16, cursor: "pointer", borderRadius: 8, textTransform: "uppercase", letterSpacing: 2, boxShadow: "0 8px 40px rgba(247,147,26,0.5)", transition: "all 0.2s" },
  heroMiniStats: { display: "flex", gap: 48, justifyContent: "center", flexWrap: "wrap" },
  heroMiniStat: { textAlign: "center" },
  heroMiniVal: { fontSize: 28, fontWeight: 900, color: "#F7931A" },
  heroMiniLbl: { fontSize: 11, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: 2, marginTop: 2 },
  divider: { height: 1, background: "linear-gradient(90deg, transparent, rgba(247,147,26,0.3), transparent)", margin: "0" },
  section: { maxWidth: 1200, margin: "0 auto", padding: "100px 40px" },
  sectionTag: { fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: 4, color: "#F7931A", marginBottom: 16, display: "flex", alignItems: "center", gap: 8 },
  h2: { fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 900, lineHeight: 0.95, marginBottom: 20, letterSpacing: -1 },
  sectionSub: { color: "rgba(255,255,255,0.4)", fontSize: 16, maxWidth: 480, lineHeight: 1.8, marginBottom: 56 },
  tabRow: { display: "flex", gap: 8, marginBottom: 40 },
  tab: { padding: "8px 24px", borderRadius: 6, cursor: "pointer", fontWeight: 800, fontSize: 12, textTransform: "uppercase", letterSpacing: 2, transition: "all 0.2s", border: "1px solid transparent" },
  coinsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 },
  coinCard: { background: "linear-gradient(135deg, #111 0%, #0D0D0D 100%)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: 24, cursor: "pointer", transition: "all 0.25s", position: "relative", overflow: "hidden" },
  coinHead: { display: "flex", alignItems: "center", gap: 14, marginBottom: 20 },
  coinEmoji: { width: 56, height: 56, background: "linear-gradient(135deg, #1A1A1A, #222)", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, border: "1px solid rgba(255,255,255,0.06)", flexShrink: 0 },
  coinName: { fontWeight: 900, fontSize: 17, letterSpacing: -0.3 },
  coinTicker: { fontSize: 12, color: "#F7931A", fontWeight: 800, fontFamily: "monospace", letterSpacing: 1, marginTop: 2 },
  progressBg: { height: 6, background: "rgba(255,255,255,0.06)", borderRadius: 100, overflow: "hidden" },
  progressFill: { height: "100%", background: "linear-gradient(90deg, #F7931A, #FFD700)", borderRadius: 100, transition: "width 1s ease", position: "relative" },
  coinMeta: { display: "flex", justifyContent: "space-between", fontSize: 12, color: "rgba(255,255,255,0.35)", fontFamily: "monospace", marginTop: 12 },
  featGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 1, background: "rgba(247,147,26,0.08)", border: "1px solid rgba(247,147,26,0.08)", borderRadius: 16, overflow: "hidden" },
  featCard: { background: "#0D0D0D", padding: 48, position: "relative", overflow: "hidden" },
  featTitle: { fontSize: 20, fontWeight: 900, marginBottom: 10, letterSpacing: -0.3 },
  featDesc: { fontSize: 14, color: "rgba(255,255,255,0.4)", lineHeight: 1.8 },
  stepsRow: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" },
  step: { padding: "48px 40px", borderRight: "1px solid rgba(255,255,255,0.05)", position: "relative" },
  stepNum: { fontSize: 80, fontWeight: 900, color: "rgba(247,147,26,0.07)", lineHeight: 1, marginBottom: 16, letterSpacing: -2 },
  stepTitle: { fontSize: 20, fontWeight: 900, marginBottom: 10, letterSpacing: -0.3 },
  cta: { margin: "0 40px 100px", padding: "100px 60px", background: "linear-gradient(135deg, #0F0F0F 0%, #111 50%, #0F0F0F 100%)", border: "1px solid rgba(247,147,26,0.12)", borderRadius: 24, textAlign: "center", position: "relative" },
  overlay: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.9)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 20, backdropFilter: "blur(10px)" },
  modal: { background: "linear-gradient(135deg, #111, #0D0D0D)", border: "1px solid rgba(247,147,26,0.15)", padding: 52, width: "100%", maxWidth: 460, position: "relative", borderRadius: 16 },
  formInput: { width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#fff", padding: "14px 16px", fontSize: 15, borderRadius: 8, outline: "none", marginBottom: 16 },
};

const COINS = [
  { emoji: "🐕", name: "DogeBTC", ticker: "DBTC", pct: 67, target: "2.1 BTC" },
  { emoji: "🚀", name: "MoonSatoshi", ticker: "MOON", pct: 89, target: "5.0 BTC" },
  { emoji: "🦍", name: "ApeBitcoin", ticker: "APEBTC", pct: 34, target: "1.5 BTC" },
  { emoji: "💎", name: "DiamondHands", ticker: "DMND", pct: 92, target: "3.3 BTC" },
];

const FEATURES = [
  { icon: "⚡", title: "Bitcoin L1 Native", desc: "No EVM. No bridges. Pure Bitcoin smart contracts." },
  { icon: "🛡️", title: "Rug-Proof Contracts", desc: "Audited code to keep your bags safe." },
  { icon: "🚀", title: "5-Minute Launch", desc: "Deploy faster than you can spell 'moon'." },
];

const STEPS = [
  { n: "01", title: "Connect Wallet", desc: "Link your Bitcoin wallet to get started." },
  { n: "02", title: "Name Your Meme", desc: "Choose a name and upload your artwork." },
  { n: "03", title: "Watch It Moon", desc: "Hit deploy and watch the apes pile in." },
];

const TICKER = "₿ DBTC +12.4%  ·  ₿ MOON +89.2%  ·  ₿ DMND +44.7%  ·  ";

export default function App() {
  const [modal, setModal] = useState(null);
  const [tab, setTab] = useState("live");

  return (
    <div style={S.app}>
      <style>{`
        @keyframes ticker { from{transform:translateX(0)}to{transform:translateX(-50%)} }
        @keyframes blink { 0%,100%{opacity:1}50%{opacity:0.2} }
        @keyframes glow { 0%,100%{box-shadow:0 0 20px rgba(247,147,26,0.5)}50%{box-shadow:0 0 40px rgba(247,147,26,0.9)} }
        .coin-card:hover { border-color: rgba(247,147,26,0.3) !important; transform: translateY(-6px); transition: all 0.3s; }
      `}</style>

      {/* NAV */}
      <nav style={S.nav}>
        <div style={S.logo}>
          <div style={{ ...S.btcCircle, animation: "glow 3s infinite" }}>₿</div>
          <span>Bit<span style={{ color: "#F7931A" }}>Meme</span></span>
        </div>
        <button style={S.btnOrange} onClick={() => setModal("launch")}>🚀 Launch Now</button>
      </nav>

      {/* TICKER */}
      <div style={S.ticker}>
        <span style={S.tickerText}>{TICKER.repeat(10)}</span>
      </div>

      {/* HERO */}
      <div style={S.hero}>
        <div style={S.heroBg} />
        <div style={S.heroGrid} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={S.heroTag}>Live on Bitcoin L1</div>
          <div style={S.h1}>
            <span style={S.h1White}>LAUNCH YOUR</span>
            <span style={S.h1Orange}>MEME COIN</span>
          </div>
          <p style={S.heroSub}>The most degen-friendly Bitcoin-native launchpad.</p>
          <div style={S.heroBtns}>
            <button style={S.heroBigBtn} onClick={() => setModal("launch")}>🚀 Launch My Meme Coin</button>
          </div>
        </div>
      </div>

      {/* COINS SECTION */}
      <div id="launchpads" style={S.section}>
        <div style={S.h2}>ACTIVE LAUNCHES</div>
        <div style={S.coinsGrid}>
          {COINS.map((c, i) => (
            <div key={i} className="coin-card" style={S.coinCard}>
              <div style={S.coinHead}>
                <div style={S.coinEmoji}>{c.emoji}</div>
                <div>
                  <div style={S.coinName}>{c.name}</div>
                  <div style={S.coinTicker}>{c.ticker}</div>
                </div>
              </div>
              <div style={S.progressBg}><div style={{ ...S.progressFill, width: `${c.pct}%` }} /></div>
              <div style={S.coinMeta}><span>{c.pct}% Filled</span><span>{c.target}</span></div>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div style={S.section}>
        <div style={S.h2}>FEATURES</div>
        <div style={S.featGrid}>
          {FEATURES.map((f, i) => (
            <div key={i} style={S.featCard}>
              <div style={{ fontSize: 32 }}>{f.icon}</div>
              <div style={S.featTitle}>{f.title}</div>
              <div style={S.featDesc}>{f.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* STEPS SECTION */}
      <div style={S.section}>
        <div style={S.h2}>HOW IT WORKS</div>
        <div style={S.stepsRow}>
          {STEPS.map((step, i) => (
            <div key={i} style={S.step}>
              <div style={S.stepNum}>{step.n}</div>
              <div style={S.stepTitle}>{step.title}</div>
              <div style={S.featDesc}>{step.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA SECTION */}
      <div style={S.cta}>
        <div style={{ fontSize: 48, fontWeight: 900, marginBottom: 20 }}>READY TO MOON?</div>
        <button style={S.heroBigBtn} onClick={() => setModal("launch")}>Create Your Coin</button>
      </div>

      {/* MODAL */}
      {modal && (
        <div style={S.overlay} onClick={() => setModal(null)}>
          <div style={S.modal} onClick={(e) => e.stopPropagation()}>
            <div style={{ fontSize: 24, fontWeight: 900, marginBottom: 20 }}>Launch Coin</div>
            <input style={S.formInput} placeholder="Coin Name (e.g. Satoshi Doge)" />
            <input style={S.formInput} placeholder="Ticker (e.g. DOGE)" />
            <button style={{ ...S.btnOrange, width: "100%" }} onClick={() => setModal(null)}>Deploy to L1</button>
          </div>
        </div>
      )}
    </div>
  );
    }
        
