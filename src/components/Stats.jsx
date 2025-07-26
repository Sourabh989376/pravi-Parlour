function Stats() {
  const stats = [
    {
      icon: 'fas fa-calendar-check',
      number: '150+',
      label: 'Appointments Booked'
    },
    {
      icon: 'fas fa-users',
      number: '120+',
      label: 'Expert Professionals'
    },
    {
      icon: 'fas fa-map-marker-alt',
      number: '8+',
      label: 'Cities Covered'
    },
    {
      icon: 'fas fa-heart',
      number: '650+',
      label: 'Happy Customers'
    }
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="row g-4">
          {stats.map((stat, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="stats-card">
                <i className={`${stat.icon} fa-2x mb-3`} style={{ color: '#e91e63' }}></i>
                <div className="stats-number">{stat.number}</div>
                <p className="mb-0 fw-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;