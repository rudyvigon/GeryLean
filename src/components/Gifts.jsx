import React, { useState } from 'react';

const Gifts = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const bankDetails = {
        titular: "German Alberto Vigon",
        banco: "Naranja X",
        cvu: "4530000800013700440566",
        alias: "boda.gerylean"
    };

    const whatsappLink = "https://api.whatsapp.com/send/?phone=542613139444&text=Hola%20German,%20me%20comunico%20para%20abonar%20la%20entrada%20del%20evento.&type=phone_number&app_absent=0";

    return (
        <section id="gifts" style={{
            padding: 'clamp(5rem, 10vw, 8rem) 1.5rem',
            background: 'linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 100%)',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div style={{
                maxWidth: '1000px',
                width: '100%',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4rem'
            }}>
                {/* Header */}
                <div style={{ textAlign: 'center', maxWidth: '600px' }}>
                    <h2 className="font-cormorant" style={{
                        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                        fontWeight: 300,
                        color: '#1A1A1A',
                        lineHeight: 1.1,
                        marginBottom: '1.5rem'
                    }}>
                        El Mejor <em style={{
                            fontStyle: 'italic',
                            background: 'linear-gradient(90deg, #C29B27, #E4D07F, #C29B27)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>Regalo</em>
                    </h2>
                    <p className="font-cormorant" style={{
                        fontSize: '1.25rem',
                        color: '#444444',
                        lineHeight: 1.6,
                        fontStyle: 'italic'
                    }}>
                        "Nuestra mayor alegría es compartir este día con ustedes. Sin embargo, si desean hacernos un obsequio o necesitan coordinar su asistencia, les dejamos las siguientes opciones."
                    </p>
                </div>

                {/* Cards Container */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    width: '100%'
                }}>
                    {/* Card 1: Gift */}
                    <div style={{
                        background: '#0A0A0A',
                        borderRadius: '24px',
                        padding: '3rem 2rem',
                        textAlign: 'center',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        border: '1px solid rgba(212,175,55,0.2)'
                    }}>
                        <div>
                            {/* Icon Envelope */}
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="url(#goldGrad)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '1.5rem' }}>
                                <defs>
                                    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#C29B27" />
                                        <stop offset="100%" stopColor="#E4D07F" />
                                    </linearGradient>
                                </defs>
                                <path d="M4 7V17C4 18.1046 4.89543 19 6 19H18C19.1046 19 20 18.1046 20 17V7M4 7L12 12L20 7M4 7C4 5.89543 4.89543 5 6 5H18C19.1046 5 20 5.89543 20 7" />
                            </svg>
                            <h3 className="font-jost" style={{ color: '#E4D07F', fontSize: '13px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                                Luna de Miel
                            </h3>
                            <p className="font-cormorant" style={{ color: '#E0E0E0', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                                Ayúdanos a construir nuestros primeros recuerdos como pareja.
                            </p>
                        </div>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="font-jost"
                            style={{
                                padding: '12px 28px',
                                background: 'linear-gradient(90deg, #D4AF37 0%, #F5E6A3 50%, #B8962B 100%)',
                                border: 'none',
                                borderRadius: '50px',
                                color: '#1A1528',
                                fontSize: '11px',
                                fontWeight: 600,
                                letterSpacing: '0.2em',
                                textTransform: 'uppercase',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.boxShadow = '0 0 20px rgba(212,175,55,0.4)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            Ayúdanos

                        </button>
                    </div>

                    {/* Card 2: Tickets */}
                    <div style={{
                        background: '#0A0A0A',
                        borderRadius: '24px',
                        padding: '3rem 2rem',
                        textAlign: 'center',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        border: '1px solid rgba(212,175,55,0.2)'
                    }}>
                        <div>
                            {/* Icon Ticket / WhatsApp */}
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="url(#goldGrad)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '1.5rem' }}>
                                <path d="M15 5H9C7.89543 5 7 5.89543 7 7V17C7 18.1046 7.89543 19 9 19H15C16.1046 19 17 18.1046 17 17V7C17 5.89543 16.1046 5 15 5Z" />
                                <path d="M10 5L10 3" />
                                <path d="M14 5L14 3" />
                                <path d="M8 9H16" />
                                <path d="M8 13H16" />
                                <circle cx="12" cy="17" r="1" fill="#C29B27" stroke="none" />
                            </svg>
                            <h3 className="font-jost" style={{ color: '#E4D07F', fontSize: '13px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                                Entrada al Evento
                            </h3>
                            <p className="font-cormorant" style={{ color: '#E0E0E0', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                                Coordiná el abono de tu tarjeta de boda de manera rápida y segura.
                            </p>
                        </div>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-jost"
                            style={{
                                padding: '12px 28px',
                                background: 'transparent',
                                border: '1px solid rgba(212,175,55,0.6)',
                                borderRadius: '50px',
                                color: '#D4AF37',
                                fontSize: '11px',
                                fontWeight: 600,
                                letterSpacing: '0.2em',
                                textTransform: 'uppercase',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                textDecoration: 'none',
                                display: 'inline-block'
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = 'rgba(212,175,55,0.1)';
                                e.currentTarget.style.borderColor = '#D4AF37';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.borderColor = 'rgba(212,175,55,0.6)';
                            }}
                        >
                            Contactar por WhatsApp
                        </a>
                    </div>
                </div>
            </div>

            {/* Modal de Datos Bancarios */}
            {isModalOpen && (
                <div style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: 9999,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1rem',
                    background: 'rgba(0,0,0,0.85)',
                    backdropFilter: 'blur(5px)',
                    animation: 'fadeIn 0.3s ease'
                }} onClick={() => setIsModalOpen(false)}>
                    <div style={{
                        background: '#FAF7F2',
                        borderRadius: '20px',
                        padding: 'clamp(2rem, 5vw, 3rem)',
                        maxWidth: '450px',
                        width: '100%',
                        position: 'relative',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                        border: '1px solid rgba(212,175,55,0.3)',
                    }} onClick={e => e.stopPropagation()}>

                        {/* Close button */}
                        <button onClick={() => setIsModalOpen(false)} style={{
                            position: 'absolute', top: '20px', right: '20px',
                            background: 'transparent', border: 'none',
                            fontSize: '24px', color: '#444444',
                            cursor: 'pointer'
                        }}>×</button>

                        <h3 className="font-cormorant" style={{
                            fontSize: '2rem', color: '#1A1A1A', marginBottom: '1.5rem', textAlign: 'center'
                        }}>
                            Datos Bancarios
                        </h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                            <div style={{ background: '#FFFFFF', padding: '1rem', borderRadius: '12px', border: '1px solid #EBEBEB' }}>
                                <p className="font-jost" style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#888888', marginBottom: '0.2rem' }}>Titular</p>
                                <p className="font-jost" style={{ fontSize: '15px', color: '#222222', fontWeight: 500 }}>{bankDetails.titular}</p>
                            </div>
                            <div style={{ background: '#FFFFFF', padding: '1rem', borderRadius: '12px', border: '1px solid #EBEBEB' }}>
                                <p className="font-jost" style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#888888', marginBottom: '0.2rem' }}>Banco</p>
                                <p className="font-jost" style={{ fontSize: '15px', color: '#222222', fontWeight: 500 }}>{bankDetails.banco}</p>
                            </div>
                            <div style={{ background: '#FFFFFF', padding: '1rem', borderRadius: '12px', border: '1px solid #EBEBEB', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <p className="font-jost" style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#888888', marginBottom: '0.2rem' }}>CVU / CBU</p>
                                    <p className="font-jost" style={{ fontSize: '15px', color: '#222222', fontWeight: 500 }}>{bankDetails.cvu}</p>
                                </div>
                                <button onClick={() => navigator.clipboard.writeText(bankDetails.cvu)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#D4AF37', fontSize: '12px', textDecoration: 'underline' }}>Copiar</button>
                            </div>
                            <div style={{ background: '#FFFFFF', padding: '1rem', borderRadius: '12px', border: '1px solid #EBEBEB', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <p className="font-jost" style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#888888', marginBottom: '0.2rem' }}>Alias</p>
                                    <p className="font-jost" style={{ fontSize: '15px', color: '#222222', fontWeight: 500 }}>{bankDetails.alias}</p>
                                </div>
                                <button onClick={() => navigator.clipboard.writeText(bankDetails.alias)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#D4AF37', fontSize: '12px', textDecoration: 'underline' }}>Copiar</button>
                            </div>
                        </div>

                        <p className="font-cormorant" style={{ fontSize: '1.1rem', color: '#444444', textAlign: 'center', fontStyle: 'italic' }}>
                            ¡Muchas gracias por su detalle!
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gifts;
