import { Button } from "@components/Button";
import { Icon } from "@components/Icon";

export interface AppointmentButtonProps {
  className?: string;
}

export const AppointmentButton = ({ className }: AppointmentButtonProps) => (
  <Button
    type="link"
    variant="primary"
    href="/contact"
    rightElement={<Icon type="arrow" />}
    className={className}
  >
    Book an appointment
  </Button>
);
