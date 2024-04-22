import { Button } from "@components/Button";
import { Icon } from "@components/Icon";

export const ContactButton = () => (
  <Button
    type="link"
    href="/contact"
    variant="primary"
    className="mt-14"
    rightElement={<Icon type="arrow" />}
  >
    Contact us
  </Button>
);
