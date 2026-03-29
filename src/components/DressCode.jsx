import React, { useState, useEffect, useRef } from 'react';

const SWATCHES = [
    { name: 'Pure White', hex: '#FFFFFF', text: '#111111', tip: 'Un clásico atemporal' },
    { name: 'Midnight Black', hex: '#111111', text: '#FAF7F2', tip: 'Máxima elegancia nocturna' },
    { name: 'Sterling Silver', hex: '#E0E0E0', text: '#111111', tip: 'Acentos metalizados sutiles' },
    { name: 'Classic Gold', hex: '#D4AF37', text: '#111111', tip: 'Destellos cálidos exquisitos' },
    { name: 'Charcoal Grey', hex: '#333333', text: '#FAF7F2', tip: 'El neutro perfecto' },
];

const GALLERY_IMAGES = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD1Uqf9i482vpjvFGpk92ONEFYRGV5em3SlsvCbz83KqhLCJ6wPs0Bf__N7czyqHKRPGDLnzL_vEwd9U1BnOGw5XIV00NS31_XnJ0UV2EN3F9JjAsnA8eqcYxW2bvXqWGNZcBDo5Z-sZYOOKua1HRxnj8qdSxY_em7u27veLurnd9b7BrqKT6LOAvHvC2mXcH1wYfFR_v_9WCT3xJFZTFQH78HGKkdj3tvRQS1IkMmNdcA5jpcNagRl9B7SP9ilt0NgQwlKwT2ortc',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDIEM77QP42cMGahHMF70ytrHyTS6SI8lfaL_hmdbQ7udj8r5V9GXG_V5lkU2PxPt7eDcdJAEcEuUdUVa2Idqe-oybTe2-OYr1boTqBPI93KtMuDeL8EQ1P9CUAMEB4g4kZ_o_kttcCOW8IRnUYxY2a6GYbAJH6rlzEcLVMfhJGqZuccEeBScT-jeU02mJYv7pgtBoTH5EnudmaUqwtG3AtB6g3tRa9XIbSOUTpXP-SIUUIRuFj3JR19qMqgO3zsAEwdML3pjNYqsw',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCfuqES3oNJY_dUzlt3utuvbAKeB5BrNO79bSetmig-3MpfbGqGSpErP3exXIodbSXq-qEXWgVuCYcNSg92AP7sSiNSGHLBTObL-EZIUEOyC32HykaW52ULYTH9IBFMJKYjfSPBzXoiYmaAt9KorWIZNft1DATq9f1wCY2lqbE4-Jrd__TCzC73Oz0haJHYGQKHmeveVDuT8-6aXgoPkSzhJZ3hgv6lxudci42XtGdrZHFtt_IeEYB4_ytSpJEuRQIqQffX8_Py49c',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD2eyucMV1qf6iX4Ejyu-nGWm9sOF7tzHOBSY9CN2NGngwdAFraNGSsWAIdJI9YX6xXut0FtMvkKIW2fXxIEFUqNF1tH2Bn09FKMOzcCHOZMSJjL93KfSaST8EzlvocyRcVedpjJD2i9bZENKIZOvFppcozIRr7WzRMg699kPEjSt7OHBJBRSb_5x2oprsJY1h0wjoxaedLN7GAfXqvwTte9JmUjYUwDzcKUrILDQPirSgeruStA__VFsEnuikW-eTAqoRxR5DjG0o',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAMRKZX9OTEpyqLo78RFEoCxpCkORq4_WFTQE-dAHWlxvPjrtJ3HfeBFoaFFCCXDk0d1njqT_n3T5lpz25hKP52Ky1ERH1wJ_rqUauH-5sU0fVI80GYdthMB3hG0PtC3JP3D17dBMrmLWkL0GXaCfsQPgRfFfvvNVTLt-gLW3VmTvR8szKfjGRkmLcJTVVPieZYSQmU5jMFlLbQWfXPmFXHqcolEH7RfRbnzpj0Ge5VJ1K3jlfUG_kkYMAOi5tyZ1bIZUTr1gEgIX0',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCrnzz5eyCrJYMtxesjWB-gB3VBAe-Vv34VYphFO1p5DjwD8Ft6D6WC8FTUO-1f2h-Q363O31NSIJ_3eJAEgQRxftCmN2uu1-dJA3enHiR-HHA1jV85V2cisP58I1ooctGPNHpKb62fGyCDFYXhe0IytzbXlGoJYREci8ZHPTyMDvhNr33qjscUzNfqZHMBOwUhC6EBdzdQ5Xu34KRDyYD-md6U2lOqY04i9NVPMHgSXit_8GJkKI_LcqAx1DXvqodB_xA5R5CcOOs',
];

