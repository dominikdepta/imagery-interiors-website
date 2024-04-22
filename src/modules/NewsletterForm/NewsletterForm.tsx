import { Input } from "@components/Form/Input";

export interface NewsletterFormProps {
  className?: string;
}

export const NewsletterForm = ({ className }: NewsletterFormProps) => {
  return (
    <form className={`w-full flex gap-2 ${className}`} action="/" method="POST">
      <Input
        placeholder="Your email"
        aria-label="Your email"
        className="w-full"
      />
      <button className="shrink-0">Sign Up</button>
    </form>
  );
};
