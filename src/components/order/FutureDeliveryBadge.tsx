interface FutureDeliveryBadgeProps {
  className?: string;
}

/** Marca um tamanho que só será entregue quando o produto voltar a estar disponível. */
export const FutureDeliveryBadge = ({ className = "" }: FutureDeliveryBadgeProps) => (
  <span
    className={`inline-flex items-center rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-amber-800 ${className}`}
  >
    Entrega futura
  </span>
);

/** Aviso no topo do card quando todos os tamanhos são de entrega futura. */
export const FutureDeliveryNotice = () => (
  <div className="rounded-md border border-amber-300 bg-amber-50 px-3 py-2 text-center text-xs font-medium text-amber-800">
    Produto disponível apenas para entrega futura
  </div>
);
