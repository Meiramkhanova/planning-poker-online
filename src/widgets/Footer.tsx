import Container from "@/shared/ui/Container";
import TheLogo from "@/shared/ui/Logo";

function Footer() {
  return (
    <footer>
      <div className="footer-wrapper border-t border-gray-100 bg-white py-4">
        <Container>
          <div className="flex items-center justify-between">
            <TheLogo />

            <p className="text-sm text-gray-600">
              Copyright &copy; PlanPoker Online {new Date().getFullYear()}
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
