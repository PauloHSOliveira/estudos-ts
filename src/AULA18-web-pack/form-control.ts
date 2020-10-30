import validator from 'validator';

const SHOW_ERROR_MESSAGES = 'show-error-message';

export const formControl = () => {
  const form = document.querySelector('.form') as HTMLFormElement;
  const username = document.querySelector('.username') as HTMLInputElement;
  const email = document.querySelector('.email') as HTMLInputElement;
  const password = document.querySelector('.password') as HTMLInputElement;
  const confirmPassword = document.querySelector(
    '.password2',
  ) as HTMLInputElement;

  form.addEventListener('submit', function (event: Event) {
    event.preventDefault();
    hideErrorMessages(this);
    checkEmptyFields(username, email, password, confirmPassword);
    checkEmail(email);
    checkPasswordConfirmation(password, confirmPassword);
    if (shouldSendForm(this)) console.log('Formulario enviado');
  });

  const checkEmptyFields = (...inputs: HTMLInputElement[]): void => {
    inputs.forEach((input) => {
      if (!input.value) showErrorMessages(input, 'Campo não pode ficar vazio');
    });
  };

  const checkEmail = (input: HTMLInputElement): void => {
    const emailIsValid = validator.isEmail(input.value);
    if (!emailIsValid) showErrorMessages(input, 'Email inválido');
  };

  const checkPasswordConfirmation = (
    input1: HTMLInputElement,
    inpu2: HTMLInputElement,
  ) => {
    const inputs: HTMLInputElement[] = [input1, inpu2];
    if (input1.value !== inpu2.value)
      inputs.forEach((item) => showErrorMessages(item, 'Senhas não coincidem'));
  };

  const hideErrorMessages = (form: HTMLFormElement): void => {
    form
      .querySelectorAll('.' + SHOW_ERROR_MESSAGES)
      .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES));
  };
  const showErrorMessages = (input: HTMLInputElement, msg: string): void => {
    const formFields = input.parentElement as HTMLDivElement;
    const errorMessage = formFields.querySelector(
      '.error-message',
    ) as HTMLSpanElement;
    errorMessage.innerText = msg;
    formFields.classList.add(SHOW_ERROR_MESSAGES);
  };

  const shouldSendForm = (form: HTMLFormElement): boolean => {
    let send = true;
    form
      .querySelectorAll('.' + SHOW_ERROR_MESSAGES)
      .forEach(() => (send = false));

    return send;
  };
};
