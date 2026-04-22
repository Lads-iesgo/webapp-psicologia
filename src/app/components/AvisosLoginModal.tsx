import Image from "next/image";

interface AvisosLoginModalProps {
  aberto: boolean;
  avisos: string[];
  onFechar: () => void;
}

export default function AvisosLoginModal({
  aberto,
  avisos,
  onFechar,
}: AvisosLoginModalProps) {
  if (!aberto) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl border border-blue-100">
        <div className="bg-blue-900 px-6 py-4 flex items-center gap-3">
          <Image
            src="/logo-iesgo.png"
            alt="IESGO"
            width={28}
            height={28}
            className="shrink-0"
          />
          <div>
            <h2 className="text-white text-lg font-semibold leading-tight">
              Avisos Importantes
            </h2>
            <p className="text-blue-100 text-sm leading-tight">
              Leia atentamente antes de iniciar suas atividades
            </p>
          </div>
        </div>

        <div className="px-6 py-5 max-h-[65vh] overflow-y-auto">
          <ul className="space-y-3">
            {avisos.map((aviso, index) => (
              <li
                key={`${index}-${aviso.slice(0, 20)}`}
                className="flex items-start gap-3 text-gray-800"
              >
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold leading-none tabular-nums text-blue-900">
                  {index + 1}
                </span>
                <p className="flex-1 pt-[2px] text-left text-sm leading-relaxed sm:text-base">
                  {aviso}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="px-6 pb-6 pt-2 flex justify-end">
          <button
            type="button"
            onClick={onFechar}
            className="rounded-md bg-blue-900 px-5 py-2.5 text-white font-semibold hover:bg-blue-800 transition-colors"
          >
            Li e estou ciente
          </button>
        </div>
      </div>
    </div>
  );
}