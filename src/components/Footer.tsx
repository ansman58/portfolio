export default function Footer() {
  return (
    <footer className="border-t border-black/10 py-6 text-center text-sm text-gray-600">
      <p>© {new Date().getFullYear()} Firstname Lastname — Built with Next.js & Tailwind CSS</p>
    </footer>
  );
}
