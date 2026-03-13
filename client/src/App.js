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
  coinCardShine: { position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(247,147,26,0.3), transparent)" },
  coinHead: { display: "flex", alignItems: "center", gap: 14, marginBottom: 20 },
  coinEmoji: { width: 56, height: 56, background: "linear-gradient(135deg, #1A1A1A, #222)", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, border: "1px solid rgba(255,255,255,0.06)", flexShrink: 0 },
  coinName: { fontWeight: 900, fontSize: 17, letterSpacing: -0.3 },
  coinTicker: { fontSize: 12, color: "#F7931A", fontWeight: 800, fontFamily: "monospace", letterSpacing: 1, marginTop: 2 },
  progressBg: { height: 6, background: "rgba(255,255,255,0.06)", borderRadius: 100, overflow: "hidden" },
  progressFill: { height: "100%", background: "linear-gradient(90deg, #F7931A, #FFD700)", borderRadius: 100, transition: "width 1s ease", position: "relative" },
  progressGlow: { position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", width: 12, height: 12, background: "#FFD700", borderRadius: "50%", boxShadow: "0 0 10px #FFD700, 0 0 20px #F7931A" },
  coinMeta: { display: "flex", justifyContent: "space-between", fontSize: 12, color: "rgba(255,255,255,0.35)", fontFamily: "monospace", marginTop: 12 },
  liveBadge: { display: "inline-flex", alignItems: "center", gap: 5, background: "rgba(0,255,136,0.08)", border: "1px solid rgba(0,255,136,0.25)", color: "#00FF88", fontSize: 10, fontWeight: 800, padding: "4px 10px", borderRadius: 100, textTransform: "uppercase", letterSpacing: 1, marginBottom: 16 },
  liveDot: { width: 6, height: 6, background: "#00FF88", borderRadius: "50%", animation: "blink 1.2s infinite" },
  featGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 1, background: "rgba(247,147,26,0.08)", border: "1px solid rgba(247,147,26,0.08)", borderRadius: 16, overflow: "hidden" },
  featCard: { background: "#0D0D0D", padding: 48, position: "relative", overflow: "hidden" },
  featTop: { position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, transparent, #F7931A, transparent)", transform: "scaleX(0)", transition: "transform 0.3s" },
  featIcon: { fontSize: 40, marginBottom: 20, display: "block" },
  featTitle: { fontSize: 20, fontWeight: 900, marginBottom: 10, letterSpacing: -0.3 },
  featDesc: { fontSize: 14, color: "rgba(255,255,255,0.4)", lineHeight: 1.8 },
  stepsRow: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" },
  step: { padding: "48px 40px", borderRight: "1px solid rgba(255,255,255,0.05)", position: "relative" },
  stepNum: { fontSize: 80, fontWeight: 900, color: "rgba(247,147,26,0.07)", lineHeight: 1, marginBottom: 16, letterSpacing: -2 },
  stepBadge: { display: "inline-block", background: "rgba(247,147,26,0.1)", border: "1px solid rgba(247,147,26,0.2)", color: "#F7931A", fontSize: 11, fontWeight: 800, padding: "4px 12px", borderRadius: 100, marginBottom: 16, letterSpacing: 1 },
  stepTitle: { fontSize: 20, fontWeight: 900, marginBottom: 10, letterSpacing: -0.3 },
  stepDesc: { fontSize: 14, color: "rgba(255,255,255,0.4)", lineHeight: 1.8 },
  cta: { margin: "0 40px 100px", padding: "100px 60px", background: "linear-gradient(135deg, #0F0F0F 0%, #111 50%, #0F0F0F 100%)", border: "1px solid rgba(247,147,26,0.12)", borderRadius: 24, textAlign: "center", position: "relative", overflow: "hidden" },
  ctaBg: { position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(247,147,26,0.1) 0%, transparent 70%)", pointerEvents: "none" },
  ctaWatermark: { position: "absolute", fontSize: 300, fontWeight: 900, color: "rgba(247,147,26,0.02)", top: "50%", left: "50%", transform: "translate(-50%, -50%)", pointerEvents: "none", lineHeight: 1 },
  ctaTitle: { fontSize: "clamp(40px,7vw,80px)", fontWeight: 900, marginBottom: 16, letterSpacing: -2, lineHeight: 1, position: "relative" },
  ctaSub: { color: "rgba(255,255,255,0.4)", marginBottom: 40, fontSize: 17, position: "relative" },
  footer: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "32px 40px", background: "#050505", borderTop: "1px solid rgba(255,255,255,0.05)", flexWrap: "wrap", gap: 16 },
  overlay: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.9)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 20, backdropFilter: "blur(10px)" },
  modal: { background: "linear-gradient(135deg, #111, #0D0D0D)", border: "1px solid rgba(247,147,26,0.15)", padding: 52, width: "100%", maxWidth: 460, position: "relative", borderRadius: 16, boxShadow: "0 40px 100px rgba(0,0,0,0.6), 0 0 60px rgba(247,147,26,0.08)" },
  modalTop: { position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, transparent, #F7931A, #FFD700, transparent)", borderRadius: "16px 16px 0 0" },
  modalTitle: { fontSize: 36, fontWeight: 900, marginBottom: 6, letterSpacing: -1 },
  modalSub: { color: "rgba(255,255,255,0.4)", fontSize: 14, marginBottom: 32, lineHeight: 1.6 },
  formLabel: { display: "block", fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: 2, color: "rgba(255,255,255,0.35)", marginBottom: 8 },
  formInput: { width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#fff", padding: "14px 16px", fontSize: 15, borderRadius: 8, outline: "none", fontFamily: "inherit", marginBottom: 16, transition: "border-color 0.2s" },
};

const COINS = [
  { emoji: "🐕", name: "DogeBTC", ticker: "DBTC", pct: 67, target: "2.1 BTC", holders: 1243, hot: true },
  { emoji: "🚀", name: "MoonSatoshi", ticker: "MOON", pct: 89, target: "5.0 BTC", holders: 3891, hot: true },
  { emoji: "🦍", name: "ApeBitcoin", ticker: "APEBTC", pct: 34, target: "1.5 BTC", holders: 567, hot: false },
  { emoji: "💎", name: "DiamondHands", ticker: "DMND", pct: 92, target: "3.3 BTC", holders: 2104, hot: true },
  { emoji: "🐸", name: "PepeSatoshi", ticker: "PSAT", pct: 55, target: "2.8 BTC", holders: 988, hot: false },
  { emoji: "⚡", name: "LightningMeme", ticker: "LMEM", pct: 78, target: "4.0 BTC", holders: 1567, hot: false },
  { emoji: "🦊", name: "FoxBTC", ticker: "FBTC", pct: 21, target: "1.0 BTC", holders: 312, hot: false },
  { emoji: "🌙", name: "CryptoLuna", ticker: "CLNA", pct: 44, target: "2.5 BTC", holders: 743, hot: false },
];

const FEATURES = [
  { icon: "⚡", title: "Bitcoin L1 Native", desc: "No EVM. No bridges. No wrapped garbage. Pure Bitcoin smart contracts doing the heavy lifting while you count your gains." },
  { icon: "🛡️", title: "Rug-Proof Contracts", desc: "Every contract is audited by people smarter than your average degen. Sleep easy knowing your bags are safu." },
  { icon: "🚀", title: "5-Minute Launch", desc: "From 'I have a meme idea' to 'we're so back' in under 5 minutes. Faster than you can spell 'ngmi'." },
  { icon: "📈", title: "Bonding Curves", desc: "Price goes up when people ape in. It's literally that simple. Early = cheap. Late = ngmi." },
  { icon: "💎", title: "Fair Launch Only", desc: "No VCs. No insiders. No pre-sales to suits. Everyone gets the same price. True degen equality." },
  { icon: "🔥", title: "Meme-First Culture", desc: "Built by degens, for degens. If it's not funny, it doesn't ship. Simple as." },
];

const STEPS = [
  { n: "01", badge: "Step One", title: "Connect Your Wallet", desc: "Link your Bitcoin wallet. If you don't have one yet... ser, we need to talk." },
  { n: "02", badge: "Step Two", title: "Name Your Meme", desc: "Give your coin a name so dumb it's genius. Upload the meme. Set the vibe." },
  { n: "03", badge: "Step Three", title: "Set The Params", desc: "Define supply, bonding curve, target. The smart contract handles the rest." },
  { n: "04", badge: "LFG 🚀", title: "Watch It Moon", desc: "Hit deploy. Watch the apes pile in. Refresh your wallet every 30 seconds." },
];

const TICKER = "₿ DBTC +12.4%  ·  ₿ MOON +89.2%  ·  ₿ DMND +44.7%  ·  🔥 TRENDING: MoonSatoshi  ·  ⚡ BTC BLOCK #889,234  ·  🚀 150+ ACTIVE LAUNCHES  ·  ₿ PSAT +7.8%  ·  💎 DMND NEARLY SOLD OUT  ·  ₿ LMEM +21.3%  ·  ";

export default function App() {
  const [modal, setModal] = useState(null);
  const [tab, setTab] = useState("live");
  const [hoveredCoin, setHoveredCoin] = useState(null);
  const [form, setForm] = useState({ name: "", ticker: "", target: "" });
  const [dots, setDots] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setDots(d => (d + 1) % 4), 500);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={S.app}>
      <style>{`
        @keyframes ticker { from{transform:translateX(0)}to{transform:translateX(-50%)} }
        @keyframes blink { 0%,100%{opacity:1}50%{opacity:0.2} }
        @keyframes glow { 0%,100%{box-shadow:0 0 20px rgba(247,147,26,0.5),0 0 40px rgba(247,147,26,0.2)}50%{box-shadow:0 0 40px rgba(247,147,26,0.9),0 0 80px rgba(247,147,26,0.4)} }
        @keyframes float { 0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)} }
        * { box-sizing: border-box; }
        a { text-decoration: none; transition: color 0.2s; }
        a:hover { color: #F7931A !important; }
        .nav-link:hover { color: #F7931A !important; }
        .btn-main:hover { transform: translateY(-2px); box-shadow: 0 12px 50px rgba(247,147,26,0.6) !important; }
        .btn-out:hover { border-color: rgba(247,147,26,0.4) !important; color: #F7931A !important; }
        .coin-card:hover { border-color: rgba(247,147,26,0.3) !important; transform: translateY(-6px) !important; box-shadow: 0 24px 60px rgba(0,0,0,0.5), 0 0 40px rgba(247,147,26,0.08) !important; }
        .feat-card:hover .feat-top { transform: scaleX(1) !important; }
        .feat-card:hover { background: #111 !important; }
        input:focus { border-color: rgba(247,147,26,0.4) !important; box-shadow: 0 0 0 3px rgba(247,147,26,0.06) !important; }
        @media(max-width:768px){
          .nav-links{display:none!important}
          .hero-pad{padding:80px 20px 60px!important}
          .section-pad{padding:60px 20px!important}
          .cta-box{margin:0 20px 60px!important;padding:60px 24px!important}
          .footer-box{padding:24px 20px!important;flex-direction:column;text-align:center}
          .steps-row{grid-template-columns:1fr!important}
          .step-item{border-right:none!important;border-bottom:1px solid rgba(255,255,255,0.05)!important}
        }
      `}</style>

      {/* NAV */}
      <nav style={S.nav}>
        <div style={S.logo}>
          <div style={{ ...S.btcCircle, animation: "glow 3s infinite" }}>₿</div>
          <span>Bit<span style={{ color: "#F7931A" }}>Meme</span></span>
        </div>
        <ul style={S.navLinks} className="nav-links">
          {["Launchpads", "How It Works", "Features"].map(l => (
            <li key={l}><a href={"#" + l.toLowerCase().replace(/ /g, "-")} style={S.navLink} className="nav-link">{l}</a></li>
          ))}
        </ul>
        <button className="btn-main" style={S.btnOrange} onClick={() => setModal("launch")}>🚀 Launch Now</button>
      </nav>

      {/* TICKER */}
      <div style={S.ticker}>
        <span style={S.tickerText}>{TICKER.repeat(4)}</span>
      </div>

      {/* HERO */}
      <div style={{ ...S.hero }} className="hero-pad">
        <div style={S.heroBg} />
        <div style={S.heroGrid} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={S.heroTag}>
            <span style={{ animation: "blink 1.5s infinite", color: "#00FF88" }}>●</span>
            Live on Bitcoin L1 · No bridges · No BS
          </div>
          <div style={S.h1}>
            <span style={S.h1White}>LAUNCH YOUR</span>
            <span style={S.h1Orange}>MEME COIN</span>
            <span style={S.h1White}>TO THE 🌙</span>
          </div>
          <p style={S.heroSub}>
            The most <strong style={{ color: "#fff", fontWeight: 800 }}>degen-friendly</strong> Bitcoin-native launchpad.
            Deploy meme coins on <strong style={{ color: "#F7931A", fontWeight: 800 }}>Bitcoin L1</strong> smart contracts.
            No rug pulls. No excuses. Just vibes.
          </p>
          <div style={S.heroBtns}>
            <button className="btn-main" style={S.heroBigBtn} onClick={() => setModal("launch")}>
              🚀 Launch My Meme Coin
            </button>
            <button className="btn-out" style={S.btnOutline} onClick={() => document.getElementById("launchpads").scrollIntoView({ behavior: "smooth" })}>
              Explore Launches →
            </button>
          </div>
          <div style={S.heroMiniStats}>
            {[["150+", "Active Launches"], ["2,847 ₿", "Total Raised"], ["48K+", "Degen Holders"], ["< 5 min", "Time to Moon"]].map(([v, l]) => (
              <div key={l} style={S.heroMiniStat}>
                <div style={S.heroMiniVal}>{v}</div>
                <div style={S.heroMiniLbl}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={S.divider} />

      {/* COINS */}
      <div id="launchpads">
        <div style={S.section} className="section-pad">
          <div style={S.sectionTag}>🔥 <span>Trending Now</span></div>
          <div style={S.h2}>ACTIVE LAUNCHES</div>
          <p style={S.sectionSub}>Degens are aping in RIGHT NOW. Don't be the last one in.</p>
          <div style={S.tabRow}>
            {["live", "upcoming", "ended"].map(t => (
              <button key={t} onClick={() => setTab(t)} style={{
                ...S.tab,
                background: tab === t ? "linear-gradient(135deg, #F7931A, #E8820A)" : "rgba(255,255,255,0.03)",
                color: tab === t ? "#000" : "rgba(255,255,255,0.4)",
                border: tab === t ? "1px solid transparent" : "1px solid rgba(255,255,255,0.06)",
                boxShadow: tab === t ? "0 4px 20px rgba(247,147,26,0.3)" : "none"
              }}>{t === "live" ? "🔴 Live" : t === "upcoming" ? "🟡 Upcoming" : "⚪ Ended"}</button>
            ))}
          </div>
          <div style={S.coinsGrid}>
            {COINS.map((c, i) => (
              <div key={i} className="coin-card" style={S.coinCard}
                onMouseEnter={() => setHoveredCoin(i)}
                onMouseLeave={() => setHoveredCoin(null)}
                onC
