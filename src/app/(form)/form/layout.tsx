export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-primary-50">
      <main className="mx-auto w-full max-w-[1192px] py-6 min-h-screen">
        {children}
      </main>
    </div>
  );
}
