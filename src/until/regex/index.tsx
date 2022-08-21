export const regex = {
  validateName: /.*/,
  validateUsername: /^([_.-]{0,}[0-9０-９a-zA-Zぁ-んァ-龯][_.-]{0,})+$/,
  validateNameDevice: /.*/,
  validatePostalCode: /^([0-9]{7}|[0-9]{3}-[[0-9]{4})$/,
  validateEmail:
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  validatePhone: /^[0-9]{10,11}$/,
  // eslint-disable-next-line no-useless-escape
  validatePassword: /^(?=[^\s]*[a-zA-Z]+)(?=[^\s]*[0-9]+)(?=[^\s]*[\/@!#"$%&\-^[;:\],.<>?_+*}`(){=~|¥]+)[^\s]{8,}$/,
}
