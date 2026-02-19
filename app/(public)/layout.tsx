import { notFound } from "next/navigation";

export default function PublicLayout({
  children: _children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  notFound();
}
