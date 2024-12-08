import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md mx-auto">
        <h1 className="text-4xl font-extrabold text-red-600 mb-4">
          404: Page Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="btn btn-primary">
          Go back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
