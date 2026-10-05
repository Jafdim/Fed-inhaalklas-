'use client'

import { useState } from 'react'

const features = [
  { title: 'Location sharing', text: 'Stay connected to the people who matter most.', image: '/images/card-img-1.jpg', tone: 'blue' },
  { title: 'Tile trackers', text: 'Find keys, bags, wallets, and more in seconds.', image: '/images/card-img-2.jpg', tone: 'green' },
  { title: 'Driving safety', text: 'Help your family build safer driving habits.', image: '/images/kmh.png', tone: 'pink' },
]

const trackerItems = [
  { title: 'Find lost or stolen stuff', image: '/images/grid-item-tile-slim.jpg', large: true },
  { title: 'Find bags', image: '/images/fomo_004.jpg' },
  { title: 'Find keys', image: '/images/grid-item-tile-mate.jpg' },
  { title: 'Find wallets', image: '/images/grid-item-tile-slim-blue.jpg' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <main>
      <aside className="promo-bar">Because lost stuff happens to the best of us. Start finding with Life360 Tile trackers. <a href="trackers.html">Shop now.</a></aside>
      <nav className="nav-shell" aria-label="Main navigation">
        <div className="nav-inner">
          <a className="brand" href="index.html" aria-label="Life360 home"><img src="/images/life360-logo-dark.svg" alt="life360" /></a>
          <div className="desktop-links"><a href="location.html">Location Sharing</a><a href="trackers.html">Tile Trackers</a><a href="safety.html">Family Safety</a><a href="plans.html">Membership Plans</a><a href="trackers.html">Shop</a></div>
          <div className="nav-actions"><button className="login-button">Log in</button><a className="start-button small" href="plans.html">Get started</a><button className={`menu-button ${menuOpen ? 'is-open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}><span /><span /><span /></button></div>
        </div>
        {menuOpen && <div className="mobile-menu"><a href="location.html" onClick={() => setMenuOpen(false)}>Location Sharing</a><a href="trackers.html" onClick={() => setMenuOpen(false)}>Tile Trackers</a><a href="safety.html" onClick={() => setMenuOpen(false)}>Family Safety</a><a href="plans.html" onClick={() => setMenuOpen(false)}>Membership Plans</a><a href="trackers.html" onClick={() => setMenuOpen(false)}>Shop</a><a className="start-button" href="plans.html" onClick={() => setMenuOpen(false)}>Get started</a></div>}
      </nav>

      <section className="hero" id="top">
        <div className="hero-inner"><div className="hero-copy"><p className="eyebrow">Life360 keeps families connected</p><h1>Keep track of all your favorite people and things.</h1><p className="hero-lede">Discover the power of Life360. The #1 solution for making everyday family life better.</p><div className="hero-actions"><a className="start-button" href="trackers.html">Shop trackers</a><a className="outline-button" href="plans.html">Try Life360 for free</a></div></div><div className="hero-art"><div className="art-glow" /><img src="/images/home-page.jpeg" alt="Life360 app showing a family map" /></div></div>
      </section>

      <section className="trust-strip"><p>Trusted by families everywhere</p><div><span>★★★★★</span><b>4.7</b><small>App Store rating</small></div><div><strong>70M+</strong><small>members worldwide</small></div><div><strong>25B+</strong><small>miles driven safer</small></div></section>

      <section className="location-section section-pad" id="location"><div className="section-heading"><p className="eyebrow">One app. More peace of mind.</p><h2>Location lowdown</h2><p>Love knows no distance, but we do. Know exactly where your favorite people and things are.</p></div><div className="feature-tabs">{features.map((feature, i) => <button key={feature.title} className={i === activeFeature ? 'active' : ''} onClick={() => setActiveFeature(i)}><span>0{i + 1}</span>{feature.title}</button>)}</div><article className={`feature-card ${features[activeFeature].tone}`}><div className="feature-copy"><p className="eyebrow">Life360 feature</p><h3>{features[activeFeature].title}</h3><p>{features[activeFeature].text}</p><a href="plans.html">Learn more <span>→</span></a></div><img src={features[activeFeature].image} alt="" /></article></section>

      <section className="trackers-section section-pad" id="trackers"><div className="section-heading"><p className="eyebrow">Peace of mind, found</p><h2>Never lose your things again.</h2><p>Meet Tile trackers, now part of Life360. Find the everyday essentials that keep life moving.</p></div><div className="tracker-grid">{trackerItems.map(item => <article key={item.title} className={`tracker-card ${item.large ? 'large' : ''}`}><img src={item.image} alt="" /><div><h3>{item.title}</h3><p>Keep tabs on what matters.</p></div></article>)}</div></section>

      <section className="safety-section" id="safety"><div className="safety-image"><img src="/images/Driving-safety-NPI-Products.jpg.webp" alt="Friends enjoying a drive" /></div><div className="safety-copy"><p className="eyebrow">More than location sharing</p><h2>Safety features for every kind of day.</h2><p>From crash detection to driver reports, Life360 helps you look out for the people you love, wherever the road takes them.</p><a className="outline-button dark" href="plans.html">Explore family safety</a></div></section>

      <section className="plans-section section-pad" id="plans"><div className="section-heading"><p className="eyebrow">Choose your peace of mind</p><h2>A plan for everyone.</h2><p>Start with the essentials. Upgrade when your family needs more.</p></div><div className="plans-grid"><article className="plan-card"><p className="plan-label">Free</p><h3>$0<span>/month</span></h3><p>Core location sharing and safety features for your circle.</p><a className="outline-button" href="index.html">Get started</a><ul><li>Location sharing</li><li>2 Place Alerts</li><li>Family driving summary</li></ul></article><article className="plan-card featured-plan"><div className="popular">Most popular</div><p className="plan-label">Gold</p><h3>$14.99<span>/month</span></h3><p>Extra protection and peace of mind for the whole family.</p><a className="start-button" href="index.html">Try for free</a><ul><li>Unlimited Place Alerts</li><li>30 days of location history</li><li>Crash detection and dispatch</li></ul></article></div></section>

      <footer><div className="footer-brand"><img src="/images/life360-logo-dark.svg" alt="life360" /><p>Safety, connection, and peace of mind for the people and things you love.</p></div><div><b>Explore</b><a href="location.html">Location Sharing</a><a href="trackers.html">Tile Trackers</a><a href="safety.html">Family Safety</a></div><div><b>Company</b><a href="plans.html">Membership Plans</a><a href="index.html">About Life360</a><a href="index.html">Support</a></div></footer>
    </main>
  )
}
