import styled from "styled-components";

const NavbarComponent = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.5rem;
  box-sizing: border-box;
  border-bottom: 1px solid #e5e8eb;
  position: relative;

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 18px;
    line-height: 23px;
    color: #0d1a1a;
    font-weight: bold;
    margin: 0;

    @media (max-width: 480px) {
      font-size: 16px;
      line-height: 20px;
    }
  }

  img {
    width: 1rem;
    margin: 0 14px 0 0;

    @media (max-width: 480px) {
      margin: 0 10px 0 0;
      width: 0.9rem;
    }
  }
`;

const ProfileIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;

  @media (max-width: 480px) {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

const Navbar = () => {
  return (
    <NavbarComponent>
      <Logo>
        <img src="/Icon.svg" alt="Logo" />
        <p>OrderFlow Lite</p>
      </Logo>
      <ProfileIcon src="/Profile.svg" alt="Profile" />
    </NavbarComponent>
  );
};

export default Navbar;
