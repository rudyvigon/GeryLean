import React, { useEffect, useRef } from 'react';
import heroBg from '../img/babab8_0ccfa2e55f4c4c9eb291016c3af07fb3~mv2.png';

const PETALS = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${5 + Math.random() * 90}%`,
    size: `${8 + Math.random() * 14}px`,
    delay: `${Math.random() * 12}s`,
    duration: `${10 + Math.random() * 10}s`,
    color: i % 2 === 0 ? 'rgba(255,255,255,0.75)' : 'rgba(224,224,224,0.65)',
}));

const Hero = () => {
    const cardRef = useRef(null);
    const lineRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const handleMouseMove = (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            const rotY = (x / rect.width) * 6;
            const rotX = -(y / rect.height) * 4;
            card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
        };
        const handleMouseLeave = () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        };

        document.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            card.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden">

            {/* ── CAPA 1: Fondo Ken Burns ── */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                    alt="Foto de portada German y Leandro"
                    src={heroBg}
                    className="w-full h-full object-cover animate-ken-burns origin-center"
                />
                {/* Gradiente sobre toda la imagen para legibilidad */}
                <div className="absolute inset-0" style={{
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 45%, rgba(0,0,0,0.7) 100%)',
                }} />
            </div>

            {/* ── CAPA 2: Ramas flotantes ── */}
            <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                <div className="animate-drift absolute -top-10 -left-10 w-80 opacity-25"
                    style={{ filter: 'blur(1px)' }}>
                    <svg viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50 400 Q80 300 30 200 Q-10 100 60 0" stroke="#E0E0E0" strokeWidth="2" fill="none" />
                        {[60, 110, 160, 210].map((y, i) => (
                            <ellipse key={i} cx={40 + (i % 2 ? 20 : -10)} cy={y} rx="18" ry="10"
                                fill="#F5F5F5" opacity="0.6" transform={`rotate(${i * 25 - 20} ${40 + (i % 2 ? 20 : -10)} ${y})`} />
                        ))}
                    </svg>
                </div>
                <div className="animate-drift absolute -top-16 -right-10 w-72 opacity-20"
                    style={{ filter: 'blur(1.5px)', animationDelay: '-4s' }}>
                    <svg viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M250 400 Q220 300 270 200 Q310 100 240 0" stroke="#E0E0E0" strokeWidth="2" fill="none" />
                        {[70, 120, 170, 220].map((y, i) => (
                            <ellipse key={i} cx={260 - (i % 2 ? 20 : -10)} cy={y} rx="16" ry="9"
                                fill="#F5F5F5" opacity="0.5" transform={`rotate(${-i * 20 + 15} ${260 - (i % 2 ? 20 : -10)} ${y})`} />
                        ))}
                    </svg>
                </div>
            </div>

            {/* ── CAPA 3: Glassmorphism card ── */}
            <div className="relative z-20 flex flex-col items-center px-4 w-full">
                <div ref={cardRef} className="tilt-card max-w-2xl w-full mx-auto text-center"
                    style={{
                        background: 'rgba(250,245,235,0.18)',
                        backdropFilter: 'blur(18px) saturate(1.8)',
                        WebkitBackdropFilter: 'blur(18px) saturate(1.8)',
                        border: '1px solid rgba(212,175,55,0.35)',
                        boxShadow: '0 8px 60px rgba(0,0,0,0.18)',
                        borderRadius: '24px',
                        padding: 'clamp(2rem, 5vw, 4rem)',
                        transition: 'transform 0.3s ease',
                    }}>

                    {/* Fleur-de-lis ornament */}
                    <div className="flex justify-center mb-6">
                        <svg width="180" height="24" viewBox="0 0 180 24" fill="none">
                            <line x1="0" y1="12" x2="65" y2="12" stroke="rgba(212,175,55,0.6)" strokeWidth="0.5" />
                            <g fill="rgba(212,175,55,0.8)">
                                <path d="M90 2 C88 6 84 8 84 12 C84 16 88 18 90 22 C92 18 96 16 96 12 C96 8 92 6 90 2Z" />
                                <path d="M82 10 C78 10 76 12 76 12 C76 12 78 14 82 14 C82 12 82 10 82 10Z" />
                                <path d="M98 10 C102 10 104 12 104 12 C104 12 102 14 98 14 C98 12 98 10 98 10Z" />
                            </g>
                            <line x1="115" y1="12" x2="180" y2="12" stroke="rgba(212,175,55,0.6)" strokeWidth="0.5" />
                        </svg>
                    </div>

                    {/* Eyebrow */}
                    <p className="font-cormorant italic mb-4" style={{
                        fontSize: '14px', letterSpacing: '0.35em',
                        color: 'rgba(250,240,210,0.95)', textTransform: 'uppercase',
                        textShadow: '0 1px 8px rgba(0,0,0,0.6)',
                    }}>
                        You are cordially invited to the celebration of
                    </p>

                    {/* Título principal */}
                    <h1 className="font-cormorant" style={{
                        fontSize: 'clamp(3rem, 8vw, 6rem)',
                        fontWeight: 400,
                        color: '#FFFFFF',
                        lineHeight: 1.1,
                        marginBottom: '1rem',
                        textShadow: '0 2px 24px rgba(0,0,0,0.55), 0 0 60px rgba(0,0,0,0.2)',
                    }}>
                        German{' '}
                        <span className="gold-shimmer italic">&amp;</span>
                        {' '}Leandro
                    </h1>

                    {/* Línea animada */}
                    <div className="flex justify-center my-5">
                        <div className="animate-draw-line h-px" style={{
                            background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.9), transparent)',
                        }} />
                    </div>

                    {/* Fecha y lugar */}
                    <p className="font-cormorant" style={{
                        fontSize: 'clamp(1rem, 2.5vw, 1.35rem)',
                        letterSpacing: '0.35em',
                        color: 'rgba(255,240,180,0.98)',
                        textTransform: 'uppercase',
                        textShadow: '0 1px 10px rgba(0,0,0,0.5)',
                    }}>
                        28.11.2026 · Mendoza, Argentina
                    </p>

                    {/* CTA */}
                    <div className="mt-8 flex flex-col items-center gap-3">
                        <a href="#countdown" style={{
                            fontFamily: "'Jost', sans-serif",
                            fontSize: '11px',
                            letterSpacing: '0.5em',
                            textTransform: 'uppercase',
                            color: '#1A1528',
                            background: 'rgba(212,175,55,0.92)',
                            border: '1.5px solid rgba(212,175,55,0.9)',
                            padding: '12px 32px',
                            borderRadius: '50px',
                            textDecoration: 'none',
                            fontWeight: 600,
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                        }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = '#F5E6A3';
                                e.currentTarget.style.boxShadow = '0 6px 28px rgba(0,0,0,0.4)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = 'rgba(212,175,55,0.92)';
                                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
                            }}>
                            Scroll &amp; Discover
                        </a>
                        <span className="animate-bounce-down text-xl" style={{ color: 'rgba(255,230,120,0.9)', textShadow: '0 1px 6px rgba(0,0,0,0.5)' }}>↓</span>
                    </div>
                </div>
            </div>

            {/* ── PÉTALOS PARTÍCULAS ── */}
            <div className="absolute inset-0 z-15 pointer-events-none overflow-hidden">
                {PETALS.map((p) => (
                    <div key={p.id} style={{
                        position: 'absolute',
                        top: '-30px',
                        left: p.left,
                        width: p.size,
                        height: `calc(${p.size} * 1.4)`,
                        background: p.color,
                        borderRadius: '50% 50% 50% 0',
                        transform: 'rotate(-45deg)',
                        animationName: 'petalFall',
                        animationDuration: p.duration,
                        animationDelay: p.delay,
                        animationTimingFunction: 'ease-in-out',
                        animationIterationCount: 'infinite',
                    }} />
                ))}
            </div>
        </section>
    );
};

export default Hero;
