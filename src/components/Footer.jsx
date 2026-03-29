import React from 'react';

const Footer = () => (
    <footer style={{
        background: 'linear-gradient(160deg, #0A0A0A 0%, #171717 50%, #050505 100%)',
        padding: 'clamp(4rem,8vw,7rem) 1.5rem clamp(2rem,4vw,3rem)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
    }}>
        {/* Halo de luz superior */}
        <div style={{
            position: 'absolute',
            top: '-60px', left: '50%',
            transform: 'translateX(-50%)',
            width: '700px', height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(212,175,55,0.07) 0%, transparent 65%)',
            pointerEvents: 'none',
        }} />

        {/* Estrellas de fondo */}
        {[...Array(12)].map((_, i) => (
            <div key={i} style={{
                position: 'absolute',
                top: `${5 + Math.random() * 80}%`,
                left: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 3}px`,
                height: `${2 + Math.random() * 3}px`,
                borderRadius: '50%',
                background: 'rgba(245,230,163,0.35)',
                animationName: 'twinkle',
                animationDuration: `${2 + Math.random() * 3}s`,
                animationDelay: `${Math.random() * 4}s`,
                animationTimingFunction: 'ease-in-out',
                animationIterationCount: 'infinite',
                pointerEvents: 'none',
            }} />
        ))}

        {/* Ornamento de entrada */}
        <div style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
            <div style={{ width: '80px', height: '1px', background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.5))' }} />
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 2 C14 8 9 10 9 16 C9 22 14 24 16 30 C18 24 23 22 23 16 C23 10 18 8 16 2Z" fill="rgba(212,175,55,0.5)" />
                <path d="M2 16 C8 15 10 9 16 9 C10 9 8 23 2 16Z" fill="rgba(212,175,55,0.25)" />
                <path d="M30 16 C24 15 22 9 16 9 C22 9 24 23 30 16Z" fill="rgba(212,175,55,0.25)" />
                <circle cx="16" cy="16" r="2" fill="rgba(212,175,55,0.7)" />
            </svg>
            <div style={{ width: '80px', height: '1px', background: 'linear-gradient(to left, transparent, rgba(212,175,55,0.5))' }} />
        </div>

        {/* Monograma */}
        <div style={{
            width: '72px', height: '72px', borderRadius: '50%',
            background: 'radial-gradient(circle at 35% 35%, #E0E0E0, #888888)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 2rem',
            boxShadow: '0 0 0 2px rgba(212,175,55,0.2), 0 0 0 6px rgba(212,175,55,0.06), 0 8px 30px rgba(0,0,0,0.5)',
            border: '1.5px solid rgba(212,175,55,0.3)',
        }}>
            <span className="font-cormorant" style={{ color: '#111111', fontSize: '18px', fontStyle: 'italic', fontWeight: 'bold', lineHeight: 1 }}>G&L</span>
        </div>

        <h3 className="font-cormorant" style={{
            fontSize: 'clamp(1.8rem,4vw,3rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: '#FAF7F2',
            marginBottom: '0.6rem',
            textShadow: '0 2px 20px rgba(0,0,0,0.4)',
        }}>
            Con amor, German & Leandro
        </h3>

        <p className="font-jost" style={{
            fontSize: '12px',
            color: 'rgba(245,230,163,0.55)',
            letterSpacing: '0.45em',
            textTransform: 'uppercase',
            marginBottom: '3rem',
        }}>
            28 · 11 · 2026 · Mendoza, Argentina
        </p>

        {/* Separador */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '2.5rem' }}>
            <div style={{ width: '50px', height: '1px', background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.3))' }} />
            <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(212,175,55,0.4)' }} />
            <div style={{ width: '50px', height: '1px', background: 'linear-gradient(to left, transparent, rgba(212,175,55,0.3))' }} />
        </div>

        {/* Links */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            {[
                { icon: '♡', label: 'Compartir' },
                { icon: '✉', label: 'Contacto' },
                { icon: '★', label: 'Galería' },
            ].map(item => (
                <a key={item.label} href="#" className="font-jost" style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
                    fontSize: '10px',
                    letterSpacing: '0.35em',
                    textTransform: 'uppercase',
                    color: 'rgba(212,175,55,0.45)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                }}
                    onMouseEnter={e => { e.currentTarget.style.color = 'rgba(212,175,55,0.9)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(212,175,55,0.45)'; e.currentTarget.style.transform = 'none'; }}>
                    <span style={{ fontSize: '16px' }}>{item.icon}</span>
                    {item.label}
                </a>
            ))}
        </div>

        <p className="font-jost" style={{
            fontSize: '10px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'rgba(250,247,242,0.15)',
        }}>
            © {new Date().getFullYear()} German & Leandro · Mendoza · All Rights Reserved
        </p>
    </footer>
);

export default Footer;
