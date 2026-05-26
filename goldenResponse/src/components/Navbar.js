import React, { useState, useEffect } from 'react';
import { useMovieContext } from '../context/MovieContext';
import { useScroll } from '../hooks/useMovies';

const Navbar = () => {
  const { searchQuery, setSearchQuery } = useMovieContext();
  const { scrolled } = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');

  useEffect(() => {
    const t = setTimeout(() => setSearchQuery(inputVal), 350);
    return () => clearTimeout(t);
  }, [inputVal, setSearchQuery]);

  const links = ['Trending', 'Popular', 'Top Rated', 'Upcoming', 'Genres'];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
      background: scrolled
        ? 'rgba(5,5,5,0.92)'
        : 'linear-gradient(to bottom, rgba(5,5,5,0.8) 0%, transparent 100%)',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 24px',
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '24px',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          <div style={{
            width: '34px', height: '34px',
            background: 'linear-gradient(135deg, #e8c97a 0%, #c99840 100%)',
            borderRadius: '8px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '16px', fontWeight: '900',
          }}>
            <span style={{ color: '#050505', fontFamily: 'var(--font-heading)', fontSize: '18px' }}>C</span>
          </div>
          <span style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '22px',
            letterSpacing: '3px',
            color: 'var(--text-primary)',
          }}>CINEVERSE</span>
        </div>

        {/* Desktop Nav Links */}
        <ul style={{
          display: 'flex',
          gap: '8px',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          '@media (max-width: 768px)': { display: 'none' },
        }} className="nav-links">
          {links.map(link => (
            <li key={link}>
              <button
                onClick={() => {}}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-secondary)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  fontWeight: '400',
                  padding: '8px 14px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  letterSpacing: '0.3px',
                }}
                onMouseEnter={e => {
                  e.target.style.color = 'var(--text-primary)';
                  e.target.style.background = 'rgba(255,255,255,0.06)';
                }}
                onMouseLeave={e => {
                  e.target.style.color = 'var(--text-secondary)';
                  e.target.style.background = 'none';
                }}
              >{link}</button>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* Search */}
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            {searchOpen ? (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '8px',
                padding: '8px 12px',
                gap: '8px',
                animation: 'fadeIn 0.2s ease',
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                </svg>
                <input
                  autoFocus
                  value={inputVal}
                  onChange={e => setInputVal(e.target.value)}
                  placeholder="Search movies…"
                  style={{
                    background: 'none', border: 'none', outline: 'none',
                    color: 'var(--text-primary)', fontFamily: 'var(--font-body)',
                    fontSize: '14px', width: '200px',
                  }}
                />
                <button
                  onClick={() => { setSearchOpen(false); setInputVal(''); setSearchQuery(''); }}
                  style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '2px' }}
                >✕</button>
              </div>
            ) : (
              <IconButton onClick={() => setSearchOpen(true)} label="Search">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                </svg>
              </IconButton>
            )}
          </div>

          {/* Watchlist */}
          <IconButton label="Watchlist">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
            </svg>
          </IconButton>

          {/* Sign In */}
          <button style={{
            background: 'linear-gradient(135deg, #e8c97a, #c99840)',
            border: 'none',
            borderRadius: '8px',
            color: '#050505',
            fontFamily: 'var(--font-body)',
            fontWeight: '500',
            fontSize: '13px',
            padding: '9px 18px',
            cursor: 'pointer',
            letterSpacing: '0.3px',
            transition: 'all 0.2s ease',
          }}
            onMouseEnter={e => e.target.style.opacity = '0.85'}
            onMouseLeave={e => e.target.style.opacity = '1'}
          >Sign In</button>

          {/* Mobile Menu */}
          <IconButton
            onClick={() => setMenuOpen(!menuOpen)}
            label="Menu"
            style={{ display: 'none' }}
            className="mobile-menu-btn"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {[0,1,2].map(i => (
                <div key={i} style={{
                  width: '18px', height: '2px',
                  background: 'var(--text-secondary)',
                  borderRadius: '2px',
                  transition: 'all 0.3s ease',
                  transform: menuOpen
                    ? i === 0 ? 'rotate(45deg) translate(4px, 4px)'
                    : i === 1 ? 'scaleX(0)'
                    : 'rotate(-45deg) translate(4px, -4px)'
                    : 'none',
                }} />
              ))}
            </div>
          </IconButton>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: 'rgba(5,5,5,0.97)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid var(--border-subtle)',
          padding: '16px 24px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
          animation: 'slideDown 0.25s ease',
        }}>
          {links.map(link => (
            <button
              key={link}
              onClick={() => setMenuOpen(false)}
              style={{
                background: 'none', border: 'none',
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                padding: '12px 8px',
                textAlign: 'left',
                cursor: 'pointer',
                borderBottom: '1px solid var(--border-subtle)',
              }}
            >{link}</button>
          ))}
        </div>
      )}

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: scaleX(0.9); } to { opacity: 1; transform: scaleX(1); } }
        @keyframes slideDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
};

const IconButton = ({ onClick, label, children, style, className }) => (
  <button
    onClick={onClick}
    aria-label={label}
    className={className}
    style={{
      background: 'none',
      border: '1px solid var(--border-subtle)',
      borderRadius: '8px',
      color: 'var(--text-secondary)',
      width: '38px', height: '38px',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      ...style,
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = 'var(--accent-gold)';
      e.currentTarget.style.color = 'var(--accent-gold)';
      e.currentTarget.style.background = 'rgba(232,201,122,0.08)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = 'var(--border-subtle)';
      e.currentTarget.style.color = 'var(--text-secondary)';
      e.currentTarget.style.background = 'none';
    }}
  >{children}</button>
);

export default Navbar;
