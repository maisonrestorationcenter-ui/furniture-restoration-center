import { whatsapp } from "@/lib/site";

export function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm4.9 13.8c-.2.6-1.2 1.1-1.7 1.2-.4.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.6-2.6-1.1-4.3-3.7-4.4-3.9-.1-.2-1-1.4-1-2.6s.6-1.800.9-2.100c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .5.4l.7 1.700c.1.2.1.3 0 .5l-.3.5c-.2.2-.3.3-.1.5.2.3.7 1.100 1.500 1.800 1 .9 1.900 1.100 2.100 1.300.3.1.4.1.6-.1l.7-.9c.2-.3.4-.2.6-.1l1.700.8c.3.1.4.2.5.3.1.2.1.7-.1 1.300Z" />
    </svg>
  );
}

type Props = { cta: string; className?: string; icon?: boolean; ariaLabel?: string; children: React.ReactNode };

/** Every WhatsApp CTA goes through here so URL and tracking attributes stay consistent. */
export default function WhatsAppLink({ cta, className = "btn-gold", icon, ariaLabel, children }: Props) {
  return (
    <a href={whatsapp.url} target="_blank" rel="noopener noreferrer" data-cta={`whatsapp-${cta}`} aria-label={ariaLabel} className={className}>
      {icon && <WhatsAppIcon />}
      {children}
    </a>
  );
}
