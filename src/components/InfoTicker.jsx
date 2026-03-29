import React from 'react';

/* Transición ornamental entre Hero → Countdown */
const InfoTicker = () => (
    <div style={{
        background: 'linear-gradient(to bottom, #100D1E 0%, #100D1E 100%)',
        padding: '0',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90px',
    }}>
        {/* Línea decorativa con diamante central */}
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0',
            width: '100%',
            maxWidth: '700px',
            padding: '0 2rem',
        }}>
            {/* Línea izquierda */}
            <div style={{
                flex: 1,
                height: '1px',
                background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.55))',
            }} />

            {/* Diamante ornamental */}
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" style={{ flexShrink: 0, margin: '0 14px' }}>
                <path d="M11 1 L21 11 L11 21 L1 11 Z" fill="rgba(212,175,55,0.18)" stroke="rgba(212,175,55,0.6)" strokeWidth="1" />
                <path d="M11 5 L17 11 L11 17 L5 11 Z" fill="rgba(212,175,55,0.35)" />
                <circle cx="11" cy="11" r="1.5" fill="rgba(212,175,55,0.9)" />
            </svg>

            {/* Línea derecha */}
            <div style={{
                flex: 1,
                height: '1px',
                background: 'linear-gradient(to left, transparent, rgba(212,175,55,0.55))',
            }} />
        </div>
    </div>
);

export default InfoTicker;
