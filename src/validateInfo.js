/* FAZ A VALIDAÇÃO DOS CAMPOS DO FORM */

export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = 'O nome é necessário!!';
  }

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) { 
    errors.email = 'O email digitado é inválido!';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'As senhas devem ser maior que 6 caracteres (para sua segurança)';
  }

  if (!values.password2) {
    errors.password2 = 'Digite uma senha ';
  } else if (values.password2 !== values.password) {
    errors.password2 = 'As senhas estão diferentes!!';
  }
  return errors;
}
