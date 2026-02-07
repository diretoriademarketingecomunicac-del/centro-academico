export const metadata = {
  title: "Centro Acadêmico Terra Livre",
  description: "Site oficial do Centro Acadêmico"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body style={{margin:0,fontFamily:"sans-serif"}}>
        {children}
      </body>
    </html>
  );
}
