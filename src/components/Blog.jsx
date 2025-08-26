import aboutImage from '../../public/images/about-img.jpg'

function Blog() {
  const blogPosts = [
    {
      title: 'Top 5 Skincare Tips for Glowing Skin',
      excerpt: 'Discover the secrets to achieving radiant, healthy-looking skin with our expert skincare tips and recommendations.',
      image: aboutImage,
      date: 'March 15, 2024',
      category: 'Skincare'
    },
    {
      title: 'Hair Care Routine for Different Hair Types',
      excerpt: 'Learn how to care for your specific hair type with our comprehensive guide to hair care.',
      image: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: 'March 10, 2024',
      category: 'Hair Care'
    },
    {
      title: 'Bridal Makeup Trends 2024',
      excerpt: 'Stay updated with the latest bridal makeup trends, makes you feel confident and radiant on your special day.',
      image: 'https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: 'March 5, 2024',
      category: 'Makeup'
    }
  ];

  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title font-playfair">
            Blog and News
          </h2>
          <p className="section-subtitle">
            Stay updated with the latest beauty tips, trends, and news from our experts
          </p>
        </div>

        <div className="row g-4">
          {blogPosts.map((post, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="blog-card">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="blog-image"
                />
                <div className="p-4">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="badge bg-light text-dark">{post.category}</span>
                    <small className="text-muted">{post.date}</small>
                  </div>
                  <h5 className="fw-bold mb-3">{post.title}</h5>
                  <p className="text-muted mb-3">{post.excerpt}</p>
                  <a href="https://www.healthkart.com/connect/glowing-skin-tips-for-the-brides/" className="btn-primary-custom">
                    Read More
                    <i className="fas fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;