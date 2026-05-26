import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      background: 'var(--bg-deep)',
      borderTop: '1px solid var(--border-subtle)',
      padding: '60px 40px 30px',
      marginTop: '60px',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Top Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          marginBottom: '48px',
        }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '34px', height: '34px',
                background: 'linear-gradient(135deg, #e8c97a 0%, #c99840 100%)',
                borderRadius: '8px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ color: '#050505', fontFamily: 'var(--font-heading)', fontSize: '18px' }}>C</span>
              </div>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', letterSpacing: '3px' }}>CINEVERSE</span>
            </div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              lineHeight: '1.7',
              color: 'var(--text-muted)',
              fontWeight: '300',
              maxWidth: '220px',
            }}>
              Discover the art of cinema. Explore trending films, hidden gems, and cinematic masterpieces.
            </p>

            {/* Social links */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
              {[
                { label: 'Twitter/X', icon: 'X' },
                { label: 'Instagram', icon: 'IG' },
                { label: 'Letterboxd', icon: 'LB' },
              ].map(({ label, icon }) => (
                <a key={label} href="#" aria-label={label} style={{
                  width: '34px', height: '34px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '8px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '10px',
                  fontWeight: '700',
                  letterSpacing: '0.5px',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-gold)'; e.currentTarget.style.color = 'var(--accent-gold)'; e.currentTarget.style.background = 'rgba(232,201,122,0.08)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            {
              title: 'Discover',
              links: ['Trending Now', 'Popular Films', 'Top Rated', 'Coming Soon', 'Now Playing'],
            },
            {
              title: 'Genres',
              links: ['Action & Adventure', 'Sci-Fi', 'Horror', 'Drama', 'Comedy', 'Thriller'],
            },
            {
              title: 'Company',
              links: ['About CineVerse', 'Press Kit', 'API Docs', 'Contact Us', 'Privacy Policy'],
            },
          ].map(({ title, links }) => (
            <div key={title}>
              <h4 style={{
                fontFamily: 'var(--font-body)',
                fontSize: '11px',
                fontWeight: '600',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)',
                marginBottom: '16px',
              }}>{title}</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {links.map(link => (
                  <li key={link}>
                    <a href="#" style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '13px',
                      color: 'var(--text-muted)',
                      textDecoration: 'none',
                      fontWeight: '300',
                      transition: 'color 0.2s ease',
                    }}
                      onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
                      onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
                    >{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div style={{
          padding: '24px',
          background: 'rgba(232,201,122,0.04)',
          border: '1px solid rgba(232,201,122,0.12)',
          borderRadius: 'var(--radius-lg)',
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
          flexWrap: 'wrap',
          marginBottom: '40px',
        }}>
          <div style={{ flex: 1, minWidth: '200px' }}>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', color: 'var(--text-primary)', marginBottom: '4px' }}>
              Stay in the loop
            </h4>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-muted)', fontWeight: '300' }}>
              New releases, hidden gems, and cinematic news — weekly.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
            <input
              type="email"
              placeholder="your@email.com"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid var(--border-medium)',
                borderRadius: '8px',
                padding: '10px 16px',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                outline: 'none',
                width: '220px',
              }}
            />
            <button style={{
              background: 'linear-gradient(135deg, #e8c97a, #c99840)',
              border: 'none',
              borderRadius: '8px',
              padding: '10px 20px',
              color: '#050505',
              fontFamily: 'var(--font-body)',
              fontWeight: '600',
              fontSize: '13px',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}>Subscribe</button>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          paddingTop: '20px',
          borderTop: '1px solid var(--border-subtle)',
        }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--text-muted)', fontWeight: '300' }}>
            © {year} CineVerse. Movie data powered by{' '}
            <a href="https://www.themoviedb.org" target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--accent-gold)', textDecoration: 'none' }}>TMDB</a>.
            Built with ❤ for cinema lovers.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            {['Terms', 'Privacy', 'Cookies'].map(link => (
              <a key={link} href="#" style={{
                fontFamily: 'var(--font-body)',
                fontSize: '12px',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
                onMouseEnter={e => e.target.style.color = 'var(--text-secondary)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
              >{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
