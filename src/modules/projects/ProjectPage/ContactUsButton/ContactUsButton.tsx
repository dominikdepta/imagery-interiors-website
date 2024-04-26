import { Button } from "@components/Button";
import { Icon } from "@components/Icon";
import type { ContactUsButtonProps } from "./types";
import { getBaseUrl } from "@utils/getBaseUrl";

const baseUrl = getBaseUrl();

export const ContactUsButton = ({ className }: ContactUsButtonProps) => (
  <Button
    type="link"
    variant="primary"
    href={`${baseUrl}/contact`}
    rightElement={<Icon type="arrow" />}
    className={className}
  >
    Contact us
  </Button>
);
