const DS = window.BlynAICapitalDesignSystem_090ef4 || {};
const { LogoMark, Wordmark, GradientRule, EquityCurve, Button, Eyebrow, Badge, Card,
        SiteHeader, SiteFooter, Section, DualPanel,
        DefinitionList, NumberedList, StatBar, StatusPanel,
        SyllableSplit, CoinCard, MemberCard, FeatureCard } = DS;
const C = window.BLYN || {};

/** Variant D — "Žurnalas": light document, but the equity curve carries the hero and the page opens on the two syllables. */
function HomeLedger({ narrow = false }) {
  return (
    <div style={{ background: 'var(--surface-page)', color: 'var(--text-heading)' }}>
      <SiteHeader compact={narrow} nav={C.nav} />
      <GradientRule height={narrow ? 3 : 6} />

      <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--wash-gold),var(--wash-violet),var(--paper-000)', borderBottom: '1px solid var(--border-hairline)' }}>
        <div style={{ position: 'relative', padding: narrow ? '32px 18px 0' : '44px var(--section-x) 0' }}>
          <Eyebrow size={narrow ? 'sm' : 'md'}>{C.eyebrow}</Eyebrow>
          <div style={{ display: narrow ? 'block' : 'grid', gridTemplateColumns: 'minmax(0,1fr) 300px', gap: 'var(--gap-wide)', marginTop: 24, alignItems: 'start' }}>
            <div>
              <h1 style={{ margin: 0, font: 'var(--fw-regular) ' + (narrow ? '34px' : '54px') + '/var(--lh-display) var(--font-display)', letterSpacing: 'var(--track-display)', maxWidth: narrow ? '18ch' : undefined }}>
                Programa prekiauja. <span className="blyn-grad">Mes tyrinėjame, kaip.</span>
              </h1>
              <div style={{ display: 'flex', gap: narrow ? 20 : 34, marginTop: 26, flexWrap: 'wrap' }}>
                <p style={{ margin: 0, maxWidth: '30ch', font: '400 15px/var(--lh-body) var(--font-body)', color: 'var(--text-body)' }}>
                  <b style={{ font: '600 13px var(--font-mono)', letterSpacing: '.1em', color: 'var(--gold-900)' }}>BLYN</b><br />Blockchain Ledger Yield Numerics — grandinė, žurnalas, pelno kreivė.
                </p>
                <p style={{ margin: 0, maxWidth: '30ch', font: '400 15px/var(--lh-body) var(--font-body)', color: 'var(--text-body)' }}>
                  <b style={{ font: '600 13px var(--font-mono)', letterSpacing: '.1em', color: 'var(--violet-800)' }}>AI</b><br />Algorithmic Inference — išvada ir orderis, priimtas taisyklių.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: narrow ? 'column' : 'row', gap: narrow ? 10 : 12, marginTop: 30 }}>
                <Button variant="gradient" size={narrow ? 'lg' : 'md'} block={narrow} href={C.urls.journal}>{C.cta.journal}</Button>
                <Button variant="outline" size={narrow ? 'lg' : 'md'} block={narrow} href={C.urls.github}>{C.cta.github}</Button>
              </div>
            </div>
            <StatusPanel lines={C.status} style={{ marginTop: narrow ? 24 : 4 }} />
          </div>
        </div>
        <EquityCurve variant="band" style={{ marginTop: narrow ? 24 : 30, height: narrow ? 96 : 150 }} />
      </section>

      <StatBar items={C.stats} />

      <Section id="tyrimai" eyebrow="Tyrimų kryptys" compact={narrow} padding={narrow ? '32px 18px' : undefined} tone="raised">
        <NumberedList items={C.directions} compact={narrow} />
      </Section>

      <Section id="vardas" eyebrow="Vardas · du skiemenys" compact={narrow} padding={narrow ? '32px 18px' : undefined}>
        <SyllableSplit {...C.syllable} compact={narrow} />
      </Section>

      <section style={{
        display: narrow ? 'block' : 'grid', gridTemplateColumns: 'minmax(0,1fr) 440px', gap: 'var(--gap-section)', alignItems: 'center',
        padding: narrow ? '32px 18px' : '52px var(--section-x)', borderBottom: '1px solid var(--border-hairline)', background: 'var(--paper-000)'
      }}>
        <div>
          <Eyebrow size={narrow ? 'sm' : 'md'}>{C.instances.eyebrow}</Eyebrow>
          <h2 style={{ margin: '14px 0 0', font: 'var(--fw-medium) ' + (narrow ? '22px' : 'var(--fs-h2)') + '/var(--lh-h2) var(--font-display)', letterSpacing: 'var(--track-h2)' }}>{C.instances.title}</h2>
          <p style={{ margin: '13px 0 0', maxWidth: 'var(--measure-body)', font: '400 15px/var(--lh-body) var(--font-body)', color: 'var(--text-body)' }}>{C.instances.body}</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: narrow ? 20 : 0 }}>
          <CoinCard member="luko" layout={narrow ? 'row' : 'stack'} coinSize={narrow ? 30 : 44} />
          <CoinCard member="byko" layout={narrow ? 'row' : 'stack'} coinSize={narrow ? 30 : 44} />
        </div>
      </section>

      <Section id="nariai" compact={narrow} padding={narrow ? '32px 18px' : undefined} divider={false} tone="raised">
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
Object.assign(window, { HomeLedger });
