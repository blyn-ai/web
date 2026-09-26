const DS = window.BlynAICapitalDesignSystem_090ef4 || {};
const { LogoMark, Wordmark, GradientRule, EquityCurve, Eyebrow, CoinCard } = DS;
const C = window.BLYN || {};

const PAD = 64;

function Lock({ tone = 'paper' }) {
  return (
    <div style={{ position: 'absolute', left: PAD, top: 60, display: 'flex', alignItems: 'center', gap: 18 }}>
      <LogoMark size="lg" />
      <Wordmark tone={tone === 'ink' ? 'ink' : 'paper'} size="lg" />
    </div>
  );
}

function Foot({ bottom = 52, tone = 'paper' }) {
  return (
    <div style={{
      position: 'absolute', left: PAD, right: PAD, bottom, display: 'flex', alignItems: 'baseline',
      justifyContent: 'space-between', gap: 24, font: '16px var(--font-mono)', letterSpacing: '.14em',
      textTransform: 'uppercase', color: tone === 'ink' ? 'var(--sand-500)' : 'var(--text-meta)'
    }}>
      <p style={{ margin: 0 }}>blynai.eu</p>
      <p style={{ margin: 0 }}>MB „BlynAI“ · Lietuva</p>
    </div>
  );
}

const SHELL = {
  position: 'relative', width: 1200, height: 630, overflow: 'hidden',
  background: 'var(--wash-gold),var(--wash-violet),var(--paper-050)'
};
const SHELL_INK = {
  position: 'relative', width: 1200, height: 630, overflow: 'hidden',
  background: 'var(--wash-gold-ink),var(--wash-violet-ink),var(--ink-850)'
};
const HEAD = {
  margin: 0, font: 'var(--fw-regular) 52px/1.14 var(--font-display)',
  letterSpacing: 'var(--track-display)', color: 'var(--text-heading)'
};
const GRAD = { fontStyle: 'normal', background: 'var(--gradient-text)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' };

/** OG card — a claim in two lines over the equity curve. The default share image. */
function OGSentence() {
  return (
    <div style={SHELL}>
      <GradientRule height={6} style={{ position: 'absolute', inset: '0 0 auto 0' }} />
      <Lock />
      <p style={{ ...HEAD, position: 'absolute', left: PAD, top: 196, width: 1072 }}>
        Algoritminė prekyba kriptovaliutomis.<br /><em style={GRAD}>Tyrimai, inovacijos, sprendimai.</em>
      </p>
      <EquityCurve variant="band" style={{ position: 'absolute', left: 0, bottom: 0, width: 1200, height: 190 }} />
      <Foot bottom={172} />
    </div>
  );
}

/** OG card — the name, split and expanded. Use when the audience does not know the brand yet. */
function OGName() {
  return (
    <div style={SHELL}>
      <GradientRule height={6} style={{ position: 'absolute', inset: '0 0 auto 0' }} />
      <Lock />
      <div style={{ position: 'absolute', left: PAD, top: 180, display: 'flex', alignItems: 'baseline', gap: 24 }}>
        <p style={{ margin: 0, width: 268, font: '400 92px/1 var(--font-display)', letterSpacing: '-.04em', color: 'var(--gold-700)' }}>BLYN</p>
        <p style={{ margin: 0, font: '400 92px/1 var(--font-display)', letterSpacing: '-.04em', color: 'var(--violet-700)' }}>AI</p>
      </div>
      <div style={{ position: 'absolute', left: PAD, top: 300, display: 'flex', gap: 24, font: '18px/1.5 var(--font-mono)' }}>
        <p style={{ margin: 0, width: 268, color: 'var(--gold-900)' }}>Blockchain Ledger<br />Yield Numerics</p>
        <p style={{ margin: 0, width: 268, color: 'var(--violet-800)' }}>Algorithmic<br />Inference</p>
      </div>
      <EquityCurve variant="band" style={{ position: 'absolute', left: 0, bottom: 0, width: 1200, height: 190 }} />
      <Foot bottom={172} />
    </div>
  );
}

/** OG card — dark. For the research journal and anything published from the bot's own console. */
function OGDark() {
  return (
    <div style={SHELL_INK}>
      <GradientRule height={6} style={{ position: 'absolute', inset: '0 0 auto 0' }} />
      <EquityCurve variant="full" tone="ink" style={{ position: 'absolute', inset: 0, width: 1200, height: 630 }} />
      <Lock tone="ink" />
      <div style={{ position: 'absolute', left: PAD, top: 206, display: 'flex', alignItems: 'baseline', gap: 20 }}>
        <p style={{ margin: 0, width: 272, font: '400 96px/1 var(--font-display)', letterSpacing: '-.04em', color: 'var(--gold-400)' }}>BLYN</p>
        <p style={{ margin: 0, font: '400 96px/1 var(--font-display)', letterSpacing: '-.04em', color: 'var(--violet-400)' }}>AI</p>
      </div>
      <div style={{ position: 'absolute', left: PAD, top: 320, display: 'flex', gap: 20, font: '17px/1.5 var(--font-mono)' }}>
        <p style={{ margin: 0, width: 272, color: '#E0C48B' }}>Blockchain Ledger<br />Yield Numerics</p>
        <p style={{ margin: 0, color: 'var(--lilac-400)' }}>Algorithmic<br />Inference</p>
      </div>
      <Foot tone="ink" />
    </div>
  );
}

/** OG card — the two instances. For posts about a specific account's results. */
function OGCoins() {
  return (
    <div style={SHELL}>
      <GradientRule height={6} style={{ position: 'absolute', inset: '0 0 auto 0' }} />
      <Lock />
      <p style={{ ...HEAD, position: 'absolute', left: PAD, bottom: 150, width: 520, fontSize: 62, lineHeight: 1.04 }}>
        Vienas kodas, <em style={GRAD}>dvi sąskaitos</em>.
      </p>
      <div style={{ position: 'absolute', right: PAD, top: 196, display: 'flex', alignItems: 'center', gap: 34 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <img src="../../assets/coin-luko.svg" alt="" style={{ width: 150, height: 150 }} />
          <p style={{ margin: 0, font: '600 20px var(--font-display)', letterSpacing: 'var(--track-coin)', color: 'var(--luko-label)' }}>LUKO</p>
        </div>
        <p style={{ margin: 0, font: '300 40px var(--font-display)', color: 'var(--text-faint)' }}>×</p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <img src="../../assets/coin-byko.svg" alt="" style={{ width: 150, height: 150 }} />
          <p style={{ margin: 0, font: '600 20px var(--font-display)', letterSpacing: 'var(--track-coin)', color: 'var(--byko-label)' }}>BYKO</p>
        </div>
      </div>
      <Foot />
    </div>
  );
}

Object.assign(window, { OGSentence, OGName, OGDark, OGCoins });
