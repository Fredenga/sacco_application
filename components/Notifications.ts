import { showNotification } from "@mantine/notifications";

export function Outcome(title: string, message: string, color: string) {
  showNotification({
    title,
    message,
    styles: (theme) => ({
      root: {
        backgroundColor: color,
        borderColor: color,

        "&::before": { backgroundColor: theme.white },
      },

      title: { color: theme.white },
      description: { color: theme.white },
      closeButton: {
        color: theme.white,
        "&:hover": { backgroundColor: theme.colors.blue[7] },
      },
    }),
  });
}
