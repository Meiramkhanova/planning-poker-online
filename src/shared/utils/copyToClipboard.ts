import { toast } from "sonner";

export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
    return true;
  } catch (err) {
    toast.error("Failed to copy");
    console.error(err);
    return false;
  }
};
