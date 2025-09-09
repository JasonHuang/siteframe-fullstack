'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-white">
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        <p className="mt-4 text-lg text-gray-800">Page not found</p>
        <p className="mt-2 text-gray-500">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            Go to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Page Not Found - 404',
  description: 'Sorry, the page you are looking for could not be found.'
};