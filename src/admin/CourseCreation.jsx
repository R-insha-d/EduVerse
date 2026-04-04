import React from 'react';

const styles = `
  .course-creation-container {
    padding: 2rem;
    font-family: 'Inter', sans-serif;
    color: #0f172a;
  }

  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }

  .btn-primary {
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 10px;
    font-weight: 700;
    color: white;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
    transition: all 0.3s ease;
  }

  .course-form-card {
    background: white;
    border-radius: 20px;
    border: 1px solid rgba(0,0,0,0.05);
    padding: 2rem;
    box-shadow: 0 10px 25px rgba(0,0,0,0.03);
    max-width: 800px;
    margin: 0 auto;
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  .form-label {
    display: block;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #475569;
    font-size: 0.9rem;
  }

  .form-control {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1.5px solid #e2e8f0;
    border-radius: 10px;
    font-size: 0.95rem;
    transition: all 0.2s;
  }

  .form-control:focus {
    border-color: #3b82f6;
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  .form-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .course-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-top: 3rem;
  }

  .course-list-card {
    background: white;
    border-radius: 20px;
    border: 1px solid rgba(0,0,0,0.05);
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .course-list-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.05);
  }

  .course-card-body {
    padding: 1.5rem;
  }

  .course-tag {
    background: rgba(59, 130, 246, 0.1);
    color: #3b82f6;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.7rem;
    font-weight: 800;
    text-transform: uppercase;
    display: inline-block;
    margin-bottom: 0.75rem;
  }

  .course-title {
    font-size: 1.15rem;
    font-weight: 800;
    margin: 0 0 0.5rem 0;
  }

  .course-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    background: #f8fafc;
    border-top: 1px solid #f1f5f9;
  }

  .course-meta-item {
    font-size: 0.8rem;
    color: #64748b;
    font-weight: 600;
  }

  .animate-fade-up {
    animation: fadeInUp 0.6s ease-out forwards;
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 768px) {
    .course-creation-container { padding: 1.5rem; }
    .form-row { grid-template-columns: 1fr; }
    .course-form-card { padding: 1.5rem; }
    .page-header h2 { font-size: 1.35rem; }
  }

  @media (max-width: 575px) {
    .course-grid { grid-template-columns: 1fr; }
  }
`;

function CourseCreation() {
  const courses = [
    { id: 1, title: 'Introduction to Python', category: 'Programming', students: 120, lessons: 24, date: '04/10/2024' },
    { id: 2, title: 'Digital Marketing', category: 'Marketing', students: 85, lessons: 18, date: '04/06/2024' },
    { id: 3, title: 'History 101', category: 'Humanities', students: 45, lessons: 12, date: '04/04/2024' },
    { id: 4, title: 'React for Beginners', category: 'Development', students: 200, lessons: 32, date: '04/12/2024' },
  ];

  return (
    <>
      <style>{styles}</style>
      <div className="course-creation-container animate-fade-up">
        <div className="page-header">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>Course Creation</h2>
          <button className="btn-primary">Publish Course</button>
        </div>

        <div className="course-form-card">
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1.5rem' }}>Create New Course</h3>
          <div className="form-group">
            <label className="form-label">Course Title</label>
            <input type="text" className="form-control" placeholder="E.g. Advanced Javascript Patterns" />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Category</label>
              <select className="form-control">
                <option>Programming</option>
                <option>Design</option>
                <option>Business</option>
                <option>Marketing</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Instructor</label>
              <input type="text" className="form-control" placeholder="Search instructor..." />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Price ($)</label>
            <input type="number" className="form-control" placeholder="0.00" />
          </div>

          <div className="form-group">
            <label className="form-label">Course Description</label>
            <textarea className="form-control" rows="4" placeholder="Tell us about this course..."></textarea>
          </div>
        </div>

        <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '3rem' }}>Existing Courses</h3>
        <div className="course-grid">
          {courses.map(course => (
            <div className="course-list-card" key={course.id}>
              <div className="course-card-body">
                <span className="course-tag">{course.category}</span>
                <h4 className="course-title">{course.title}</h4>
                <p style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 500 }}>Created on {course.date}</p>
              </div>
              <div className="course-meta">
                <div className="course-meta-item"><i className="bi bi-people-fill me-1"></i> {course.students} Students</div>
                <div className="course-meta-item"><i className="bi bi-play-circle-fill me-1"></i> {course.lessons} Lessons</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CourseCreation;
