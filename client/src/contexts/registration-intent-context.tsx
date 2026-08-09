import { createContext, useContext, useState, type ReactNode } from "react";
import { SECTION_IDS } from "@/lib/sections";

type Role = "farmer" | "seller";

interface RegistrationIntentValue {
  presetRole: Role | null;
  requestRole: (role: Role) => void;
  clearPresetRole: () => void;
}

const RegistrationIntentContext = createContext<RegistrationIntentValue | null>(null);

export function RegistrationIntentProvider({ children }: { children: ReactNode }) {
  const [presetRole, setPresetRole] = useState<Role | null>(null);

  const requestRole = (role: Role) => {
    setPresetRole(role);
    document.getElementById(SECTION_IDS.registration)?.scrollIntoView({ behavior: "smooth" });
  };

  const clearPresetRole = () => setPresetRole(null);

  return (
    <RegistrationIntentContext.Provider value={{ presetRole, requestRole, clearPresetRole }}>
      {children}
    </RegistrationIntentContext.Provider>
  );
}

export function useRegistrationIntent() {
  const ctx = useContext(RegistrationIntentContext);
  if (!ctx) throw new Error("useRegistrationIntent must be used within a RegistrationIntentProvider");
  return ctx;
}
