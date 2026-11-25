export default function Header({ unit, onUnitChange }) {
  return (
    <header className="topbar">
      <a className="brand" href="#top" aria-label="Weatherly home">
        <span className="brand-mark" aria-hidden="true">✳</span>
        <span>weatherly</span>
      </a>
      <div className="header-actions">
        <span className="sample-badge"><span /> Sample data</span>
        <div className="unit-toggle" role="group" aria-label="Temperature unit">
          <button className={unit === 'C' ? 'selected' : ''} onClick={() => onUnitChange('C')} aria-pressed={unit === 'C'}>°C</button>
          <button className={unit === 'F' ? 'selected' : ''} onClick={() => onUnitChange('F')} aria-pressed={unit === 'F'}>°F</button>
        </div>
        <button className="avatar" aria-label="Profile">A</button>
      </div>
    </header>
  );
}
