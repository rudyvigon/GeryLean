import React, { useEffect, useRef } from 'react';

const SPARKLES = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    top: `${10 + Math.random() * 80}%`,
    left: `${5 + Math.random() * 90}%`,
    delay: `${Math.random() * 3}s`,
    size: `${4 + Math.random() * 6}px`,
}));

const TiltCard = ({ children, style = {} }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;
        const handleMove = (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            card.style.transform = `perspective(800px) rotateX(${-(y / rect.height) * 6}deg) rotateY(${(x / rect.width) * 8}deg) translateY(-4px)`;
        };
        const handleLeave = () => {
            card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)';
        };
        card.addEventListener('mousemove', handleMove);
        card.addEventListener('mouseleave', handleLeave);
        return () => {
            card.removeEventListener('mousemove', handleMove);
            card.removeEventListener('mouseleave', handleLeave);
        };
    }, []);

    return (
        <div ref={cardRef} style={{
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            transformStyle: 'preserve-3d',
            ...style,
        }}>
            {children}
        </div>
    );
};

const Details = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.querySelectorAll('.reveal').forEach((el, i) => {
                        setTimeout(() => el.classList.add('visible'), i * 160);
                    });
                }
            });
        }, { threshold: 0.15 });
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="event" ref={sectionRef} style={{
            position: 'relative',
            overflow: 'visible',
            padding: 'clamp(5rem,9vw,8rem) 1.5rem clamp(8rem,14vw,14rem)',
            background: 'linear-gradient(175deg, #FFFFFF 0%, #F5F5F5 40%, #E0E0E0 100%)',
        }}>
            {/* Halo central decorativo */}
            <div style={{
                position: 'absolute',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '800px', height: '600px',
                borderRadius: '50%',
                background: 'radial-gradient(ellipse, rgba(212,175,55,0.07) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            {/* Patrón SVG sutil de fondo */}
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='40' cy='40' r='1' fill='%23D4AF37' opacity='0.08'/%3E%3C/svg%3E")`,
                backgroundSize: '80px 80px',
            }} />

            <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>

                {/* Título */}
                <div className="reveal text-center mb-14">
                    {/* Ornamento superior */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '1rem' }}>
                        <div style={{ flex: 1, maxWidth: '120px', height: '1px', background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.5))' }} />
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path d="M14 2 C13 7 8 9 8 14 C8 19 13 21 14 26 C15 21 20 19 20 14 C20 9 15 7 14 2Z" fill="rgba(212,175,55,0.6)" />
                            <path d="M2 14 C7 13 9 8 14 8 C9 8 7 20 2 14Z" fill="rgba(212,175,55,0.3)" />
                            <path d="M26 14 C21 13 19 8 14 8 C19 8 21 20 26 14Z" fill="rgba(212,175,55,0.3)" />
                        </svg>
                        <div style={{ flex: 1, maxWidth: '120px', height: '1px', background: 'linear-gradient(to left, transparent, rgba(212,175,55,0.5))' }} />
                    </div>

                    <p className="font-jost" style={{
                        fontSize: '11px', letterSpacing: '0.55em',
                        color: 'rgba(212,175,55,0.8)', textTransform: 'uppercase',
                        fontWeight: 600, marginBottom: '0.6rem',
                    }}>
                        Sábado 28 de Noviembre, 2026
                    </p>
                    <h2 className="font-cormorant" style={{
                        fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                        fontWeight: 400,
                        color: '#111111',
                        letterSpacing: '0.03em',
                        marginBottom: '0.5rem',
                    }}>
                        The Day's Programme
                    </h2>
                    <p className="font-jost" style={{
                        fontSize: '13px', letterSpacing: '0.25em',
                        color: 'rgba(17,17,17,0.45)', textTransform: 'uppercase',
                    }}>
                        Mendoza, Argentina
                    </p>
                </div>

                {/* Timeline visual conectora */}
                <div style={{ position: 'relative' }}>
                    {/* Línea del tiempo vertical central (solo en desktop) */}
                    <div style={{
                        position: 'absolute',
                        left: '50%', top: '10%', bottom: '10%',
                        width: '1px',
                        background: 'linear-gradient(to bottom, transparent, rgba(212,175,55,0.3) 20%, rgba(212,175,55,0.3) 80%, transparent)',
                        transform: 'translateX(-50%)',
                        display: 'none',
                    }} className="timeline-line" />

                    {/* Tarjeta Unificada */}
                    <div className="reveal tilt-wrapper mx-auto" style={{ maxWidth: '580px', position: 'relative', zIndex: 10 }}>
                        <TiltCard style={{
                            borderRadius: '24px',
                            overflow: 'hidden',
                            boxShadow: '0 24px 80px rgba(17,17,17,0.35), 0 4px 20px rgba(0,0,0,0.1)',
                            border: '1px solid rgba(212,175,55,0.25)',
                        }}>
                            <div style={{
                                background: 'linear-gradient(145deg, #1A1A1A 0%, #111111 60%, #050505 100%)',
                                padding: 'clamp(2.5rem,5vw,4rem) clamp(1.5rem,4vw,3rem)',
                                textAlign: 'center',
                                position: 'relative',
                                overflow: 'hidden',
                            }}>
                                {/* Top accent glowing bar */}
                                <div style={{
                                    position: 'absolute', top: 0, left: 0, right: 0,
                                    height: '5px',
                                    background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.8), transparent)',
                                }} />

                                {/* Sparkles doradas */}
                                {SPARKLES.map(s => (
                                    <div key={s.id} style={{
                                        position: 'absolute',
                                        top: s.top,
                                        left: s.left,
                                        width: s.size,
                                        height: s.size,
                                        borderRadius: '50%',
                                        background: '#F5E6A3',
                                        animationName: 'twinkle',
                                        animationDuration: `${2 + Math.random() * 2}s`,
                                        animationDelay: s.delay,
                                        animationTimingFunction: 'ease-in-out',
                                        animationIterationCount: 'infinite',
                                        pointerEvents: 'none',
                                    }} />
                                ))}

                                {/* Halo central */}
                                <div style={{
                                    position: 'absolute',
                                    top: '30%', left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '180px', height: '180px',
                                    borderRadius: '50%',
                                    background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 65%)',
                                    pointerEvents: 'none',
                                }} />

                                {/* Icono anillos entrelazados o copas */}
                                <div style={{ marginBottom: '2rem', position: 'relative' }}>
                                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" style={{ margin: '0 auto' }}>
                                        <circle cx="24" cy="32" r="16" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="4 2" fill="none" />
                                        <circle cx="24" cy="32" r="12" stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.5" />
                                        <circle cx="40" cy="32" r="16" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="4 2" fill="none" />
                                        <circle cx="40" cy="32" r="12" stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.5" />
                                        <path d="M32 16 L32 8 M32 48 L32 56 M16 32 L8 32 M56 32 L48 32" stroke="#D4AF37" strokeWidth="1" opacity="0.4" />
                                        <circle cx="32" cy="32" r="3" fill="#D4AF37" opacity="0.8" />
                                    </svg>
                                </div>

                                <h3 className="font-cormorant" style={{ fontSize: 'clamp(2rem, 5vw, 2.6rem)', fontWeight: 300, color: '#FAF7F2', marginBottom: '0.4rem', fontStyle: 'italic' }}>
                                    Ceremonia & Fiesta
                                </h3>
                                
                                <p className="font-jost" style={{ fontSize: '12px', letterSpacing: '0.4em', color: 'rgba(212,175,55,0.7)', textTransform: 'uppercase', marginBottom: '2.5rem' }}>
                                    Aires del Sauzal
                                </p>

                                {/* Timeline UI Interna */}
                                <div style={{
                                    display: 'flex', flexDirection: 'column', gap: '1.25rem',
                                    marginBottom: '2.5rem', width: '100%', maxWidth: '300px', margin: '0 auto 2.5rem',
                                }}>
                                    {/* Item Ceremonia */}
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                                        <div style={{ flex: 1, textAlign: 'right', paddingRight: '1rem' }}>
                                            <span className="font-jost" style={{ fontSize: '18px', fontWeight: 600, color: '#F5E6A3', letterSpacing: '0.05em' }}>
                                                20:30<span style={{ fontSize: '12px', opacity: 0.7, marginLeft: '2px' }}>hs</span>
                                            </span>
                                        </div>
                                        <div style={{
                                            width: '12px', height: '12px', borderRadius: '50%', background: '#D4AF37',
                                            boxShadow: '0 0 0 6px rgba(212,175,55,0.15)', position: 'relative',
                                        }}>
                                            <div style={{ position: 'absolute', top: '15px', left: '5.5px', width: '1px', height: '30px', background: 'rgba(212,175,55,0.3)' }} />
                                        </div>
                                        <div style={{ flex: 1, textAlign: 'left', paddingLeft: '1rem' }}>
                                            <span className="font-jost" style={{ fontSize: '16px', color: 'rgba(250,247,242,0.9)' }}>La Ceremonia</span>
                                        </div>
                                    </div>

                                    {/* Item Fiesta */}
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', marginTop: '0.5rem' }}>
                                        <div style={{ flex: 1, textAlign: 'right', paddingRight: '1rem' }}>
                                            <span className="font-jost" style={{ fontSize: '18px', fontWeight: 600, color: '#F5E6A3', letterSpacing: '0.05em' }}>
                                                00:00<span style={{ fontSize: '12px', opacity: 0.7, marginLeft: '2px' }}>hs</span>
                                            </span>
                                        </div>
                                        <div style={{
                                            width: '12px', height: '12px', borderRadius: '50%', background: '#D4AF37',
                                            boxShadow: '0 0 0 6px rgba(212,175,55,0.15)',
                                        }} />
                                        <div style={{ flex: 1, textAlign: 'left', paddingLeft: '1rem' }}>
                                            <span className="font-jost" style={{ fontSize: '16px', color: 'rgba(250,247,242,0.9)' }}>La Fiesta</span>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ width: '60px', height: '1px', background: 'rgba(212,175,55,0.3)', margin: '0 auto 1.5rem' }} />

                                <p className="font-jost" style={{ fontSize: '13.5px', color: 'rgba(250,247,242,0.6)', marginBottom: '1.5rem' }}>
                                    Tirasso 5379, El Sauce, Mendoza
                                </p>

                                {/* Mapa Interactivo Google Maps */}
                                <div style={{
                                    width: '100%',
                                    height: '240px',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    border: '1px solid rgba(212,175,55,0.2)',
                                    boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                                    marginBottom: '1.5rem',
                                    position: 'relative',
                                    zIndex: 10,
                                }}>
                                    <iframe
                                        title="Ubicación Aires del Sauzal"
                                        src="https://maps.google.com/maps?q=Aires%20del%20Sauzal,%20Tirasso%205379,%20Mendoza&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0, filter: 'grayscale(1) contrast(1.1) brightness(0.9)' }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>

                                {/* Botón Action */}
                                <a
                                    href="https://www.google.com/maps?ll=-32.864984,-68.749925&z=15&t=m&hl=es-ES&gl=US&mapclient=embed&cid=15790825772630014853"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-jost"
                                    style={{
                                        display: 'inline-block',
                                        textDecoration: 'none',
                                        border: '1.5px solid rgba(212,175,55,0.6)',
                                        background: 'rgba(212,175,55,0.1)',
                                        color: '#F5E6A3',
                                        padding: '12px 36px',
                                        borderRadius: '50px',
                                        fontSize: '11px',
                                        letterSpacing: '0.3em',
                                        textTransform: 'uppercase',
                                        fontWeight: 700,
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        backdropFilter: 'blur(8px)',
                                    }}
                                    onMouseEnter={e => {
                                        e.target.style.background = 'rgba(212,175,55,0.25)';
                                        e.target.style.transform = 'translateY(-2px)';
                                        e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
                                    }}
                                    onMouseLeave={e => {
                                        e.target.style.background = 'rgba(212,175,55,0.1)';
                                        e.target.style.transform = 'none';
                                        e.target.style.boxShadow = 'none';
                                    }}>
                                    Cómo Llegar
                                </a>
                            </div>
                        </TiltCard>
                    </div>
                </div>
            </div>

            {/* ── Curva orgánica → DressCode ── */}
            <div style={{
                position: 'absolute',
                bottom: 0, left: 0, right: 0,
                height: '130px',
                overflow: 'hidden',
                pointerEvents: 'none',
            }}>
                <svg viewBox="0 0 1440 130" preserveAspectRatio="none"
                    style={{ position: 'absolute', bottom: 0, width: '100%', height: '100%' }}>
                    <path
                        d="M0,130 L0,80 C180,20 360,100 540,60 C720,20 900,90 1080,50 C1260,10 1380,70 1440,40 L1440,130 Z"
                        fill="#111111"
                    />
                </svg>
            </div>
        </section>
    );
};

export default Details;
