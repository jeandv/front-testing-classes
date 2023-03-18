const { render, cleanup, screen, waitFor } = require('@testing-library/react');
import { LoginForm } from '../pages';
import { LoginFormMock } from '../_mocks_/LoginForm.mock';

describe('LoginForm', () => {
  // afterEach(cleanup);
  // afterEach(jest.clearAllMocks);

  beforeEach(() => {
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

    expect(usernameInput).toHaveValue('');
    // expect(passwordInput).toHaveValue('');
  });

  it('should enable the submit button if the form values are valid', async () => {
    const usernameInput = screen.getByRole('textbox', { name: 'Username' });
    // const passwordInput = screen.getByRole('textbox', { name: 'Password' });
    const submitButton = screen.getByRole('button', { name: 'Login' });

    expect(submitButton).toBeDisabled();

    await userEvent.type(usernameInput, LoginFormMock.username);
    // await userEvent.type(passwordInput, LoginFormMock.password);

    await waitFor(() => {
      expect(usernameInput).toHaveValue(LoginFormMock.username);
      // expect(passwordInput).toHaveValue(LoginFormMock.password);
    });

    expect(submitButton).toBeDisabled();
  });
});