const CAPTIONS = [
    'Tarde de sol en Mendoza...', 'El primer abrazo', 'Bajo el cielo de Mendoza',
    'Momentos que se quedan', 'La luz de noviembre', 'Con amor, para siempre',
];

const DressCode = () => {
    const [activeTip, setActiveTip] = useState(null);
    const [lightbox, setLightbox] = useState(null);
    const galleryRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.querySelectorAll('.masonry-item').forEach((el, i) => {
                        setTimeout(() => el.classList.add('animate-fade-up'), i * 100);
                    });
                }
            });
        }, { threshold: 0.1 });
        if (galleryRef.current) observer.observe(galleryRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const handler = (e) => { if (e.key === 'Escape') setLightbox(null); };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, []);

    return (
        <>
            {/* ── DRESS CODE ── */}
            <section style={{
                background: 'linear-gradient(160deg, #111111 0%, #1A1A1A 50%, #050505 100%)',
                padding: 'clamp(4rem,9vw,7rem) clamp(1.25rem,4vw,2rem) clamp(8rem,14vw,14rem)',
                position: 'relative',
                overflow: 'visible',
            }}>
                {/* ── Radial glows de fondo ── */}
                <div style={{
                    position: 'absolute', inset: 0, pointerEvents: 'none',
                    background: `
                        radial-gradient(ellipse at 15% 40%, rgba(224,224,224,0.06) 0%, transparent 55%),
                        radial-gradient(ellipse at 85% 60%, rgba(212,175,55,0.05) 0%, transparent 50%),
                        radial-gradient(ellipse at 50% 10%, rgba(212,175,55,0.04) 0%, transparent 40%)
                    `,
                }} />

                {/* ── Anillos decorativos ── */}
                {[
                    { top: '8%', left: '4%', size: 200, opacity: 0.07 },
                    { top: '72%', left: '91%', size: 270, opacity: 0.05 },
                    { top: '45%', left: '78%', size: 130, opacity: 0.06 },
                ].map((r, i) => (
                    <div key={i} style={{
                        position: 'absolute', top: r.top, left: r.left,
                        width: r.size, height: r.size, borderRadius: '50%',
                        border: `1px solid rgba(224,224,224,${r.opacity * 5})`,
                        transform: 'translate(-50%,-50%)',
                        pointerEvents: 'none',
                    }} />
                ))}

                {/* ── Puntos dorados ── */}
                {Array.from({ length: 8 }, (_, i) => ({
                    top: `${15 + Math.random() * 70}%`,
                    left: `${5 + Math.random() * 90}%`,
                    size: 1.5 + Math.random() * 2,
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

                {/* ── Contenido ── */}
                <div style={{
                    position: 'relative', zIndex: 2,
                    maxWidth: '820px', margin: '0 auto',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0,
                }}>
                    {/* Eyebrow */}
                    <p className="font-jost" style={{
                        fontSize: '10px', letterSpacing: '0.65em',
                        textTransform: 'uppercase', color: 'rgba(224,224,224,0.75)',
                        marginBottom: '1.5rem',
                    }}>
                        Dress Code
                    </p>

                    {/* Título */}
                    <h2 className="font-cormorant" style={{
                        fontSize: 'clamp(2.6rem, 6vw, 4.2rem)',
                        fontWeight: 300,
                        color: '#FAF7F2',
                        lineHeight: 1.1,
                        textAlign: 'center',
                        marginBottom: '1.4rem',
                    }}>
                        Le Regole del{' '}
                        <em style={{
                            background: 'linear-gradient(90deg, #E0E0E0, #FFFFFF, #E0E0E0)',
                            backgroundSize: '200% 100%',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            animation: 'goldShimmer 5s ease-in-out infinite',
                        }}>
                            Bon Ton
                        </em>
                    </h2>

                    {/* Divider ornamental */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '1.2rem' }}>
                        <div style={{ width: '80px', height: '1px', background: 'linear-gradient(to right, transparent, rgba(224,224,224,0.5))' }} />
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                            <path d="M10 1 C9 5 5 7 5 10 C5 13 9 15 10 19 C11 15 15 13 15 10 C15 7 11 5 10 1Z" fill="rgba(224,224,224,0.7)" />
                            <path d="M1 10 C5 9 7 5 10 5 C7 5 5 11 1 10Z" fill="rgba(224,224,224,0.3)" />
                            <path d="M19 10 C15 9 13 5 10 5 C13 5 15 11 19 10Z" fill="rgba(224,224,224,0.3)" />
                        </svg>
                        <div style={{ width: '80px', height: '1px', background: 'linear-gradient(to left, transparent, rgba(224,224,224,0.5))' }} />
                    </div>

                    <p className="font-jost" style={{
                        fontSize: '14px', color: 'rgba(250,247,242,0.65)',
                        letterSpacing: '0.05em', textAlign: 'center',
                        maxWidth: '480px', lineHeight: 1.75, marginBottom: '3.5rem',
                    }}>
                        Cocktail Attire · Garden Party. Celebrá con nosotros en los colores de la estación.
                    </p>

                    {/* ── Swatches ── */}
                    <div style={{
                        display: 'flex', gap: 'clamp(0.75rem, 2vw, 1.25rem)',
                        justifyContent: 'center', flexWrap: 'wrap',
                        marginBottom: '3.5rem', width: '100%',
                    }}>
                        {SWATCHES.map((sw, i) => (
                            <div key={sw.name}
                                onMouseEnter={() => setActiveTip(i)}
                                onMouseLeave={() => setActiveTip(null)}
                                style={{
                                    position: 'relative', cursor: 'pointer',
                                    transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)',
                                    transform: activeTip === i ? 'translateY(-14px) scale(1.05)' : 'none',
                                }}>
                                {/* Glow bajo el swatch activo */}
                                {activeTip === i && (
                                    <div style={{
                                        position: 'absolute', bottom: '-8px', left: '50%',
                                        transform: 'translateX(-50%)',
                                        width: '70%', height: '20px',
                                        background: sw.hex,
                                        filter: 'blur(12px)',
                                        opacity: 0.4,
                                        borderRadius: '50%',
                                    }} />
                                )}
                                <div style={{
                                    width: 'clamp(70px, 12vw, 100px)',
                                    height: 'clamp(100px, 18vw, 150px)',
                                    background: sw.hex,
                                    borderRadius: '14px 14px 44% 44%',
                                    border: activeTip === i
                                        ? '2px solid rgba(255,255,255,0.5)'
                                        : '1px solid rgba(255,255,255,0.1)',
                                    boxShadow: activeTip === i
                                        ? `0 20px 48px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3)`
                                        : '0 6px 20px rgba(0,0,0,0.3)',
                                    transition: 'all 0.4s ease',
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}>
                                    {/* Brillo interno */}
                                    <div style={{
                                        position: 'absolute', top: 0, left: 0, right: 0,
                                        height: '45%',
                                        background: 'linear-gradient(to bottom, rgba(255,255,255,0.18), transparent)',
                                        borderRadius: '14px 14px 0 0',
                                    }} />
                                </div>
                                <p className="font-jost" style={{
                                    textAlign: 'center', fontSize: '10px', fontWeight: 600,
                                    color: 'rgba(250,247,242,0.75)', marginTop: '10px',
                                    letterSpacing: '0.04em', textShadow: '0 1px 4px rgba(0,0,0,0.6)',
                                }}>
                                    {sw.name}
                                </p>
                                {/* Tooltip */}
                                {activeTip === i && (
                                    <div style={{
                                        position: 'absolute', bottom: 'calc(100% + 16px)',
                                        left: '50%', transform: 'translateX(-50%)',
                                        background: 'rgba(14,26,12,0.95)',
                                        backdropFilter: 'blur(8px)',
                                        color: '#D4E8CC', padding: '6px 14px',
                                        borderRadius: '8px', fontSize: '11px',
                                        whiteSpace: 'nowrap', fontFamily: 'Jost, sans-serif',
                                        border: '1px solid rgba(224,224,224,0.25)',
                                        zIndex: 10,
                                        boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
                                    }}>
                                        {sw.tip}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* ── Card unificada Encouraged / Avoid ── */}
                    <div style={{
                        width: '100%',
                        borderRadius: '28px',
                        background: 'rgba(250,247,242,0.97)',
                        boxShadow: '0 32px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(224,224,224,0.2)',
                        overflow: 'hidden',
                    }}>
                        {/* Header band */}
                        <div style={{
                            background: 'linear-gradient(135deg, #1A1A1A, #0A0A0A)',
                            padding: 'clamp(1.25rem, 3vw, 1.75rem) clamp(1.5rem, 4vw, 2.5rem)',
                            display: 'flex', alignItems: 'center',
                            justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap',
                        }}>
                            <div>
                                <h3 className="font-cormorant" style={{
                                    fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
                                    fontWeight: 400, color: '#FAF7F2',
                                    letterSpacing: '0.04em', lineHeight: 1.1,
                                }}>
                                    La Guía de Estilo
                                </h3>
                                <p className="font-jost" style={{
                                    fontSize: '11px', letterSpacing: '0.35em',
                                    color: 'rgba(224,224,224,0.8)', textTransform: 'uppercase', marginTop: '4px',
                                }}>
                                    Cocktail · Garden Party · 28 Noviembre 2026
                                </p>
                            </div>
                            {/* Leaf ornament */}
                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" style={{ flexShrink: 0, opacity: 0.7 }}>
                                <path d="M22 4 C20 10 14 13 10 18 C6 23 8 30 14 33 C18 35 22 34 22 34 C22 34 26 35 30 33 C36 30 38 23 34 18 C30 13 24 10 22 4Z" fill="none" stroke="rgba(224,224,224,0.6)" strokeWidth="1.2" />
                                <path d="M22 8 L22 34" stroke="rgba(224,224,224,0.4)" strokeWidth="0.8" />
                                <path d="M16 18 C18 16 20 17 22 16" stroke="rgba(224,224,224,0.35)" strokeWidth="0.7" />
                                <path d="M28 18 C26 16 24 17 22 16" stroke="rgba(224,224,224,0.35)" strokeWidth="0.7" />
                                <path d="M14 24 C17 22 19 22 22 21" stroke="rgba(224,224,224,0.3)" strokeWidth="0.7" />
                                <path d="M30 24 C27 22 25 22 22 21" stroke="rgba(224,224,224,0.3)" strokeWidth="0.7" />
                            </svg>
                        </div>

                        {/* Body: 2 columnas */}
                        <div className="dresscode-grid" style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: 0,
                        }}>
                            {/* Encouraged */}
                            <div style={{
                                padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                                borderRight: '1px solid rgba(44,36,34,0.06)',
                            }}>
                                <div style={{
                                    display: 'flex', alignItems: 'center', gap: '10px',
                                    marginBottom: '1.25rem', paddingBottom: '1rem',
                                    borderBottom: '1px solid rgba(44,36,34,0.06)',
                                }}>
                                    <span style={{ fontSize: '18px' }}>✦</span>
                                    <h4 className="font-cormorant" style={{
                                        fontSize: '1.25rem', fontWeight: 400,
                                        color: '#2C2422', letterSpacing: '0.03em',
                                    }}>
                                        Encouraged
                                    </h4>
                                </div>
                                {[
                                    { text: 'Vestidos largos o cocktail', icon: '◆' },
                                    { text: 'Trajes en tonos pasteles', icon: '◆' },
                                    { text: 'Tocados y sombreros elegantes', icon: '◆' },
                                    { text: 'Accesorios en dorado o perla', icon: '◆' },
                                    { text: 'Colores de temporada', icon: '◆' },
                                ].map(item => (
                                    <p key={item.text} className="font-jost" style={{
                                        fontSize: '13px', color: 'rgba(44,36,34,0.72)',
                                        marginBottom: '0.7rem', display: 'flex',
                                        alignItems: 'flex-start', gap: '10px', lineHeight: 1.5,
                                    }}>
                                        <span style={{ color: '#E0E0E0', fontSize: '8px', flexShrink: 0, marginTop: '4px' }}>{item.icon}</span>
                                        {item.text}
                                    </p>
                                ))}
                            </div>

                            {/* Please Avoid */}
                            <div style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
                                <div style={{
                                    display: 'flex', alignItems: 'center', gap: '10px',
                                    marginBottom: '1.25rem', paddingBottom: '1rem',
                                    borderBottom: '1px solid rgba(44,36,34,0.06)',
                                }}>
                                    <span style={{ fontSize: '18px', color: '#444444' }}>✗</span>
                                    <h4 className="font-cormorant" style={{
                                        fontSize: '1.25rem', fontWeight: 400,
                                        color: '#2C2422', letterSpacing: '0.03em',
                                    }}>
                                        Please Avoid
                                    </h4>
                                </div>
                                {[
                                    'Rojo', 'Verde', 'Amarillo', 'Ropa casual o sport', 'Jeans',
                                    'Colores muy saturados o estridentes',
                                ].map(item => (
                                    <p key={item} className="font-jost" style={{
                                        fontSize: '13px', color: 'rgba(44,36,34,0.55)',
                                        marginBottom: '0.7rem', display: 'flex',
                                        alignItems: 'flex-start', gap: '10px', lineHeight: 1.5,
                                    }}>
                                        <span style={{ color: '#444444', fontSize: '8px', flexShrink: 0, marginTop: '4px' }}>✕</span>
                                        {item}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom quote */}
                    <p className="font-cormorant italic" style={{
                        marginTop: '2.5rem',
                        fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                        color: 'rgba(224,224,224,0.4)',
                        textAlign: 'center', lineHeight: 1.7,
                    }}>
                        "La elegancia es la única belleza que nunca se desvanece."
                    </p>
                </div>

                {/* ── Curva orgánica → Galería ── */}
                <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    height: '140px', pointerEvents: 'none',
                }}>
                    <svg viewBox="0 0 1440 140" preserveAspectRatio="none"
                        style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
                        <path d="M0,140 L0,95 C240,30 480,120 720,75 C960,30 1200,100 1440,55 L1440,140 Z" fill="#F0E4D0" />
                    </svg>
                </div>

                {/* Responsive */}
                <style>{`
          @media (max-width: 600px) {
            .dresscode-grid { grid-template-columns: 1fr !important; }
            .dresscode-grid > div:first-child { border-right: none !important; border-bottom: 1px solid rgba(44,36,34,0.06); }
          }
        `}</style>
            </section>

            {/* ── GALERÍA ── */}
            <section id="gallery" style={{
                background: 'linear-gradient(175deg, #F5EDE0 0%, #EEE3D2 60%, #E6D6C0 100%)',
                padding: 'clamp(6rem,10vw,10rem) 1.5rem clamp(4rem,8vw,7rem)',
                position: 'relative',
                overflow: 'visible',
            }}>
                <div style={{
                    position: 'absolute', top: '30%', left: '50%',
                    transform: 'translateX(-50%)',
                    width: '800px', height: '500px', borderRadius: '50%',
                    background: 'radial-gradient(ellipse, rgba(155,141,176,0.07) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }} />
                <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
                    <div className="text-center mb-12">
                        <p className="font-jost" style={{ fontSize: '11px', letterSpacing: '0.55em', color: 'rgba(212,175,55,0.75)', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.75rem' }}>
                            Our Story
                        </p>
                        <h2 className="font-cormorant" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 400, color: '#2C2422' }}>
                            Momentos que nos Unieron
                        </h2>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginTop: '1rem' }}>
                            <div style={{ width: '60px', height: '1px', background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.5))' }} />
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M7 1 L13 7 L7 13 L1 7 Z" fill="rgba(212,175,55,0.4)" stroke="rgba(212,175,55,0.6)" strokeWidth="0.8" />
                            </svg>
                            <div style={{ width: '60px', height: '1px', background: 'linear-gradient(to left, transparent, rgba(212,175,55,0.5))' }} />
                        </div>
                    </div>

                    <div ref={galleryRef} className="masonry-grid">
                        {GALLERY_IMAGES.map((src, i) => (
                            <div key={i} className="masonry-item" style={{ opacity: 0 }}>
                                <div
                                    onClick={() => setLightbox(i)}
                                    style={{
                                        position: 'relative', overflow: 'hidden',
                                        borderRadius: '16px', cursor: 'pointer',
                                        boxShadow: '0 4px 24px rgba(0,0,0,0.1)',
                                        transition: 'transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.4s ease',
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.transform = 'scale(1.03) translateY(-6px) rotateX(2deg)';
                                        e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.22)';
                                        e.currentTarget.querySelector('img').style.filter = 'grayscale(0%) saturate(1)';
                                        e.currentTarget.querySelector('.gallery-overlay').style.transform = 'translateY(0)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.transform = 'none';
                                        e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.1)';
                                        e.currentTarget.querySelector('img').style.filter = 'grayscale(25%) saturate(0.85)';
                                        e.currentTarget.querySelector('.gallery-overlay').style.transform = 'translateY(100%)';
                                    }}>
                                    <img src={src} alt={`Momento ${i + 1} - German y Leandro`}
                                        style={{ width: '100%', height: 'auto', display: 'block', filter: 'grayscale(1) contrast(1.1)', transition: 'filter 0.4s ease' }} />
                                    <div className="gallery-overlay" style={{
                                        position: 'absolute', bottom: 0, left: 0, right: 0,
                                        padding: '1.2rem', background: 'rgba(212,175,55,0.12)',
                                        backdropFilter: 'blur(8px)', transform: 'translateY(100%)',
                                        transition: 'transform 0.35s ease', display: 'flex',
                                        alignItems: 'center', gap: '8px',
                                    }}>
                                        <span style={{ color: '#D4AF37', fontSize: '18px' }}>♡</span>
                                        <span className="font-cormorant italic" style={{ color: '#FAF7F2', fontSize: '14px' }}>
                                            {CAPTIONS[i % CAPTIONS.length]}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Curva orgánica → RSVP ── */}
                <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    height: '130px', pointerEvents: 'none',
                }}>
                    <svg viewBox="0 0 1440 130" preserveAspectRatio="none"
                        style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
                        <path d="M0,130 L0,85 C200,25 400,110 650,65 C900,20 1150,95 1440,45 L1440,130 Z" fill="#120F22" />
                    </svg>
                </div>
            </section>

            {/* ── LIGHTBOX ── */}
            <div className={`lightbox-overlay ${lightbox !== null ? 'active' : ''}`} onClick={() => setLightbox(null)}>
                {lightbox !== null && (
                    <>
                        <button
                            onClick={(e) => { e.stopPropagation(); setLightbox(l => (l - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length); }}
                            style={{
                                position: 'absolute', left: '2rem', top: '50%', transform: 'translateY(-50%)',
                                background: 'rgba(212,175,55,0.2)', border: '1px solid rgba(212,175,55,0.5)',
                                color: '#D4AF37', fontSize: '1.5rem', borderRadius: '50%',
                                width: '48px', height: '48px', cursor: 'pointer',
                            }}>‹</button>
                        <img className="lightbox-img" src={GALLERY_IMAGES[lightbox]} alt={`Lightbox ${lightbox + 1}`} onClick={e => e.stopPropagation()} />
                        <button
                            onClick={(e) => { e.stopPropagation(); setLightbox(l => (l + 1) % GALLERY_IMAGES.length); }}
                            style={{
                                position: 'absolute', right: '2rem', top: '50%', transform: 'translateY(-50%)',
                                background: 'rgba(212,175,55,0.2)', border: '1px solid rgba(212,175,55,0.5)',
                                color: '#D4AF37', fontSize: '1.5rem', borderRadius: '50%',
                                width: '48px', height: '48px', cursor: 'pointer',
                            }}>›</button>
                        <button
                            onClick={() => setLightbox(null)}
                            style={{
                                position: 'absolute', top: '1.5rem', right: '1.5rem',
                                background: 'transparent', border: 'none',
                                color: 'rgba(250,247,242,0.7)', fontSize: '2rem', cursor: 'pointer',
                            }}>×</button>
                    </>
                )}
            </div>
        </>
    );
};

export default DressCode;
