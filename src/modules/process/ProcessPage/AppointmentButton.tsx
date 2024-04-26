import { Button } from "@components/Button";
import { Icon } from "@components/Icon";
import { getBaseUrl } from "@utils/getBaseUrl";

export interface AppointmentButtonProps {
  className?: string;
}

export const AppointmentButton = ({ className }: AppointmentButtonProps) => (
  <Button
    type="link"
    variant="primary"
    href={`${getBaseUrl()}/contact`}
    rightElement={<Icon type="arrow" />}
    className={className}
  >
    Book an appointment
  </Button>
);
