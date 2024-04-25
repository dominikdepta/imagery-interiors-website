import { Button } from "@components/Button";
import { Input } from "@components/Form/Input";
import { Label } from "@components/Form/Label";
import { Textarea } from "@components/Form/Textarea";
import { Icon } from "@components/Icon";

export const ContactForm = () => {
  return (
    <form className="grid gap-4 md:grid-cols-2" action="/contact" method="POST">
      <Label>
        Name
        <Input />
      </Label>

      <Label>
        Email
        <Input />
      </Label>

      <Label className="md:col-span-2">
        Message
        <Textarea className="min-h-20 lg:min-h-52" />
      </Label>

      <Button
        type="button"
        variant="primary"
        className="md:col-span-2"
        rightElement={<Icon type="arrow" />}
      >
        Send
      </Button>
    </form>
  );
};
