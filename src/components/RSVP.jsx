import React, { useEffect } from 'react';

const RSVP = () => {


    // Subtle parallax on section
    useEffect(() => {
        const el = document.getElementById('rsvp-section');
        if (!el) return;
        const handleScroll = () => {
            const rect = el.getBoundingClientRect();
            const progress = Math.max(0, Math.min(1, -rect.top / el.offsetHeight));
            el.style.backgroundPositionY = `${50 + progress * 10}%`;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="rsvp" id-internal="rsvp-section" style={{
            position: 'relative',
            background: 'linear-gradient(160deg, #0A0A0A 0%, #171717 50%, #000000 100%)',
            overflow: 'visible',
            paddingBottom: '140px',
        }}>
            {/* ── Decorative radial glows ── */}
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                background: `
                    radial-gradient(ellipse at 20% 30%, rgba(224,224,224,0.06) 0%, transparent 55%),
                    radial-gradient(ellipse at 80% 70%, rgba(212,175,55,0.06) 0%, transparent 50%)
                `,
            }} />

            {/* ── Floating ornamental rings ── */}
            {[
                { top: '12%', left: '6%', size: 180, opacity: 0.06 },
                { top: '65%', left: '88%', size: 240, opacity: 0.05 },
                { top: '35%', left: '72%', size: 120, opacity: 0.07 },
            ].map((r, i) => (
                <div key={i} style={{
                    position: 'absolute', top: r.top, left: r.left,
                    width: r.size, height: r.size, borderRadius: '50%',
                    border: `1px solid rgba(212,175,55,${r.opacity * 5})`,
                    transform: 'translate(-50%,-50%)',
                    pointerEvents: 'none',
                }} />
            ))}

            {/* ── Gold particle dots ── */}
            {Array.from({ length: 10 }, (_, i) => ({
                top: `${10 + Math.random() * 80}%`,
                left: `${5 + Math.random() * 90}%`,
                size: 2 + Math.random() * 2,
                delay: `${Math.random() * 6}s`,
                dur: `${4 + Math.random() * 4}s`,
            })).map((p, i) => (
                <div key={i} style={{
                    position: 'absolute', top: p.top, left: p.left,
                    width: p.size, height: p.size, borderRadius: '50%',
                    background: 'rgba(212,175,55,0.6)',
                    animationName: 'twinkle',
                    animationDuration: p.dur,
                    animationDelay: p.delay,
                    animationIterationCount: 'infinite',
                    pointerEvents: 'none',
                }} />
            ))}

            {/* ── Content ── */}
            <div style={{
                position: 'relative',
                zIndex: 2,
                maxWidth: '760px',
                margin: '0 auto',
                padding: 'clamp(4rem, 9vw, 7rem) clamp(1.25rem, 4vw, 2rem) 0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0',
            }}>

                {/* ── Header copy ── */}
                <p className="font-jost" style={{
                    fontSize: '10px', letterSpacing: '0.65em',
                    textTransform: 'uppercase', color: 'rgba(212,175,55,0.75)',
                    marginBottom: '1.5rem',
                }}>
                    An Invitation
                </p>

                <h2 className="font-cormorant" style={{
                    fontSize: 'clamp(2.6rem, 6vw, 4.2rem)',
                    fontWeight: 300,
                    color: '#FAF7F2',
                    lineHeight: 1.1,
                    textAlign: 'center',
                    marginBottom: '1.4rem',
                }}>
                    Your{' '}
                    <em style={{
                        fontStyle: 'italic',
                        background: 'linear-gradient(90deg, #D4AF37, #F5E6A3, #D4AF37)',
                        backgroundSize: '200% 100%',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        animation: 'goldShimmer 4s ease-in-out infinite',
                    }}>
                        Presence
                    </em>{' '}
                    is Requested
                </h2>

                {/* Ornamental divider */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '3rem' }}>
                    <div style={{ width: '80px', height: '1px', background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.5))' }} />
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                        <path d="M10 1 C9 5 5 7 5 10 C5 13 9 15 10 19 C11 15 15 13 15 10 C15 7 11 5 10 1Z" fill="rgba(212,175,55,0.7)" />
                        <path d="M1 10 C5 9 7 5 10 5 C7 5 5 11 1 10Z" fill="rgba(212,175,55,0.35)" />
                        <path d="M19 10 C15 9 13 5 10 5 C13 5 15 11 19 10Z" fill="rgba(212,175,55,0.35)" />
                    </svg>
                    <div style={{ width: '80px', height: '1px', background: 'linear-gradient(to left, transparent, rgba(212,175,55,0.5))' }} />
                </div>

                {/* ── CTA Card ── */}
                <div style={{
                    width: '100%',
                    borderRadius: '28px',
                    background: 'rgba(250,247,242,0.97)',
                    boxShadow: '0 32px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(212,175,55,0.2)',
                    overflow: 'hidden',
                }}>
                    {/* Form header band */}
                    <div style={{
                        background: 'linear-gradient(135deg, #1A1A1A, #0A0A0A)',
                        padding: 'clamp(1.5rem, 4vw, 2.25rem) clamp(1.5rem, 5vw, 3rem)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '1rem',
                        flexWrap: 'wrap',
                    }}>
                        <div>
                            <h3 className="font-cormorant" style={{
                                fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
                                fontWeight: 400,
                                color: '#FAF7F2',
                                letterSpacing: '0.04em',
                                lineHeight: 1.1,
                            }}>
                                R.S.V.P.
                            </h3>
                            <p className="font-jost" style={{
                                fontSize: '11px',
                                letterSpacing: '0.35em',
                                color: 'rgba(212,175,55,0.8)',
                                textTransform: 'uppercase',
                                marginTop: '4px',
                            }}>
                                Kindly respond by 1 November 2026
                            </p>
                        </div>
                        {/* Wax seal */}
                        <div style={{
                            width: '56px', height: '56px', borderRadius: '50%',
                            background: 'radial-gradient(circle at 35% 35%, #E0E0E0, #888888)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            boxShadow: '0 0 0 2px rgba(212,175,55,0.4), 0 4px 16px rgba(0,0,0,0.5)',
                            flexShrink: 0,
                        }}>
                            <span className="font-cormorant" style={{
                                color: '#111111', fontSize: '15px',
                                fontStyle: 'italic', lineHeight: 1, fontWeight: 'bold'
                            }}>G&amp;L</span>
                        </div>
                    </div>

                    {/* Mensaje de invitación */}
                    <div style={{
                        padding: 'clamp(2.5rem, 6vw, 4rem) clamp(1.5rem, 5vw, 3rem)',
                        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem',
                        textAlign: 'center'
                    }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <h3 className="font-cormorant italic" style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.4rem)', color: '#2C2422', fontWeight: 400, lineHeight: 1.2 }}>
                                Nos encantaría compartir este día contigo
                            </h3>
                            <p className="font-cormorant" style={{ fontSize: 'clamp(1.15rem, 2.5vw, 1.35rem)', color: 'rgba(44,36,34,0.7)', lineHeight: 1.6, maxWidth: '540px', margin: '0 auto' }}>
                                Por favor, confirma tu asistencia haciendo clic en el siguiente botón. Deseamos compartir este momento tan especial contigo. Te esperamos.
                            </p>
                        </div>

                        {/* Submit / CTA */}
                        <a href="https://api.whatsapp.com/send/?phone=542613139444&text=Hola%20German%20y%20Leandro,%20quiero%20confirmar%20mi%20asistencia%20hacia%20su%20boda.&type=phone_number&app_absent=0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-jost"
                            style={{
                                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                                width: '100%', maxWidth: '320px', height: '54px',
                                background: 'linear-gradient(90deg, #D4AF37 0%, #F5E6A3 50%, #B8962B 100%)',
                                backgroundSize: '200% 100%',
                                border: 'none', borderRadius: '50px',
                                color: '#1A1528',
                                fontSize: '12px', fontWeight: 700,
                                letterSpacing: '0.4em', textTransform: 'uppercase',
                                textDecoration: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.4s ease',
                                boxShadow: '0 6px 28px rgba(212,175,55,0.3)',
                                marginTop: '0.5rem'
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.backgroundPosition = '100% 0';
                                e.currentTarget.style.boxShadow = '0 0 36px rgba(212,175,55,0.55)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.backgroundPosition = '0 0';
                                e.currentTarget.style.boxShadow = '0 6px 28px rgba(212,175,55,0.3)';
                                e.currentTarget.style.transform = 'none';
                            }}>
                            Confirmar Asistencia
                        </a>
                    </div>
                </div>

                {/* Bottom quote */}
                <p className="font-cormorant italic" style={{
                    marginTop: '2.5rem',
                    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                    color: 'rgba(255,255,255,0.55)',
                    textAlign: 'center',
                    lineHeight: 1.7,
                }}>
                    "Every love story is beautiful, but ours is my favourite."
                </p>
            </div>

            {/* ── Curva orgánica → Footer ── */}
            <div style={{
                position: 'absolute',
                bottom: 0, left: 0, right: 0,
                height: '120px',
                pointerEvents: 'none',
                zIndex: 10,
            }}>
                <svg viewBox="0 0 1440 120" preserveAspectRatio="none"
                    style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
                    <path d="M0,120 L0,78 C300,18 600,105 900,58 C1150,18 1320,88 1440,42 L1440,120 Z" fill="#0A0A0A" />
                </svg>
            </div>

            {/* Responsive */}
            <style>{`
        @media (max-width: 640px) {
          .rsvp-2col { flex-direction: column !important; }
        }
      `}</style>
        </section>
    );
};

export default RSVP;
