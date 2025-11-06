export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p>
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        <p className="text-gray-500">
          Built with React and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
