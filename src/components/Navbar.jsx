import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handler, { passive: true });
        return () => window.removeEventListener('scroll', handler);
    }, []);


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
            </div>
        </header>
    );
};

export default Navbar;
