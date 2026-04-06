
import './App.css'
// Import local background image
import backgroundImage from './assets/photographybg.jpg'

function App() {
	const handleHireUs = () => {
		alert('Thank you for your interest! Please email us at: hello@pitikshess.com');
	};

	const handleExplore = () => {
		console.log('Explore services clicked');
		// You can add scroll to services section or navigate
	};

	return (
		<div className="pitikshess">
		<header className="pitikshess-header">
			<div className="pitikshess-brand">
			<h1 className="pitikshess-logo">
				Pitik<span className="pitikshess-gold">Shess</span>
			</h1>
			<p className="pitikshess-brand-tag">photography + technology</p>
			</div>
			<nav className="pitikshess-nav">
			<a href="#work" className="pitikshess-nav-link">Work</a>
			<a href="#services" className="pitikshess-nav-link">Services</a>
			<a href="#connect" className="pitikshess-nav-link">Connect</a>
			</nav>
		</header>

		<main 
			className="pitikshess-main"
			style={{
			backgroundImage: `linear-gradient(135deg, rgba(10, 10, 10, 0.85), rgba(10, 10, 10, 0.75)), url(${backgroundImage})`
			}}
		>
			<div className="pitikshess-container">
			<span className="pitikshess-badge">Side Hustle Studio</span>
			<h2 className="pitikshess-title">
				Visionary Photography
				<br />
				<span className="pitikshess-gold">Modern Tech Solutions</span>
			</h2>
			<p className="pitikshess-description">
				Professional photography and technology services for creators, 
				entrepreneurs, and dreamers ready to elevate their side hustles.
			</p>
			<div className="pitikshess-buttons">
				<button className="pitikshess-btn-primary" onClick={handleHireUs}>
				Hire Us
				</button>
				<button className="pitikshess-btn-secondary" onClick={handleExplore}>
				Explore <span className="pitikshess-arrow">→</span>
				</button>
			</div>
			</div>
		</main>
		</div>
	)
}

export default App