import React, { useEffect, useState } from 'react';

const WEDDING_DATE = new Date('2026-11-28T20:30:00-03:00');

function getTimeLeft() {
    const diff = WEDDING_DATE - new Date();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
    };
}

const FlipCard = ({ value, label }) => {
    const [current, setCurrent] = useState(value);
    const [flipping, setFlipping] = useState(false);

    useEffect(() => {
        if (value !== current) {
            setFlipping(true);
            const t = setTimeout(() => {
                setCurrent(value);
                setFlipping(false);
            }, 350);
            return () => clearTimeout(t);
        }
    }, [value, current]);

    const display = String(current).padStart(2, '0');

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
            {/* Card container */}
            <div style={{
                position: 'relative',
                width: 'clamp(80px, 11vw, 130px)',
                height: 'clamp(100px, 14vw, 165px)',
            }}>
                {/* Glow halo */}
                <div style={{
                    position: 'absolute',
                    inset: '-4px',
                    borderRadius: '18px',
                    background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.18) 0%, transparent 70%)',
                    filter: 'blur(6px)',
                }} />

                {/* Main card */}
                <div
                    className={flipping ? 'flip-animate' : ''}
                    style={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        borderRadius: '16px',
                        background: 'linear-gradient(160deg, rgba(255,255,255,0.10) 0%, rgba(212,175,55,0.06) 100%)',
                        border: '1px solid rgba(212,175,55,0.35)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        boxShadow: '0 8px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.12)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                    }}>

                    {/* Inner top shine */}
                    <div style={{
                        position: 'absolute',
                        top: 0, left: 0, right: 0,
                        height: '50%',
                        borderRadius: '16px 16px 0 0',
                        background: 'linear-gradient(to bottom, rgba(255,255,255,0.08), transparent)',
                        pointerEvents: 'none',
                    }} />

                    {/* Center divider line */}
                    <div style={{
                        position: 'absolute',
                        left: '12px', right: '12px',
                        top: '50%',
                        height: '1px',
                        background: 'rgba(212,175,55,0.25)',
                    }} />

                    <span className="font-cormorant" style={{
                        fontSize: 'clamp(2.8rem, 7vw, 5rem)',
                        fontWeight: 300,
                        color: '#FAF0C8',
                        lineHeight: 1,
                        textShadow: '0 0 30px rgba(212,175,55,0.5), 0 2px 10px rgba(0,0,0,0.5)',
                        letterSpacing: '-0.02em',
                    }}>
                        {display}
                    </span>
                </div>
            </div>

            {/* Label */}
            <span className="font-jost" style={{
                fontSize: '10px',
                letterSpacing: '0.55em',
                textTransform: 'uppercase',
                color: 'rgba(212,175,55,0.85)',
                fontWeight: 700,
            }}>
                {label}
            </span>
        </div>
    );
};

/* Separador ornamental entre cards */
const Separator = ({ delay = '0s' }) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', marginBottom: '28px', opacity: 0.7 }}>
        <span className="colon-pulse font-cormorant" style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            color: 'rgba(212,175,55,0.8)',
            lineHeight: 1,
            animationDelay: delay,
            textShadow: '0 0 16px rgba(212,175,55,0.4)',
        }}>:</span>
    </div>
);

