import { CreditCard, Handshake, RefreshCcw, Store } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

const NODE_POSITION = {
  top: "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2",
  right: "right-0 top-1/2 translate-x-1/2 -translate-y-1/2",
  bottom: "left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2",
  left: "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2",
} as const;

export function CreditFlowAnimation() {
  const { t } = useLanguage();
  const flow = t.howItWorks.flow;

  const nodes = [
    { key: "top", icon: CreditCard, label: flow.requestCredit, color: "bg-primary text-primary-foreground" },
    { key: "right", icon: Handshake, label: flow.buyFromFarmer, color: "bg-terracotta text-terracotta-foreground" },
    { key: "bottom", icon: Store, label: flow.sellProduce, color: "bg-accent text-accent-foreground" },
    { key: "left", icon: RefreshCcw, label: flow.repay, color: "bg-forest text-forest-foreground" },
  ] as const;

  return (
    <div className="mx-auto max-w-md">
      <div className="relative mx-auto aspect-square w-full max-w-sm">
        <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" aria-hidden>
          <circle
            cx="200"
            cy="200"
            r="160"
            fill="none"
            className="stroke-primary/25"
            strokeWidth="2"
          />
          <circle
            cx="200"
            cy="200"
            r="160"
            fill="none"
            className="flow-track stroke-primary"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle r="7" className="fill-accent">
            <animateMotion
              dur="8s"
              repeatCount="indefinite"
              path="M200,40 A160,160 0 1,1 199.9,40.02 Z"
            />
          </circle>
        </svg>

        {nodes.map((node) => (
          <div key={node.key} className={`absolute ${NODE_POSITION[node.key]} flex w-24 flex-col items-center gap-2 text-center`}>
            <span className={`flex h-12 w-12 items-center justify-center rounded-full shadow-md ${node.color}`}>
              <node.icon className="h-5 w-5" />
            </span>
            <span className="text-[11px] font-semibold leading-tight text-foreground">{node.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
