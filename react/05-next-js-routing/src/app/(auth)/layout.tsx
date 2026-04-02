import "../globals.css";

export default function AuthLayout({children,}: { children: React.ReactNode; }) {
  return (
      <html>
        <body className="min-h-screen flex flex-col">
        <header className="flex justify-center p-5 ">Добро пожаловать</header>
          <div className="flex-1 bg-gray-700">
            {children}
          </div>
        <footer className="p-10">
            <div className="flex justify-around">
                <div>О нас</div>
                <div>Политика</div>
                <div>Документация</div>
                <div>Контакты</div>
            </div>
        </footer>
        </body>
      </html>
  );
}