const Countdown = () => {
    const [time, setTime] = useState(getTimeLeft());

    useEffect(() => {
        const interval = setInterval(() => setTime(getTimeLeft()), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="countdown" style={{
            background: 'linear-gradient(160deg, #111111 0%, #1A1A1A 45%, #050505 100%)',
            padding: 'clamp(4rem, 9vw, 7rem) 1.5rem clamp(5rem, 10vw, 8rem)',
            position: 'relative',
            overflow: 'hidden',
        }}>

            {/* ── Radial glow center ── */}
            <div style={{
                position: 'absolute',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '900px', height: '500px',
                borderRadius: '50%',
                background: 'radial-gradient(ellipse, rgba(224,224,224,0.08) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            {/* ── Gold glow top ── */}
            <div style={{
                position: 'absolute',
                top: '-80px', left: '50%',
                transform: 'translateX(-50%)',
                width: '600px', height: '300px',
                borderRadius: '50%',
                background: 'radial-gradient(ellipse, rgba(212,175,55,0.08) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            {/* ── Floating SVG petals ── */}
            {[
                { x: '8%', size: 60, delay: '0s', dur: '14s', clr: 'rgba(255,255,255,0.1)' },
                { x: '88%', size: 40, delay: '-5s', dur: '11s', clr: 'rgba(255,255,255,0.08)' },
                { x: '20%', size: 28, delay: '-9s', dur: '16s', clr: 'rgba(212,175,55,0.12)' },
                { x: '75%', size: 50, delay: '-3s', dur: '13s', clr: 'rgba(224,224,224,0.09)' },
            ].map((p, i) => (
                <div key={i} style={{
                    position: 'absolute',
                    top: '-60px', left: p.x,
                    width: `${p.size}px`, height: `${p.size * 1.4}px`,
                    background: p.clr,
                    borderRadius: '50% 50% 50% 0',
                    transform: 'rotate(-45deg)',
                    animationName: 'petalFall',
                    animationDuration: p.dur,
                    animationDelay: p.delay,
                    animationTimingFunction: 'ease-in-out',
                    animationIterationCount: 'infinite',
                    pointerEvents: 'none',
                }} />
            ))}

            {/* ── Content ── */}
            <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem' }}>

                {/* Eyebrow */}
                <p className="font-jost" style={{
                    fontSize: '11px',
                    letterSpacing: '0.55em',
                    textTransform: 'uppercase',
                    color: 'rgba(212,175,55,0.7)',
                    fontWeight: 600,
                }}>
                    Counting down with love
                </p>

                {/* Title */}
                <div style={{ textAlign: 'center' }}>
                    <h2 className="font-cormorant italic" style={{
                        fontSize: 'clamp(2.2rem, 5.5vw, 3.8rem)',
                        fontWeight: 300,
                        color: '#FAF7F2',
                        lineHeight: 1.15,
                        marginBottom: '1.2rem',
                        textShadow: '0 2px 20px rgba(0,0,0,0.4)',
                    }}>
                        The Moment Approaches
                    </h2>

                    {/* Ornamental divider */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                        <div style={{ width: '60px', height: '1px', background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.6))' }} />
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 1 C9 5 5 7 5 10 C5 13 9 15 10 19 C11 15 15 13 15 10 C15 7 11 5 10 1Z" fill="rgba(212,175,55,0.75)" />
                            <path d="M1 10 C5 9 7 5 10 5 C7 5 5 11 1 10Z" fill="rgba(212,175,55,0.4)" />
                            <path d="M19 10 C15 9 13 5 10 5 C13 5 15 11 19 10Z" fill="rgba(212,175,55,0.4)" />
                        </svg>
                        <div style={{ width: '60px', height: '1px', background: 'linear-gradient(to left, transparent, rgba(212,175,55,0.6))' }} />
                    </div>
                </div>

                {/* Flip cards — grid mobile-first */}
                <div className="countdown-grid" style={{
                    padding: 'clamp(1rem, 4vw, 2.5rem) clamp(1rem, 5vw, 3rem)',
                    borderRadius: '24px',
                    background: 'rgba(255,255,255,0.025)',
                    border: '1px solid rgba(212,175,55,0.12)',
                    boxShadow: '0 4px 60px rgba(0,0,0,0.2)',
                    backdropFilter: 'blur(8px)',
                }}>
                    {/* Fila/grupo: Días : Horas */}
                    <div className="cd-row">
                        <FlipCard value={time.days} label="Días" />
                        <Separator delay="0s" />
                        <FlipCard value={time.hours} label="Horas" />
                    </div>
                    {/* Separador entre filas (solo mobile) */}
                    <div className="cd-row-sep" />
                    {/* Fila/grupo: Minutos : Segundos */}
                    <div className="cd-row">
                        <FlipCard value={time.minutes} label="Minutos" />
                        <Separator delay="0.5s" />
                        <FlipCard value={time.seconds} label="Segundos" />
                    </div>
                </div>
                <style>{`
                  .countdown-grid {
                    display: flex;
                    flex-direction: column;
                    gap: clamp(1rem, 3vw, 1.5rem);
                    width: 100%;
                  }
                  .cd-row {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: clamp(8px, 2vw, 20px);
                  }
                  .cd-row-sep { display: none; }
                  @media (min-width: 600px) {
                    .countdown-grid {
                      flex-direction: row;
                      align-items: center;
                      justify-content: center;
                      gap: clamp(8px, 2vw, 20px);
                    }
                    .cd-row-sep { display: none; }
                    .cd-row { gap: clamp(8px, 2vw, 20px); }
                  }
                `}</style>


                {/* Date badge */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 24px',
                    borderRadius: '50px',
                    background: 'rgba(212,175,55,0.08)',
                    border: '1px solid rgba(212,175,55,0.25)',
                }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(212,175,55,0.8)" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <span className="font-jost" style={{
                        fontSize: '12px',
                        letterSpacing: '0.4em',
                        color: 'rgba(245,230,163,0.9)',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                    }}>
                        28 · Noviembre · 2026
                    </span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(212,175,55,0.8)" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                </div>

                {/* Quote */}
                <p className="font-cormorant italic" style={{
                    fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                    color: 'rgba(255,255,255,0.65)',
                    textAlign: 'center',
                    maxWidth: '480px',
                    lineHeight: 1.6,
                }}>
                    "Every second that passes is a heartbeat closer to forever."
                </p>
            </div>

            {/* Wave transition */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '70px', overflow: 'hidden' }}>
                <svg viewBox="0 0 1440 70" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                    <path d="M0,70 C360,0 1080,70 1440,0 L1440,70 Z" fill="#FAF7F2" />
                </svg>
            </div>
        </section>
    );
};

export default Countdown;
