// src/pages/Home.jsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      {/* Hero Section */}
      <header className="bg-primary text-white text-center py-5">
        <h1 className="display-3 fw-bold">JobTorch</h1>
        <p className="lead mt-3">
          Your AI Career Assistant — Resume Analysis, Job Matching, Interview Prep & Guidance
        </p>
        <div className="mt-4">
          <Link to="/login" className="btn btn-light btn-lg me-3 shadow-sm">
            Login
          </Link>
          <Link to="/register" className="btn btn-outline-light btn-lg shadow-sm">
            Register
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="container my-5">
        <div className="row text-center g-4">
          <div className="col-md-3">
            <div className="card shadow-sm p-4 h-100">
              <h4 className="fw-bold">📄 Resume Helper</h4>
              <p>
                Upload your resume and get AI-powered suggestions to improve skills,
                wording, and ATS compatibility.
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow-sm p-4 h-100">
              <h4 className="fw-bold">🎯 Job Matcher</h4>
              <p>
                Paste a job description and instantly see how well your resume
                matches, with missing skills highlighted.
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow-sm p-4 h-100">
              <h4 className="fw-bold">🤝 Interview Practice</h4>
              <p>
                Prepare with mock technical & HR interviews.
                Get AI feedback on confidence, clarity, and keywords.
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow-sm p-4 h-100">
              <h4 className="fw-bold">💡 Career Guidance</h4>
              <p>
                Ask questions about projects, skills, or career choices
                and get personalized AI-driven advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-dark text-white text-center py-3">
        <p className="mb-0">
          © {new Date().getFullYear()} JobTorch. Built with ❤️ to ignite your career.
        </p>
      </footer>
    </div>
  );
}
