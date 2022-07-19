function getPaymentsList(payments) {
  return payments.reduce((acum, item) => [...acum, item.payedAmount], []);
}
11
