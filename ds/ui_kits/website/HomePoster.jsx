const DS = window.BlynAICapitalDesignSystem_090ef4 || {};
const { LogoMark, Wordmark, GradientRule, EquityCurve, Button, Eyebrow, Badge, Card,
        SiteHeader, SiteFooter, Section, DualPanel,
        DefinitionList, NumberedList, StatBar, StatusPanel,
        SyllableSplit, CoinCard, MemberCard, FeatureCard } = DS;
const C = window.BLYN || {};

/** Variant C — "Plakatas": violet-ink, poster typography, the two axes as full-bleed halves. */
function HomePoster({ narrow = false }) {
  const px = narrow ? 'var(--mobile-x)' : 'var(--section-x-ink-wide)';
  return (
    <div style={{ background: 'var(--ink-760)', color: 'var(--lilac-100)' }}>
      <SiteHeader compact={narrow} nav={C.navPoster} style={{ background: 'transparent', borderBottom: '1px solid rgba(161,138,255,.18)', padding: narrow ? '14px 18px' : 'var(--pad-header-y) var(--section-x-ink-wide)' }} />
      <section style={{ position: 'relative', overflow: 'hidden', padding: narrow ? '38px 18px 34px' : '74px var(--section-x-ink-wide) 60px', borderBottom: '1px solid rgba(161,138,255,.18)' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 'auto -120px -220px auto', width: 620, height: 620, borderRadius: '50%', background: 'radial-gradient(circle,rgba(107,78,219,.34),transparent 68%)' }} />
        <div aria-hidden="true" style={{ position: 'absolute', inset: '-180px auto auto -140px', width: 520, height: 520, borderRadius: '50%', background: 'radial-gradient(circle,rgba(245,184,79,.16),transparent 66%)' }} />
        <div style={{ position: 'relative', display: narrow ? 'block' : 'grid', gridTemplateColumns: 'var(--grid-hero)', gap: 'var(--gap-wide)', alignItems: 'start' }}>
          <div>
            <Eyebrow tone="lilac" size={narrow ? 'sm' : 'md'}>MB „BlynAI“ · blynai.eu</Eyebrow>
            <h1 style={{
              margin: '22px 0 0', font: 'var(--fw-bold) ' + (narrow ? '36px' : 'var(--fs-display)') + '/.98 var(--font-display)',
              letterSpacing: '-.04em', color: 'var(--text-heading-on-ink)', maxWidth: '17ch'
            }}>Programa prekiauja. <span style={{ color: 'var(--violet-400)' }}>Mes tyrinėjame, kaip ji tai daro.</span></h1>
            <p style={{ margin: '28px 0 0', maxWidth: '52ch', font: '400 ' + (narrow ? '15.5px' : '17.5px') + '/var(--lh-body-tight) var(--font-body)', color: 'var(--violet-300)' }}>{C.leadPoster}</p>
            <div style={{ display: 'flex', flexDirection: narrow ? 'column' : 'row', flexWrap: 'wrap', gap: 12, marginTop: 36 }}>
              <Button variant="pill" block={narrow} href={C.urls.journal}>{C.cta.journal}</Button>
              <Button variant="pillViolet" block={narrow} href={C.urls.github}>{C.cta.github}</Button>
            </div>
          </div>
          <StatusPanel tone="glass" lines={C.status} style={{ marginTop: narrow ? 24 : 0 }} />
        </div>
      </section>

      <div id="vardas" style={{ display: narrow ? 'block' : 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid rgba(161,138,255,.18)' }}>
        {[C.syllable.left, C.syllable.right].map((s, i) => (
          <div key={s.word} style={{
            padding: narrow ? '30px 18px' : '46px var(--section-x-ink-wide)',
            borderRight: !narrow && i === 0 ? '1px solid rgba(161,138,255,.18)' : undefined,
            borderBottom: narrow && i === 0 ? '1px solid rgba(161,138,255,.18)' : undefined,
            background: i ? 'rgba(107,78,219,.1)' : undefined
          }}>
            <p style={{ margin: 0, font: 'var(--fw-bold) ' + (narrow ? '44px' : '60px') + '/1 var(--font-display)', letterSpacing: '-.03em', color: i ? 'var(--violet-400)' : 'var(--gold-400)' }}>{s.word}</p>
            <p style={{ margin: '18px 0 0', font: 'var(--fw-medium) 22px/1.3 var(--font-display)', color: 'var(--text-heading-on-ink)' }}>{s.expansion}</p>
            <p style={{ margin: '14px 0 0', maxWidth: '40ch', font: '400 var(--fs-body)/var(--lh-body) var(--font-body)', color: 'var(--lilac-400)' }}>{s.note}</p>
          </div>
        ))}
      </div>

      <section id="tyrimai" style={{ padding: narrow ? '32px 18px' : '56px var(--section-x-ink-wide)', borderBottom: '1px solid rgba(161,138,255,.18)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', marginBottom: 32 }}>
          <h2 style={{ margin: 0, font: 'var(--fw-bold) ' + (narrow ? '24px' : 'var(--fs-h2-lg)') + '/var(--lh-h2) var(--font-display)', letterSpacing: '-.025em', color: 'var(--text-heading-on-ink)' }}>Ką bendrija iš tikrųjų daro</h2>
          <Eyebrow tone="muted" size="sm" style={{ color: 'var(--lilac-600)', letterSpacing: '.14em' }}>Keturios veiklos, viena veiklos sritis</Eyebrow>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: narrow ? '1fr' : 'repeat(4,1fr)', gap: 14 }}>
          {C.activities.map(a => <FeatureCard key={a.label} tone="glass" label={a.label} title={a.title}>{a.body}</FeatureCard>)}
        </div>
      </section>

      <section style={{
        display: narrow ? 'block' : 'grid', gridTemplateColumns: 'minmax(0,1fr) 440px', gap: 'var(--gap-section)', alignItems: 'center',
        padding: narrow ? '32px 18px' : '52px var(--section-x-ink-wide)', borderBottom: '1px solid rgba(161,138,255,.18)', background: 'rgba(107,78,219,.07)'
      }}>
        <div>
          <Eyebrow tone="lilac" size={narrow ? 'sm' : 'md'}>{C.instances.eyebrow}</Eyebrow>
          <h2 style={{ margin: '14px 0 0', font: 'var(--fw-bold) ' + (narrow ? '22px' : '26px') + '/var(--lh-h2) var(--font-display)', letterSpacing: 'var(--track-h2)', color: 'var(--text-heading-on-ink)' }}>{C.instances.title}</h2>
          <p style={{ margin: '13px 0 0', maxWidth: '44ch', font: '400 15px/var(--lh-body-tight) var(--font-body)', color: 'var(--lilac-400)' }}>{C.instances.body}</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: narrow ? 20 : 0 }}>
          <CoinCard member="luko" tone="ink" layout={narrow ? 'row' : 'stack'} />
          <CoinCard member="byko" tone="ink" layout={narrow ? 'row' : 'stack'} />
        </div>
      </section>

      <section style={{ display: narrow ? 'block' : 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 'var(--gap-section)', padding: narrow ? '32px 18px' : '52px var(--section-x-ink-wide)', borderBottom: '1px solid rgba(161,138,255,.18)' }}>
        <div id="nariai">
          <Eyebrow tone="lilac" style={{ marginBottom: 22 }}>Nariai · po 50 %</Eyebrow>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
            {C.members.map(m => <MemberCard key={m.name} {...m} tone="ink" shape="soft" />)}
          </div>
        </div>
        <div id="rekvizitai" style={{ marginTop: narrow ? 28 : 0 }}>
          <Eyebrow tone="lilac" style={{ marginBottom: 22 }}>Rekvizitai</Eyebrow>
          <DefinitionList tone="ink" items={C.registry} />
        </div>
      </section>

      <SiteFooter legal={C.legal} padding={narrow ? '28px 18px 34px' : '32px var(--section-x-ink-wide) 44px'} style={{ background: 'transparent' }} />
    </div>
  );
}
Object.assign(window, { HomePoster });
