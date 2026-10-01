import { profile } from "@/content/site";

export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 pb-10 pt-16 sm:px-6">
      <div className="flex flex-col gap-3 border-t border-line pt-6 text-sm text-faint sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div className="flex gap-5">
          <a className="hover:text-ink" href={`mailto:${profile.email}`}>Email</a>
          <a className="hover:text-ink" href={profile.linkedin}>LinkedIn</a>
          <a className="hover:text-ink" href={profile.github}>GitHub</a>
        </div>
      </div>
    </footer>
  );
}
