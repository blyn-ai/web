const DS = window.BlynAICapitalDesignSystem_090ef4 || {};
const { LogoMark, Wordmark, GradientRule, EquityCurve, Button, Eyebrow, Badge, Card,
        SiteHeader, SiteFooter, Section, DualPanel,
        DefinitionList, NumberedList, StatBar, StatusPanel,
        SyllableSplit, CoinCard, MemberCard, FeatureCard } = DS;
const C = window.BLYN || {};

function CoinPair({ narrow, tone }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: narrow ? 10 : 12 }}>
      <CoinCard member="luko" tone={tone} layout={narrow ? 'row' : 'stack'} coinSize={narrow ? 30 : 44} />
      <CoinCard member="byko" tone={tone} layout={narrow ? 'row' : 'stack'} coinSize={narrow ? 30 : 44} />
    </div>
  );
}

/** Variant A — "Dokumentas": light, academic, the gold-to-violet axis running left to right. */
function HomeDocument({ narrow = false }) {
  const [menu, setMenu] = React.useState(false);
  const px = narrow ? 'var(--mobile-x)' : 'var(--section-x)';
  return (
    <div style={{ background: 'var(--surface-page)', color: 'var(--text-heading)' }}>
      <SiteHeader compact={narrow} nav={C.nav} onMenu={() => setMenu(m => !m)} />
      <GradientRule />
      {menu && narrow && (
        <nav style={{ display: 'flex', flexDirection: 'column', background: 'var(--ink-800)', padding: '8px 18px 14px' }}>
          {C.nav.map(n => <a key={n.label} href="#" style={{ padding: '11px 0', font: 'var(--fs-eyebrow) var(--font-mono)', letterSpacing: 'var(--track-nav)', textTransform: 'uppercase', color: 'var(--link-nav-on-ink)' }}>{n.label}</a>)}
        </nav>
      )}

      <section style={{
        padding: narrow ? '32px 18px 30px' : '44px var(--section-x) 48px',
        borderBottom: '1px solid var(--border-hairline)',
        background: 'var(--wash-gold),var(--wash-violet),var(--paper-050)'
      }}>
        <Eyebrow size={narrow ? 'sm' : 'md'}>{C.eyebrow}</Eyebrow>
        <div style={{ display: narrow ? 'block' : 'grid', gridTemplateColumns: 'var(--grid-hero)', gap: 'var(--gap-wide)', marginTop: 22, alignItems: 'start' }}>
          <div>
            <h1 style={{
              margin: 0, font: 'var(--fw-regular) ' + (narrow ? '34px' : 'var(--fs-hero)') + '/var(--lh-display) var(--font-display)',
              letterSpacing: 'var(--track-display)', maxWidth: 'var(--measure-heading)'
            }}>
              Skaičiai apie tai, kaip <span className="blyn-grad">programa prekiauja</span>.
            </h1>
            <p style={{ margin: '30px 0 0', maxWidth: 'var(--measure-lead)', font: 'var(--type-lead)', color: 'var(--text-body)' }}>{C.leadDoc}</p>
            <div style={{ display: 'flex', flexDirection: narrow ? 'column' : 'row', flexWrap: 'wrap', gap: narrow ? 10 : 12, marginTop: 34 }}>
              <Button variant="gradient" size={narrow ? 'lg' : 'md'} block={narrow} href={C.urls.journal}>{C.cta.journal}</Button>
              <Button variant="outline" size={narrow ? 'lg' : 'md'} block={narrow} href={C.urls.github}>{C.cta.github}</Button>
            </div>
          </div>
          <StatusPanel lines={C.status} style={{ marginTop: narrow ? 24 : 0 }} />
        </div>
      </section>

      <Section tone="raised" id="vardas" eyebrow="Vardas · du skiemenys" compact={narrow} padding={narrow ? '32px 18px' : undefined}>
        <SyllableSplit {...C.syllable} compact={narrow} />
      </Section>

      <Section id="tyrimai" eyebrow="Tyrimų kryptys" compact={narrow} padding={narrow ? '32px 18px' : undefined}>
        <NumberedList items={C.directions} compact={narrow} />
      </Section>

      <section style={{
        display: narrow ? 'block' : 'grid', gridTemplateColumns: 'minmax(0,1fr) 440px', gap: 'var(--gap-section)',
        alignItems: 'center', padding: narrow ? '32px 18px' : '52px var(--section-x)',
        borderBottom: '1px solid var(--border-hairline)',
        background: 'radial-gradient(620px 380px at 0% 50%,rgba(245,184,79,.16),transparent 70%),radial-gradient(620px 380px at 100% 50%,rgba(107,78,219,.13),transparent 70%),var(--paper-000)'
      }}>
        <div>
          <Eyebrow size={narrow ? 'sm' : 'md'}>{C.instances.eyebrow}</Eyebrow>
          <h2 style={{ margin: '14px 0 0', font: 'var(--fw-medium) ' + (narrow ? '22px' : 'var(--fs-h2)') + '/var(--lh-h2) var(--font-display)', letterSpacing: 'var(--track-h2)' }}>{C.instances.title}</h2>
          <p style={{ margin: '13px 0 0', maxWidth: 'var(--measure-body)', font: '400 ' + (narrow ? '14px' : '15px') + '/var(--lh-body) var(--font-body)', color: 'var(--text-body)' }}>{C.instances.body}</p>
        </div>
        <div style={{ marginTop: narrow ? 20 : 0 }}><CoinPair narrow={narrow} /></div>
      </section>

      <Section id="nariai" compact={narrow} padding={narrow ? '32px 18px' : undefined} divider={false}>
        {narrow ? (
          <div>
            <Eyebrow size="sm" style={{ marginBottom: 20 }}>Nariai · po 50 %</Eyebrow>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>{C.members.map(m => <MemberCard key={m.name} {...m} />)}</div>
            <div style={{ marginTop: 28, paddingTop: 24, borderTop: '1px solid var(--border-hairline)' }}>
              <Eyebrow size="sm" id="rekvizitai" style={{ marginBottom: 18 }}>Registro duomenys</Eyebrow>
              <DefinitionList items={C.registry} />
            </div>
          </div>
        ) : (
          <DualPanel divider="gradient"
            left={<div id="rekvizitai"><Eyebrow style={{ marginBottom: 24 }}>Registro duomenys</Eyebrow><DefinitionList items={C.registry} /></div>}
            right={<div><Eyebrow style={{ marginBottom: 24 }}>Nariai · po 50 %</Eyebrow>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--gap-grid)' }}>{C.members.map(m => <MemberCard key={m.name} {...m} />)}</div></div>} />
        )}
      </Section>

      <SiteFooter legal={C.legal} padding={narrow ? '28px 18px 34px' : undefined} />
    </div>
  );
}
Object.assign(window, { HomeDocument, CoinPair });
