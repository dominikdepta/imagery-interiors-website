import { Button } from "@components/Button";
import { Icon } from "@components/Icon";
import type { ContactUsButtonProps } from "./types";

export const ContactUsButton = ({ className }: ContactUsButtonProps) => (
  <Button
    type="link"
    variant="primary"
    href="/contact"
    rightElement={<Icon type="arrow" />}
    className={className}
  >
    Contact us
  </Button>
);
