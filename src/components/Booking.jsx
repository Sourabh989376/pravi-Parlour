import { useState } from 'react';

function Booking() {
  const [location, setLocation] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState('');

  return (
    <section id="booking" className="booking-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title font-playfair">
            Say Goodbye to Waiting! Book Now!
          </h2>
          <p className="section-subtitle">
            Choose the best salon, select service, browse professionals to your choice
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="booking-form">
              <div className="row g-4">
                <div className="col-md-3">
                  <div className="position-relative">
                    <i className="fas fa-map-marker-alt position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
                    <input
                      type="text"
                      className="form-control ps-5 py-3"
                      placeholder="Enter Location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="position-relative">
                    <i className="fas fa-cut position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
                    <select
                      className="form-select ps-5 py-3"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                    >
                      <option value="">Select Service</option>
                      <option value="facial">Facial Treatment</option>
                      <option value="hair">Hair Care</option>
                      <option value="nail">Nail Care</option>
                      <option value="makeup">Makeup</option>
                      <option value="waxing">Waxing</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="position-relative">
                    <i className="fas fa-calendar-alt position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
                    <input
                      type="date"
                      className="form-control ps-5 py-3"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <button className="btn-primary-custom w-100 py-3">
                    <i className="fas fa-search me-2"></i>
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Booking;