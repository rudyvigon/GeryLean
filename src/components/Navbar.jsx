import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handler, { passive: true });
        return () => window.removeEventListener('scroll', handler);
    }, []);

    const links = [
        { href: '#countdown', label: 'The Event' },
        { href: '#gallery', label: 'Gallery' },
        { href: '#rsvp', label: 'RSVP' },
    ];

    const linkColor = scrolled ? 'rgba(44,36,34,0.65)' : 'rgba(250,247,242,0.7)';
    const logoColor = scrolled ? '#2C2422' : '#FAF7F2';

    return (
        <header style={{
            position: 'fixed',
            top: 0, left: 0, right: 0,
            zIndex: 100,
            backdropFilter: 'blur(16px) saturate(1.8)',
            WebkitBackdropFilter: 'blur(16px) saturate(1.8)',
            background: scrolled ? 'rgba(250,247,242,0.92)' : 'rgba(250,247,242,0.06)',
            borderBottom: scrolled ? '1px solid rgba(212,175,55,0.2)' : '1px solid transparent',
            transition: 'all 0.4s ease',
        }}>
            {/* ── Barra principal ── */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: scrolled ? '12px clamp(1rem, 4vw, 2.5rem)' : '20px clamp(1rem, 4vw, 2.5rem)',
                transition: 'padding 0.4s ease',
            }}>
                {/* Logo */}
                <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 18 C10 18 2 13 2 7.5 C2 4.5 4.5 2 7.5 2 C8.9 2 10 3.5 10 3.5 C10 3.5 11.1 2 12.5 2 C15.5 2 18 4.5 18 7.5 C18 13 10 18 10 18Z"
                            fill={scrolled ? 'rgba(212,175,55,0.8)' : 'rgba(212,175,55,0.6)'} />
                    </svg>
                    <span className="font-cormorant" style={{
                        fontSize: '20px', fontWeight: 400,
                        letterSpacing: '0.15em',
                        color: logoColor,
                        transition: 'color 0.4s ease',
                    }}>G &amp; L</span>
                </a>

                {/* Nav desktop */}
                <nav className="nav-desktop" style={{ display: 'flex', gap: '2.5rem' }}>
                    {links.map(l => (
                        <a key={l.href} href={l.href} className="font-jost" style={{
                            fontSize: '11px',
                            letterSpacing: '0.35em',
                            textTransform: 'uppercase',
                            color: linkColor,
                            textDecoration: 'none',
                            transition: 'color 0.3s ease',
                        }}
                            onMouseEnter={e => e.target.style.color = '#D4AF37'}
                            onMouseLeave={e => e.target.style.color = linkColor}>
                            {l.label}
                        </a>
                    ))}
                </nav>

                {/* CTA + hamburguesa */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <a href="#rsvp" className="font-jost" style={{
                        fontSize: '10px',
                        letterSpacing: '0.35em',
                        textTransform: 'uppercase',
                        color: '#1A1528',
                        background: 'linear-gradient(90deg, #C29B27, #E4D07F)',
                        padding: '9px 16px',
                        borderRadius: '50px',
                        textDecoration: 'none',
                        fontWeight: 600,
                        whiteSpace: 'nowrap',
                        boxShadow: '0 4px 16px rgba(212,175,55,0.3)',
                        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                    }}
                        onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 25px rgba(212,175,55,0.55)'; e.currentTarget.style.transform = 'scale(1.04)'; }}
                        onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 16px rgba(212,175,55,0.3)'; e.currentTarget.style.transform = 'none'; }}>
                        RSVP
                    </a>

                    {/* Hamburguesa — solo mobile */}
                    <button
                        className="nav-ham"
                        onClick={() => setMenuOpen(o => !o)}
                        aria-label="Menú"
                        style={{
                            background: 'none', border: 'none', cursor: 'pointer',
                            padding: '6px', flexDirection: 'column',
                            gap: '5px', alignItems: 'center',
                        }}>
                        {[0, 1, 2].map(i => (
                            <span key={i} style={{
                                display: 'block', width: '22px', height: '2px',
                                background: scrolled ? 'rgba(44,36,34,0.7)' : 'rgba(250,247,242,0.85)',
                                borderRadius: '2px',
                                transition: 'all 0.3s ease',
                                transform: menuOpen
                                    ? i === 0 ? 'rotate(45deg) translate(5px,5px)'
                                        : i === 1 ? 'scaleX(0)'
                                            : 'rotate(-45deg) translate(5px,-5px)'
                                    : 'none',
                            }} />
                        ))}
                    </button>
                </div>
            </div>

            {/* ── Menú mobile desplegable ── */}
            <div style={{
                maxHeight: menuOpen ? '220px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1)',
                background: 'rgba(250,247,242,0.97)',
                backdropFilter: 'blur(12px)',
                borderTop: menuOpen ? '1px solid rgba(212,175,55,0.15)' : 'none',
            }}>
                {links.map(l => (
                    <a key={l.href} href={l.href}
                        onClick={() => setMenuOpen(false)}
                        className="font-jost"
                        style={{
                            display: 'block',
                            padding: '15px clamp(1rem, 4vw, 2.5rem)',
                            fontSize: '11px',
                            letterSpacing: '0.35em',
                            textTransform: 'uppercase',
                            color: 'rgba(44,36,34,0.7)',
                            textDecoration: 'none',
                            borderBottom: '1px solid rgba(212,175,55,0.08)',
                        }}>
                        {l.label}
                    </a>
                ))}
            </div>

            <style>{`
        .nav-desktop { display: flex; }
        .nav-ham { display: none; }
        @media (max-width: 640px) {
          .nav-desktop { display: none !important; }
          .nav-ham { display: flex !important; flex-direction: column; gap: 5px; align-items: center; }
        }
      `}</style>
        </header>
    );
};

export default Navbar;
