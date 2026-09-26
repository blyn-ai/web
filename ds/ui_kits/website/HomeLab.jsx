const DS = window.BlynAICapitalDesignSystem_090ef4 || {};
const { LogoMark, Wordmark, GradientRule, EquityCurve, Button, Eyebrow, Badge, Card,
        SiteHeader, SiteFooter, Section, DualPanel,
        DefinitionList, NumberedList, StatBar, StatusPanel,
        SyllableSplit, CoinCard, MemberCard, FeatureCard } = DS;
const C = window.BLYN || {};

/** Variant B — "Laboratorija": dark, continues the bot's own console identity. */
function HomeLab({ narrow = false }) {
  const px = narrow ? 'var(--mobile-x)' : 'var(--section-x-ink)';
  return (
    <div style={{ background: 'linear-gradient(150deg,var(--ink-900),var(--ink-780) 55%,#080C0B)', color: 'var(--text-on-ink)' }}>
      <SiteHeader compact={narrow} nav={C.navLab} style={{ background: 'transparent', borderBottom: '1px solid var(--border-hairline-on-ink)' }} />
      <section style={{
        display: narrow ? 'block' : 'grid', gridTemplateColumns: 'var(--grid-hero-ink)', gap: 'var(--gap-section)',
        padding: narrow ? '36px 18px 32px' : 'var(--hero-y-ink) var(--section-x-ink) 56px',
        borderBottom: '1px solid var(--border-hairline-on-ink)'
      }}>
        <div>
          <Eyebrow tone="gold" size={narrow ? 'sm' : 'md'} style={{ letterSpacing: 'var(--track-eyebrow-tight)' }}>Mažoji bendrija · Lietuvos Respublika</Eyebrow>
          <h1 style={{
            margin: '18px 0 0', font: 'var(--fw-bold) ' + (narrow ? '34px' : 'var(--fs-h1)') + '/var(--lh-h1) var(--font-display)',
            letterSpacing: 'var(--track-h1)', color: 'var(--text-heading-on-ink)'
          }}>Algoritminės prekybos<br />tyrimų laboratorija.</h1>
          <p style={{ margin: '22px 0 0', maxWidth: '44ch', font: '400 ' + (narrow ? '15.5px' : 'var(--fs-body-lg)') + '/var(--lh-body-tight) var(--font-body)', color: '#d8cfc0' }}>{C.leadLab}</p>
          <div style={{ display: 'flex', flexDirection: narrow ? 'column' : 'row', gap: narrow ? 10 : 12, marginTop: 32 }}>
            <Button variant="gold" size={narrow ? 'lg' : 'sm'} block={narrow} href={C.urls.journal}>{C.cta.journal}</Button>
            <Button variant="outlineInk" size={narrow ? 'lg' : 'sm'} block={narrow} href={C.urls.github}>{C.cta.github}</Button>
          </div>
        </div>
        <Card id="vardas" tone="ink" style={{ marginTop: narrow ? 26 : 0, borderRadius: 'var(--radius-2xl)', background: 'rgba(0,0,0,.3)' }}>
          <Eyebrow tone="muted" size="sm" style={{ color: 'var(--text-meta-on-ink)', letterSpacing: '.14em', marginBottom: 18 }}>Vardas</Eyebrow>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[C.syllable.left, C.syllable.right].map((s, i) => (
              <div key={s.word} style={{ paddingTop: i ? 20 : 0, borderTop: i ? '1px solid var(--border-hairline-on-ink)' : undefined }}>
                <p style={{ margin: 0, font: 'var(--fw-bold) 34px/1 var(--font-display)', letterSpacing: 'var(--track-h2)', color: i ? 'var(--gold-400)' : 'var(--text-heading-on-ink)' }}>{s.word}</p>
                <p style={{ margin: '11px 0 0', font: '15px/1.45 var(--font-body)', color: 'var(--text-on-ink)' }}>{s.expansion}</p>
                <p style={{ margin: '6px 0 0', font: '12.5px/1.5 var(--font-mono)', color: 'var(--text-meta-on-ink)' }}>{s.note}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <StatBar items={C.stats} style={{ borderBottom: '1px solid var(--border-hairline-on-ink)' }} />

      <Section id="tyrimai" tone="ink" eyebrow="Tyrimų programa" heading="Trys klausimai, į kuriuos ieškome atsakymo"
        padding={narrow ? '32px 18px' : '56px var(--section-x-ink)'}
        style={{ background: 'transparent' }}>
        <div style={{ display: 'grid', gridTemplateColumns: narrow ? '1fr' : 'repeat(3,1fr)', gap: 'var(--gap-card)' }}>
          {C.questions.map(q => <FeatureCard key={q.index} index={q.index} title={q.title}>{q.body}</FeatureCard>)}
        </div>
      </Section>

      <section style={{
        display: narrow ? 'block' : 'grid', gridTemplateColumns: 'minmax(0,1fr) 470px', gap: 'var(--gap-section)', alignItems: 'center',
        padding: narrow ? '32px 18px' : '48px var(--section-x-ink)', borderBottom: '1px solid var(--border-hairline-on-ink)'
      }}>
        <div>
          <h2 style={{ margin: 0, font: 'var(--fw-bold) ' + (narrow ? '22px' : '26px') + '/var(--lh-h2) var(--font-display)', letterSpacing: 'var(--track-h2)', color: 'var(--text-heading-on-ink)' }}>Rezultatai skelbiami viešai, kol jie vyksta</h2>
          <p style={{ margin: '14px 0 0', maxWidth: 'var(--measure-body)', font: '400 15px/var(--lh-body-tight) var(--font-body)', color: 'var(--text-body-on-ink)' }}>Du nariai — du nepriklausomi botų egzemplioriai, du atskiri žurnalai. Skaičiai neredaguojami po fakto.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: narrow ? 20 : 0 }}>
          <CoinCard member="luko" tone="ink" layout="row" coinSize={38} />
          <CoinCard member="byko" tone="ink" layout="row" coinSize={38} />
        </div>
      </section>

      <Section tone="ink" padding={narrow ? '32px 18px' : '52px var(--section-x-ink)'} divider={false} style={{ background: 'transparent' }}>
        <div style={{ display: narrow ? 'block' : 'grid', gridTemplateColumns: 'minmax(0,1fr) 1px minmax(0,1fr)', gap: '0 var(--gap-section)' }}>
          <div id="rekvizitai"><Eyebrow tone="lilac" style={{ marginBottom: 22 }}>Juridiniai duomenys</Eyebrow><DefinitionList tone="ink" items={C.registry} /></div>
          <div aria-hidden="true" style={{ background: 'var(--border-hairline-on-ink)' }} />
          <div id="nariai" style={{ marginTop: narrow ? 28 : 0 }}>
            <Eyebrow tone="lilac" style={{ marginBottom: 22 }}>Nariai</Eyebrow>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {C.members.map(m => <MemberCard key={m.name} {...m} tone="ink" shape="circle" role={m.role.replace('MB vadovas','narys 50 % · direktorius').replace('MB narys','narys 50 %')} />)}
            </div>
          </div>
        </div>
      </Section>

      <SiteFooter legal={C.legal} padding={narrow ? '28px 18px 34px' : '30px var(--section-x-ink) 40px'} style={{ background: 'transparent' }} />
    </div>
  );
}
Object.assign(window, { HomeLab });
