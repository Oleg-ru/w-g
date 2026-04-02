export default function AuthLayout({children,}: { children: React.ReactNode; }) {
  return (
      <html>
        <body className="min-h-screen flex flex-col">
          <div className="flex-1 bg-amber-600">
            {children}
          </div>
        <footer>Footer для страниц аутентификации</footer>
        </body>
      </html>
  );
}