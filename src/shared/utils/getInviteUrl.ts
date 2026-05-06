export const getInviteUrl = (inviteLink: string) => {
  const links = inviteLink.split(",");
  return (
    links.find((link) => link.includes("http://localhost:5173")) || links[0]
  );
};
