import { TypingText } from '../components/TypingText';

const NAVBAR_HEIGHT = 80;

export function Hero() {
  const goToAbout = () => {
    const el = document.getElementById('about');
    if (el) window.scrollTo({ top: el.offsetTop - NAVBAR_HEIGHT, behavior: 'smooth' });
  };

  return (
    <section id="home" className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="mx-auto flex w-full max-w-5xl flex-col-reverse items-center justify-between gap-8 rounded-lg border border-white/20 bg-primary/70 p-8 backdrop-blur-md md:flex-row">
        <div className="flex-[1.5] text-center md:text-left">
          <TypingText text="Hello World." />
          <h2 className="mt-6 text-3xl font-semibold md:text-4xl">Sou o Rafael Siqueira</h2>
          <p className="mt-4 text-xl text-muted">
            Engenheiro de Software e Desenvolvedor Full Stack Pleno
          </p>
          <button
            onClick={goToAbout}
            className="mt-8 rounded-lg bg-accent px-8 py-4 text-lg font-bold text-primary transition-colors hover:bg-primary hover:text-secondary hover:border hover:border-secondary"
          >
            Explorar Mais
          </button>
        </div>
        <div className="flex flex-1 justify-center">
          <img
            src="/profile.jpeg"
            alt="Foto de Rafael"
            className="h-[220px] w-[220px] rounded-full border-4 border-accent object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
