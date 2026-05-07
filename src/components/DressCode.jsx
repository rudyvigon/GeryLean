import React, { useState, useEffect, useRef } from 'react';

const SWATCHES = [
    { name: 'Blanco', hex: '#FFFFFF', text: '#111111', tip: 'Un clásico atemporal' },
    { name: 'Negro', hex: '#111111', text: '#FAF7F2', tip: 'Máxima elegancia nocturna' },
    { name: 'Plata', hex: '#E0E0E0', text: '#111111', tip: 'Acentos metalizados sutiles' },
    { name: 'Dorado', hex: '#D4AF37', text: '#111111', tip: 'Destellos cálidos exquisitos' },
    { name: 'Gris', hex: '#333333', text: '#FAF7F2', tip: 'El neutro perfecto' },
];

import galleryImage from '../img/gallery_image.png';

const DressCode = () => {
    const [activeTip, setActiveTip] = useState(null);

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
                        Las reglas del{' '}
                        <em style={{
                            background: 'linear-gradient(90deg, #E0E0E0, #FFFFFF, #E0E0E0)',
                            backgroundSize: '200% 100%',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            animation: 'goldShimmer 5s ease-in-out infinite',
                        }}>
                            Buen Gusto
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
                        Vestidos de Noche - Elegantes . Celebrá con nosotros en los colores de la estación.
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
                                    Fiesta de Gala · Bajo las Estrellas
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
                                        Sugerido
                                    </h4>
                                </div>
                                {[
                                    { text: 'Vestidos largos o Elegantes', icon: '◆' },
                                    { text: 'Trajes en tonos pasteles', icon: '◆' },
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
                                        Evitar
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
                        <h2 className="font-cormorant" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 400, color: '#2C2422' }}>
                            Juntos y para siempre
                        </h2>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginTop: '1rem' }}>
                            <div style={{ width: '60px', height: '1px', background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.5))' }} />
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M7 1 L13 7 L7 13 L1 7 Z" fill="rgba(212,175,55,0.4)" stroke="rgba(212,175,55,0.6)" strokeWidth="0.8" />
                            </svg>
                            <div style={{ width: '60px', height: '1px', background: 'linear-gradient(to left, transparent, rgba(212,175,55,0.5))' }} />
                        </div>
                    </div>

                    <div style={{
                        position: 'relative',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        boxShadow: '0 24px 60px rgba(0,0,0,0.2)',
                        border: '1px solid rgba(212,175,55,0.2)',
                        maxWidth: '1000px',
                        margin: '0 auto',
                        aspectRatio: '16/9'
                    }}>
                        <img src={galleryImage} alt="Momentos que nos Unieron" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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


        </>
    );
};

export default DressCode;
