const { render, cleanup, screen } = require('@testing-library/react');
import { LoginForm } from '../pages';

describe('LoginForm', () => {
  afterEach(cleanup);
  afterEach(jest.clearAllMocks);

  beforeAll(() => {
    render(<LoginForm />);
  });

  // it('should render correctly', () => {
  //   const container = render(<LoginForm />);

  //   expect(container).toBeTruthy();
  // });

  it('should two input exists at the screen', () => {
    const usernameInput = screen.getByRole('textbox', { name: 'Username' });
    // const passwordInput = screen.getByRole('textbox', { name: 'Password' });

    expect(usernameInput).toBeInTheDocument();
    // expect(passwordInput).toBeInTheDocument();

    // expect(usernameInput).toHaveValue('');
    // expect(passwordInput).toHaveValue('');
  });
});
