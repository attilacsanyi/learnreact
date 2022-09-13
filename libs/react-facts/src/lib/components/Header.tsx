export const Header = ({ baseUrl }: { baseUrl: string }) => (
  <nav>
    <img
      src={baseUrl + '/assets/react-facts/react-icon-small.png'}
      alt="react small icon"
      className="nav--logo"
    />
    <h3 className="nav--logo_text">React Facts</h3>
    <h4 className="nav--title">React Course - Project 1</h4>
  </nav>
);
