export const getInviteUrl = (inviteLink: string) => {
  if (!inviteLink) return "";

  const links = inviteLink.split(",");

  const lastLink = links[links.length - 1];
  const token = lastLink.split("/").pop();

  return `${window.location.origin}/invite/${token}`;
};
