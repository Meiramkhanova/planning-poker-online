import { Button } from "@/shared/ui/button";
import { copyToClipboard } from "@/shared/utils/copyToClipboard";
import { getInviteUrl } from "@/shared/utils/getInviteUrl";

export const CopyInviteBtn = ({ inviteLink }: { inviteLink: string }) => {
  const url = getInviteUrl(inviteLink);

  return <Button onClick={() => copyToClipboard(url)}>Copy Invite</Button>;
};
