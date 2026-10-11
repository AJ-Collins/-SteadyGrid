"use client";

import { useToastStore } from "@/shared/stores/use-toast-store";

export function Toaster() {
  const toasts = useToastStore((s) => s.toasts);
  const dismiss = useToastStore((s) => s.dismissToast);
  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2">
      {toasts.map((t) => (
        <button
          key={t.id}
          onClick={() => dismiss(t.id)}
          className="w-80 rounded-lg border border-border bg-white p-4 text-left shadow-lg"
        >
          <p className="text-sm font-bold">{t.title}</p>
          {t.description ? (
            <p className="text-xs text-text-muted">{t.description}</p>
          ) : null}
        </button>
      ))}
    </div>
  );
}
