import { SectionHead, TextLink } from '../components/Blocks';
import { event, partners, sponsors, money } from '../lib/content';
import { color, font, container, section, eyebrow, h1, h3, body, bodyLg, small, buttonPrimary, buttonGhost, card, radius } from '../styles/tokens';

// The partnership workflow already used on globallynk.club — same steps, same records.
const FLOW = ['Apply', 'Review', 'Approval', 'Payment', 'Listing materials', 'Listing review', 'Publication'];

export default function Partners() {
  const mail = (subject) => `mailto:${event.contactEmail}?subject=${encodeURIComponent(subject)}`;
  const tiers = sponsors.tiers;

  return (
    <>
      {/* HERO */}
      <section style={{ background: color.bgDeep, padding: 'clamp(56px, 9vw, 112px) 0 clamp(48px, 7vw, 88px)' }}>
        <div style={container}>
          <p style={{ ...eyebrow, marginBottom: '20px' }}>Partnerships · {event.context}</p>
          <h1 style={{ ...h1, fontSize: 'clamp(48px, 8.5vw, 112px)' }}>
            Bring your brand<br /><span style={{ color: color.coral }}>into the mix.</span>
          </h1>
          <p style={{ ...bodyLg, maxWidth: '640px', marginTop: '24px' }}>
            Help put DJ artistry in the spotlight. Two ways in: a Community Partner listing for local businesses
            and organizations, or a sponsorship and custom activation for brands.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '32px' }}>
            <a href="#community" className="ml-btn" style={buttonPrimary}>Community Partners</a>
            <a href="#sponsorship" className="ml-btn ml-ghost" style={buttonGhost}>Sponsorships</a>
          </div>
        </div>
      </section>

      {/* COMMUNITY PARTNERS */}
      <section id="community" style={section}>
        <div style={container}>
          <SectionHead
            kicker="Community Partner directory"
            line1="Get in front of"
            line2="the community."
            intro="A paid directory listing for small businesses, emerging brands and community organizations. Listings appear in the Digital Experience Guide that guests open by QR code at the event."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '16px' }}>
            {['standard', 'featured'].map((k) => {
              const p = partners.packages[k];
              const featured = k === 'featured';
              return (
                <article key={k} style={{ ...card, padding: 'clamp(24px, 3vw, 36px)', borderColor: featured ? color.lineCoral : color.line }}>
                  <p style={{ ...eyebrow }}>{p.capacityNote}</p>
                  <h3 style={{ ...h3, fontSize: '36px', marginTop: '10px' }}>{p.name}</h3>
                  <p style={{ fontFamily: font.display, fontWeight: 800, fontSize: '56px', color: color.coral, lineHeight: 1, margin: '10px 0 18px' }}>{money(p.price)}</p>
                  <ul style={{ ...body, paddingLeft: '18px', margin: 0, display: 'grid', gap: '6px', fontSize: '15px' }}>
                    {p.benefits.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                  <a href={`${event.partnerApplyUrl}?package=${k}`} className="ml-btn" style={{ ...(featured ? buttonPrimary : buttonGhost), marginTop: '24px', width: '100%' }}>
                    Apply — {p.name}
                  </a>
                </article>
              );
            })}
          </div>

          <div style={{ marginTop: '32px', display: 'grid', gap: '10px' }}>
            <p style={{ ...body, fontSize: '15px' }}>
              <strong style={{ color: color.cream }}>Categories:</strong> {partners.categories.map((c) => c.label).join(' · ')}
            </p>
            <p style={{ ...body, fontSize: '15px' }}>
              Featured partners get top placement in their category. Other businesses can take part in the same category.
            </p>
          </div>

          {/* Workflow */}
          <div style={{ marginTop: '48px' }}>
            <h3 style={{ ...h3, marginBottom: '20px' }}>How it works</h3>
            <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '8px' }}>
              {FLOW.map((s, i) => (
                <li key={s} style={{ ...card, padding: '14px', background: i === 0 ? color.coral : color.surface, color: i === 0 ? color.bgDeep : color.cream, borderColor: i === 0 ? color.coral : color.line }}>
                  <span style={{ fontFamily: font.display, fontWeight: 800, fontSize: '28px', lineHeight: 1 }}>{String(i + 1).padStart(2, '0')}</span>
                  <span style={{ display: 'block', fontWeight: 600, fontSize: '14px', marginTop: '6px' }}>{s}</span>
                </li>
              ))}
            </ol>
            <p style={{ ...body, fontSize: '15px', marginTop: '16px', maxWidth: '760px' }}>
              No payment is due when you apply. An application is not a confirmed partnership and does not reserve a placement —
              placements are secured only after approval and payment, and listings are published after review.
            </p>
          </div>
        </div>
      </section>

      {/* DIGITAL EXPERIENCE GUIDE */}
      <section style={{ ...section, background: color.surface }}>
        <div style={container} className="ml-split">
          <div>
            <SectionHead kicker="The Digital Experience Guide" line1="One scan." line2="Everything on." />
            <p style={bodyLg}>
              Guests open the guide from a permanent QR code — no app, no account. It holds the schedule, the lineup,
              venue info and the Community Partner directory, so your listing sits right next to the program.
            </p>
            <div style={{ marginTop: '20px' }}><TextLink to="/guide">See the guide →</TextLink></div>
          </div>
          <div style={{ ...card, padding: '28px', background: color.bgDeep }}>
            <p style={{ ...eyebrow, marginBottom: '14px' }}>In the guide</p>
            <ul style={{ ...body, margin: 0, paddingLeft: '18px', display: 'grid', gap: '8px' }}>
              <li>Public event schedule</li>
              <li>Talent and speaker details</li>
              <li>Community Partner directory by category</li>
              <li>Venue information and guest links</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SPONSORSHIP */}
      <section id="sponsorship" style={section}>
        <div style={container}>
          <SectionHead
            kicker="Sponsorships & custom activations"
            line1="Fund the craft."
            line2="Be part of it."
            intro="For brands who want a bigger role — funding a program segment, providing products or contributing services. Cash and in-kind proposals welcome."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '16px' }}>
            {tiers.list.map((t) => (
              <article key={t.name} style={{ ...card, padding: '28px' }}>
                <h3 style={{ ...h3, fontSize: '30px' }}>{t.name}</h3>
                {tiers.publishDetails && <p style={{ fontFamily: font.display, fontWeight: 800, fontSize: '44px', color: color.coral, lineHeight: 1, margin: '8px 0 12px' }}>{money(t.price)}</p>}
                <p style={{ ...body, marginTop: '10px' }}>{t.scope}</p>
                {tiers.publishDetails && (
                  <ul style={{ ...body, fontSize: '15px', paddingLeft: '18px', margin: '14px 0 0', display: 'grid', gap: '6px' }}>
                    {t.benefits.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                )}
              </article>
            ))}
          </div>
          <p style={{ ...small, marginTop: '14px', maxWidth: '760px' }}>
            {tiers.publishDetails ? tiers.note : 'Pricing and benefits are shared on request. Final benefits are confirmed by written agreement.'}
          </p>

          <h3 style={{ ...h3, margin: '56px 0 20px' }}>Where your support goes</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '0 32px' }}>
            {sponsors.supportAreas.map((a, i) => (
              <div key={a.title} style={{ display: 'flex', gap: '16px', padding: '18px 0', borderTop: `1px solid ${color.lineCoral}` }}>
                <span style={{ fontFamily: font.display, fontWeight: 800, fontSize: '30px', color: color.coral, lineHeight: 1 }}>{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <p style={{ fontFamily: font.display, fontWeight: 700, fontSize: '22px', textTransform: 'uppercase', color: color.cream, margin: 0, lineHeight: 1.05 }}>{a.title}</p>
                  <p style={{ ...body, fontSize: '15px', marginTop: '4px' }}>{a.copy}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ ...card, marginTop: '56px', padding: 'clamp(28px, 5vw, 48px)', background: color.bgDeep, borderColor: color.lineCoral }}>
            <h3 style={{ ...h3, fontSize: 'clamp(30px, 4vw, 44px)' }}>Start a conversation</h3>
            <p style={{ ...body, marginTop: '10px', maxWidth: '620px' }}>
              Email your preferred package or activation idea and your budget or in-kind offer. Partner deliverables are agreed in advance;
              no sales or audience reach are guaranteed.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '24px' }}>
              <a href={mail('The Mix Lab — sponsorship inquiry')} className="ml-btn" style={buttonPrimary}>Email us</a>
              <a href={`${event.partnerApplyUrl}`} className="ml-btn ml-ghost" style={{ ...buttonGhost, whiteSpace: 'normal', textAlign: 'center' }}>Partner application</a>
            </div>
            <p style={{ ...body, marginTop: '16px' }}>
              <a href={`mailto:${event.contactEmail}`} className="ml-link" style={{ color: color.cream }}>{event.contactEmail}</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
