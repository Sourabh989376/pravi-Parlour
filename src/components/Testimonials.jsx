function Testimonials() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      service: 'Bridal Makeup',
      rating: 5,
      comment: 'The best bridal makeup experience! The team made me look absolutely stunning on my wedding day. Highly professional and skilled.',
      image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Anjali Patel',
      service: 'Hair Treatment',
      rating: 5,
      comment: 'Amazing hair treatment service! My hair feels so much healthier and looks gorgeous. The staff is very friendly and knowledgeable.',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Sneha Gupta',
      service: 'Facial Treatment',
      rating: 5,
      comment: 'Excellent facial service! My skin feels rejuvenated and glowing. The ambiance is relaxing and the treatment was very effective.',
      image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title font-playfair">
            What Our Happy Customers Says
          </h2>
          <p className="section-subtitle">
            Read genuine reviews from our satisfied clients
          </p>
        </div>

        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="testimonial-card">
                <i className="fas fa-quote-right quote-icon fa-2x"></i>
                
                <div className="rating-stars mb-3">
                  {[...Array(5)].map((_, i) => (
                    <i 
                      key={i} 
                      className={`fas fa-star ${i < testimonial.rating ? 'text-warning' : 'text-muted'}`}
                    ></i>
                  ))}
                </div>
                
                <p className="mb-4 text-muted">"{testimonial.comment}"</p>
                
                <div className="d-flex align-items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="rounded-circle me-3"
                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                  />
                  <div>
                    <h6 className="mb-0 fw-bold">{testimonial.name}</h6>
                    <small className="text-muted">{testimonial.service}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;