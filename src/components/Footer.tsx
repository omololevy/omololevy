export default function Footer() {
  return (
    <footer className="w-full p-4 bg-foreground text-background flex justify-center items-center">
      <p>
        &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
      </p>
    </footer>
  );
}
