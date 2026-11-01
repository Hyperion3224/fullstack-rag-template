import type { ComponentType, ReactNode } from "react";

import { createRoot } from "react-dom/client";

export default function RootLayout({ children }: { children?: ReactNode }) {
  return (
    <div className="w-full h-dvh">
        {children}
    </div>
  );
}

export function mount(View: ComponentType) {
  const root = document.getElementById("root");

  if (!root) {
    throw new Error("The React root element was not found.");
  }

  createRoot(root).render(
    <RootLayout>
      <View />
    </RootLayout>,
  );
}
