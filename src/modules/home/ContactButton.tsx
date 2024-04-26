import { Button } from "@components/Button";
import { Icon } from "@components/Icon";
import { getBaseUrl } from "@utils/getBaseUrl";

export const ContactButton = () => (
  <Button
    type="link"
    href={`${getBaseUrl()}/contact`}
    variant="primary"
    className="mt-14"
    rightElement={<Icon type="arrow" />}
  >
    Contact us
  </Button>
);
