import { Button } from "@components/Button/Button";
import { Input } from "@components/Form/Input";
import { Icon } from "@components/Icon";

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

      <Button
        type="button"
        variant="primary"
        className="shrink-0"
        rightElement={<Icon type="arrow" />}
      >
        Sign Up
      </Button>
    </form>
  );
};
