import { Button } from "@components/Button";
import { Icon } from "@components/Icon";
import type { ContactUsButtonProps } from "./types";
import { getBaseUrl } from "@utils/getBaseUrl";

export const ContactUsButton = ({ className }: ContactUsButtonProps) => (
  <Button
    type="link"
    variant="primary"
    href={`${getBaseUrl()}/contact`}
    rightElement={<Icon type="arrow" />}
    className={className}
  >
    Contact us
  </Button>
);
